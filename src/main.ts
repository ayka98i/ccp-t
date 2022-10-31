import { ethers } from 'ethers';
import 'dotenv/config';
import { checkBalance, createAccount, provider } from './ethers';

async function main() {
  console.log(await provider.getBlockNumber());
  for (let i = 0; i < 10; i++) {
    const account = createAccount();
    const balance = await checkBalance(account);
    if (balance > ethers.BigNumber.from(0)) {
      console.log(account.address);
      console.log(account.privateKey);
      console.log('----------------------');
    } else {
      console.log('NONE');
      console.log(account.address);
      console.log(account.privateKey);
      console.log('----------------------');
    }
  }
}

main();
