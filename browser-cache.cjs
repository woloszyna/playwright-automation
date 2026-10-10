const { homedir, userInfo } = require('node:os');

// Firefox's macOS loader incorrectly removes "./" inside paths such as
// /Users/albertw./Library. Use a dot-free cache for affected home directories.
if (process.platform === 'darwin' &&
    (homedir().includes('./') || homedir().endsWith('.'))) {
  process.env.PLAYWRIGHT_BROWSERS_PATH ??=
    `/Users/Shared/ms-playwright-${userInfo().uid}`;
  // CoreFoundation also uses the home directory to initialize profile storage.
  // Override it only in Firefox's child process, leaving the user's HOME intact.
  module.exports.firefoxEnv = {
    ...process.env,
    CFFIXED_USER_HOME: `/Users/Shared/ms-playwright-${userInfo().uid}`,
  };
}
