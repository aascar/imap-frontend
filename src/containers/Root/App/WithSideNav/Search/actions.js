/**
 * Created by jyothi on 16/2/17.
 */
import { getVideoInfoAPI } from './api';

export const getVideoInfo = (videoId) => {
    return (dispatch, getState) => {

        return dispatch({
            types: [

            ],
            payload: {
                promise: getVideoInfoAPI(videoId)
                    .then((res) => {
                        return res;
                    }),
            },
            meta: {
                //If Any
            }
        });
    };
};