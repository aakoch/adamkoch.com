import NetlifyAPI from 'netlify'

const listNetlifySites = async function () {
  const client = new NetlifyAPI(process.env.NETLIFY_KEY)
  const sites = await client.listSites()
  return sites
}

const listSiteDeploys = async function () {
  const client = new NetlifyAPI(process.env.NETLIFY_KEY)
  const sites = await client.listSiteDeploys({site_id:process.env.NETLIFY_SITE_ID})
  return sites
}

// listNetlifySites().then(resp => console.log(resp));
listSiteDeploys().then(resp => console.log(JSON.stringify(resp, null, 2)));