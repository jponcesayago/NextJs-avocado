import {SET_LOADING} from '../types'
//import axios from 'axios'

export const setLoadingSpinner = (loading) => async dispatch => {
    
    try{
        //const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: SET_LOADING,
            payload: loading
        })
    }
    catch(error){
       throw error()
    }

}