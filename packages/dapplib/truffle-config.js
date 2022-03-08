require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain erosion inner kiwi olympic ski'; 
let testAccounts = [
"0x438223ab7e6ab802bf279f6ad0d53716185396556ac3110d2d727713c2e400e5",
"0x536b41075c35866d07ad38b6e0402c060559bf00f49fe482779b3af27d7b72ef",
"0xaf2baa6d204ee29d00121bb74cedf38efda815faeb110fd40f4e0950862ee3ba",
"0x6388d6de2aa72e4fe9cac85d78a89ccdebcf34adc6a188bc29f5b48f314b9e1a",
"0x5b3c5715bca9e416aae45d08adc90bf7cb2c3aa4749d39c0fb22a0b1adde0932",
"0x462ba4cc539085258ca81b754781491f377d36b3e3a7fcd672a0e2a0b3f7aeca",
"0x3eed6eb97fa920aeaebb0d420585d0b15e8e9a0c3781332cf839f8acfbd2e933",
"0xc97b3fe3cd7ee509b489ca832256847dd3cb6e6a2fa60a37215cb2942cafeb95",
"0xf3d040c30ef7b650a5d6b31ae9538ccedca7f48c6c131262716de7a4711f8316",
"0x5d2f56db6bc61a15e14718574c839642b6361ecb7fb707102d9ed2ea72bf1b24"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

