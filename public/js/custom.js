function isDefined(variable){
    return typeof variable != 'undefined';
}

function goToByScroll(id){
    $(document.body).animate({scrollTop: $("#"+id).offset().top},'slow');
}

function goToByScrollandHighLight(id){
    $(document.body).animate({scrollTop: $("#"+id).offset().top},'slow');
    $("#" + id).addClass("highlight-once");
    setTimeout(function () {
        $("#" + id).removeClass("highlight-once");
    }, 2000);
}

function scrollTo(hash) {
    location.hash = "#" + hash;
}

//prototype to return url values in the document
var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
    return query_string;
}();

function addRowHandlers() {
    var table = document.getElementById("tableId");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler =
            function(row)
            {
                return function() {
                                        var cell = row.getElementsByTagName("td")[2];
                                        var id = cell.innerHTML;
                                        alert("id:" + id);
                                 };
            };

        currentRow.onclick = createClickHandler(currentRow);
    }
}

function LightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255-amt;
    else if  (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255-amt;
    else if  (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255-amt;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

function renderIssues(issues, table, tbody, countContainer, appId, filters, customLength){
    var issuesTable = document.getElementById(tbody);
    //console.log(JSON.stringify(issues));
    var forIssuesPageFlag = typeof customLength == 'undefined';
    $("#" + tbody).html("");
    var row,cell;
    var totalIssues = forIssuesPageFlag? issues.length : customLength < issues.length ? customLength : issues.length;
    var issue;
    var rowClickHandler = function(id)
    {
        return function() {
            if(localStorage.hasOwnProperty("start") && localStorage.hasOwnProperty("end")){
                var startTime = localStorage.getItem("start")
                var endTime =  localStorage.getItem("end")
            }
            document.location.href = "issue?app=" + appId + "&issue=" + id + "&version=" + filters.app_version + "&mode=" + filters.running_mode + "&startDate=" + startTime + "&endDate="+ endTime;
        };
    };
    for(var i = 0; i < totalIssues; i++){
        issue = issues[i];
        if(!forIssuesPageFlag && issue.status != "Open"){
            continue;
        }
        var row = issuesTable.insertRow(issuesTable.rows.length);
        row.style.cursor = "pointer";
        row.onclick = rowClickHandler(issue.id);
        //adding tuple values
        cell = row.insertCell(0);
        var  titleOfIssue = issue.issue_type;
        var titleString = issue.description;
        var indexOfIN = titleString.search(" in ");
        var status = "<span class='hide'>OPEN</span>";
        if(issue.status == "Closed") {
            status = "CLOSED";
        }else if(issue.status == "NotIssue") {
            status = "NOT AN ISSUE";
        }
        var description =   moment(issue.first_occurrence).fromNow();
        cell.innerHTML = "<p><span class='issue-heading'>"+ titleString.substring(0,indexOfIN)
            + "</span><span class='issue-holder'>" + titleString.substring(indexOfIN)
            + "</span><span class='status'>"+ status;

        cell.style.textAlign = 'left';
        cell = row.insertCell(1);
        cell.innerHTML = "</span><br> " + description +"</p>"
        cell = row.insertCell(2);
        cell.innerHTML = issue.occurrences;
        cell = row.insertCell(3);
        cell.innerHTML = issue.user_count;
    }
    $(".overlay").fadeOut("slow");
    document.getElementById(countContainer).innerHTML = totalIssues;
}

var filterObject = new Object(); //global filter object for filters
//defining filters
filterObject.app_version = "";
filterObject.running_mode = "";
//filterObject.time_range = {};
//filterObject.time_range.start_time = moment(0).utcOffset();
//filterObject.time_range.end_time = moment();
//filterObject.transaction_type = [];
//filterObject.issue_type = [];
//filterObject.issue_status = "";
//filterObject.os_version = "";
//filterObject.users = "";


function morrisGraphData(data, format){
    var newData = [];
    format = format || "MMM DD";
    for(var i = 0; i < data.length; i++){
        newData.push({ date : moment(data[i]._id, "YYYYMMDD").format(format), value : data[i].value});
    }
    return newData;
}

function getUpdatedFilters(){
    filterObject.app_version = localStorage.getItem("app_version");
    filterObject.running_mode = localStorage.getItem("running_mode");
    if(localStorage.hasOwnProperty("start_time") && localStorage.hasOwnProperty("end_time"))
        filterObject.time_range = {start_time: localStorage.getItem("start_time"), end_time: localStorage.getItem("end_time")};
    return filterObject;
}

function muteLoader(){
    $(".overlay").fadeOut('slow');
}

function displayLoader() {
    $(".overlay").css("display", "block");
}

function doLogout(){
    window.location = "\logout";
}

function checkSessionOut(response){
    if(response == "logout"){
        doLogout();
    }
}

function makeAJAXRequest(type, url, requestBody, successCallback, failureCallback, alwaysCallback){

    var requestOptions = type == "POST" ? { //POST
        type : type,
        url : url,
        async: true,
        dataType: 'text',
        data: JSON.stringify(requestBody),
        contentType: "application/json; charset=utf-8"
    } : { //GET
        method : type,
        url : url,
        contentType : 'application/json'
    };

    $.ajax(
        requestOptions
    ).done( function(data){
        checkSessionOut(data);
        if(successCallback !== 'undefined')
            successCallback(data);
        $(".overlay").fadeOut('slow');
    }).fail( function(data){
        checkSessionOut(data);
        if(failureCallback !== 'undefined')
            failureCallback();
        $(".overlay").fadeOut('slow');
    }).always(function () {
        if(alwaysCallback != 'undefined')
            alwaysCallback();
        //$(".overlay").fadeOut('slow');
    });

}

$(document).on('click', "i[data-click='copy']", function (e) {
    var target = $(this).attr("data").trim();
    var selectedText = $("[data-to-copy='" + target + "']").text();
    copyToClipboard(selectedText);
    var toolTip = $(this).tooltip({
        title: "Copied to clipboard",
        trigger: 'manual'
    });
    $(toolTip).tooltip('show');
    setTimeout(function () {
        $(toolTip).tooltip('hide');
    }, 1000);
});

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

function roundOff2(value){
    return Math.round(value * 100) / 100;
}