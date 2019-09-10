/*\
created: 20190214160253135
title: $:/plugins/kookma/commander/snr/macros/regexpsub.js
type: application/javascript
modified: 20190728184415338
module-type: macro
description: Developed by Mark S

Make regular expression substitutions

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.name = "regexpsub";

exports.params = [
	{name: "searchValue"},
	{name: "replaceValue"},
	{name: "sourceText"},
	{name: "flags"},
    {name: "wholeWords"}
];

/*
Run the macro
*/
exports.run = function(searchValue, replaceValue, sourceText, flags = "gi", wholeWords = "characters") {
  
  try {
  
	var searchText;
    if(wholeWords.toLowerCase() === 'words'){
    searchText = "\\b" + searchValue + "\\b";
    } else{
    searchText = searchValue;
    }
    searchText = new RegExp(searchText, flags);

	
	return sourceText.replace(searchText,replaceValue);

  } 
  catch(err) { 
    return "ERROR IN REG EXPRESSION. YOU MAY NEED TO ESCAPE VALUES"; 
  }
  
  };

})();
