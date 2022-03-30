export default class {
  constructor(octokit) {
    this.octokit = octokit;
  }

  sendMessage(message) {
    const { owner, repo, title, body } = message;

    this.octokit.request("POST /repos/{owner}/{repo}/issues", {
      owner,
      repo,
      title,
      body,
    });
  }
}
