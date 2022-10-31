import process from 'process';
import * as O from 'fp-ts/Option';

type Config = Readonly<{
  rpcAddr: string;
  confirmationLimit: number;
  durationSeconds: number;
}>;

function getConfig(): Config {
  const env = process.env;
  const optRpcAddr: O.Option<string> = O.fromNullable(env.RPC_ADDR);
  const optConfirmationLimit: O.Option<string> = O.fromNullable(env.CONFIRMATION_LIMIT);
  const optDurationSeconds: O.Option<string> = O.fromNullable(env.DURATION_SECONDS);

  if (O.isSome(optRpcAddr) && O.isSome(optConfirmationLimit) && O.isSome(optDurationSeconds)) {
    return {
      rpcAddr: optRpcAddr.value,
      confirmationLimit: Number(optConfirmationLimit.value),
      durationSeconds: Number(optDurationSeconds.value)
    };
  } else {
    throw new Error('env settings are incorrect');
  }
}

export const config: Config = getConfig();
