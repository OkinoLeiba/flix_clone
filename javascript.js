const { request } = require('https');

// delete and move to separate file later 23/04/2024
const tmdbKey = '03ee6394a8103fd6e7633be9f543707c';
const tmdbReadKey  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2VlNjM5NGE4MTAzZmQ2ZTc2MzNiZTlmNTQzNzA3YyIsInN1YiI6IjY2MjgwMDc1YWY5NTkwMDE3ZDZiZWRjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZIYayf0-HeagHQf_VluyUhJQOm9CA7Zo_T5lOy0uJHQ';

const movieData = {
    movieUpcoming: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' : `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US&page=1`,
    movieNowPlaying: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/now_playing?&language=en-US&page=1' : `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US&page=1`,
    moviePopular: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' : `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&page=1`,
    movieTopRated: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' : `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=1`,
    movieTrendingMonth: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/trending/all/month?language=en-US' : `https://api.themoviedb.org/3/trending/all/month?api_key=${tmdbKey}&language=en-US`,
    movieTrendingDay: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/trending/all/day?language=en-US' : `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbKey}&language=en-US`,
};

const movieRequestData = {
    movieRequestUpcoming:  `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US&page=1`,
    movieRequestNowPlaying:  `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US&page=1`,
    movieRequestPopular:  `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&page=1`,
    movieRequestTopRated:  `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=1`,
    movieRequestTrendingMonth:  `https://api.themoviedb.org/3/trending/all/month?api_key=${tmdbKey}&language=en-US`,
    movieRequestTrendingDay:  `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbKey}&language=en-US`,
    movieRequestGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbKey}&language=en-US`,
};

this.data;
// this.movieResponseFetchData = new Object;


class CreateElements {
    constructor() {

    }



setData(dt) {
    // this.data = dt;
    this.movieResponseFetchData[requestFetch] = dt;
}



createMovieThumbnails(requestarray) {
    const img = document.createElement('img');

    img.setAttribute('class', 'movie-thumbnail');
    img.setAttribute('alt', 'Cover art of movies.');
    img.setAttribute('width', '10');
    img.setAttribute('height', '20');
    img.setAttribute('role', 'img');
    img.setAttribute('loading', 'lazy');
    img.setAttribute('fetchpriority', 'low');
    img.setAttribute('decoding', 'auto');
    img.setAttribute('src', movieResponseFetchData[requestarray].results.poster_path)

    document.getElementById('movie-thumbnail-hscroll-wrapper').appendChild(img);
   
}

createMovieTitle() {
    this.requestMovieFetchData()
    movieResponseFetchData[top_rated].results.genre_ids.forEach(genre_id => {
        const title = document.createElement('p');

        title.setAttribute('color', 'black');
        title.setAttribute('font-size', '16');
        title.innerHTML = movieResponseFetchData[top_rated].results.genre_ids.includes(genre_id) ? movieResponseFetchData[top_rated].title : movieResponseFetchData[top_rated].title ;

        document.getElementById('movie-thumbnail-hscroll-wrapper').after(genre);
        createMovieThumbnails(movieResponseFetchData[genre_id].results.title);
    }); 
    
}

createMovieGenre(requestarray) {
    // requestMovieFetchData()
    const genre = document.createElement('h1');

    genre.setAttribute('color', 'black');
    genre.setAttribute('font-size', '16');
    genre.innerHTML = movieResponseFetchData[requestarray].results.genre_name;

    createMovieTitle( movieResponseFetchData[requestarray].results.genre_ids);

    document.getElementById('movie-thumbnail-hscroll-wrapper').before(genre);
}



httpClientRequest(hURL) { 
    this.get = function(hURL, hCallBack) {

        
        // hURL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=03ee6394a8103fd6e7633be9f543707c&language=en-US&page=1';
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
    
    // this.movieResponseFetchData = new Object;

httpClientRequestFetch(hURL) {

    // const dataTransfer = new DataTransfer();

    // const jsonData = new Object();
    const options = {
        method: 'Get',
        header: {
            accept: 'application/json',
            Authorization: 'Basic ' + tmdbReadKey,
            keepalive: 'timeout=5, max=1000',
        }
    };

    // let request = await fetch(hURL);
    // let data = await request.json();
    // dt = dataTransfer.setData(data=data);
    // jsonData.data = data;
    // this.movieData = jsonData;
    // setData(data);
    // return data;

    // fetch(hURL).then(function(response) {
    //     return response.json();
    //   }).then(function(data) {
    //     console.log(data);
    //   })
    
    // fetch(hURL)
    // .then(async request => await request.json()).then(async json => await json)
    // .then(data => setData(data))
    // .catch(error => console.error(error))
    // .finally(() => console.log('Success', data);)

    fetch(hURL)
    .then(async request => await request.json()).then(async json => await setData(json))
    .catch(error => console.error(error))
    .finally(() => {
        console.log('Success!', data);
        // data = null;            
    })

    // return data;

}





requestMovieData() {
    const movieResponseData = new Object;
    for (let request in movieData) {   
        var clientRequest = new httpClientRequest();
        clientRequest.get(movieRequestData[request], function(response) {
            movieResponseData[request] = response;
        });
    }
}


requestMovieFetchData() {
    // var movieResponseFetchData = new Object;
    for (var requestFetch in movieRequestData) {   
        // var clientRequest = new httpClientRequestFetch();
        var URL = movieRequestData[requestFetch];
        this.httpClientRequestFetch(URL);
              
    
    }
    // movieResponseFetchData = {
    //     [requestFetch]: this.data,
    //     get movieImg() {
    //         this.data = data;
    //     }
    // }
    // movieResponseFetchData[requestFetch] = data;

    console.log(this.movieResponseFetchData[requestFetch]);
    // this.movieData = movieResponseFetchData;
    // return movieResponseFetchData;
}



// httpClientRequestFetch('https://api.themoviedb.org/3/movie/upcoming?api_key=03ee6394a8103fd6e7633be9f543707c&language=en-US&page=1');
 

}

_ = (function () {
    let createElements = new CreateElements();
    createElements.requestMovieFetchData();
    createElements.createMovieTitle();

})();



// class Test {
//     constructor() {
//         this.data = undefined
//     }

//     setData(dt) {
//         this.data = dt;
//     }

//     fetchFunction = (hURL) => fetch(hURL)
//     .then(request => request.json()).then(json => setData(json))
//     .catch(error => console.error(error))
//     .finally(() => {
//         console.log('Success!', data);            
//     })
// passMovie = () => {
//     var movieResponseFetchData = new Object;

//     this.fetchFunction('https://api.themoviedb.org/3/movie/upcoming?api_key=03ee6394a8103fd6e7633be9f543707c&language=en-US&page=1')

//     movieResponseFetchData.test =  this.data;
//     console.log(movieResponseFetchData.test);
// }

// }

// const test = new Test();
// test.passMovie();