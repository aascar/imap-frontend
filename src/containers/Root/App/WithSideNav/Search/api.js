/**
 * Created by jyothi on 16/2/17.
 */
import { callApi } from '../../../../api';
import { makeDefaultQueryString} from '../../../../utils';

const VIDEO_INFO_API = "";

export function getVideoInfoAPI(videoId, user) {
    const url = makeDefaultQueryString(VIDEO_INFO_API, user);
    const config = {
        method: "GET",
        //body: JSON.stringify(filters)
    };
    const onSuccessCallback = json => {
        return json;
    };
    const onFailureCallback = response => {
        console.log("error", response.type, response.payload);
        return [];
    };
    return callApi(url, config, onSuccessCallback, onFailureCallback);
}