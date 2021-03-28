const core = require('@actions/core');

exports.run = () => {
  const { eventName } = github.context;
  core.info(`Event name: ${eventName}`);

  if (eventName !== 'pull_request') {
    core.setFailed(`Invalid event: ${eventName}, it should be use on pull_request`);
    return;
  }

  const pullRequestBody = github.context.payload.pull_request.body;

  core.info(`Pull Request title: "${pullRequestBody}"`);

  const regex = RegExp(core.getInput('regexp'));
  if (!regex.test(pullRequestTitle)) {
    core.setFailed(`Pull Request title "${pullRequestTitle}" failed to pass match regex - ${regex}`);
  }
};
