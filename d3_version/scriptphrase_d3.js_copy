$(document).ready(function () {
	$('#phrase-lookup').submit(function(e){
		e.preventDefault();

var query_params = { apikey: 'a059153222414415a40f0b667f0b57ed',
                   phrase: $('#txt-phrase').val(),
			start_date: $('#txt-startdate').val(),
            end_date: $('#txt-enddate').val()
};

var endpoint = "http://capitolwords.org/api/phrases/party.json?callback=?";

var options = {
  data: query_params,
  type: 'GET',
  dataType: 'jsonp'      
};

var request = jQuery.ajax(endpoint, options).done(showResponse, showResponse1, showResponse2);

function showResponse1 (response) {
	console.log(response);

};

// experiment with localStorage - not essential functionality
function showResponse2 (response) {
localStorage.setItem('response', JSON.stringify(response));
};

});
});