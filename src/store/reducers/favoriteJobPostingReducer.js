import { ADD_TO_FAVORİTE, RMOVE_FROM_FAVORİTE } from "../actions/favoriteJobPostingActions";
import { favoriteItems } from "../initialValues/favoriteItems";

const initialState = {
    favoriteItems: favoriteItems
}

export default function favoriteJobPostingReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_FAVORİTE:
            let jobAdversiment = state.favoriteItems.find((j) => j.jobAdversiment.id === payload.id)
            if (jobAdversiment) {
                jobAdversiment.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    favoriteItems: [...state.favoriteItems, {quantity:1,jobAdversiment:payload}]
                }
            }
        case RMOVE_FROM_FAVORİTE:
            return {
                ...state,
                favoriteItems: state.favoriteItems.filter((j) => j.jobAdversiment.id !== payload.id)
            }

        default:
            return state;
    }

}