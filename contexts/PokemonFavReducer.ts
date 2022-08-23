interface Action {
    type: string;
    payload: number;
}
export const reducer = (state: any, action: Action) => {
    console.log(state);

    switch (action.type) {
        case "ADD_POKEMON_TO_FAV":
            return {
                ...state,
                favList: [...state.favList, action.payload],
            };
        case "REMOVE_POKEMON_FROM_FAV":
            return {
                ...state,
                favList: state.favList.filter(
                    (pokemon) => pokemon !== action.payload
                ),
            };
        default:
            return state;
    }
};
