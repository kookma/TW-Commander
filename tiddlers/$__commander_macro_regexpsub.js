/*\
title: $:/commander/macro/regexpsub.js
type: application/javascript
module-type: macro

Make regular expression substitutions

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.name = "regexpsub";

exports.params = [
	{name: "regtext"},
	{name: "subtext"},
	{name: "text"}
];

/*
Run the macro
*/
exports.run = function(regtext, subtext, text) {
       var regexp = new RegExp(regtext, "gi") ;
       return text.replace(regexp,subtext) ;
};

})();
