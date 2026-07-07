import { PaymentOrder } from '@alakipalaki/abstract-chain';

interface PermitBoxValue {
  wid: string;
  boxValue: bigint;
}

interface RewardOrder {
  watchersOrder: PaymentOrder;
  guardsOrder: PaymentOrder;
}

export { PermitBoxValue, RewardOrder };
