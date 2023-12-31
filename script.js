let shouldpanic = true;

function everySecond() {
	s("#time").innerHTML =
		new Date().toLocaleTimeString() +
		"&nbsp;&nbsp;&nbsp;" +
		new Date().toLocaleDateString();
}

setInterval(everySecond, 1000);
everySecond();

function checkCon() {
	if (localStorage.favicon) {
		if (localStorage.title) {
			if (
				localStorage.title.trim().length >= 1 &&
				localStorage.favicon.trim().length >= 1
			) {
				s("title").innerHTML = localStorage.title;
				s(".favicon").href = localStorage.favicon;
			}
		}
	}
	if (!localStorage.flowlink) {
		localStorage.flowlink = "https://mymaths.academy/";
	}
	if (localStorage.flowlink && document.activeElement === document.body) {
		if (localStorage.flowlink.toLowerCase() === "https://")
			localStorage.flowlink = "https://mymaths.academy/";
	}
	if (s("#flow")) {
		s("#flow").src = localStorage.flowlink;
	}
	if (!localStorage.prxylink) {
		localStorage.prxylink = "https://leclipse.onrender.com/";
	}
	if (localStorage.prxylink && document.activeElement === document.body) {
		if (localStorage.prxylink.toLowerCase() === "https://")
			localStorage.prxylink = "https://leclipse.onrender.com/";
	}
	if (s("#prxylink")) {
		s("#prxylink").src = localStorage.prxylink;
	}
	if (!localStorage.panicurl) {
		localStorage.panicurl = "https://google.com/";
	}
	if (localStorage.panicurl && document.activeElement === document.body) {
		if (localStorage.panicurl.toLowerCase() === "https://")
			localStorage.panicurl = "https://google.com/";
	}
}

checkCon();
window.onload = checkCon;

function disguise(img, text) {
	localStorage.favicon = img;
	localStorage.title = text;
	checkCon();
}

function customdis() {
	let text = prompt("Tab Name*: ");
	let favicon = prompt("Tab Icon Link (OPTIONAL): ");
	if (!favicon) {
		favicon = "not_set_will_cause_error_but_it_fine";
	}
	localStorage.favicon = favicon;
	localStorage.title = text;
	checkCon();
	alert("Disguise Set!");
}

function cloak() {
	let tab = window.open("about:blank");
	tab.document.body.innerHTML = `<style>*{padding:0;margin:0;}html,body{width:100%;height:100vh}</style><iframe src="https://${window.location.host}" style="border:0px #ffffff none;" name="lunar" scrolling="yes" frameborder="0" marginheight="0px" marginwidth="0px" height="100%" width="100%" allowfullscreen></iframe>`;
	location.replace(localStorage.panicurl);
}

document.addEventListener("DOMContentLoaded", () => {
	if (!localStorage.already) {
		localStorage.showPanic = "Yes";
	}
	localStorage.already = "Yes";
});

function deleteAllCookies() {
	const cookies = document.cookie.split(";");

	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i];
		const eqPos = cookie.indexOf("=");
		const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}
	if (!localStorage.already) {
		localStorage.showPanic = "Yes";
	}
	localStorage.already = "Yes";
}

const xor = {
	encode(str) {
		if (!str) return str;
		return encodeURIComponent(
			str
				.toString()
				.split("")
				.map((char, ind) =>
					ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
				)
				.join("")
		);
	},
	decode(str) {
		if (!str) return str;
		let [input, ...search] = str.split("?");

		return (
			decodeURIComponent(input)
				.split("")
				.map((char, ind) =>
					ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char
				)
				.join("") + (search.length ? "?" + search.join("?") : "")
		);
	},
};

function onclicky() {
	qsall("input", (input) => {
		if (document.activeElement !== document.body) {
			shouldpanic = false;
		} else {
			shouldpanic = true;
		}
	});
}

qsall("*", (element) => {
	element.addEventListener("click", onclicky);
});

function replaceGoogle() {
	if (shouldpanic) location.replace(localStorage.panicurl);
}

function checkPanic() {
	if (localStorage.showPanic) {
		qsall(".panic", (button) => {
			button.style.display = "inline-block";
			button.addEventListener("click", replaceGoogle);
		});
	} else {
		qsall(".panic", (button) => {
			button.style.display = "none";
		});
	}
}

checkPanic();

document.addEventListener("keydown", (e) => {
	if (localStorage.showPanic) {
		if (e.key.toLowerCase() === "p") {
			replaceGoogle();
		}
	}
});

function togglePanic() {
	if (localStorage.showPanic) {
		localStorage.removeItem("showPanic");
	} else {
		localStorage.showPanic = "Yes";
	}
	checkPanic();
}

function redir(url) {
	location.href = url;
}

function replace(url) {
	location.replace(url);
}

function hideNav() {
	s("nav").style.display = "none";
	s(".line").style.display = "none";
	s(".content").style.height = "100vh";
	s(".content").style.top = "0";
	s(".shownav").style.display = "inline-block";
}

function showNav() {
	s("nav").style.display = "flex";
	s(".line").style.display = "";
	s(".content").style.height = "calc(100vh - 42px)";
	s(".content").style.top = "52px";
	s(".shownav").style.display = "none";
}

function secun() {
	try {
		window.open(s("#secun").value + "#translate.google.com");
	} catch (err) {
		console.log(error);
	}
}

s("#secunform").addEventListener("submit", (e) => {
	e.preventDefault();
	secun();
});
