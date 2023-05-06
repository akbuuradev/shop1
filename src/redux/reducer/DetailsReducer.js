import axios from "axios";
import {useParams} from "react-router-dom";

const initialState = {
    details: {}
}

export const DetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAILS" :
            return{...state, details: action.payload}
        default:
            return state
    }
}