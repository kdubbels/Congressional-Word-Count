$(document).ready(function () {
	$('#phrase-lookup').submit(function(e){
		e.preventDefault();

var query_params = { apikey: 'a059153222414415a40f0b667f0b57ed',
                   phrase: $('#txt-phrase').val(),
			start_date: '2008-09-16',
            end_date: '2011-09-17'
};

var endpoint = "http://capitolwords.org/api/phrases/party.json?callback=?";

var options = {
  data: query_params,
  type: 'GET',
  dataType: 'jsonp'      
};

var request = jQuery.ajax(endpoint, options).done(showResponse);


});
});