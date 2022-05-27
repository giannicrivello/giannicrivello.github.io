let link = document.querySelectorAll("#link");
console.log(link);

if(link){
link.forEach((i) => { i.addEventListener("mouseover", function( event ) {
	event.target.style.color = "purple";
	setTimeout(function() {
		event.target.style.color = "";
	}, 500);
}, false);
})
}

let boxElement;
window.addEventListener("load", (event) => {
	boxElement = document.querySelector("#footer-container");
	createObserver();
}, false);

function createObserver() {
	let observer;
	let options = {
		root: null,
		rootMargin: "0px",
		threshold: 1.0 
	}
	observer= new IntersectionObserver(handleIntersect, options);
	observer.observe(boxElement);
}

function handleIntersect(entries, observer){
	entries.forEach((entry) => {
		if(entry.isIntersecting) {
			entry.target.classList.remove("default-footer");
			entry.target.classList.add("observed-footer");
		}
	})
}




























