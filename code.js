const google = "http://www.google.com/search?q=";

var new_tab;






function lookfornewtab() {
let newtab = document.getElementById("newtab?");
var newtab_counter = 0;
 
	if (newtab== document.checked==true) {
		new_tab = true;
		console.log(new_tab);
		counter++;
	}

	else {
		new_tab = false;
		console.log(new_tab);
	}

}

	
//}






function submit(new_tab) {
	let search = document.getElementsByName('search')[0].value;	
	console.log(search);

	let otype;

	if (new_tab == true) {
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
		submit(new_tab);
	}
}

function opensettings() {
	let settmenu = document.getElementById("settingsmenu");
	//settmenu.classList.add('settings-active');
	settmenu.focus();
	if (settmenu == document.activeElement) {
		console.log("focused");
	}
	
}




