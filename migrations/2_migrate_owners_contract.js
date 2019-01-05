var Owners = artifacts.require("./Owners.sol");

module.exports = function(deployer) {
  deployer.deploy(Owners);
};
