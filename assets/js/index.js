now = Math.floor(Date.now()/1000);
upcoming = now+259+2592000*92000*1.2;
today = moment().isoWeekday;
series = data.series;
circuits = data.circuits;
maxHeight = 0;
for (i=0; i<Object.keys(series).length; i++) {
	events = series[i].events;
	for (j=0; j<Object.keys(events).length; j++) {
		t=Object.keys(series[i].events[j].sessions).length-1;
		timestamp = series[i].events[j].sessions[t].timestamp+129600;
		shatimestamp = sha256("sha" + series[i] + timestamp);
		if (timestamp >= now && timestamp <= upcoming) {
			name = series[i].events[j].name;
			circuit = circuits[series[i].events[j].circuit];
			$(".eventlist").append("<div  id='" + timestamp + "' class='card sortme'><div class='card-header'><img class='card-img-top' src='assets/png/" + series[i].symbol + ".png'><h5 class='card-title text-center'>" + name + "</h5><h6 class='card-subtitle mb-2 text-muted text-center'>" + circuit.name + "</h6></div></div>");
			sessions = series[i].events[j].sessions;
			/*$("#" + timestamp).append("<p class='card-subtitle mb-2 text-muted'>Round " + series[i].events[j].round + "</p>");
			$("#" + timestamp).append("<p class='card-subtitle mb-2 text-muted'>" + circuit.name + "</p>");*/
			sha = sha256(series[i]+i+name+circuit);
			$("#" + timestamp).append("<ul class='list-group list-group-flush' id='" + sha + "'>");
			numberOfSessions=Object.keys(sessions).length;
			if (maxHeight < numberOfSessions) { maxHeight = numberOfSessions; }
			for (k=0; k<numberOfSessions; k++) {
				timediv = "";
				session = series[i].events[j].sessions[k].name;
				length = series[i].events[j].sessions[k].length;
				sessionTimeUnix=Math.floor(series[i].events[j].sessions[k].timestamp*1000);
				sessionTime = moment(sessionTimeUnix).format('ddd MMM Do YYYY HH:mm');
				if (sessionTimeUnix+length > now) { del=""; }
				else { del="<del>"; }
				if (session != "Cancelled") { timediv= "<p class='card-subtitle text-muted'><small>" + del + sessionTime + "</small></p>"; }
				$("#" + sha).append("<li class='bg-light list-group-item'>" + timediv + "<h6>" + del + session + "</h6></li>");
				
			}
			$("#" + shatimestamp).append("</ul>");
		}
		else { $(".eventlist").html("<p>Nothing to see here, move along...</p>") }
	}
}

var mylist = $('.eventlist');
var listitems = mylist.children('div').get();
listitems.sort(function(a, b) {
    var compA = $(a).attr('id').toUpperCase();
    var compB = $(b).attr('id').toUpperCase();
    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
})
$.each(listitems, function(idx, itm) {
    mylist.append(itm);
});

$(document).ready(function () {
	maxHeight = maxHeight * 50;
	cardHeight = maxHeight+130;
	$("ul").height(maxHeight);
	$(".card").height(cardHeight);
});