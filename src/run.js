const core = require('@actions/core');
const github = require('@actions/github');

exports.run = () => {
  const { eventName } = github.context;
  core.info(`Event name: ${eventName}`);

  if (eventName !== 'pull_request') {
    core.setFailed(`Invalid event: ${eventName}, it should be use on pull_request`);
    return;
  }

  const pullRequestBody = github.context.payload.pull_request.body;
  const changes = github.context.payload.pull_request.changes;
  const pull_request = github.context.payload.pull_request.pull_request;
  const repository = github.context.payload.pull_request.repository;
  const sender = github.context.payload.pull_request.sender;
  
  const payload = github.context.payload;
  

  core.info(`Pull Request Comment Body: "${pullRequestBody}"`);
  
  core.info(`Pull Request changes: "${changes}"`);
  
  core.info(`Pull Request pull_request: "${pull_request}"`);
  core.info(`Pull Request repository: "${repository}"`);
  core.info(`Pull Request sender: "${sender}"`);
  
  console.log(payload);

//   const regex = RegExp(core.getInput('regexp'));
//   if (!regex.test(pullRequestTitle)) {
//     core.setFailed(`Pull Request title "${pullRequestTitle}" failed to pass match regex - ${regex}`);
//   }
};
