pragma solidity >=0.5.0 <0.6.0;

import "./PetManager.sol";

// map owner address to a given number of pets.
contract Owners {
    // event for newly created contracts.
    event PetManagerContractCreated(address newContractAddress);

    // mapping for storing a pet owner and it's pets.
    mapping(address => address[]) pets;

    // returns a list of pet contracts.
    function getPets() public view returns (address[] memory) {
        return pets[msg.sender];
    }

    // add a new pet.
    function addPet(string memory _name, string memory _type) public returns (address) {
        // create a new pet contract.
        PetManager newContract = new PetManager(_name, _type);
        // get new contract address info.
        address contractAddress = address(newContract);
        // adds the pet contract address on the contract storage.
        pets[msg.sender].push(contractAddress);
        // emit the event.
        emit PetManagerContractCreated(address(newContract));
        // return the pet contract address.
        return contractAddress;
    }

    // remove a pet contract from the owner list.
    function removePet(address _petContract) public returns (bool) {
        // alias my pets contracts.
        address[] memory myPets = pets[msg.sender];

        // loop searching for the given contract to delete.
        for(uint i = 0; i < myPets.length; i++) {
            // if found...
            if (myPets[i] == _petContract) {
                // delete from pets list.
                delete pets[msg.sender][i];
                // complete the function by returning true;
                return true;
            }
        }

        // this section will only be touched if no pet was found.
        return false;
    }
}
