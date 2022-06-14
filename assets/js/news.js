// function buildNewsObject(newsArtist){

// News API Key
// const apiKey = 'c82cc970-9772-410a-91a9-3d0f0b455f49';

// news API call to get News based on titles only > preconstructed.
// const newsAPI = 'https://api.goperigon.com/v1/all?apiKey='+apiKey+'&country=us&showNumResults=true&showReprints=false&sortBy=date&language=en&category=Entertainment&title=';
//let newsArtist = '';
//let getNewsResp = newsAPI+newsArtist;
//var articleOnbjectArr = [];
//if (newsArtist === null || newsArtist === ''){
//    newsArtist = 'Music News';
// }
// fetch(getNewsResp).then(function(response){
//     return response.json();
// }).then(function(payload){
    // console.log(payload.articles);
//     for(i=0;i<=5;i++){
//         let newsArticle = payload.articles[i];
//         var articleOnbject = {
//             'article_image':newsArticle.imageUrl,
//             'article_type':newsArticle.medium,
//             'article_title':newsArticle.title,
//             'article_description':newsArticle.description,
//             'article_author':newsArticle.source.domain,
//             'article_date':newsArticle.pubDate,
//             'article_url':newsArticle.url
//         };
//         articleOnbjectArr.push(articleOnbject);

//     }
// }).catch(function (error) { 
//     console.error(error);
//  });

//  console.log(articleOnbjectArr);
//}

// function buildNewsPage(articleOnbjectArr){
    var articleOnbjectArr = [
        {
            "article_image": "https://variety.com/wp-content/uploads/2022/06/AP22164016524488.jpg?w=1024",
            "article_type": "Article",
            "article_title": "Hugh Jackman Tests Positive for COVID the Day After His Tony Awards Performance",
            "article_description": "Hugh Jackman Tests Positive for COVID the Day After His Tony Awards Performance",
            "article_author": "variety.com",
            "article_date": "2022-06-13T23:51:00+00:00",
            "article_url": "https://variety.com/2022/legit/news/hugh-jackman-covid-tony-awards-1235293181/"
        },
        {
            "article_image": "https://manofmany.com/wp-content/uploads/2022/06/Best-Nintendo-Switch-Controllers-Feature-1.jpg",
            "article_type": "Article",
            "article_title": "10 Best Nintendo Switch Controllers: Wired vs Wireless",
            "article_description": "10 Best Nintendo Switch Controllers: Wired vs Wireless",
            "article_author": "manofmany.com",
            "article_date": "2022-06-13T23:50:56+00:00",
            "article_url": "https://manofmany.com/entertainment/gaming/best-nintendo-switch-controllers"
        },
        {
            "article_image": "https://ca-times.brightspotcdn.com/dims4/default/6b7200d/2147483647/strip/true/crop/1371x720+0+32/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fbf%2F88%2Fce9824784d8980fded95982bbfb8%2Fbooks-patterson-scholastic-08945.jpg",
            "article_type": "Article",
            "article_title": "Author James Patterson facing backlash over racism remarks",
            "article_description": "Bestselling author James Patterson is concerned for white male writers, whom he thinks are having difficulty finding work in the entertainment industry.",
            "article_author": "latimes.com",
            "article_date": "2022-06-13T19:49:20-04:00",
            "article_url": "https://www.latimes.com/entertainment-arts/books/story/2022-06-13/james-patterson-white-male-writers-racism"
        },
        {
            "article_image": "https://i0.wp.com/www.usmagazine.com/wp-content/uploads/2022/06/Kylie-Jenner-Gets-Candid-About-Experiencing-Tons-of-Pain-4-Months-After-Giving-Birth.jpg?crop=0px%2C0px%2C1852px%2C973px&resize=1200%2C630&ssl=1&quality=86&strip=all",
            "article_type": "Article",
            "article_title": "Kylie Jenner Gets Candid About Experiencing ‘Tons’ of ‘Pain’ 4 Months After Giving Birth: ‘I Am on a Mission to Get Strong’",
            "article_description": "Kylie Jenner Gets Candid About Experiencing ‘Tons’ of ‘Pain’ 4 Months After Giving Birth: ‘I Am on a Mission to Get Strong’",
            "article_author": "usmagazine.com",
            "article_date": "2022-06-13T23:49:10+00:00",
            "article_url": "https://www.usmagazine.com/celebrity-moms/news/kylie-jenner-is-experiencing-tons-of-pain-4-months-postpartum/"
        },
        {
            "article_image": "https://ca-times.brightspotcdn.com/dims4/default/8c34db6/2147483647/strip/true/crop/6000x3150+0+425/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2b%2Ff6%2F69fca09346db8eb087e19f6522c5%2F972295-na-pol-0613-jan6-hearing-no2-kkn-23459.jpg",
            "article_type": "Article",
            "article_title": "Jan 6 hearings: How Giuliani, Trump buffoonery helps case",
            "article_description": "Insurrection is no joke. But by highlighting the buffoonery of Giuliani, Trump and others, the committee underscored the absurdity of their claims.",
            "article_author": "latimes.com",
            "article_date": "2022-06-13T19:48:35-04:00",
            "article_url": "https://www.latimes.com/entertainment-arts/tv/story/2022-06-13/jan-6-committee-hearings-stepien-barr-giuliani-trump-monday-day-2"
        },
        {
            "article_image": "https://cdn.overtimeheroics.net/wp-content/uploads/2022/06/slim-abaher-1.jpg",
            "article_type": "Article",
            "article_title": "American Youtuber-Boxer Albaher Assaulted by Bellator Fighter in London",
            "article_description": "American Youtuber-Boxer Albaher Assaulted by Bellator Fighter in London",
            "article_author": "overtimeheroics.net",
            "article_date": "2022-06-13T23:48:12+00:00",
            "article_url": "https://www.overtimeheroics.net/2022/06/13/american-youtuber-boxer-albaher-assaulted-by-bellator-fighter-in-london/"
        }
    ];


//fetch the html snippet to build the news page
fetch('./assets/snippets/newsitem.html').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	// Convert the HTML string into a document object
	var parser = new DOMParser();
	var snippet = parser.parseFromString(html, 'text/html');

	// Get the html snippet for the news card.
	var newsWrapper = snippet.getElementById('news-article');
    newsWrapper = snippet.getElementById('news-article');
	console.log(newsWrapper);

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});


// then write function to loop through the articleArr and build an html snippet for each article.

// for(i=0; i<= articleOnbjectArr.length;i++){

	

// }

news 


// }