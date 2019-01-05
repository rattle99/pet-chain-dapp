// module getters.

// selected  address getter.
export const selectedAddress = ({ selectedAddress }) => selectedAddress

// return a address avatar.
export const avatar = ({ selectedAddress }) => {
  return selectedAddress ? `https://api.adorable.io/avatars/285/${selectedAddress}.png` : null
}

// if no address is selected, guest is true.
export const guest = ({ selectedAddress }) => (selectedAddress == null)

// return web3 instance from state.
export const web3 = ({ web3 }) => web3

// return ethereum provider (MetaMask, Mist, etc).
export const ethereumProvider = ({ ethereumProvider }) => ethereumProvider
