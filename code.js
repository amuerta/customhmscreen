// ##
// ##  CONSTANTS OR SETTINGS DECLARATIONS
// ##


// basic url links
const google = "http://www.google.com/search?q=";
const discord = "https://discord.com/channels/@me";
const github = "https://github.com";
const pinterest = "https://www.pinterest.com";
const yt = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

// constant element Anchors
const quickl = document.getElementById("ql");

//defaults 

var NEWTAB = false;
var USEICONS = true;
var USEPINTEREST = true;
var USEDISCORD = false;
var USEYOUTUBE = true;
var USEGITHUB = true;
var USEUNDECL = true;

// will be overwritten if cached in browser

NEWTAB = localStorage.getItem("newtab");
USEICONS = localStorage.getItem("linkicon");

function ret(name, value) { // this is 69iq solution, idc
	switch (name) { //
		case "NEWTAB": 
			if (value==true) {
			NEWTAB = true;
			}else {
			NEWTAB = false;
			}
			console.log("applied : ", NEWTAB );
			cache("newtab", NEWTAB);
		break;
		


		case "USEICONS":
			console.log("[USEICONS]")
			if (value==true) {
			USEICONS = true;
			}else {
			USEICONS = false;
			}
			console.log("applied : ", USEICONS );
			cache("linkicon", USEICONS);
		break;



		case "USEDISCORD":
			//
			if (value==true) {
			USEDISCORD = true;
			}else {
			USEDISCORD = false;
			}
			console.log("applied : ", NEWTAB );
		break;


		case "USEPINTEREST":
			//
			if (value==true) {
			USEPINTEREST = true;
			}else {
			USEPINTEREST = false;
			}
			console.log("applied : ", NEWTAB );
		break;



		case "USEGITHUB":
			//
			if (value==true) {
			USEDISCORD = true;
			}else {
			USEDISCORD = false;
			}
			console.log("applied : ", NEWTAB );
		break;


		default: console.log("ERR"); break;
	}
}

//
// FRONTEND JOBS
//


function submit(NEWTAB) {
	let search = document.getElementsByName('search')[0].value;	
	console.log(search);

	let otype;

	if (NEWTAB == true) {
		otype = '_blank';
	}
	else {
		otype = '_self'
	}

	let prompt = google + search;
	window.open(prompt, otype); 
}

function lookforenter(e) {
	let key = e.keyCode || e.which; 

	if (key == 13) {
		submit(NEWTAB);
	}
}

///

function opensettings() {
	let settmenu = document.getElementById("settingsmenu");
	//settmenu.classList.add('settings-active');
	settmenu.focus();
	if (settmenu == document.activeElement) {
		console.log("focused");
	}
	
}

// cache 

function cache(TargetName, TargetValue) {
	localStorage.setItem(TargetName, TargetValue);
}








//
//	Options block
//

function option_checkbox(elementID, optname) {

let element = document.getElementById(elementID);

	if (element.checked) {
		ret(optname, true); // i automated it bruh
	}
	else {
		ret(optname, false);
	}
	let name = element.getAttribute("name"); 
	console.log("checkbox : ", name ," status is : ", element.checked);
	
}




//

function sync_to_page(bool, elementId) {
	let element = document.getElementById(elementId);

	console.log("TEST LOG OF AN ELEMENT : ", element, "\n STATUS : ", bool);

	if(bool=="true") { // WHAT!????? , WTF!?????
		element.checked = true;
		console.log("1");
	} 
	else  {
		element.checked = false;
		console.log("2");
	}
	console.log("Status after iflogic : ", element.checked );
	// honestly i will never use plain JS again, its just out of this fucking world...
	// TypeScript SHOUD be 99999x times more relaible than ... bool == "true"
}






//
//	Create elements
//
function remove_icon(elementId) { // A.K.A icon name
	let element = document.getElementById(elementId);
	element.remove();
}

function create_icon(link, icon) {
	
	let ficon = "fa-"+icon;

	let element = document.createElement("a");
	element.href = link;
	//element.height = "4vh";
	//element.widht = "4vh";  obsolete
	element.classList.add("default-icon-set");
	element.classList.add("fa-brands");
	element.classList.add(ficon);
	element.setAttribute("id", icon);
	quickl.appendChild(element);
}

// i got rid of boilerplate Ctrl+C // Ctrl + V code 


function enable_icons() {
	create_icon(discord, "discord");
	create_icon(github, "github");
	create_icon(pinterest, "pinterest");
	create_icon(yt, "youtube");
}

function disable_icons() {
	remove_icon("discord");
	remove_icon("github");
	remove_icon("pinterest");
	remove_icon("youtube");
}

//
//	"Main" function
//

window.onload = function() {

	sync_to_page(NEWTAB, "newtab");
	sync_to_page(USEICONS, "linkicon");
	console.log("OnLoadFunction: [Loaded]");

	if(USEICONS == "true") {
		enable_icons();
	}else{
		disable_icons();
	}
}