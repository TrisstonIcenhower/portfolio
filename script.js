const body = document.body,
    html = document.documentElement,
	wrapper = document.querySelector("#wrapper"),
	bg = document.querySelector(".background");
	
document.addEventListener("DOMContentLoaded", function(event) { 
  const bgHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
					   
console.log(bgHeight);

wrapper.style.height = bgHeight;
bg.style.minHeight = `${bgHeight}px`;
});

