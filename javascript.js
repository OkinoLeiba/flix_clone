

// delete and move to separate file later 23/04/2024
const tmdbKey = '03ee6394a8103fd6e7633be9f543707c';
const tmdbReadKey  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2VlNjM5NGE4MTAzZmQ2ZTc2MzNiZTlmNTQzNzA3YyIsInN1YiI6IjY2MjgwMDc1YWY5NTkwMDE3ZDZiZWRjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZIYayf0-HeagHQf_VluyUhJQOm9CA7Zo_T5lOy0uJHQ';

const movieData = {
    movieUpcoming: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' : `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US&page=1`,
    movieNowPlaying: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/now_playing?&language=en-US&page=1' : `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US&page=1`,
    moviePopular: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' : `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&page=1`,
    movieTopRated: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' : `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=1`,
    // movieTrendingMonth: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/trending/all/month?language=en-US' : `https://api.themoviedb.org/3/trending/all/month?api_key=${tmdbKey}&language=en-US`,
    movieTrendingDay: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/trending/all/day?language=en-US' : `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbKey}&language=en-US`,
    movieRequestGenre: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/genre/movie/list?language=en-US' : `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbKey}&language=en-US`,
};

const movieRequestData = {
    movieRequestUpcoming:  `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US&page=`,
    movieRequestNowPlaying:  `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US&page=`,
    movieRequestPopular:  `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&page=`,
    movieRequestTopRated:  `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=`,
    // movieRequestTrendingMonth:  `https://api.themoviedb.org/3/trending/all/month?api_key=${tmdbKey}&language=en-US`,
    movieRequestTrendingDay:  `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbKey}&language=en-US`,
    movieRequestGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbKey}&language=en-US`,
};




class CreateElements {
    constructor() {
        this.movieResponseFetchData = {
            movieRequestUpcoming: {},
            movieRequestNowPlaying: {},
            movieRequestPopular: {},
            movieRequestTopRated: {},
            movieRequestTrendingMonth: {},
            movieRequestTrendingDay: {},
            movieRequestGenre: {},
        }
        this.posterURL = 'https://image.tmdb.org/t/p/original';
    }

    

    gridRepeat = () => document.documentElement.style.setProperty('--grid-repeat', 20);

    setData(dt) {
        this.data = dt;
    }

     async requestMovieData() {
        const movieResponseData = new Object;
        for (let request in movieData) {
            var clientRequest = await new httpClientRequest();
            clientRequest.get(movieRequestData[request], function (response) {
                movieResponseData[request] = response;
            });
        }
    }
    
    async requestMovieFetchData() {
        var total_pages = 10;
        var requestArray = [];
        for (var requestFetch in movieRequestData) {
            // var clientRequest = new httpClientRequestFetch();
            var URL = movieRequestData[requestFetch];
            if (requestFetch != 'movieRequestGenre' || requestFetch != 'movieRequestTrendingDay') {
                for (var page = 1; page <= total_pages; page++) {
                    var requestData = await this.httpClientRequestFetch2(URL+page);
                    // Object.assign(this.movieResponseFetchData[requestFetch], requestData);
                    requestArray.push(requestData);
                    this.movieResponseFetchData[requestFetch] = requestArray;
                    // total_pages = requestData.total_pages
                }
            }
            else {
                var requestData = await this.httpClientRequestFetch2(URL);
                // Object.defineProperties(this.movieResponseFetchData, requestFetch, { requestData }) 
            
                this.movieResponseFetchData[requestFetch] = requestData;
            }
        }  
       
    }

    async createBanner() {
        await this.requestMovieFetchData()

        console.log(Object.entries(this.movieResponseFetchData.movieRequestTrendingDay.results).map(v => v[1])[0])
        console.log(Object.entries(this.movieResponseFetchData.movieRequestPopular.results).map(v => v[1]))
        
        var bannerData = Object.entries(this.movieResponseFetchData.movieRequestTrendingDay.results).map(v => v[1])[0]
        var movieDate = new Date(bannerData['release_date']).toDateString().split(' ');
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        var dataFormat = new Intl.DateTimeFormat('en-US', options);

        // console.log(document.getElementsByClassName('hscroll-wrapper')[1]);
        

        
        
        document.getElementById('left-banner-title').innerText = bannerData.original_title;
        document.getElementById('banner-text-date').innerText = movieDate[1] + ' ' + movieDate[2] + ', ' + movieDate[3];
        document.getElementById('banner-text-description').innerText = bannerData.overview;
        document.getElementById('top-center-full-banner-image').setAttribute('src', this.posterURL + bannerData.poster_path);
    }

    createMovieThumbnails(movieTitleData, classIndex) {
        const img = document.createElement('img');


        // check and confirm attributes   
        img.setAttribute('class', 'movie-thumbnail');
        img.setAttribute('id', 'movie-thumbnail')
        img.setAttribute('alt', 'Cover art of the movie '+ movieTitleData.original_title);
        img.setAttribute('width', '35');
        img.setAttribute('height', '40');
        img.setAttribute('role', 'img');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('fetchpriority', 'low');
        img.setAttribute('decoding', 'auto');
        img.setAttribute('src', this.posterURL + movieTitleData.poster_path);

        document.getElementsByClassName('hscroll-wrapper')[classIndex].appendChild(img);
        console.log(document.getElementsByClassName('hscroll-wrapper').length)
    }

    createMovieTitle(genre_id) {

        var movieTitles = Object.entries(this.movieResponseFetchData.movieRequestPopular.results).map(v => v[1]);
        var indexClass = 0;
        for (var i = 0; i < movieTitles.length; i++) {
            if (Object.values(movieTitles[i])[2].includes(genre_id)) {
                
                // console.log(Object.values(movieTitles[i])[2].includes(genre_id), movieTitles[i].title, movieTitles[i].poster_path )

                        const hscroll_wrapper = document.createElement('div');
                        hscroll_wrapper.setAttribute('id', 'hscroll-wrapper');
                        hscroll_wrapper.setAttribute('class', 'hscroll-wrapper');
                
                
                        
                
                        const title = document.createElement('p');
                    

                        title.setAttribute('color', 'white');
                        title.setAttribute('font-size', '16');
                        title.setAttribute('id', 'movie-title');
                        title.innerText = movieTitles[i].title;

                    
                        document.getElementById('movie-thumbnail-hscroll-container').appendChild(hscroll_wrapper);
                        document.getElementsByClassName('hscroll-wrapper')[indexClass].appendChild(title);
                    
                        
                        this.createMovieThumbnails(movieTitles[i], indexClass);
                        indexClass++;
            }
        }
           
    }

    async createMovieGenre() {
        await this.requestMovieFetchData()
        // console.log(Object.entries(this.movieResponseFetchData.movieRequestTrendingDay.results).map(v => v[1])[0]);
        
        var movieTitles = Object.entries(this.movieResponseFetchData.movieRequestPopular.results).map(v => v[1]);
        // for (var i = 0; i < movieTitles.length; i++) {
        //     if(Object.values(movieTitles[i])[2].includes(28))
        //     movieTitles.forEach(e => console.log(e.title))
            
                
        // }
        
        var movieGenreArray = Object.entries(this.movieResponseFetchData.movieRequestGenre).map(v => Object.entries(v[1]).map(o => o[1]));

        
        
        while (movieGenreArray[0].length > 0) {
            
            var movieGenreItems = movieGenreArray[0];
            var index = Math.floor(Math.random() * movieGenreItems.length);
         
            
            const hscroll_container = document.createElement('div');
            
            hscroll_container.setAttribute('id', 'movie-thumbnail-hscroll-container');
            
            
            const genre = document.createElement('h1');

            genre.setAttribute('id', 'movie-genre');
            genre.setAttribute('class', 'movie-genre');
            genre.innerText = movieGenreItems[index]['name'];

            document.getElementById('movie-thumbnail-vscroll-container').insertAdjacentElement('afterbegin', genre);
            console.log(document.getElementById('movie-thumbnail-vscroll-container').lastElementChild)
            document.getElementById('movie-genre').insertAdjacentElement('afterend', hscroll_container);

            this.createMovieTitle(movieGenreItems[index]['id']);

            movieGenreItems.splice(index, 1);


        }
        // Object.entries(this.movieResponseFetchData.movieRequestGenre).forEach(v => Object.entries(v[1]).map(o => {
            
        //     const genre = document.createElement('h1');

        //     genre.setAttribute('id', 'movie-genre');
        //     genre.innerText = o[1]['name'];

        //     document.getElementById('movie-thumbnail-hscroll-wrapper').after(genre);

        //     this.createMovieTitle(o[1]['id']);
        // }));
    }



    httpClientRequest(hURL) {
        this.get = function (hURL, hCallBack) {

        
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

        // let request = fetch(hURL);
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
    
        fetch(hURL)
            .then(async request => await request.json()).then(async json => await json)
            .then(data => this.setData(data))
            .catch(error => console.error(error))
            .finally(() => console.log('Success', data));

        fetch(hURL)
            .then(async request => await request.json()).then(async json => await this.setData(json))
            .catch(error => console.error(error))
            .finally(() => {
                console.log('Success!', data);
                // data = null;            
            });

       

    }

    async httpClientRequestFetch2(hURL, data = {}) {
  
        const response = await fetch(hURL, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
     
        return response.json(); // parses JSON response into native JavaScript objects
    }



}





_ = (function () {
    let createElements = new CreateElements();
    createElements.requestMovieFetchData();
    createElements.createBanner();
    createElements.createMovieGenre();

})();


