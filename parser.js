now = /*1470691925;*/moment();
total_time = 0;
next = [];
previous = [];
uniqueEvents = [];
uniqueSeries = [];

$(".event-table").html("<table class='table table-fixed table-sm'><thead class='thead-dark'><tr><th id='start' style='display:none'></th><th scope='col'>Starting</th><th class='text-center' scope='col'>Series</th><th scope='col'>Round</th><th scope='col'>Event</th><th scope='col'>Session</th><th scope='col'>Circuit</th><th scope='col'>Duration</th></tr></thead><tbody id='dump'></tbody></table>");

function dump() {
	if (symbol != "-") {
		$("#dump").append("<tr class='"+symbol+" "+tag+"'><td style='display:none'>"+timestamp+"</td><td title='"+time+"'>"+from+"</td><td class='text-center' title='"+series+"'><img class='logo' src='assets/png/"+symbol+".png'></td><td title='Round "+round+"'>"+round+"</td><td>"+name+"</td><td>"+session+"</td><td title='"+local+"'>"+circuit+"</td><td>"+duration+"</td></tr>");
	} else {
		$("#dump").append("<tr class='"+symbol+" "+tag+"'><td style='display:none'>"+timestamp+"</td><td title='"+time+"'>"+from+"</td><td title='"+series+"'></td><td title='Round "+round+"'>"+round+"</td><td>"+name+"</td><td>"+session+"</td><td title='"+local+"'>"+circuit+"</td><td>"+duration+"</td></tr>");
	}
}




for (i=0; i<Object.keys(event).length; i++) {
	
	
	round = event[i].round;
	local = event[i].location;
	session=event[i].session;
	timestamp = event[i].time
	start_time = event[i].time*1000;
	year = moment(start_time).format('YYYY');
	series = event[i].series;
	symbol = event[i].symbol;
	name=event[i].name;
	unique_event=symbol+"-"+year+"-"+name.replace(/\s+/g, '-');
	unique_tag=symbol+"-"+year+"-"+round+"-"+name.replace(/\s+/g, '-')+"-"+session.replace(/\s+/g, '-');
	tag=sha256(unique_tag);
	if (uniqueEvents.includes(unique_event)==false) { uniqueEvents.push(unique_event); }
	if (uniqueSeries.includes(symbol)==false) { uniqueSeries.push(symbol); }
	time = moment(start_time).format('ddd MMM Do YYYY h:mm a');
	time_hours =  moment(start_time).format('h:mm a');
	from = moment(start_time).fromNow();
	laps = event[i].laps;
	
	circuit = event[i].circuit;
	
	
	length = event[i].length;
	
	if (laps == false) {
		end_time = Math.abs(start_time+length*1000);
		if (length <= 7200) { duration = moment.duration(length, "seconds").asMinutes()+"'"; }
		else { duration = moment.duration(length, "seconds").asHours()+"h"; }
	}
	else {
		end_time = Math.abs(start_time+length*1000);
		if (laps == "TBD") { duration = laps; }
		else if (laps == "45' + 1") { duration = laps+" Lap"; }
		else { duration = laps+" Laps"; }
	}
		total_time=total_time+length;
	if (start_time < now && end_time > now) {
		from="<b>NOW ON</b>";
		diff="<b>NOW ON</b>";

		nextEvents();
		dump();
		$("."+tag).addClass("table-success");
	}
	else if (start_time > now) {
		diff=Math.abs(start_time-now);
		if (diff < 43200000) { from=time_hours; }
		nextEvents();
		dump();
	}
	if (session == "Race *") {
		$("."+tag).addClass("table-secondary");	
	}
}

sort();
//*console.log(next);
//*console.log(uniqueEvents);
//*console.log(uniqueSeries);
total_time=parseInt(moment.duration(total_time, "seconds").asHours());
console.log(uniqueEvents.length+" events and over "+total_time+" hours of motorsport events.");

uniqueSeries.sort();
for (j=0; j<uniqueSeries.length; j++) {
	$("#event-table-filter-by-series").append(
		"<div class='checkbox'><label><input type='checkbox' value='"+uniqueSeries[j]+"' checked> <strong>"+uniqueSeries[j]+"</strong></label></div>"
	);
}
	
function nextEvents() {
	next.push(
			{
				diff,
				name,
				start_time,
				end_time
			}
		);
}

function sort() {
	table = $("#dump");
	$("#start")
		.wrapInner('<span title="sort this column"/>')
        .each(function(){
            
            var th = $(this),
                thIndex = th.index(),
                inverse = false;
            
            th.click(function(){
                
                table.find('td').filter(function(){
                    
                    return $(this).index() === thIndex;
                    
                }).sortElements(function(a, b){
                    
                    return $.text([a]) > $.text([b]) ?
                        inverse ? -1 : 1
                        : inverse ? 1 : -1;
                    
                }, function(){
                    
                    // parentNode is the element we want to move
                    return this.parentNode; 
                    
                });
                
                inverse = !inverse;
                    
            });
                
        });
        $("#start").click();
}