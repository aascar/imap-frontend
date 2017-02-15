/**
 * Created by Araja Jyothi Babu on 20-Oct-16.
 */
import { API_ROOT } from '../config';
import { isDefined } from '../utils';

export const HEADERS = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

const defaultConfig = {
    headers: HEADERS
};

const makeConfig = (config) => {
    return {...defaultConfig, ...config};
};

/**
 *
 * @param resolve
 * @param callback
 * @param result
 * @returns {*}
 */
const handleSuccess = (resolve, callback, result) => {
    if(isDefined(callback) && typeof callback === 'function') {
        return resolve(callback(result));
    }else{
        return resolve(result);
    }
};

/**
 *
 * @param reject
 * @param callback
 * @param error
 * @returns {*}
 */
const handleFailure = (reject, callback, error) => {
    if(isDefined(callback) && typeof callback === 'function') {
        return reject(callback({type: "Error", payload: error}));
    }else{
        return reject(null);
    }
};

/**
 * WebAPI to make Asynchronous requests
 * @param url
 * @param config
 * @param onSuccess
 * @param onFailure
 * @returns {Promise}
 */
export const callApi = (url, config, onSuccess, onFailure) => {
    return new Promise((resolve, reject) => {
        const fullUrl = API_ROOT + url;
        const options = makeConfig(config);
        console.info("Fetch options for URL: ", url, " are : =>", options);
        fetch(fullUrl, options).then(response => {
            console.info("Response for URL: " + fullUrl, response, response.body);
            response.json().then(json => {
                console.log("json", json);
                if (!response.ok) {
                    console.warn("Warning:::: ", json, "for URL: => " + fullUrl, " with Request Options: => ", options);
                    handleFailure(reject, onFailure, response);
                }
                handleSuccess(resolve, onSuccess, json);
            })
        }).catch(err => {
            console.error("Error:::: ", err, "for URL: => " + fullUrl, " with Request Options: => ", options);
            handleFailure(reject, onFailure, err);
        });
    });
};
