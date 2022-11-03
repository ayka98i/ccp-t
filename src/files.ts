import fs from 'fs';
import { ethers } from 'ethers';

export function appendFile(wallet: ethers.Wallet, balance: ethers.BigNumber) {
  fs.appendFile('./result.csv', wallet.privateKey + ',' + balance.toNumber(), (err) => {
    if (err) {
      throw new Error(err.message);
    }
  });
}
