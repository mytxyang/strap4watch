function loadWatchImage(watchName) {
    if (watchName === "watch/autavia.png") {
        $("#msgbox").text("查理的最爱").attr("href", "https://www.instagram.com/reachlin6464/");
    } else {
        $("#msgbox").text("Ⓒ 2018 reachlin@gmail.com").attr("href", "#");
    }
    $(".watchface").attr("src", watchName);
}

function loadStrapImage(imgName) {
    $("#msgbox").text("Ⓒ 2018 reachlin@gmail.com").attr("href", "#");
    $.each(straps, function(index, value) {
        if (imgName === value.file) {
            $("#msgbox").text(value.msg).attr("href", value.url);
        }
    });
    $(".strapup").attr("src", imgName);
    $(".strapdown").attr("src", imgName.replace("_up", "_down"));
}

var straps;
$( document ).ready(function() {
    console.debug("ready");
    $.getJSON( "straps.json", function( data ) {
        straps = data;
    });
    $(".watchbtn").click(function() {
        loadWatchImage(this.getAttribute('src'));
    });
    $(".strapbtn").click(function() {
        loadStrapImage(this.getAttribute('src'));
    });
});