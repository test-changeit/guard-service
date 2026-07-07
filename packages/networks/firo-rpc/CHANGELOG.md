# @alakipalaki/firo-rpc

## 0.1.0

### Minor Changes

- Initialize the package

### Patch Changes

- Update dependencies
  - @rosen-clients/rate-limited-axios@2.0.1

- Replace `listunspent` RPC with `getaddressutxos` for reduced attack surface. Filter unconfirmed UTXOs by `height > 0`. Fix fee ratio calculation (kB = 1000 bytes, not 1024).
- Update dependencies
  - @rosen-clients/rate-limited-axios@2.0.0

- Update dependencies
- Update dependencies
- Update dependencies
- Update dependencies
- Update dependencies
- Update dependencies
- Update dependencies
  - @alakipalaki/abstract-chain@16.0.1
  - @alakipalaki/firo@0.1.0
