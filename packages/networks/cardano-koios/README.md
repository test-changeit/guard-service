# @alakipalaki/cardano-koio-network

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

`@alakipalaki/cardano-koios-network` is a package to be used as network api
provider for `@alakipalaki/cardano` package.

## Installation

npm:

```sh
npm i @alakipalaki/cardano-koios-network
```

yarn:

```sh
yarn add @alakipalaki/cardano-koios-network
```

## Usage

```ts
import { CardanoChain } from '@alakipalaki/cardano';
import CardanoKoiosNetwork from '@alakipalaki/cardano-koios-network';

let tokens: RosenTokens;
const cardanoKoiosNetwork = new CardanoKoiosNetwork(
  'https://api.koios.rest/api/v0', // koios api url
  'lockAddress', // bridge lock address in Cardano (used in CardanoRosenExtractor)
  tokens, // bridge supported tokens config, provided by `rosen-bridge/contract`
  loggerFactory('KoiosNetwork'), // logger (optional)
);

const height = await cardanoKoiosNetwork.getHeight();
```
