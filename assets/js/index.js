// Motorsport Events 2019-2024
// Author: Rui Pedro Moreira
// github.com/rpdorm/motorsport-events
$(".live").hide();
now = Math.floor(Date.now()/1000);
nWeeks = 52; // show next 52 weeks by default
upcoming = now+691200*nWeeks;
today = moment().isoWeekday;
nSessions = 0;
nEvents = 0;
nLive = 0;
for (i=0; i<Object.keys(series).length; i++) {
	events = series[i].events;
	$(".filter").append(`<li class="nav-item"><a href="#" id="${series[i].symbol}" class="nav-link text-white sortli" aria-current="page">${series[i].name}</small></a></li>`);
	imgtitle = series[i].name;
	for (j=0; j<Object.keys(events).length; j++) {
		t=Object.keys(series[i].events[j].sessions).length-1;
		timestamp = series[i].events[j].sessions[t].timestamp+series[i].events[j].sessions[t].length;
		shatimestamp = sha256(`sha' ${series[i].name}-${timestamp}`);
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
			$(".event-list-grid").append(`<article id='${series[i].events[j].sessions[0].timestamp}' class='${shatimestamp} ${series[i].symbol} sortme'><div class='header' id='${shatimestamp}'><h6><img class='img-top' title='${imgtitle}' src='assets/png/series/${series[i].symbol}.png'><br/><span class='series'>${series[i].name}<span></h6><h5 class='title'>${name}</h5><a class='venue' href='${url}' target='${target}'><img class='img-flag' src='assets/png/flags/${flag}.png'>${venue.name}</a></div></article>`);
			nEvents++;
			sessions = series[i].events[j].sessions;
			sha = sha256(`${timestamp}-${series[i].name}-${i}-${name}-${venue.name}`);
			$("." + shatimestamp).append(`<ul class='list-group list-group-flush' id='${sha}'>`);
			numberOfSessions=Object.keys(sessions).length;
			for (k=0; k<numberOfSessions; k++) {
				timediv = "";
				liveicon = "";
				session = series[i].events[j].sessions[k].name;
				length = series[i].events[j].sessions[k].length;
				livestream = series[i].events[j].sessions[k].live;
				if (livestream != false) { liveicon = `<a class='livestream' target='_blank' href='${livestream}' title='Watch Live'><img class='img-yt' src='assets/png/icons/youtube.svg'></a>`; }
				sessionTimeUnix=Math.floor(series[i].events[j].sessions[k].timestamp*1000);
				sessionTime = moment(sessionTimeUnix).format('HH:mm');
				sessionDate = moment(sessionTimeUnix).format('ddd, MMM Do');
				year = moment(sessionTimeUnix).format('YYYY');
				if (sessionTimeUnix/1000+length > now) {
					del = false;
					if (sessionTimeUnix/1000 < now) {
						green = " class='green' style='color:green'";
						$(".live").show();
						$("header.live").append(`<span class='badge bg-success liveitem'><img class='img-small' title='${imgtitle}' src='assets/png/series/${series[i].symbol}.png'>${name} - ${session}</span>`);
					}
					else { green = ""; }
					nSessions++;
				}
				else {
					del = true;
					green = "";
					liveicon = "";
				}
				if (session == "TBA") { sessionTime = ""; session = "schedule yet to be announced"; }
				if (del == false) {
					timediv= `<p class='subtitle text-muted'><small>${sessionDate} ${sessionTime}</small></p>`;
					$("#" + sha).append(`<li class='list-group-item'>${timediv}<h6${green} class='session'>${session}${liveicon}</h6></li>`);
				}
				
				
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

	// SORT MENU LIST
	function sortUL(selector) {
	    $(selector).children("li").sort(function(a, b) {
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

	$("img.menu").click(function() {
		if ($("ul.nav").css('display') == "none") { $("ul.nav").show(); }
		else { $("ul.nav").hide(); }
	});
});