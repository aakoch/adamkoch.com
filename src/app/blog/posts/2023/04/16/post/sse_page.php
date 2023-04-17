<?php

// Lots of code taken from https://kevinchoppin.dev/blog/server-sent-events-in-php

$servername = "<your value>";
$username = "<your value>";
$password = "<your value>";
$dbname = "<your value>";

try {
  // make session read-only
  session_start();
  session_write_close();

  // disable default disconnect checks
  ignore_user_abort(true);

  // set headers for stream
  header("Content-Type: text/event-stream");
  header("Cache-Control: no-cache");
  header("Access-Control-Allow-Origin: *");

  // Is this a new stream or an existing one?
  $lastEventId = floatval(isset($_SERVER["HTTP_LAST_EVENT_ID"]) ? $_SERVER["HTTP_LAST_EVENT_ID"] : 0);
  if ($lastEventId == 0) {
    $lastEventId = floatval(isset($_GET["lastEventId"]) ? $_GET["lastEventId"] : 0);
  }

  echo ":" . str_repeat(" ", 2048) . "\n"; // 2 kB padding for IE
  echo "retry: 2000\n";

  // start stream
  while (true) {
    if (connection_aborted()) {
      exit();
    } else {

      $conn = new mysqli($servername, $username, $password, $dbname);
      if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }

      $sql = "SELECT * FROM messages\n"
        . "order by id desc\n"
        . "limit 1";

      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
        if ($row = $result->fetch_assoc()) {
          $latestEventId = $row['id'];

          if ($lastEventId < $latestEventId) {
            echo "id: " . $latestEventId . "\n";
            $time = $row['timestamp'];
            echo "data: A record was recorded at: {$time}\n\n";

            $lastEventId = $latestEventId;
            ob_flush();
            flush();
          } else {
            // no new data to send
            echo ": heartbeat\n\n";
            ob_flush();
            flush();
          }
        }
      }
    }

    // 2 second sleep then carry on
    sleep(2);
  }
} catch (Exception $e) {
  echo 'Message: ' . $e->getMessage();
}
