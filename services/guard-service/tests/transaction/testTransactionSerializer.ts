import {
  AbstractChain,
  PaymentTransaction,
  PaymentTransactionJsonModel,
  TransactionType,
} from '@alakipalaki/abstract-chain';
import { CARDANO_CHAIN, CardanoTransaction } from '@alakipalaki/cardano';
import { ERGO_CHAIN, ErgoTransaction } from '@alakipalaki/ergo';

/**
 * converts json string to PaymentTransaction
 * @param jsonString
 * @param getChain the `ChainHandler.getChain` function
 * @returns
 */
export const fromJson = (
  jsonString: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChain: (chain: string) => AbstractChain<unknown>,
): PaymentTransaction => {
  const network = (JSON.parse(jsonString) as PaymentTransactionJsonModel)
    .network;
  if (network === ERGO_CHAIN) return ErgoTransaction.fromJson(jsonString);
  else if (network === CARDANO_CHAIN)
    return CardanoTransaction.fromJson(jsonString);
  else {
    const obj = JSON.parse(jsonString) as PaymentTransactionJsonModel;
    return new PaymentTransaction(
      network,
      obj.txId,
      obj.eventId,
      Buffer.from(obj.txBytes, 'hex'),
      obj.txType as TransactionType,
    );
  }
};
