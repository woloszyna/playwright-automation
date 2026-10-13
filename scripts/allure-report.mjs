import { spawnSync } from 'node:child_process';
import { rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import open from 'open';

const root = fileURLToPath(new URL('../', import.meta.url));
const report = fileURLToPath(new URL('../allure-report/', import.meta.url));
rmSync(report, { recursive: true, force: true });
const result = spawnSync(process.execPath, [
  fileURLToPath(new URL('../node_modules/allure/cli.js', import.meta.url)),
  'awesome', 'allure-results', '--single-file', '--output', report,
], { cwd: root, stdio: 'inherit' });

if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

// A standalone HTML report needs no long-running report server.
if (!process.env.CI && process.env.ALLURE_OPEN !== 'false') {
  await open(fileURLToPath(new URL('../allure-report/index.html', import.meta.url)));
}
