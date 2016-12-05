var url = window.location.href;
console.log('1');
if (url.indexOf('go.shtml') > -1) {
	console.log(url.split('url')[1].split('&')[0].split('=')[1])
	window.location.href = url.split('url')[1].split('&')[0].split('=')[1];
} else if (RegExp('http:\/\/v.qq.com\/iframe\/player.html[\?][a-zA-Z0-9]*=[a-zA-Z0-9]*&').exec(document.body.innerHTML)) {
	window.location.href = RegExp('http:\/\/v.qq.com\/iframe\/player.html[\?][a-zA-Z0-9]*=[a-zA-Z0-9]*&').exec(document.body.innerHTML)[0];
} else if (RegExp('https:\/\/v.qq.com\/iframe\/player.html[\?][a-zA-Z0-9]*=[a-zA-Z0-9]*&').exec(document.body.innerHTML)) {
	window.location.href = RegExp('https:\/\/v.qq.com\/iframe\/player.html[\?][a-zA-Z0-9]*=[a-zA-Z0-9]*&').exec(document.body.innerHTML)[0];
} else if (RegExp('http:\/\/v.qq.com\/page\/[a-zA-Z0-9]*.html').exec(document.body.innerHTML)) {
	window.location.href = RegExp('http:\/\/v.qq.com\/page\/[a-zA-Z0-9]*.html').exec(document.body.innerHTML)[0];
}