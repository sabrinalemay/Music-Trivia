

fetch('./assets/snippets/newsitem.html').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	// Convert the HTML string into a document object
	var parser = new DOMParser();
	var snippet = parser.parseFromString(html, 'text/html');

	// Get the image file
	var newsWrapper = snippet.getElementById('news-article');
	console.log(newsWrapper);

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});