require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember essay hockey knee blue gaze'; 
let testAccounts = [
"0x2478e6812ac10b2aa7b8c757cb1f59214b985fe4e1d51906116217cb4c132f6d",
"0x5818eb48e12528a463d677db85322156786b7ebc726d7e827867b5514d8be5b6",
"0xc63a30654186b60b754e9be110a3fe095574c1fef1d29dfcd3c6ebe26d0d7ee7",
"0x7a1e496ec2d2f669c66a31b7bffb9995d4a60f51d93de63cb0032b6dade7c910",
"0x951d4920992f4b528c8515ee1400ae23dc328560be7517bad1735862ab07b87c",
"0x0764dc3f879676811dee55c046603534dd2f4a0b50bc04fef8ccf5a626e54949",
"0xc584d393216fa8efa6c3b1ea571ddadd6b10a54cb84d299bc65a649f5fe9576a",
"0x8da87eaeaa5ebdc00b34ce582cb5610bf619ae50018c92eaf4614134d15263c9",
"0x86086fe48922aed38a0e95f38b41f51d9fedc37cd7ac55d25c68b4fcd2141870",
"0x1188e99642b21ce629ea19f22f504d5797c9657b0a6c7da8eb67364713a766ae"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

