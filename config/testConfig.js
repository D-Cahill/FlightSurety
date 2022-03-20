
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0xe97cE451C17f76fc73e6A9B348AA83Ad8B268C01",
        "0xA96FFaF2b4cEfa68A2CCec26734589475E383D8D",
        "0x96F001D46fA0F1fd85C6A637D70c4224f81712a8",
        "0xBa183B24c3E526e1BEcd451AFD4eb0197BBbFDaB",
        "0x3D65e2aD0712F058eb3c11316ea5ddd139eaDe7A",
        "0xFD1b4A32744aba2f212211d2D1f59E20c5259A2D",
        "0x4E0A3f25f1Ff35bada1Da143b1a3761564842a6D",
        "0x6874aCF5A7c4d0Ee85dBB4B4B100f3686e8155B8",
        "0x8C463ad10D6405A7C57dD1DA07cF308E6AaBfC3b",
        "0xef63Cf30557fCA970D9B2678c4461A38aD112B0b"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new();
    let flightSuretyApp = await FlightSuretyApp.new();

    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};