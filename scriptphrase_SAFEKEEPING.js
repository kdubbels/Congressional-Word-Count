var query_params = { apikey: 'f6ab5f2e4f69444b9f2c0a44d9a5223d',
                   phrase:"class warfare",
                   sort:"count desc"
};

var endpoint = "http://capitolwords.org/api/phrases/party.json";

var options = {
  data: query_params,
  type: 'GET',
  dataType: 'jsonp'      
};

var request = jQuery.ajax(endpoint, options).done(showResponse);
var request = jQuery.ajax(endpoint, options).done(assign);

function assign(response) {
        greedy_state = response.results[0].state;

}

var endpoint = "phrases/state.json";