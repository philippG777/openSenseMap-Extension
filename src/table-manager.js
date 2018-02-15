
function TableManager (table)
{
	var self = this;
	self.table = table;

	self._createTableElement = function (text, align)
	{
		var element = document.createElement("TD");
		var textNode = document.createTextNode(text);
		element.appendChild(textNode);
		if (align == "right")
			element.className = "txt-right";
		return element;
	};

	self._createTableHeader = function (text, align)
	{
		var element = document.createElement("TH");
		var textNode = document.createTextNode(text);
		element.appendChild(textNode);
		if (align == "right")
			element.className = "txt-right";
		return element;
	};

	self._createHeader = function ()
	{
		var row = document.createElement("TR");
		row.appendChild(self._createTableHeader("Metric"));
		row.appendChild(self._createTableHeader("Sensor"));
		var lastMeasurement = self._createTableHeader("last Measurement");
		lastMeasurement.setAttribute("colspan", "2");
		row.appendChild(lastMeasurement);
		return row;
	};

	self.clearTable = function ()
	{
		self.table.innerHTML = "";
	};

	self.fillTable = function (data)
	{
		self.clearTable();
		self.table.appendChild(self._createHeader());
		data.sensors.forEach(function (sensor)
		{
			var row = document.createElement("TR");
			row.appendChild(self._createTableElement(sensor.title));
			row.appendChild(self._createTableElement(sensor.sensorType));
			row.appendChild(self._createTableElement(sensor.lastMeasurement.value, "right"));
			row.appendChild(self._createTableElement(sensor.unit));
			
			self.table.appendChild(row);
		});
	};
}


