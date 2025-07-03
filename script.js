const body = document.body,
    html = document.documentElement,
	wrapper = document.querySelector("#wrapper"),
	bg = document.querySelector(".background");

window.onload = (event) => {
	const bgHeight = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );
					   
	console.log(bgHeight);

	wrapper.style.height = bgHeight;
	bg.style.minHeight = `${bgHeight}px`;
}