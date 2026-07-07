# @alakipalaki/ergo-node-network

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

`@alakipalaki/ergo-node-network` is a package to be used as network api
provider for `@alakipalaki/ergo` package.

## Installation

npm:

```sh
npm i @alakipalaki/ergo-node-network
```

yarn:

```sh
yarn add @alakipalaki/ergo-node-network
```

## Usage

```ts
import { ErgoChain } from '@alakipalaki/ergo';
import ErgoNodeNetwork from '@alakipalaki/ergo-node-network';

const ergoNodeNetwork = new ErgoNodeNetwork({
  nodeBaseUrl: 'SOME_NODE_URL',
  extractorOptions: {
    lockAddress: 'SOME_LOCK_ADDRESS',
    tokens: {
      // SOME_TOKENS_OBJECT
    },
  },
});
const ergoChainConfig = {
  // SOME_ERGO_CHAIN_CONFIG
};
const ergoChain = new ErgoChain(ergoNodeNetwork, ergoChainConfig);
```

Please note that the node should support `blockchain` apis, which can be checked
through `isExplorer` flag from `info` api.
