import axios from 'axios';

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_ERROR = "FETCH_ERROR"
export const ADD_SMURF = "ADD_SMURF"
export const SET_ERROR = "SET_ERROR"

export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch(fetchStart());

        axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            // console.log(resp.data);
            dispatch(fetchSuccess(resp.data))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const fetchStart = () => {
    return({type:FETCH_START})
}

export const fetchSuccess = (smurf) => {
    return({type:FETCH_SUCCESS, payload: smurf})
}

export const fetchError = () => {
    return({type:FETCH_ERROR})
}

export const addSmurf = (smurf) => {
    return({type:ADD_SMURF, payload: smurf})
}

export const setError = (error) => {
    return({type:SET_ERROR, payload: error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.