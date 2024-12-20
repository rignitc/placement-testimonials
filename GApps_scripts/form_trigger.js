// GApps doesn't support fetch.
// Use UrlFetchApp instead. It will run under the guy who made it(Authorization is required, else it fails)
function sendActionReq() {
  const token = <GITHUB_PAT>;

  const owner = <OWNER>;
  const repo = <REPO>;
  const workflowId = <YAML_FILE_WITH _EXTENSION>;
  const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`;

  // Post requ body
  const requestBody = {
    ref: 'main'
  };

  const options = {
  method: 'post',
  contentType: 'application/json',
  headers: {
      'Authorization': `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json'
  },
  payload: JSON.stringify(requestBody),
};
  console.log("WHY")
  UrlFetchApp.fetch(url, options);
}
