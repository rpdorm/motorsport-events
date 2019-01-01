function listen() {
	var search = $(".form-control")[0].value;
	$("tbody").find("tr").hide();
	$("tbody").find("tr:contains('"+search+"')").show();
	console.log(search);
}

$(function(){
	$(".filter" ).click(function() {
		var filter = $(".event-table-filter").attr('id');
		switch (filter) {
			case "event-table-filter-max":
				$(".event-table-filter").attr('id','event-table-filter-min');
				$(".event-table").attr('id','event-table-max');
			break;
			case "event-table-filter-min":
				$(".event-table-filter").attr('id','event-table-filter-max');
				$(".event-table").attr('id','event-table-min');
			break;
		}
	});
});

$(function(){
	$('input:checkbox').change(
    function(){
    	var value = $(this).val();
        if ($(this).is(':checked')) {
            $("tr."+value).show();
        }
        else {
        	$("tr."+value).hide();	
        }
    });
});