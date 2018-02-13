/*! pg.css | BSD 3-Clause License | github.com/philippG777/pg.css */
"use strict";

var pg = {
    showPopup: function (id)
    {
        document.getElementById(id).className += " active";
    },

    hidePopup: function (element, ttl)
    {
        if (ttl == undefined)
            ttl = 5;    // max. 5 times recursion

        var classes = element.className.split(" ");
        var index = classes.indexOf("active");
        if(index != -1)
        {
            classes.splice(index, 1);
            element.className = classes.join(" ");
        }
        else
        {
            if (element.tagName == "BODY")  // popup has to bee in the body
            {
                return;
            }
            pg.hidePopup(element.parentElement, ttl - 1);
        }
    }
};