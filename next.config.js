const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // Next 16 writes AGENTS.md / CLAUDE.md on dev startup; not wanted in this repo.
  agentRules: false,
}
