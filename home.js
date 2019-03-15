now = moment();
today = moment().isoWeekday;

last_monday = monday = moment().add(0, 'weeks').isoWeekday(1);
next_monday = moment(monday).add(1, 'weeks').isoWeekday(1);
upcoming = new Array();
upcoming_unique = new Array();
upcoming_dump = "";

x=0;
// GET EVENTS
for (i=0; i<Object.keys(event).length; i++) {
	timestamp = event[i].time
	start_time = event[i].time*1000;
	length = event[i].length;
	end_time = Math.abs(start_time+length*1000);
	// THIS WEEK
	// SELECT ONLY UPCOMING EVENTS
	if (start_time >= last_monday && next_monday >= start_time) {
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
		upcoming[x]['start'] = start_time;
		upcoming[x]['end'] = end_time;
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



//upcoming.length = target;
this_week();
function this_week() {
	for (t=0; t<upcoming_unique.length; t++) {
		div_class = upcoming_unique[t];
		div = "<div class='event_group col-3 " + div_class + "'>";
		c=0;
		for (v=0; v<upcoming.length; v++) {
			if (upcoming[v]['unique_event'] == upcoming_unique[t]) {
				if (upcoming[v]['start'] < now && upcoming[v]['end'] > now) { item_class = "now_live"; }
				else if (upcoming[v]['timestamp']*1000 > now) {item_class = "future"; }
				else { item_class = "past"; }
				if (c==0) { div = div + "<img class='img' title='" + upcoming[v]['series'] + "' src='assets/png/"+upcoming[v]['symbol']+".png'><p class='details'>" + upcoming[v]['name'] + "</p><p class='details circuit'>" + upcoming[v]['circuit'] + "</p><p class='item " + item_class + "'> • " + upcoming[v]['session'] + " (" + upcoming[v]['from'] + ")</p>"; }
				else { div = div + "<p class='item " + item_class + "'> • " + upcoming[v]['session'] + " (" + upcoming[v]['from'] + ")</p>"; }
				c++;
			}
		}
		div = div + "</div>";
		upcoming_dump = upcoming_dump + div;
	}
	$(".this-week").html("<h4 class='week'>This Week</h4>" + upcoming_dump);
};
