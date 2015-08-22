var key = "a059153222414415a40f0b667f0b57ed";
var phrase = "dogs";
var start_date = "9-17-2001";
var end_date = "09-08-2015";
var _ = 1440252448857;
var params = "apikey=" + key +  "&phrase="+ phrase + "&start_date=" + start_date + "&end_date=" + end_date + "&_=" + _;

var req = new XMLHttpRequest();
req.open("GET", "http://capitolwords.org/api/phrases/party.json?", true);
req.addEventListener("load", function() {
  console.log("Done:", req.status);
});
req.send(params);

// d3.json(endpoint){

//     // create the chart here with
//     // the returned data

//     console.log(jsondata);

//     var data = jsondata.map(function(d) { return d.Value; });
//     console.log(data);

  // };