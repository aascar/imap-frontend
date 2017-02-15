function isDefined(variable){
    return typeof variable != 'undefined';
}

function goToByScroll(id){
    $(document.body).animate({scrollTop: $("#"+id).offset().top},'slow');
}

function scrollTo(hash) {
    location.hash = "#" + hash;
}

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