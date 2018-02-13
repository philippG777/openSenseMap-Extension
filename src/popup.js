"use strict";

var api = new openSenseMapAPIClient();
var senseBoxID = "59be7e67d67eb50011d72f40";

api.getBox(senseBoxID, displayData);

pg.showPopup("popup_select_this_sb");

function createTableElement (text, align)
{
	var element = document.createElement("TD");
	var textNode = document.createTextNode(text);
	element.appendChild(textNode);
	if (align == "right")
		element.className = "txt-right";
	return element;
}

function createTableHeader (text, align)
{
	var element = document.createElement("TD");
	var textNode = document.createTextNode(text);
	element.appendChild(textNode);
	if (align == "right")
		element.className = "txt-right";
	return element;
}

function createHeader ()
{
	var row = document.createElement("TR");
	row.appendChild(createTableHeader("Metric"));
	row.appendChild(createTableHeader("Sensor"));
	var lastMeasurement = createTableHeader("last Measurement");
	lastMeasurement.setAttribute("colspan", "2");
	row.appendChild(lastMeasurement);
	return row;
}


function displayData(data)
{
	console.log(data);
	document.getElementById("sb_title").innerHTML = data.name;
	var table = document.getElementById("sb_table");
	table.appendChild(createHeader());

	data.sensors.forEach(function (sensor)
	{
		var row = document.createElement("TR");
		row.appendChild(createTableElement(sensor.title));
		row.appendChild(createTableElement(sensor.sensorType));
		row.appendChild(createTableElement(sensor.lastMeasurement.value, "right"));
		row.appendChild(createTableElement(sensor.unit));
		
		table.appendChild(row);
	});
}
