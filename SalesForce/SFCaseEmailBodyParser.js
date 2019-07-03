// ==UserScript==
// @name         SFCaseEmailBodyParser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://openx.my.salesforce.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  var desc = document.getElementById('TextBody_ileinner').firstChild.innerHTML,
    //lines = desc.split("<br>"),
    lines = desc.split("wrote:"),
    msgs = [];

  for (var i = 0, len = lines.length; i < len; i++) {
    lines[i] = lines[i].replace(/(&gt;)+/g, '');
    lines[i] = lines[i].replace(/On [a-zA-Z]{3},.*/g, '');
  }

  var j;
  for (j = 0, i = lines.length; i > 0; i--, j++) {
    msgs[j] = lines[i];
  }

  document.getElementById('TextBody_ileinner').firstChild.innerHTML = msgs.join('<hr>');
})();
