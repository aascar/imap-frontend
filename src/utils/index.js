/**
 * Created by Araja Jyothi Babu on 22-Oct-16.
 */
import moment from 'moment';
import {USP_APIS} from '../constants';

/**
 * Converts first order Maps to JSON objects
 * @param map
 * @returns {{}}
 */
export const mapToJson = (map) => { //FIXME: handle large maps
    let mappedArray = JSON.parse(JSON.stringify([...map]));
    let json = {};
    mappedArray.map(item => {
        json[item[0]] = item[1];
    });
    return json;
};

/**
 * returns a App with AppId from given AppsList
 * @param apps
 * @param appId
 * @returns {*}
 */
export const appFromList = (apps, appId) => {
    if(apps === null || typeof apps === 'undefined' || apps.length == 0)
        return null;
    for(let i = 0; i < apps.length; i++) {
        if (apps[i].app_id === appId)
            return apps[i];
    }
    console.error("No App found for appId: ", appId);
    return null;
};

/**
 * checks whether a value is defined
 * @param value
 * @returns {*|boolean}
 */
export function isDefined(value){
    return value && value !== null && typeof value !== 'undefined';
}

/**
 * assigns new values if existing value is null or undefined
 * @param defaultValue
 * @param newValue
 * @returns {*}
 */
export function assignValue(defaultValue, newValue) {
    return isDefined(newValue) ? newValue : defaultValue;
}

/**
 * replaces unwanted chars from string
 * @param text
 * @param originalChar
 * @param newChar
 * @returns {*}
 */
export function removeCharsWith(text, originalChar, newChar) {
    return text.replace(originalChar, newChar);
}

/**
 * Gives random color as HEX String
 * @returns {string}
 */
export function getRandomColor() {
    let letters = 'ABC789';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
    //return '#'+(Math.random()*0xFFFFFF<<0).toString(16); generates any color
}

/**
 * return data with random color
 * @param data "Array of Objects"
 * @returns {*}
 */
export function dataWithColoredSegments(data){
    return data.map(item => {
        item.fill = getRandomColor();
        return item;
    })
}

/**
 * returns URL with appId and userId as QueryStrings
 * @param url
 * @param user
 * @param appId
 * @returns {string}
 */
export function makeDefaultQueryString(url, user, appId){
    return url + "?user=" + user + "&app=" + appId;
}

/**
 * return group id from list of groups
 * @param groups
 * @param groupType
 * @returns {*}
 */
export function getGroupIdFromList(groups, groupType){
    if(groups === null || typeof groups === 'undefined' || groups.length == 0)
        return null;
    for(let i = 0; i < groups.length; i++) {
        if(groups[i].group_type === groupType){
            return groups[i]._id;
        }
    }
    console.error("No groupId found from given Groups for groupType:", groupType);
    return null;
}

/**
 * return path id from list of paths
 * @param paths
 * @param pathName
 * @returns {*}
 */
export function getPathIdFromList(paths, pathName){
    if(paths === null || typeof paths === 'undefined' || paths.length == 0)
        return null;
    for(let i = 0; i < paths.length; i++){
        if(paths[i].name === pathName)
            return paths[i]._id;
    }
    console.error("No pathId found from given Paths for pathName:", pathName);
    return null;
}

/**
 *
 * @param paths
 * @param pathId
 * @returns {null}
 */
export function getPathNameFromList(paths, pathId){
    if(paths === null || typeof paths === 'undefined' || paths.length == 0)
        return null;
    for(let i = 0; i < paths.length; i++){
        if(paths[i]._id === pathId)
            return paths[i].name;
    }
    console.error("No pathId found from given Paths for pathName:", pathId);
    return null;
}

/**
 *
 * @param groups
 * @param groupId
 * @returns {*}
 */
export function getGroupNameFromList(groups, groupId){
    if(groups === null || typeof groups === 'undefined' || groups.length == 0)
        return null;
    for(let i = 0; i < groups.length; i++) {
        if(groups[i]._id === groupId){
            return groups[i].group_name;
        }
    }
    console.error("No groupName found from given Groups for groupId:", groupId);
    return null;
}

/**
 *
 * @param groups
 * @param groupId
 * @returns {*}
 */
export function getGroupTypeFromList(groups, groupId){
    if(groups === null || typeof groups === 'undefined' || groups.length == 0)
        return null;
    for(let i = 0; i < groups.length; i++) {
        if(groups[i]._id === groupId){
            return groups[i].group_type;
        }
    }
    console.error("No groupType found from given Groups for groupId:", groupId);
    return null;
}

/**
 *
 * @param groups
 * @param groupId
 * @returns {*}
 */
export function getGroupFromList(groups, groupId){
    if(groups === null || typeof groups === 'undefined' || groups.length == 0)
        return null;
    for(let i = 0; i < groups.length; i++) {
        if(groups[i]._id === groupId){
            return groups[i];
        }
    }
    console.error("No group found from given Groups for groupId:", groupId);
    return null;
}

/**
 * return USP API
 * @param uspType
 */
export function makeUSPAPI(uspType) {
    for(let key in USP_APIS){
        if(USP_APIS.hasOwnProperty(key)){
            if(uspType.indexOf(key) !== -1)
                return USP_APIS[key];
        }
    }
}

/**
 *
 * @param defaultSortIndexes
 * @param sortedDataList
 * @param columnKey
 * @param sortDir
 * @param SortTypes
 * @returns {*}
 */
export function indexSorter(defaultSortIndexes, sortedDataList, columnKey, sortDir, SortTypes){
    let sortIndexes = defaultSortIndexes.slice();
    return sortIndexes.sort((indexA, indexB) => {
        let valueA = sortedDataList[indexA][columnKey];
        let valueB = sortedDataList[indexB][columnKey];
        let sortVal = 0;
        if (valueA > valueB) {
            sortVal = 1;
        }
        if (valueA < valueB) {
            sortVal = -1;
        }
        if (sortVal !== 0 && sortDir === SortTypes.ASC) {
            sortVal = sortVal * -1;
        }
        return sortVal;
    });
}

/**
 *
 * @param distributions
 * @returns {*}
 */
function distributionsWithColors(distributions){
    for(let key in distributions){
        if(distributions.hasOwnProperty(key)){
            distributions[key] = dataWithColoredSegments(distributions[key]);
        }
    }
    return distributions;
}

/**
 * return time from now
 * @param time
 * @returns {*}
 */
export function displayTimeFromNow(time) { //TODO: use this function to all
    if(!time || time == "NA") return "NA";
    return moment(time).fromNow();
}

/**
 *
 * @param n
 * @returns {boolean}
 */
export function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

/**
 * rounds large float values to given digits
 * @param number
 * @param toDigits
 * @returns {*}
 */
export const roundOffNumber = (number, toDigits = 2) => {
    return !isNaN(number) && isFloat(number) ? number.toFixed(toDigits) : number;
};

/**
 * Capitalize
 * @param str
 */
export function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

/**
 * CSV or XLS downloader for JSON data
 * @param JSONData
 * @param ReportTitle
 * @param ShowLabel
 * @param fileType either CSV or XLS
 */
export function downloadJSONasCSVorXLS(JSONData, ReportTitle, ShowLabel, fileType = "csv") {
    let arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    let CSV = '';
    CSV += ReportTitle + '\r\n\n';
    if (ShowLabel) {
        let row = "";
        for (let index in arrData[0]) {
            row += toTitleCase(removeCharsWith(index, '_', ' ')) + ',';
        }
        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    for (let i = 0; i < arrData.length; i++) {
        let row = "";
        for (let index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }
    if (CSV == '') {
        alert("Invalid data");
        return;
    }
    let fileName = ReportTitle.replace(/ /g,"_");
    let uri = 'data:text/' + fileType + ';charset=utf-8,' + escape(CSV);
    let link = document.createElement("a");
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + "." + fileType;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * downloads JSON object as JSON file
 * @param JSONData
 * @param fileName
 */
export function downloadJSONAsJSONFile(JSONData, fileName){
    let uri = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(JSONData));
    let link = document.createElement("a");
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 *
 * @param blob
 * @param callback
 */
export function convertBlobToBase64(blob, callback) {
    let reader = new FileReader();
    reader.onload = function() {
        let dataUrl = reader.result;
        let base64 = dataUrl.split(',')[1];
        if(typeof callback === 'function') {
            callback(base64);
        }
    };
    reader.readAsDataURL(blob);
}