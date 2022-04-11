# GitHub Contact Form

Add a contact form to your website that creates a GitHub issue when submitted.

**Perfect for developer websites**

## Usage

### Installation

You need to install Octokit in your project. This is not handled by the package as Octokit is quite large and I didn't want to assume you aren't already using it.

```shell
yarn add -D octokit gh-contact-form
npm install -D octokit gh-contact-form
```

```js
import { Octokit } from "octokit";
import GhContactForm from "gh-contact-form";
```

### Example

When initialising `GhContactForm` you need to pass the instance of Octokit.

```js
const contactForm = new GhContactForm(
  new Octokit({
    auth: "<GitHub Personal Access Token>",
  })
);
```

[How to Create a GitHub Personal Acccess Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

When submitting a form you'll want to use `async/await` so you can check the response from the GitHub API.

**It's NOT required to use `async/await` for the package to work**

```js
async function createGitHubIssue() {
  const response = await contactForm.sendMessage({
    owner: "<GitHub Username>", // Required
    repo: "<GitHub Repository>", // Required
    title: "Website Request", // Required
    body: "I would like a new website.",
  });
}
```

_The `createGitHubIssue` is for the example, it's not included in the package._

You can pass what you like to `title` and `body`. One thing that I do is create the `body` from multiple bits of data.

```js
const typeValue = document.getElementById("typeField").value;
const emailValue = document.getElementById("emailField").value;

const issueBody = `Email: ${email}\nType: ${type}\n${body}`;

function createGitHubIssue() {
  contactForm.sendMessage({
    // ...
    body: issueBody,
  });
}
```

Once submitted this will create a new GitHub issue in the GitHub repository passed as `repo`.

## Spam Prevention

If you want to prevent spam (recommended) then you can so like this.

```html
<input type="hidden" id="spamField" />
```

```js
async function createGitHubIssue() {
  const spamValue = document.getElementById("spamField").value;

  const response = await contactForm.sendMessage({
    // ...
    spam: spamValue,
  });
}
```

If `spam` is detected a GitHub issue will not be created.

## Private Issues

If the GitHub repository is private then you're fine.

However, if the repository is public and you want private issues (recommended) then the best approach is to create a new repository that is private and send the issues to there.
