"use strict";

function openSenseMapAPIClient ()
{
    var self = this;
    self._get = function (url, callback)
    {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function ()
        {
            if (this.readyState == 4 && this.status == 200)
                callback(JSON.parse(this.responseText));
        };

        xhr.open("GET", url, true);
        xhr.send();
    }

    self.getBox = function (senseBoxID, callback)
    {
        // https://api.opensensemap.org/boxes/59be7e67d67eb50011d72f40
        self._get("https://api.opensensemap.org/boxes/" + senseBoxID, callback);
    }
}
