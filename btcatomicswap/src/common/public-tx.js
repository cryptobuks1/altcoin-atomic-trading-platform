const RpcClient = require('bitcoind-rpc');
import {configuration} from '../config';

const rpc = new RpcClient(configuration);

export const publishTx = (tx) => {
  return new Promise((resolve, reject) => {
    rpc.sendRawTransaction(tx, (a, b) => {
      resolve(b.result);
    });
  });
};