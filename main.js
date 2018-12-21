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
var timerID;
var watch_str = "50fathoms.png constellation.png khaki.png pp5119.png sna411.png alange.png "
    + "datejust.png	 legenddiver.png		railmaster.png		speedmaster.png "
    + "ap25589ba.png		daytona.png		navitimer.png		rolex116710ln.png	speedytuesday.png "
    + "autavia.png elprimero.png newman.png		rolex1803.png		sub.png "
    + "avenger.png		explorer.png		nomos.png		rootbeer.png		tudor79090.png "
    + "blackbay.png		fatlady.png		omega_tresor.png	sarb017.png		vc.png "
    + "captaincook.png		flieger.png		oris65.png		sbdx021.png "
    + "chronoris.png		gsgmt.png		panerai.png		seamaster.png "
    + "ck2998.png		hulk.png		pelagos.png		sinn104.png "
    + "cocktail.png		iwc.png			pp.png			skx007.png";   

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
    $("#playbtn").click(function() {
        if ($("span", this).text()==="STOP") {
            $("span", this).text("PLAY ALL");
            clearInterval(timerID);
        } else {
            $("span", this).text("STOP");

            timerID = setInterval(function() {
                var watches = watch_str.split(/[\s,;\t\n]+/);
                var i = Math.floor((Math.random() * straps.length));
                var j = Math.floor((Math.random() * watches.length));
                $(".watchface").attr("src", "watch/"+watches[j].trim());
                $(".strapup").attr("src", straps[i].file).delay(1000).fadeIn(300);
                $(".strapdown").attr("src", straps[i].file.replace("_up", "_down")).delay(1000).fadeIn(300);
            },  3000); // 60 * 1000 milsec
        }
    });
});