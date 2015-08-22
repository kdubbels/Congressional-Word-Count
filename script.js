/*var query_params = { apikey: 'a059153222414415a40f0b667f0b57ed',
                     phrase: 'class warfare',
                     start_date: '2008-09-16',
                     end_date: '2011-09-17'
                   };

*/

var query_params = { apikey: 'a059153222414415a40f0b667f0b57ed',
                     phrase: 'class warfare',
                     start_date: '2008-09-16',
                     end_date: '2011-09-17'
                   }, function(data){
                   	console.log(data);
                   });

var endpoint = 'http://capitolwords.org/api/phrases/party.json';
 
var options = {
  data: query_params,
  type: 'GET',
  dataType: 'jsonp'      
};

$.getJSON(endpoint, options)




/*
var request = jQuery.ajax(endpoint, options)
                    .done(showResponse);
*/