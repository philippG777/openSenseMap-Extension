"use strict";

var api = new openSenseMapAPIClient();
var tm = new TableManager(document.getElementById("sb_table"));
var senseBoxID = "59be7e67d67eb50011d72f40";

// console.log(window.location.pathname
browser.tabs.query({active: true, currentWindow: true},function (tabs)
{
	var url = tabs[0].url;
	if(/ *opensensemap.org\/explore\/*/g.test(url))	// check url
	{
		pg.addCloseAction(pg.showPopup("popup_select_this_sb"));
		var id = url.split("/")[4];
		console.log(id);
	}
});

api.getBox(senseBoxID, function displayData(data)
{
	console.log(data);
	document.getElementById("sb_title").innerHTML = data.name;
	tm.fillTable(data)
});
