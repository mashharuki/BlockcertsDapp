/**
 * テストネット用のアドレスを生成するスクリプト
 */

const bitcore = require('bitcore-lib');
const network = 'testnet';

const privateKey = new bitcore.PrivateKey(network);
const publicKey = new bitcore.PublicKey(privateKey)
const address = privateKey.toAddress();

console.log(publicKey.toString());
console.log(privateKey.toString());
console.log(address.toString());