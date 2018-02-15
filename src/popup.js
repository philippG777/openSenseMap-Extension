"use strict";

function getSelectedSenseBoxID (callback)
{
	return browser.storage.local.get(function(res)
	{
		callback((res.senseBox != undefined)? res.senseBox.ID : undefined);
	});
}


function setSelectedSenseBoxID (sb_id)
{
	browser.storage.local.set({
		senseBox: {ID: sb_id}
	});
}

function showSBData (sb_id)
{
	var tm = new TableManager(document.getElementById("sb_table"));
	var api = new openSenseMapAPIClient();
	api.getBox(sb_id, function displayData(data)
	{
		document.getElementById("sb_title").innerHTML = data.name;
		tm.fillTable(data)
	});
}


getSelectedSenseBoxID(function (senseBoxID)
{
	browser.tabs.query({active: true, currentWindow: true},function (tabs)
	{
		var url = tabs[0].url;
		if(/https:\/\/opensensemap.org\/explore\/*/.test(url))	// check url
		{
			var id = url.split("/")[4];
			if (id != senseBoxID)
			{
				var popup = pg.showPopup("popup_select_sb");
				pg.addCloseAction(popup);
				document.getElementById("btn_select_sb").addEventListener("click", function(ev)
				{
					ev.stopPropagation();
					setSelectedSenseBoxID(id);	// set new sb on button click
					pg.hidePopup(popup);
					showSBData(id);
				});
			}
			else
			{
				pg.addCloseAction(pg.showPopup("popup_sb_already_selected"));
			}

			if (senseBoxID != undefined)
				showSBData(senseBoxID);
		}
		else if (senseBoxID == undefined)
		{
			pg.showPopup("popup_no_sb_selected");
			document.getElementById("btn_link_to_osm").addEventListener("click", function (ev)
			{
				window.open("https://opensensemap.org/","_blank");	// open in new tab
				window.close();	// close popup
			});
		}
		else
		{
			showSBData(senseBoxID);
		}
	});
});
