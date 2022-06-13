function buildNewsObject(newsArtist){

// News API Key
const apiKey = 'c82cc970-9772-410a-91a9-3d0f0b455f49';

// news API call to get News based on titles only > preconstructed.
const newsAPI = 'https://api.goperigon.com/v1/all?apiKey='+apiKey+'&country=us&showNumResults=true&showReprints=false&sortBy=date&language=en&category=Entertainment&title=';
let newsArtist = '';
getNewsResp = newsAPI+newsArtist;
if (newsArtist === null || newsArtist === ''){
    newsArtist = 'Music News';
}
fetch(getNewsResp).then(function(response){
    return response.json();
}).then(function(payload){
    //console.log(payload.articles);
    for(i=0;i<=5;i++){
        let newsArticle = payload.articles[i];
        var articleOnbjectArr = [{
            'article_image':newsArticle.imageUrl,
            'article_type':newsArticle.medium,
            'article_title':newsArticle.title,
            'article_description':newsArticle.description,
            'article_author':newsArticle.source.domain,
            'article_date':newsArticle.pubDate,
            'article_url':newsArticle.url
        }];
        console.log(articleOnbjectArr);
        return articleArr;
    }
}).catch(function (error) { 
    console.error(error);
 });
}

function buildNewsPage(articleOnbjectArr){


//fetch the html snippet to build the news page
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


// then write function to loop through the articleArr and build an html snippet for each article.


}