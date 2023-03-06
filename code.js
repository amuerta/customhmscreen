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
// defaults
var CUSTOMETITILE = false;
var NEWTAB = false;
var USEICONS = true;
var USEPINTEREST = true;
var USEDISCORD = true;
var USEYOUTUBE = true;
var USEGITHUB = true;
var USEUNDECL = false;
var INUSE = false;
var USESHADOW = false;
var USEOUTLINE = false;

var defaulttext = document.createTextNode("Search bar");
var usertext = "Search bar";

// will be overwritten if cached in browser

NEWTAB = localStorage.getItem("newtab");
USEICONS = localStorage.getItem("linkicon");
USEDISCORD = localStorage.getItem("useds");
USEPINTEREST = localStorage.getItem("usepint");
USEGITHUB = localStorage.getItem("usegit");
USEYOUTUBE = localStorage.getItem("useyt");
USESHADOW = localStorage.getItem("useshadow");
CUSTOMETITILE = localStorage.getItem("custtitle");
USEOUTLINE = localStorage.getItem("useoutline");

usertext = localStorage.getItem("customtext");



if(usertext==null) {
usertext="Search bar";
console.log("YO BAD");
} else /* dont wanna "null" as name bruh*/ {
INUSE = true;
}





// dont ask about that please

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
		
		case "USEOUTLINE": 
			console.log("[USEOUTLINE]");
			if(value == true) {
				USEOUTLINE = true;
			} else {
				USEOUTLINE = false;
			}
			console.log("applied outline : ", USEOUTLINE );
			cache("useoutline", USEOUTLINE);
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

		case "USESHADOW": 
			if(value == true) {
				USESHADOW = true;
			} else {
				USESHADOW = false;
			}
			console.log("applied for shadow : ", USESHADOW);
			cache("useshadow", USESHADOW);
		break;

		case "USEDISCORD":
			//
			if (value==true) {
			USEDISCORD = true;
			}else {
			USEDISCORD = false;
			}
			console.log("applied : ", USEDISCORD );
			cache("useds", USEDISCORD);
		break;


		case "USEPINTEREST":
			//
			if (value==true) {
			USEPINTEREST = true;
			}else {
			USEPINTEREST = false;
			}
			console.log("applied : ", USEPINTEREST );
			cache("usepint", USEPINTEREST);
		break;



		case "USEGITHUB":
			//
			if (value==true) {
			USEGITHUB = true;
			}else {
			USEGITHUB = false;
			}
			console.log("applied : ", USEGITHUB );
			cache("usegit", USEGITHUB);
		break;

		case "USEYOUTUBE": 
			if (value==true) {
			USEYOUTUBE = true;
			}else {
			USEYOUTUBE = false;
			}
			console.log("applied : ", USEYOUTUBE);
			cache("useyt" , USEYOUTUBE);
		break;

		case "CUSTOMETITILE": 
			if (value==true) {
				CUSTOMETITILE = true;
			} else {
				CUSTOMETITILE = false
			}
			console.log("applied : ", CUSTOMETITILE );
			cache("custtitle", CUSTOMETITILE);
		break;

		default: console.log("[ERR] --> {Some bug must happned}"); break;
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
function submit_title(t) {
	let key = t.keyCode || t.which;

	if (key == 13) {
		let titlename = document.getElementsByName('username')[0].value;
		toggle_custtitle(CUSTOMETITILE,titlename);	
		console.log(titlename);
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
// UI stuff
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

function toggle_custtitle(state, usertext) {

	console.log("toggle func datatype: ", typeof state);
	let element = document.getElementById("TITLE");
	let text = document.createTextNode(usertext);
	let tohide = document.getElementById("username");
	console.log("typeof state: ", typeof state)
	if (state == "true") {
		element.innerHTML="";
		element.appendChild(text);
		tohide.classList.remove("dead");

	} else {
		element.innerHTML="";
		element.appendChild(defaulttext);
		tohide.classList.add("dead");
	}
	cache("customtext", usertext);
}

function toggle_shadow(arg) {
	let element = document.getElementById("sbox");
	if(arg == "true") {
		console.log("toggle shadow");
		element.classList.add("boxshadow");
	} else {
		console.log("untoggle shadow");
		element.classList.remove("boxshadow");
	}
}

function toggle_outline(arg) {
	let element = document.getElementById("sbox");
	if (arg == "true") {
		console.log("outline [+]");
		element.classList.add("boxoutline");
	} else {
		console.log("outline [-]");
		element.classList.remove("boxoutline");
	}
}

//


//
//	Create or manipulate elements
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


	let menu = document.getElementById("iconmenu");
	menu.classList.remove("dead");
		
	//enable_icon_checkboxes();

	if (USEDISCORD) {create_icon(discord, "discord");}
	if (USEGITHUB) {create_icon(github, "github");}
	if (USEPINTEREST) {create_icon(pinterest, "pinterest");}
	if (USEYOUTUBE) {create_icon(yt, "youtube");}

	if(USEDISCORD=="false") {remove_icon("discord");}
	if(USEGITHUB=="false") {remove_icon("github");}
	if(USEPINTEREST=="false") {remove_icon("pinterest");}
	if(USEYOUTUBE=="false") {remove_icon("youtube");}
}	// dont think i stupid or else, i just used to C++ and Rust and this abominmation is just too much for me...
	// i miss hated by everyone :sparkles <StaTic Typed> langiages :(

function disable_icons() {

	let menu = document.getElementById("iconmenu");
	menu.classList.add("dead");

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

	sync_to_page(USEDISCORD, "useds");
	sync_to_page(USEGITHUB, "usegit");
	sync_to_page(USEYOUTUBE, "useyt");
	sync_to_page(USEPINTEREST, "usepint");
	sync_to_page(CUSTOMETITILE, "custtitle");
	sync_to_page(USESHADOW, "useshadow");
	sync_to_page(USEOUTLINE, "useoutline");

	console.log("OnLoadFunction: [Loaded]");

	if(USEICONS == "true") {
		
		enable_icons();
	}else{
		disable_icons();
	}

	toggle_shadow(USESHADOW);
	toggle_outline(USEOUTLINE);

	if(USESHADOW == "true" && USEOUTLINE =="true") {
		let element = document.getElementById("sbox");
		element.classList.remove("boxshadow");
		element.classList.remove("boxoutline")
		element.classList.add("boxshadow_outline");
		element.classList.add("boxborder");
	}

	{
		let tohide = document.getElementById("username");
		if(CUSTOMETITILE == "true") {
			if(INUSE) {
				tohide.setAttribute("placeholder","Already exist");
			}
		toggle_custtitle("true", usertext);
		tohide.classList.remove("dead");
		}else {
		//console.log("its false")
		tohide.classList.add("dead");
		tohide.removeAttribute("placeholder");
		}
	}
}