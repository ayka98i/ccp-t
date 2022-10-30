import { ethers } from 'ethers';
import process from 'process';
import 'dotenv/config';
import * as O from 'fp-ts/Option';
import * as E from 'fp-ts/Either';

type Config = {
  rpcAddr: string;
  confirmationLimit: number;
  durationSeconds: number;
};

async function main() {
  const config: Config = getConfig();
}

function getConfig(): Config {
  const env = process.env;
  const optRpcAddr: O.Option<string> = O.fromNullable(env.RPC_ADDR);
  const optConfirmationLimit: O.Option<string> = O.fromNullable(env.CONFIRMATION_LIMIT);
  const optDurationSeconds: O.Option<string> = O.fromNullable(env.DURATION_SECONDS);

  if (O.isSome(optRpcAddr) && O.isSome(optConfirmationLimit) && O.isSome(optDurationSeconds)) {
    const config: Config = {
      rpcAddr: optRpcAddr.value,
      confirmationLimit: Number(optConfirmationLimit.value),
      durationSeconds: Number(optDurationSeconds.value)
    };
    return config;
  } else {
    throw new Error('env settings are incorrect');
  }
}

main();
