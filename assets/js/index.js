$(".live").hide();
now = Math.floor(Date.now()/1000);
if ($(location).attr("hash") == "#show1month") { nWeeks = 4; $("#show1month").addClass("btn-light"); }
else if ($(location).attr("hash") == "#show2month") { nWeeks = 8; $("#show12month").addClass("btn-light"); }
else { nWeeks = 52; $("#show12month").addClass("btn-light"); } // show 52 weeks ahead by default
upcoming = now+691200*nWeeks;
today = moment().isoWeekday;
series = data.series;
venues = data.venues;
nSessions = 0;
nEvents = 0;
nLive = 0;
for (i=0; i<Object.keys(series).length; i++) {
	$(".filter").append(`<li class="nav-item"><a href="#" id="${series[i].symbol}" class="nav-link text-white sortli" aria-current="page">${series[i].name}</a></li>`);
	events = series[i].events;
	imgtitle = series[i].name;
	for (j=0; j<Object.keys(events).length; j++) {
		t=Object.keys(series[i].events[j].sessions).length-1;
		timestamp = series[i].events[j].sessions[t].timestamp+172800;
		shatimestamp = sha256("sha" + series[i].name + timestamp);
		if (timestamp >= now && timestamp <= upcoming) {
			name = series[i].events[j].name;
			venue = venues[series[i].events[j].venue];
			url = venue.url;
			flag = venue.flag;
			target = "_blank";
			if ( url == false) {
				url = "#";
				target = "_self";
			}
			$(".event-list-grid").append(`<article id='${timestamp}' class='${shatimestamp} ${series[i].symbol} sortme'><div class='header' id='${shatimestamp}'><h5 class='title'><img class='img-top' title='${imgtitle}' src='assets/png/series/${series[i].symbol}.png'>${name}</h5><hr><a href='${url}' target='${target}'><h6 class='mb-2'><img class='img-flag' src='assets/png/flags/${flag}.png'>${venue.name}</h6></a></div></article>`);
			nEvents++;
			sessions = series[i].events[j].sessions;
			sha = sha256(`${series[i].name}-${i}-${name}-${venue.name}`);
			$("." + shatimestamp).append(`<ul class='list-group list-group-flush' id='${sha}'>`);
			numberOfSessions=Object.keys(sessions).length;
			for (k=0; k<numberOfSessions; k++) {
				timediv = "";
				liveicon = "";
				session = series[i].events[j].sessions[k].name;
				length = series[i].events[j].sessions[k].length;
				livestream = series[i].events[j].sessions[k].live;
				sessionTimeUnix=Math.floor(series[i].events[j].sessions[k].timestamp*1000);
				sessionTime = moment(sessionTimeUnix).format('HH:mm');
				sessionDate = moment(sessionTimeUnix).format('ddd, MMM Do');
				year = moment(sessionTimeUnix).format('YYYY');
				if (sessionTimeUnix/1000+length > now) {
					del="";
					if (sessionTimeUnix/1000 < now) {
						green = " class='green' style='color:green; font-weight: bold'";
						if (livestream != false) { liveicon = `<a class='livestream' target='_blank' href='${livestream}' title='Watch Live'>Watch Live <img src='assets/png/play-circle-regular-24.png'></a>`; }
						$("#" + shatimestamp).addClass("green");
						$(".live").show();
						$("div.live").append(`<span class='badge bg-success liveitem'><img class='img-small' title='${imgtitle}' src='assets/png/series/${series[i].symbol}.png'>${name} - ${session}</span>`);
					}
					else { green = ""; }
					nSessions++;
				}
				else { del="<del>"; green=""; }
				if (session == "TBA") { sessionTime = ""; }
				if (del == "") { timediv= `<p class='subtitle text-muted'><small>${del}${sessionDate} ${sessionTime}</small></p>`; }
				$("#" + sha).append(`<li class='list-group-item'>${timediv}<h6${green}>${del}${session}${liveicon}</h6></li>`);
				
			}
			$("." + shatimestamp).append("</ul>");
		}
	}
}
$(".nEvents").append(nEvents);
$(".nSessions").append(nSessions);
$(".Year").append(year);


$(document).ready(function(){
	// SORT EVENTS LIST
	var mylist = $('.event-list-grid');
	var listitems = mylist.children('article').get();
	listitems.sort(function(a, b) {
	    var compA = $(a).attr('id').toUpperCase();
	    var compB = $(b).attr('id').toUpperCase();
	    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
	})
	$.each(listitems, function(idx, itm) {
	    mylist.append(itm);
	});

	// SORT LI
	function sortUL(selector) {
	    $(selector).children("li.sortli").sort(function(a, b) {
	        var upA = $(a).text().toUpperCase();
	        var upB = $(b).text().toUpperCase();
	        return (upA < upB) ? -1 : (upA > upB) ? 1 : 0;
	    }).appendTo(selector);
	}
	sortUL("ul.filter");

	// FILTER CLICK
	$(".nav-link").click(function() {
		if ($(this).attr('id') == "show-all") {
			$("article").show();
			$("a.active").removeClass("active");
			$(this).addClass("active");
		}
		else {
			$("article").hide();
			$("article." + $(this).attr('id')).show();
			$("a.active").removeClass("active");
			$(this).addClass("active");
		}
	});
});