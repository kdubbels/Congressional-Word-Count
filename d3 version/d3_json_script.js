var query_params = { apikey: 'a059153222414415a40f0b667f0b57ed',
                     phrase: $('#txt-phrase').val(),
			start_date: $('#txt-startdate').val(),
            end_date: $('#txt-enddate').val()
                   };

var endpoint = 'http://capitolwords.org/api/phrases/party.json?callback=?';
 
var options = {
  data: query_params,
  type: 'GET',
  dataType: 'jsonp'      
};

d3.json(endpoint){

    // create the chart here with
    // the returned data

    console.log(jsondata);

    var data = jsondata.map(function(d) { return d.Value; });
    console.log(data);

  };