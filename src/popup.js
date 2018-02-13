"use strict";

var api = new openSenseMapAPIClient();
var senseBoxID = "59be7e67d67eb50011d72f40";

api.getBox(senseBoxID, displayData);


function createTableElement (text, align)
{
	var element = document.createElement("TD");
	var textNode = document.createTextNode(text);
	element.appendChild(textNode);
	if (align == "center")
		element.className = "txt-center";
	else if (align == "right")
		element.className = "txt-right";
	return element;
}




function displayData(data)
{
	console.log(data);
	document.getElementById("sb_title").innerHTML = data.name;
	var table = document.getElementById("sb_table")

	data.sensors.forEach(function (sensor)
	{
		var row = document.createElement("TR");
		row.appendChild(createTableElement("hello", "center"));
		
		table.appendChild(row);
	});
}
