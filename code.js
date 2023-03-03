// CONSTANTS OR SETTINGS DECLARATIONS

const google = "http://www.google.com/search?q=";

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

function option_newtab() {

let element = document.getElementById("newtab");

	if (element.checked) {
		NEWTAB = true;
	}
	else {
		NEWTAB = false;
	}
	let name = element.getAttribute("name"); 
	console.log("checkbox : ", name ," status is : ", element.checked);
	cache("newtab", NEWTAB);
}


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
//	"Main" function
//

window.onload = function() {

	sync_to_page(NEWTAB, "newtab");
	console.log("OnLoadFunction: [Loaded]");


}