## Purpose

(Explain the purpose and motivation behind this pull request. Why is it necessary? What problem does it solve or feature does it introduce? Explain the steps and strategy to solve the problem.)

Example: \
This pull request addresses issue #123, where the user profile page was not displaying the correct avatar image. The current implementation was fetching the avatar from an outdated API endpoint. The purpose is to update the API call to fetch the correct user avatar and display it on the profile page.

## Changes Made

(Detailed changes that you implemented in this PR, Provide a concise overview of the changes made in this pull request. Highlight the key modifications, additions, or deletions in the codebase.)

Example:

- **Updated the API endpoint** for fetching user avatars in the `UserProfile` component.
- **Added error handling** for cases where the avatar retrieval fails.
- **Updated the documentation** in the README to reflect the changes.

## Related Issues

(Link to any relevant issues or feature requests that this pull request addresses. Use keywords like "closes #issue-number" to automatically close the related issue upon merging. If your pull request addresses a specific issue, reference it in the description using keywords like "closes #issue-number" to automatically close the related issue when the PR is merged.)

Example:

- Closes #123

## Testing Done

(Describe the testing approach you took. Include details on any specific test cases executed, and mention if additional testing is needed.)

Example:

- Manually tested the user profile page with different user accounts.
- Verified that the correct avatar is displayed after the update.

## Screenshots

(Attach screenshots or GIFs demonstrating the visual changes, especially for UI-related modifications.)

<!-- Attach screenshots or GIFs here if applicable -->

## Additional Notes

(Include any additional information, concerns, or points for discussion. If there are alternative approaches you considered and rejected, briefly explain why)

Example: \
The updated API endpoint requires a user authentication token for fetching avatars. Ensure that the authentication flow is in place for this functionality.

## Comments for Reviewers

(Provide any specific areas you'd like reviewers to focus on or questions you have for them.)

Example:

- Please pay special attention to the error-handling logic introduced in the `UserProfile` component. Any suggestions on improving the error-handling approach are welcome.

<!-- ### References:

[SonarQube](https://sonarqube.dev.thedoorwaytechnology.com/dashboard?id=tdt-dev)

Note: Login to SonarQube using Azure Intra ID account

```
Generate token from SonarQube and paste below to get quality gate below
```

`[![Quality Gate Status](https://sonarqube.dev.thedoorwaytechnology.com/api/project_badges/measure?project=tdt-dev&metric=alert_status&token=<ENTER_SONAR_TOKEN_HERE>)](https://sonarqube.dev.tdt.com/dashboard?id=tdt-dev)` -->