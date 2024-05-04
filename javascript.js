const { request } = require('http');

function createMovieThumbnails(requestarrayimg) {
    const img = document.createElement('img');

    img.setAttribute('class', 'movie-thumbnail');
    img.setAttribute('alt', 'Cover art of movies.');
    img.setAttribute('width', '10');
    img.setAttribute('height', '20');
    img.setAttribute('role', 'img');
    img.setAttribute('loading', 'lazy');
    img.setAttribute('fetchpriority', 'low');
    img.setAttribute('decoding', 'auto');

    document.getElementById('movie-thumbnail-hscroll-wrapper').appendChild(img);
   
}

function createMovieTitle(requestarraytitle) {
    const title = document.createElement('h1');

    title.setAttribute('color', 'black');
    title.setAttribute('font-size', '16');

    document.getElementById('movie-thumbnail-hscroll-wrapper').before(title);
}
// delete and move to separate file later 23/04/2024
const tmdbKey = '03ee6394a8103fd6e7633be9f543707c';
const tmdbReadKey  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2VlNjM5NGE4MTAzZmQ2ZTc2MzNiZTlmNTQzNzA3YyIsInN1YiI6IjY2MjgwMDc1YWY5NTkwMDE3ZDZiZWRjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZIYayf0-HeagHQf_VluyUhJQOm9CA7Zo_T5lOy0uJHQ';

// const movieData = {
//     movieUpcoming: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' : `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US&page=1`,
//     movieNowPlaying: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/now_playing?&language=en-US&page=1' : `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US&page=1`,
//     moviePopular: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' : `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&page=1`,
//     movieTopRated: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' : `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=1`,
//     movieTrendingMonth: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/trending/all/month?language=en-US' : `https://api.themoviedb.org/3/trending/all/month?api_key=${tmdbKey}&language=en-US`,
//     movieTrendingDay: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/trending/all/day?language=en-US' : `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbKey}&language=en-US`,
// };

const movieRequestData = {
    movieRequestUpcoming:  `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US&page=1`,
    // movieRequestNowPlaying:  `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US&page=1`,
    // movieRequestPopular:  `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&page=1`,
    // movieRequestTopRated:  `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=1`,
    // movieRequestTrendingMonth:  `https://api.themoviedb.org/3/trending/all/month?api_key=${tmdbKey}&language=en-US`,
    // movieRequestTrendingDay:  `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbKey}&language=en-US`
};


function httpClientRequest(hURL) { 
    this.get = function(hURL, hCallBack) {

        
        // hURL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
        var XMLHttpRequest = require('xhr2');
        var xmlHttpRequest = new XMLHttpRequest();
    
        
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState = 4 && xmlHttpRequest.status == 200) {
                hCallBack(xmlHttpRequest.responseText)
            }
            else {
                xmlHttpRequest.readyState = 1;
            }
        }

        xmlHttpRequest.withCredentials = false;
        xmlHttpRequest.timeout = 2000;
        
        
        xmlHttpRequest.open("GET", hURL, true);
        // xmlHttpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlHttpRequest.setRequestHeader('Authorization', 'Basic ' + tmdbReadKey);
        xmlHttpRequest.setRequestHeader('api-key', tmdbKey);
        // xmlHttpRequest.setRequestHeader('Content-length', this.formData.length);
        // xmlHttpRequest.setRequestHeader('Connection', 'close');
        
        xmlHttpRequest.send(null);
        // review this...
        // xmlHttpRequest.ontimeout = () => {for(var i = 0; i <= 3; i++) {this.httpClientRequest;}}
        return xmlHttpRequest.responseText;
        }
}

function httpClientRequestFetch(hURL) {
    // hURL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    
    const json = new Object;
    const options = {
        method: 'GET',
        header: {
            accept: 'application/json',
            // Authorization: 'Basic ' + tmdbReadKey,
            // keepalive: 'timeout=5, max=1000'
            }
    };

    fetch(hURL)
    .then(request => request.json()
    .then(async json => await json))
    .catch(error => console.error(error))
    .finally(() => {return json})

    return json;
    
}

function requestMovieData() {
    const movieResponseData = new Object;
    for (let request in movieRequestData) {   
        var clientRequest = new httpClientRequest();
        clientRequest.get(movieRequestData[request], function(response) {
            movieResponseData[request] = response;
        });
    }
}

function requestMovieFetchData() {
    var movieResponseFetchData = new Object;
    for (var requestFetch in movieRequestData) {   
        // var clientRequest = new httpClientRequestFetch();

        this.movieResponseFetchData[request] =  httpClientRequestFetch(movieRequestData[requestFetch]);
        
    }
    return movieResponseFetchData;
}


requestMovieFetchData();