export const reducer = (state : number[], action :any) => {
  switch (action.type) {
    case "ADD_POKEMON_TO_FAV":
      return [...state, action.payload];
    case "REMOVE_POKEMON_FROM_FAV":      
      return state.filter(pokemon => pokemon !== action.payload)
    default:
      return state;
  }
};
