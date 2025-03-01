// Motorsport Events 2019-2025
// Author: Rui Pedro Moreira
// github.com/rpdorm/motorsport-events

var now = Math.floor(Date.now()/1000);
var start = moment.unix(now).startOf('day');
var end = moment.unix(now).endOf('day');

nWeeks = 52; // show next 52 weeks by default
upcoming = now+691200*nWeeks;
nSeries = 0;
nSessions = 0;
nEvents = 0;
nLive = 0;

for (i=0; i<Object.keys(series).length; i++) {
	events = series[i].events;
	nSeries++;
	plotmenu = false;
	imgtitle = series[i].name;
	for (j=0; j<Object.keys(events).length; j++) {
		t=Object.keys(series[i].events[j].sessions).length-1;
		timestamp = series[i].events[j].sessions[t].timestamp+series[i].events[j].sessions[t].length;
		shatimestamp = sha256(`sha' ${series[i].name}-${series[i].events[j].name}-${timestamp}`);
		if (timestamp >= now && timestamp <= upcoming) {
			name = series[i].events[j].name;
			venue = venues[series[i].events[j].venue];
			url = venue.url;
			flag = venue.flag;
			target = '_blank';
			if ( url == false) {
				url = '#';
				target = '_self';
			}
			if (flag != false) { flagdump = `<a class='venue' href='${url}' target='${target}'><img class='img-flag' src='assets/png/flags/${flag}.png'>${venue.name}</a>`; }
			else { flagdump = ''; }
			sessions = series[i].events[j].sessions;
			$('.event-list-grid').append(`<article id='${sessions[Object.keys(sessions).length-1].timestamp}' class='${shatimestamp} ${series[i].symbol} sortme'><div class='header' id='${shatimestamp}'><h6><img class='img-top' title='${imgtitle}' src='assets/png/series/${series[i].symbol}.png'></h6><h5 class='title'>${name}</h5>${flagdump}</div></article>`);
			nEvents++;
			sha = sha256(`${timestamp}-${series[i].name}-${i}-${name}-${venue.name}`);
			$('.' + shatimestamp).append(`<ul class='list-group list-group-flush' id='${sha}'>`);
			numberOfSessions=Object.keys(sessions).length;
			for (k=0; k<numberOfSessions; k++) {
				timediv = '';
				liveicon = '';
				session = series[i].events[j].sessions[k].name;
				session_symbol = series[i].events[j].sessions[k].symbol;
				length = series[i].events[j].sessions[k].length;
				livestream = series[i].events[j].sessions[k].live;
				if (livestream != false) { liveicon = `<a class='livestream' target='_blank' href='${livestream}' title='Watch Live'><img class='img-yt' src='assets/png/icons/youtube.svg'></a>`; }
				sessionTimeUnix=Math.floor(series[i].events[j].sessions[k].timestamp*1000);
				sessionTime = moment(sessionTimeUnix).format('HH:mm');
				sessionDate = moment(sessionTimeUnix).format('ddd, MMM Do');
				year = moment(sessionTimeUnix).format('YYYY');
				if (sessionTimeUnix/1000+length >= now) {
					del = false;
					if (sessionTimeUnix/1000 <= now) {
						green = " class='green' style='color:green'";
						$('.showLive').show();
						$('div.live').append(`<p>${series[i].symbol} • ${name} • ${session_symbol}</p>`);
					}
					else { green = ''; }
					nSessions++;
				}
				else {
					del = true;
					green = '';
					liveicon = '';
				}
				// TODAY
				if (sessionTimeUnix/1000 > start.unix() && sessionTimeUnix/1000 > now && sessionTimeUnix/1000 <= end.unix()) {
					$('.showToday').show();
					$('.today').append(`<p>${sessionTime} • ${series[i].symbol} • ${name} • ${session_symbol}</p>`);
				}
				// TOMORROW
				if (sessionTimeUnix/1000 >= start.unix()+86400 && sessionTimeUnix/1000 <= end.unix()+86400) {
					$('.showTomorrow').show();
					$('.tomorrow').append(`<p>${sessionTime} • ${series[i].symbol} • ${name} • ${session_symbol}</p>`);
				}
				if (session == 'TBA') { sessionTime = ''; session = 'full schedule yet to be announced'; }
				if (del == false) {
					timediv= `<p class='subtitle text-muted'><small>${sessionDate} ${sessionTime}</small></p>`;
					$('#' + sha).append(`<li class='list-group-item'>${timediv}<h6${green} class='session'>${session}${liveicon}</h6></li>`);
					plotmenu = true;
				}
				
			}
			$('.' + shatimestamp).append('</ul>');
		}
	}
	if (plotmenu == true) {
		$('.filter').append(`<button type="button" id='${series[i].symbol}' class="btn btn-outline-light btn-sm" aria-pressed="false">${series[i].name}</button>`);
	}
}


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

	// SORT FUNCTION
	function sort(selector) {
	    $(selector).children('p').sort(function(a, b) {
	        var upA = $(a).text().toUpperCase();
	        var upB = $(b).text().toUpperCase();
	        return (upA < upB) ? -1 : (upA > upB) ? 1 : 0;
	    }).appendTo(selector);
	}
	// SORT Live
	sort('.live');
	// SORT Today
	sort('.today');
	// SORT TOMORROW
	sort('.tomorrow');

	// FILTER CLICK
	$('button').click(function() {
		if ($(this).attr('id') == 'show-all') {
			$('article').show();
			$('button').removeClass('btn-light');
			$('button').addClass('btn-outline-light');
			$(this).removeClass('btn-outline-light');
			$(this).addClass('btn-light');
		}
		else {
			$('article').hide();
			$('article.' + $(this).attr('id')).show();
			$('a.active').removeClass('active');
			$('button').removeClass('btn-light');
			$('button').addClass('btn-outline-light');
			$(this).removeClass('btn-outline-light');
			$(this).addClass('btn-light');
		}
	});
});