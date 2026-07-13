# @alakipalaki/bitcoin-runes

## 7.0.1

### Patch Changes

- a
- Update dependencies
  - @alakipalaki/abstract-chain@19.0.1
  - @alakipalaki/bitcoin@13.0.1

## 7.0.0

### Major Changes

- a
- a

### Patch Changes

- Update dependencies
- Update dependencies
  - @alakipalaki/abstract-chain@19.0.0
  - @alakipalaki/bitcoin@13.0.0

## 6.0.0

### Major Changes

- alaki nago be man dige

### Patch Changes

- Update dependencies
  - @alakipalaki/abstract-chain@18.0.0
  - @alakipalaki/bitcoin@12.0.0

## 5.0.0

### Major Changes

- alaki

### Patch Changes

- Update dependencies
  - @alakipalaki/abstract-chain@17.0.0
  - @alakipalaki/bitcoin@11.0.0

## 4.0.1

### Patch Changes

- Enable the selection class logs
- Rename the logger name for the Rosen extractor class
- Update dependencies
  - @rosen-bridge/bitcoin-runes-utxo-selection@2.1.0
  - @rosen-bridge/rosen-extractor@12.0.0

- Update dependencies
  - @rosen-bridge/rosen-extractor@12.1.0
  - @rosen-bridge/tokens@6.0.2

- Update dependencies
- Update dependencies
- Update dependencies
- Update dependencies
- Update dependencies
  - @alakipalaki/abstract-chain@16.0.1
  - @alakipalaki/bitcoin@10.0.1

## 4.0.0

### Major Changes

- Replace `signFunction` argument with `signMediator`, an object with the type of `EcdsaSignMediator`
  Remove `TssSignFunction` type
- Add `isTransactionInSign` function, which checks if the corresponding signer service is signing the transaction or not

### Patch Changes

- Update dependencies
  - @rosen-bridge/abstract-logger@4.0.0
  - @rosen-bridge/bitcoin-runes-utxo-selection@2.0.3
  - @rosen-bridge/rosen-extractor@11.3.0
  - @rosen-bridge/tokens@6.0.0
  - @alakipalaki/abstract-chain@16.0.0
  - @alakipalaki/bitcoin@10.0.0

## 3.0.2

### Patch Changes

- Add more logs to the `generateMultipleTransactions` function
- Fix bug where additional tokens were not calculated correctly
- Fix bug where a BTC-only box can be selected multiple times while generating multiple transactions
- Update dependencies
  - @alakipalaki/abstract-chain@15.0.2
  - @alakipalaki/bitcoin@9.0.2

## 3.0.1

### Patch Changes

- Fix unexpected high fee in the generated transaction (caused by ignoring the min UTxO value when removing the redundant universal change box)

## 3.0.0

### Major Changes

- Add pagination args to getAddressBtcBoxes and getRemainingBoxes

### Patch Changes

- Update dependencies
  - @rosen-bridge/rosen-extractor@11.0.0
  - @alakipalaki/abstract-chain@15.0.1
  - @alakipalaki/bitcoin@9.0.1

## 2.0.0

### Major Changes

- Update node version to 22.18

### Patch Changes

- Fix `NotEnoughAssetsError` to display unwrapped value instead of wrapped value
- Fix bug on transaction generation where Runes boxes can also cover the required BTC
- Fix required BTC while selecting UTxOs to generate a transaction
- Follow no-explicit-any eslint rule
- Improve `NotEnoughValidBoxesError` to display uncovered assets instead of required assets
- Improve box selection to forbid selected boxes to avoid duplicate input in case of unexpected behavior from Unisat APIs
- Sort imports
- Update dependencies
  - @rosen-bridge/abstract-logger@3.0.1
  - @rosen-bridge/bitcoin-runes-utxo-selection@2.0.1
  - @rosen-bridge/json-bigint@1.1.0
  - @rosen-bridge/rosen-extractor@10.1.1
  - @rosen-bridge/tokens@4.0.1
  - @alakipalaki/abstract-chain@15.0.0
  - @alakipalaki/bitcoin@9.0.0

## 1.0.0

### Major Changes

- Add abstract `getAddressRunesBoxes`, `getAddressBtcBoxes` and `getRemainingBoxes` functions to `AbstractBitcoinRunesNetwork`
- Implement `AbstractBitcoinRunesNetwork.getAddressBoxes` function to throw error (this function should not be used)
- Replace abstract `getMempoolTxIds` function with abstract `isTxInMempool` function in `AbstractBitcoinRunesNetwork`

### Minor Changes

- Re-export `CONFIRMATION_TARGET` constant from `@alakipalaki/bitcoin`

### Patch Changes

- Revamp `BitcoinRunesChain.generateMultipleTransactions` to get address boxes by selecting Runes boxes first and then selecting other boxes to cover required BTC
- Update Rosen utility packages
- Update dependencies
  - @alakipalaki/abstract-chain@14.0.1
  - @alakipalaki/bitcoin@8.1.1
