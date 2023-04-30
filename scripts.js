function clickOnMenu() {
	const navbar = document.getElementById("js-navbar");
	if (navbar.className.indexOf("w3-show") === -1) {
		navbar.className += " w3-show";
	} else {
		navbar.className = navbar.className.replace(" w3-show", "");
	}
}

function openMenu() {
	const navbar = document.getElementById("js-navbar");
	navbar.className += " w3-show";
}

function closeMenu() {
	const navbar = document.getElementById("js-navbar");
	navbar.className = navbar.className.replace(" w3-show", "");
}

function openTab(event, tabName) {
	const tab = document.getElementsByClassName("js-tab");
	for (let i = 0; i < tab.length; i++) {
		tab[i].style.display = "none";
	}
	const tablinks = document.getElementsByClassName("js-tablink");
	for (let i = 0; i < tab.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-border-indigo", "");
	}
	document.getElementById("js-" + tabName).style.display = "grid";
	event.currentTarget.firstElementChild.className += " w3-border-indigo";
}
