now = Math.floor(Date.now()/1000);
if ($(location).attr("hash") == "#show1month") { nWeeks = 4; $("#show1month").addClass("btn-success"); }
else if ($(location).attr("hash") == "#show2month") { nWeeks = 8; $("#show2month").addClass("btn-success"); }
else if ($(location).attr("hash") == "#show12month") { nWeeks = 52; $("#show12month").addClass("btn-success"); }
else { nWeeks = 2; $("#show2week").addClass("btn-success"); }
upcoming = now+691200*nWeeks;
today = moment().isoWeekday;
series = data.series;
circuits = data.circuits;
maxHeight = 0;
nSessions = 0;
nEvents = 0;
for (i=0; i<Object.keys(series).length; i++) {
	events = series[i].events;
	imgtitle = series[i].name;
	for (j=0; j<Object.keys(events).length; j++) {
		t=Object.keys(series[i].events[j].sessions).length-1;
		timestamp = series[i].events[j].sessions[t].timestamp+172800;
		shatimestamp = sha256("sha" + series[i].name + timestamp);
		if (timestamp >= now && timestamp <= upcoming) {
			name = series[i].events[j].name;
			circuit = circuits[series[i].events[j].circuit];
			url = circuit.url;
			target = "_blank";
			if ( url == false) {
				url = "#";
				target = "_self";
			}
			$(".event-list-grid").append("<article id='" + timestamp + "' class='" + shatimestamp + " sortme'><div class='header' id='" + shatimestamp + "'><h5 class='title text-center'><img class='img-top' title='" + imgtitle + "' src='assets/png/" + series[i].symbol + ".png'>" + name + "</h5><hr><a href='" + url + "' target='" + target + "'><h6 class='text-center mb-2'><b>" + circuit.name + "</b></h6></a></div></article>");
			nEvents++;
			sessions = series[i].events[j].sessions;
			sha = sha256(series[i].name + "-" + i + "-" + name + "-" + circuit.name);
			$("." + shatimestamp).append("<ul class='list-group list-group-flush' id='" + sha + "'>");
			numberOfSessions=Object.keys(sessions).length;
			if (maxHeight < numberOfSessions) { maxHeight = numberOfSessions; }
			for (k=0; k<numberOfSessions; k++) {
				timediv = "";
				session = series[i].events[j].sessions[k].name;
				length = series[i].events[j].sessions[k].length;
				sessionTimeUnix=Math.floor(series[i].events[j].sessions[k].timestamp*1000);
				sessionTime = moment(sessionTimeUnix).format('ddd MMM Do YYYY HH:mm');
				if (sessionTimeUnix/1000+length > now) {
					del="";
					if (sessionTimeUnix/1000 < now) {
						green = " class='green' style='color:green; font-weight: bold'";
						$("#" + shatimestamp).addClass("green");
					}
					else { green = ""; }
				}
				else { del="<del>"; green=""; }
				if (del == "") { timediv= "<p class='subtitle text-muted'><small>" + del + sessionTime + "</small></p>"; }
				$("#" + sha).append("<li class='list-group-item'>" + timediv + "<h6" + green + ">" + del + session + "</h6></li>");
				nSessions++;
				
			}
			$("." + shatimestamp).append("</ul>");
		}
	}
}
$(".nEvents").append(nEvents);
$(".nSessions").append(nSessions);
$(".nWeeks").append(nWeeks);

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