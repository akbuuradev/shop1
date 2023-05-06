const initialState = {
    favorite: []
}

export const FavoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE" : {
            let fav = state.favorite.find(el => el.id === action.payload.id)
            if (fav) {
                return {...state, favorite: state.favorite.filter(el => el.id !== fav.id)}
            } else {
                return {...state, favorite: [...state.favorite, action.payload]}
            }
        }
        default:
            return state
    }
}