import { ethers } from 'ethers';
import 'dotenv/config';
import { createAccount, getBalance, provider } from './ethers';
import { logSplit } from './utils';
import { appendFile } from './files';
import { setTimeout } from 'timers/promises';
import { Config, getConfig } from './config';

async function main() {
  await executeGetRiches(getConfig());
}

async function executeGetRiches(config: Config) {
  if (config.executionCount > 0) {
    for (let i = 0; i < config.executionCount; i++) {
      await setTimeout(Math.floor(Math.random() * 1000));
      await checkWalletBalanceAndAppendResult();
    }
  } else {
    let elapsedTime = 0;
    for (;;) {
      const start = performance.now();
      await setTimeout(Math.floor(Math.random() * 1000));
      await checkWalletBalanceAndAppendResult();
      const end = performance.now();

      elapsedTime += (end - start) / 1000;

      if (elapsedTime > config.durationSeconds) {
        break;
      }
    }
  }
}

async function checkWalletBalanceAndAppendResult(): Promise<void> {
  const wallet: ethers.Wallet = createAccount();
  const balance: ethers.BigNumber = await getBalance(wallet);

  if (balance > ethers.BigNumber.from(0)) {
    appendFile(wallet, balance);
    logSplit();
  } else {
    console.log('NONE');
    logSplit();
  }
}

main();
