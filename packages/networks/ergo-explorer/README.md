# @alakipalaki/ergo-explorer-network

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

`@alakipalaki/ergo-explorer-network` is a package to be used as network api
provider for `@alakipalaki/ergo` package.

## Installation

npm:

```sh
npm i @alakipalaki/ergo-explorer-network
```

yarn:

```sh
yarn add @alakipalaki/ergo-explorer-network
```

## Usage

```ts
import { ErgoChain } from '@alakipalaki/ergo';
import ErgoExplorerNetwork from '@alakipalaki/ergo-explorer-network';

const ergoExplorerNetwork = new ErgoExplorerNetwork({
  explorerBaseUrl: 'SOME_EXPLORER_URL',
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
const ergoChain = new ErgoChain(ergoExplorerNetwork, ergoChainConfig);
```
