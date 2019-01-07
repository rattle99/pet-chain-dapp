// module mutations.
export default {

  // set pets list.
  setPets: (state, pets) => {
    state.pets = pets
  },

  // set current pet.
  setCurrentPet: (state, currentPet) => {
    state.currentPet = currentPet
  }
}
