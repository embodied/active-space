require('dotenv').config()
const { request } = require('@octokit/request')

async function getBuildStatus() {
  const result = await request('GET /repos/{owner}/{repo}/pages/builds/latest', {
    headers: {
      authorization: `token ${process.env.JEKYLL_GITHUB_TOKEN}`,
    },
    owner: 'embodied',
    repo: 'active-space',
  })
  console.log(`build status: ${result.data.status}`)
}

getBuildStatus()
