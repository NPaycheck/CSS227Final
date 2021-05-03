var tableElem = document.createElement("table");
var trElem1 = document.createElement("tr");
var trElem2 = document.createElement("tr");
var trElem3 = document.createElement("tr");
var tdElem1 = document.createElement("td");
var tdElem2 = document.createElement("td");
var tdElem3 = document.createElement("td");
var tdElem4 = document.createElement("td");
var tdElem5 = document.createElement("td");
var tdElem6 = document.createElement("td");
var tdElem7 = document.createElement("td");
var tdElem8 = document.createElement("td");
var tdElem9 = document.createElement("td");
var textNodeA1 = document.createTextNode("Car");
var textNodeA2 = document.createTextNode("Top Speed");
var textNodeA3 = document.createTextNode("Price");
var textNodeB1 = document.createTextNode("Chevrolet");
var textNodeB2 = document.createTextNode("120mph");
var textNodeB3 = document.createTextNode("$10,000");
var textNodeC1 = document.createTextNode("Pontiac");
var textNodeC2 = document.createTextNode("140mph");
var textNodeC3 = document.createTextNode("$14,000");

var docNav = document.body;

docNav.appendChild(tableElem);
docNav = docNav.lastChild;

docNav.appendChild(trElem1);
docNav = docNav.firstChild;
docNav.appendChild(tdElem1);
docNav.appendChild(tdElem2);
docNav.appendChild(tdElem3);
docNav = docNav.firstChild;
docNav.appendChild(textNodeA1);
docNav = docNav.nextSibling;
docNav.appendChild(textNodeA2);
docNav = docNav.nextSibling;
docNav.appendChild(textNodeA3);
docNav = docNav.parentNode;
docNav = docNav.parentNode;

docNav.appendChild(trElem2);
docNav = docNav.lastChild;
docNav.appendChild(tdElem4);
docNav.appendChild(tdElem5);
docNav.appendChild(tdElem6);
docNav = docNav.firstChild;
docNav.appendChild(textNodeB1);
docNav = docNav.nextSibling;
docNav.appendChild(textNodeB2);
docNav = docNav.nextSibling;
docNav.appendChild(textNodeB3);
docNav = docNav.parentNode;
docNav = docNav.parentNode;

docNav.appendChild(trElem3);
docNav = docNav.lastChild;
docNav.appendChild(tdElem7);
docNav.appendChild(tdElem8);
docNav.appendChild(tdElem9);
docNav = docNav.firstChild;
docNav.appendChild(textNodeC1);
docNav = docNav.nextSibling;
docNav.appendChild(textNodeC2);
docNav = docNav.nextSibling;
docNav.appendChild(textNodeC3);
docNav = docNav.parentNode;
docNav = docNav.parentNode;

trElem1.style.fontStyle = "italic";
trElem1.style.textDecoration = "underline";

tdElem7.setAttribute("align", "center");
tdElem1.setAttribute("align", "center");