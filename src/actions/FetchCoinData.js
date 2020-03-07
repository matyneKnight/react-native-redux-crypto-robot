import axios from 'axios';
import {apiBaseUrl} from './../utils/Constants';
import {FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL} from './../utils/ActionTypes';

export default function fetchCoinData(){
    return dispatch => {
        dispatch({type: FETCHING_COIN_DATA})

        return axios.get(`${apiBaseUrl}/v1/cryptocurrency/listings/latest?limit=25`, {
            headers: {
                'X-CMC_PRO_API_KEY': '6f273998-4d7c-4660-88de-ade786490c9d'
            }
        })
        .then(response => {
            return dispatch({type: FETCHING_COIN_DATA_SUCCESS, payload: response.data})
        })
        .catch(err => {
            return dispatch({type: FETCHING_COIN_DATA_FAIL, payload: err})
        })
    }
}