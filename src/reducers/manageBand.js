import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const band = {
        name: action.name,
        id: uuid()
      }

      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      const bands = state.bands.filter((band) => band.id !== action.id)
      return {bands}

    default:
      return state;
  }
};

// let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
// let removed = myFish.splice(3, 1)

// // myFish is ["angel", "clown", "drum", "sturgeon"]
// // removed is ["mandarin"]
