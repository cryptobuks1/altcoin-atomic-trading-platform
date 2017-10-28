const RIPEMD160 = require('ripemd160');
const crypto = require('crypto-browserify');

export function generateSecret() {

  const secretBuffer = crypto.randomBytes(32);
  const secret = secretBuffer.toString('hex');
  const secretHash = new RIPEMD160().update(secretBuffer).digest('hex');

  return {
    secret,
    secretHash,
  };
}

export function hash160(value) {
  return new RIPEMD160().update(value).digest('hex');
}