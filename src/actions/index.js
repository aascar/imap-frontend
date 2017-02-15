import { RESET_ALL } from '../constants/ActionTypes';

export function resetAll(){
    return (dispatch, getState) => {
        const user = getState().auth.user.email;
        return dispatch({
            type: RESET_ALL,
            payload: null,
            meta: {
                //If Any
            }
        });
    };
}