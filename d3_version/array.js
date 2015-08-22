var myArray = [{count: 190, party: "R"}, {count: 147, party: "Republican"}, {count: 130, party: "D"}, {count: 100, party: "Democrat"}, {count: 4, party: "ID"}];

function convertParty(item){
	
	if (item.party == "R" || item.party == "Republican") {
		item.party = "Republican";
	} else if (item.party == "D" || item.party == "Democrat") {
		item.party = "Democrat";
	} else {
		item.party = "Independent";
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

var data = [];
data.push(democrat, republican);

