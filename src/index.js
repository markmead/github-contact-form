export default class {
  constructor(octokit) {
    this.octokit = octokit;
  }

  async sendMessage(message) {
    const { owner, repo, title, body } = message;

    if (!owner || !repo || !title) {
      return {
        status: 422,
        message: "Missing required parameters",
        errors: {
          owner: !owner,
          repo: !repo,
          title: !title,
        },
      };
    }

    const response = await this.octokit.request(
      "POST /repos/{owner}/{repo}/issues",
      {
        owner,
        repo,
        title,
        body,
      }
    );

    return response;
  }
}
