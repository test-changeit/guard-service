import { UnexpectedApiError } from '@alakipalaki/abstract-chain';

class KoiosNullValueError extends UnexpectedApiError {
  constructor(msg: string) {
    super('KoiosNullValueError: ' + msg);
  }
}

export { KoiosNullValueError };
