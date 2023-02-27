import {SET_LOADING} from '../types'

const initialState = {
    loading : false
}

const eventsReducer = (state = initialState, action)  => {

    switch(action.type){

        case SET_LOADING:
        return {
            ...state,
            loading: action.payload

        }
        default: return state
    }

}

export default eventsReducer;