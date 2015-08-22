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

var request = $.ajax(endpoint, options).done(showResponse, showResponse1, showResponse2);

function showResponse1 (response) {
  console.log(response);

};

function processData(data) {
	var myData = [];

	for (var key in data) {
	   if (data.hasOwnProperty(key)) {
	   	myData.push(data[key]);
	   }
	}
  console.log(myData);
	return myData;
};

function crunchData(data) {
	for (var i = 0; i < data.length; i++) {
  	var current = data[i];
  	console.log(current);
  	return current;
  }
};

// function countResult(data) {
// 	var countResult = [];
// 	for (var i = 0; i < data.length; i++) {
//   	var count = data[i].count;
//   	countResult.push(count);
//   }
//   console.log(countResult);
//   return countResult;
// };

// function partyResult(data) {
//   var partyResult = [];
//   for (var i = 0; i < data.length; i++) {
//     var count = data[i].count;
//     partyResult.push(count);
//   }
//   console.log (partyResult);
//   return partyResult;
// }


function generateChart(data) {
  console.log(data);

      var width = 960,
          height = 500,
          radius = Math.min(width, height) / 2;

      var color = d3.scale.category10()
           .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

      var arc = d3.svg.arc()
          .outerRadius(radius - 10)
          .innerRadius(radius - 70);

      var pie = d3.layout.pie()
          .sort(null)
          .value(function(d) { return d.count; });

      var svg = d3.selectAll("body").append("svg")
          .attr("width", width)
          .attr("height", height)
        .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      var g = svg.selectAll(".arc")
          .data(pie(data))
        .enter().append("g")
          .attr("class", "arc");
      
      g.append("path")
          .attr("d", arc)
          .style("fill", function(d) {console.log(d); return color(d.data.party); });

      g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .append("tspan")
        .text(function(d) { return d.data.party;})
        .append("tspan")
        // .attr("dy", "10px")
        .text(function(d) { return d.data.count; });
}


// END D3



// function showResponse3(response) {
//       var processed = processData(response);
//       console.log(processed);
//       return processed;
// };

// function showResponse4(response) {
// 	var crunch = crunchData(processData(response));
// 	console.log(crunch);
// 	return crunch;
// };

// function showResponse5(response) {
// 	var dataset = smashData(crunchData(processData(response)));
// 	return dataset;
// };

function showResponse2(response) {
  var pieGenerated = generateChart(crunchData(processData(response)));
};

});
});