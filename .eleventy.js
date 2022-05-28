const {html} = require('common-tags');


module.exports = function(config) {
	

	config.addPassthroughCopy('src/styles');
	config.addPassthroughCopy('src/js');
	config.addPassthroughCopy('src/public');

	config.addShortcode("socials", function(link, img, description) {
		console.log(link);
		console.log(img);
		console.log(description);
		if(link != ""){
			return html`
			<a href=${link}>
			<img src=${img} alt=${description} width="120" height="120" />
			</a>
			`;
		} else {
			return html`
			<a href=${defaultLink}>
			<img src=${defaultSrc} alt=${defaultAlt} width="120" height="120" />
			</a>
			`;
		}
	})







	return {
		dir: {
			input: "src",
			output: "docs"
		}
	}
}
