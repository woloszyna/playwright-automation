import type { Reporter } from '@playwright/test/reporter';
import { rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

export default class AllureAutoReport implements Reporter {
  private root = resolve(__dirname, '..');

  onBegin() {
    // Report only the current execution, including filtered IDE runs.
    rmSync(resolve(this.root, 'allure-results'), { recursive: true, force: true });
  }

  async onExit() {
    // All reporters have finished writing their results by this point.
    const result = spawnSync(process.execPath, [
      resolve(this.root, 'scripts/allure-report.mjs'),
    ], { cwd: this.root, stdio: 'inherit', env: process.env });
    if (result.error) throw result.error;
    if (result.status !== 0) throw new Error('Allure report generation failed');
  }
}
