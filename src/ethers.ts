import { ethers } from 'ethers';
import { config } from './config';

export const provider = new ethers.providers.JsonRpcProvider(config.rpcAddr);

export function createAccount(): ethers.Wallet {
  return ethers.Wallet.createRandom();
}

export async function checkBalance(wallet: ethers.Wallet): Promise<ethers.BigNumber> {
  wallet.connect(provider);
  console.log('connect');
  return await wallet.getBalance();
}
