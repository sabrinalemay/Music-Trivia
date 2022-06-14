// var client_id = '635a525d55414edebc58ce947f4560c7'; // Your client id
// var client_secret = '773764f99594477a9b55b0442b3988a4'; // Your secret

// // your application requests authorization
// var headers = {
//     'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
//     'Accept': 'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded'
// };

// console.log(headers);

// var authEndpoint = "https://accounts.spotify.com/api/token";

// fetch(authEndpoint, {
//     method: "post",
//     body: "grant_type=client_credentials",
//     headers: headers
// }).then(function(response) {
//     return response.json();
// }).then(function(payload) {
//     console.log(payload);
//     var genreEndpoint = "https://open.spotify.com/playlist/37i9dQZF1DX4UtSsGT1Sbe?si=97318a04e8474f63";

//     var userHeaders = {
//         'Authorization': 'Bearer ' + payload.access_token,
//         'Accept': 'application/json'
//     }
//     fetch(genreEndpoint, {
//         headers: userHeaders
//     }).then(function(response) {
//         return response.json();
//     }).then(function(payload) {
//         console.log(payload);
//     });
// });



