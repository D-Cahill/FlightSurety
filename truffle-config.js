//cleavar HDWalletProvider = require("truffle-hdwallet-provider");
//var mnemonic = "cactus below soccer pet amused noble goose cry pool noodle tree hawk";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      // provider: function() {
      //   return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
      // },
      network_id: '*',
      gas: 5999999
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};