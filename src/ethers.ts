import { ethers } from 'ethers';
import { config } from './config';

export const provider = new ethers.providers.JsonRpcProvider(config.rpcAddr);

export function createAccount(): ethers.Wallet {
  return ethers.Wallet.createRandom();
}

export async function getBalance(wallet: ethers.Wallet): Promise<ethers.BigNumber> {
  const connectedWallet = wallet.connect(provider);
  return connectedWallet.getBalance();
}
