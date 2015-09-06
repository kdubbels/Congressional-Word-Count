$(document).ready(function () {

$('#phrase-lookup').submit(function(e){
    e.preventDefault();

var query_params = {
apikey: 'a059153222414415a40f0b667f0b57ed',
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

var request = $.ajax(endpoint, options).done(showResponse1, showResponse2);

function showResponse1 (response) {
  console.log(response);
};
});
});

function showResponse2(response) {
console.log('foobar');
cleanData(response);
};


function cleanData(dataset){
console.log(dataset);

 myArray = dataset.results;

          function convertParty(item){
            
            if (item.party == "R" || item.party == "Republican") {
              item.party = "Republican";
            } else if (item.party == "D" || item.party == "Democrat") {
              item.party = "Democrat";
            } else if (item.party = "ID" || item.party == "Independent") {
              item.party = "Independent";
            } else {
              item.party = "N/A"
            }

          };

          myArray.forEach(convertParty);

          function republicans(item) {
            return item.party == "Republican";
          }

          //total up republicans
          var filterRepublicans = myArray.filter(republicans);

          var totalRepublicans=0;
          for (var i in filterRepublicans) { 
            totalRepublicans += filterRepublicans[i].count; 
          };

          var republican = {party: "Republicans", count: 0};
          republican.count = totalRepublicans;


          //total up democrats
          function democrats(item) {
            return item.party == "Democrat";
          };

          var filterDemocrats = myArray.filter(democrats);

          var totalDemocrats=0;
          for (var i in filterDemocrats) { 
            totalDemocrats += filterDemocrats[i].count; 
          };

          var democrat = {party: "Democrats", count: 0};
          democrat.count = totalDemocrats;

          //total up independents
          function independents(item) {
            return item.party == "Independent";
          };

          var filterIndependents = myArray.filter(independents);

          var totalIndependents=0;
          for (var i in filterIndependents) { 
            totalIndependents += filterIndependents[i].count; 
          };

          var independent = {party: "Independents", count: 0};
          independent.count = totalIndependents;

          ajaxData = [];
          ajaxData.push(democrat, republican, independent);
          console.log(ajaxData);
          return(ajaxData);

};


function drawChart(data){
var path = svg.datum(data).selectAll("path")
      .data(pie)
    .enter().append("path")
      .attr("fill", function(d, i) { return color(i); })
      .attr("d", arc)
      .each(function(d) { this._current = d; }); // store the initial angle


  function change() {
    var value = this.value;
    // clearTimeout(timeout);
    pie.value(function(d) { return d[value]; }); // change the value function
    path = path.data(pie); // compute the new angles
    path.transition().duration(750).attrTween("d", arcTween); // redraw the arcs
  }
};


function arcTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return arc(i(t));
  };
}