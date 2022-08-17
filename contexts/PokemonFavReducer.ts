interface Action {
    type: string;
    payload: number;
}
interface ContextProps {
    pokemonFavList: number[];
    addPokemonToFavList: (pokemon: number) => void;
    removePokemonFromFavList: (pokemon: number) => void;
}
export const reducer = (state: ContextProps, action: Action) => {
    switch (action.type) {
        case "ADD_POKEMON_TO_FAV":
            return {
                ...state,
                pokemonFavList: [...state.pokemonFavList, action.payload],
            };
        case "REMOVE_POKEMON_FROM_FAV":
            return {
                ...state,
                pokemonFavList: state.pokemonFavList.filter(
                    (pokemon) => pokemon !== action.payload
                ),
            };
        default:
            return state;
    }
};
