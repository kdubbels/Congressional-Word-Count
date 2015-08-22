var array = [{count: 147, party: "R"}, {count: 147, party: "Republican"}, {count: 130, party: "D"}, count: 100, party: "Democrat"}, {count: 4, party: "ID"}];

function convertParty(item){
	
	if (item.party == "R" || item.party == "Republican") {
		item.party = "Republican";
	} else if (item.party == "D" || item.party == "Democrat") {
		item.party = "Democrat";
	} else {
		item.party = "Independent";
	}

};

array.forEach(convertParty);