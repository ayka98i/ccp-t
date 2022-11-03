# Initialize
```shell
$ npm install
```

# Edit env file
Create .env in project root directory.
```dotenv
# Ethereum node's rpc address
RPC_ADDR=
# Excution count
# If you enter 0 the duration seconds is referenced
EXECUTION_COUNT=
# Duration seconds 
# If you enter a number greater than or equal to 0 for execution count, duration seconds will not be referenced
DURATION_SECONDS=
```

# Run
```shell
$ npx ts-node src/main.ts
```
