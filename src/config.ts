import process from 'process';
import * as O from 'fp-ts/Option';

export type Config = Readonly<{
  rpcAddr: string;
  executionCount: number;
  durationSeconds: number;
}>;

export function getConfig(): Config {
  const env = process.env;
  const optRpcAddr: O.Option<string> = O.fromNullable(env.RPC_ADDR);
  const optExecutionCount: O.Option<string> = O.fromNullable(env.EXECUTION_COUNT);
  const optDurationSeconds: O.Option<string> = O.fromNullable(env.DURATION_SECONDS);

  if (O.isSome(optRpcAddr) && O.isSome(optExecutionCount) && O.isSome(optDurationSeconds)) {
    return {
      rpcAddr: optRpcAddr.value,
      executionCount: Number(optExecutionCount.value),
      durationSeconds: Number(optDurationSeconds.value)
    };
  } else {
    throw new Error('env settings are incorrect');
  }
}

export const config: Config = getConfig();
