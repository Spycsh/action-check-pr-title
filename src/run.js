const core = require('@actions/core');
const github = require('@actions/github');

exports.run = () => {
  const { eventName } = github.context;
  core.info(`Event name: ${eventName}`);

  if (eventName !== 'pull_request') {
    core.setFailed(`Invalid event: ${eventName}, it should be use on pull_request`);
    return;
  }

  const payload = github.context.payload; // get the comment body
  const pullRequestBody = github.context.payload.pull_request.body; // get the comment body
  const diffUrl = github.context.payload.pull_request.diff_url;   // get the difference 

  core.info(`Pull Request Comment Body: "${pullRequestBody}"`);
  core.info(`Pull Request changes: "${diffUrl}"`);
  console.log("payload Json:");
  console.log(payload);

//   const regex = RegExp(core.getInput('regexp'));
//   if (!regex.test(pullRequestTitle)) {
//     core.setFailed(`Pull Request title "${pullRequestTitle}" failed to pass match regex - ${regex}`);
//   }
};
