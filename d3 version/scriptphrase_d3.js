$(document).ready(function () {

// function processData(data) {
//   var myData = [];

//   var myDates = [];
//   var results = [];
//   // var medTemps = ['Median Temperature'];
//   // var meanPress = ['Mean Pressure'];
//   // var medPress = ['Median Pressure'];
//   // var meanSpeeds = ['Mean Speed'];
//   // var medSpeeds = ['Median Speed'];

//   for (var key in data) {
//     if (data.hasOwnProperty(key)) {
//         results.push(data[0]);
//         results.push(data[1]);
//         // meanPress.push(getMean(data[key].p));
//         // medPress.push(getMedian(data[key].p));
//         // meanSpeeds.push(getMean(data[key].s));
//         // medSpeeds.push(getMedian(data[key].s));
//     } // hasOwnProperty
//   } // for key in data

//   myData.push(results);
//   return myData;
// } // Process Data

function processData(data) {
	var myData = [];

	for (var key in data) {
	   if (data.hasOwnProperty(key)) {
	   	myData.push(data[key]);
	   }
	}

	return myData;
};

function crunchData(data) {
	for (var i = 0; i < data.length; i++) {
  	var current = data[i];
  	// console.log(current);
  	return current;
  }
};


function smashData(data) {
	var partyResult = [];
	var countResult = [];
	for (var i = 0; i < data.length; i++) {
  	var count = data[i].count;
  	var party = data[i].party;
  	console.log(count);
  	console.log(party);
  	// return count;
  	// return party;
  	partyResult.push(party);
  	countResult.push(count);
  }
  console.log(partyResult);
  console.log(countResult);
  return countResult;
};

// BEGIN D3

function generateChart(data) {


      var width = 960,
          height = 500,
          radius = Math.min(width, height) / 2;

      var color = d3.scale.category10();
          // .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

      var arc = d3.svg.arc()
          .outerRadius(radius - 10)
          .innerRadius(radius - 70);

      var pie = d3.layout.pie()
          .sort(null)
          .value(function(d) { return d; });

      var svg = d3.select("body").append("svg")
          .attr("width", width)
          .attr("height", height)
        .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      var g = svg.selectAll(".arc")
          .data(pie(data))
        .enter().append("g")
          .attr("class", "arc");
console.log(pie(data));
      g.append("path")
          .attr("d", arc)
          .style("fill", function(d) {console.log(d); return color(d.value); });

      // g.append("text")
      //     .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      //     .attr("dy", ".35em")
      //     .style("text-anchor", "middle")
      //     .text(function(d) { return d; });

// END D3

}

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

var request = jQuery.ajax(endpoint, options).done(showResponse, showResponse1, showResponse2, showResponse3, showResponse4, showResponse5, showResponse6);

function showResponse1 (response) {
	console.log(response);

};

// experiment with localStorage - not essential functionality
function showResponse2 (response) {
localStorage.setItem('response', JSON.stringify(response));
};

function showResponse3(response) {
      var processed = processData(response);
      console.log(processed);
      return processed;
};

function showResponse4(response) {
	var crunch = crunchData(processData(response));
	console.log(crunch);
	return crunch;
};

function showResponse5(response) {
	var dataset = smashData(crunchData(processData(response)));
	return dataset;
};

function showResponse6(response) {
  var pieGenerated = generateChart(smashData(crunchData(processData(response))));
};

});
});