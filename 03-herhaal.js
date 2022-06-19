let writeHtmlParagraph = string => document.write('<p>' + string + '</p>');

let toonText = () => {
	console.log("running");
	for (var i = 0; i < 6; i++) {
		writeHtmlParagraph(`Herhaling: ${i+1}`);
	}
}