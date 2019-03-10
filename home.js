now = moment();
today = moment().isoWeekday;
if (today < 1) { monday = moment().isoWeekday(1); }
else { monday = moment().add(1, 'weeks').isoWeekday(1); }
next_week = moment().add(7, 'days');
upcoming = new Array();
upcoming_unique = new Array();
upcoming_dump = "";

x=0;
// GET EVENTS
for (i=0; i<Object.keys(event).length; i++) {
	timestamp = event[i].time
	start_time = event[i].time*1000;
	// THIS WEEK
	// SELECT ONLY UPCOMING EVENTS
	if (start_time >= now && monday >= start_time) {
		upcoming[x] = {};
		upcoming[x]['id'] = i;
		upcoming[x]['timestamp'] = timestamp;
		upcoming[x]['name'] = event[i].name;
		upcoming[x]['series'] = event[i].series;
		upcoming[x]['round'] = event[i].round;
		upcoming[x]['symbol'] = event[i].symbol;
		upcoming[x]['session'] = event[i].session;
		upcoming[x]['distance'] = event[i].distance;
		upcoming[x]['circuit'] = event[i].circuit;
		upcoming[x]['year'] = moment(start_time).format('YYYY');
		unique_event=event[i].symbol+"-"+moment(start_time).format('YYYY')+"-"+event[i].name.replace(/\s+/g, '-');
		unique_tag=event[i].symbol+"-"+moment(start_time).format('YYYY')+"-"+event[i].round+"-"+event[i].name.replace(/\s+/g, '-')+"-"+event[i].session.replace(/\s+/g, '-');
		upcoming[x]['unique_event'] = unique_event;
		upcoming[x]['unique_tag'] = unique_tag;
		upcoming[x]['from'] = moment(start_time).fromNow();
		if ( $.inArray(unique_event, upcoming_unique) == -1 ) {
			upcoming_unique.push(unique_event);
		}
		x++;
	}
}

// SORT EVENTS ARRAY BY DATE
upcoming.sort(function(x, y){
	return x.timestamp - y.timestamp
})


console.log(upcoming);
console.log(upcoming_unique);

//upcoming.length = target;
this_week();
function this_week() {
	for (t=0; t<upcoming_unique.length; t++) {
		div_class = upcoming_unique[t];
		div = "<div class='event_group col-3 " + div_class + "'>";
		c=0;
		for (v=0; v<upcoming.length; v++) {
			if (upcoming[v]['unique_event'] == upcoming_unique[t]) {
				if (c==0) { div = div + "<img class='img' title='" + upcoming[v]['series'] + "' src='assets/png/"+upcoming[v]['symbol']+".png'><p class='details'>" + upcoming[v]['name'] + "</p><p class='details'>" + upcoming[v]['circuit'] + "</p><p>" + upcoming[v]['from'] + ": " + upcoming[v]['session'] + "</p>"; }
				else { div = div + "<p>" + upcoming[v]['from'] + ": " + upcoming[v]['session'] + "</p>"; }
				c++;
			}
		}
		div = div + "</div>";
		upcoming_dump = upcoming_dump + div;
	}
	$(".this-week").html(upcoming_dump);
};
