require('dotenv').config()
const { request } = require('@octokit/request')

const REPO_OWNER = 'embodied'
const REPO_NAME = 'active-space'

async function triggerBuild() {
  const result = await request('POST /repos/{owner}/{repo}/pages/builds', {
    headers: {
      authorization: `token ${process.env.JEKYLL_GITHUB_TOKEN}`,
    },
    owner: REPO_OWNER,
    repo: REPO_NAME,
  })
  console.log(`build status: ${result.data.status}`)
}

triggerBuild()
