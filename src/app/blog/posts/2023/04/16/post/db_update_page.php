<?php
$servername = "<your value>";
$username = "<your value>";
$password = "<your value>";
$dbname = "<your value>";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO messages () VALUES ()";

if ($conn->query($sql) === TRUE) {
  $data = "New record created successfully";
} else {
  $data =  "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<section><?= $data ?></section>

<section>
  <button type="button" onclick="location.reload()">Reload</button> the page for a new entry
</section>

  
</body>
</html>