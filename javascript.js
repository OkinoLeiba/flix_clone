// delete and move to separate file later 23/04/2024
const tmdbKey = "03ee6394a8103fd6e7633be9f543707c";
const tmdbReadKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2VlNjM5NGE4MTAzZmQ2ZTc2MzNiZTlmNTQzNzA3YyIsInN1YiI6IjY2MjgwMDc1YWY5NTkwMDE3ZDZiZWRjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZIYayf0-HeagHQf_VluyUhJQOm9CA7Zo_T5lOy0uJHQ";

const movieData = {
  movieUpcoming:
    Object.name === "httpClientRequestFetch"
      ? "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
      : `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US&page=1`,
  movieNowPlaying:
    Object.name === "httpClientRequestFetch"
      ? "https://api.themoviedb.org/3/movie/now_playing?&language=en-US&page=1"
      : `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US&page=1`,
  moviePopular:
    Object.name === "httpClientRequestFetch"
      ? "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
      : `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&page=1`,
  movieTopRated:
    Object.name === "httpClientRequestFetch"
      ? "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
      : `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=1`,
  // movieTrendingMonth: Object.name === 'httpClientRequestFetch' ? 'https://api.themoviedb.org/3/trending/all/month?language=en-US' : `https://api.themoviedb.org/3/trending/all/month?api_key=${tmdbKey}&language=en-US`,
  movieTrendingDay:
    Object.name === "httpClientRequestFetch"
      ? "https://api.themoviedb.org/3/trending/all/day?language=en-US"
      : `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbKey}&language=en-US`,
  movieRequestGenre:
    Object.name === "httpClientRequestFetch"
      ? "https://api.themoviedb.org/3/genre/movie/list?language=en-US"
      : `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbKey}&language=en-US`,
};

const movieRequestData = {
  movieRequestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US&page=`,
  movieRequestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US&page=`,
  movieRequestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&page=`,
  movieRequestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=`,
  // movieRequestTrendingMonth:  `https://api.themoviedb.org/3/trending/all/month?api_key=${tmdbKey}&language=en-US`,
  movieRequestTrendingDay: `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbKey}&language=en-US`,
  movieRequestGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbKey}&language=en-US`,
};

class CreateElements {
  constructor() {
    this.movieResponseFetchData = {
      movieRequestUpcoming: Object(),
      movieRequestNowPlaying: Object(),
      movieRequestPopular: Object(),
      movieRequestTopRated: Object(),
      // movieRequestTrendingMonth: Object(),
      movieRequestTrendingDay: Object(),
      movieRequestGenre: Object(),
    };
    this.posterURL = "https://image.tmdb.org/t/p/original";
    this.movieTitles = Array();
    this.movieImage = Array();
    this.movieTitlesAPISection = Array();
    this.movieImageAPISection = Array();
    this.movieGenreIds = Array();
    this.titleTracker = Array();

    // results object value is always capped at 20 objects in an array
    this.movieTitleResultsLen = 20;
  }

  // get and set css element property gridrepeat
  gridRepeat = () => {
    var grid_repeat =
      document.getElementById("movie-title-thumbnail-hscroll-container")
        .childElementCount >
      document.getElementById(
        "movie-title-thumbnail-hscroll-apisection-container"
      ).childElementCount
        ? document.getElementById("movie-title-thumbnail-hscroll-container")
            .childElementCount
        : document.getElementById(
            "movie-title-thumbnail-hscroll-apisection-container"
          ).childElementCount;

    if (grid_repeat < 20) grid_repeat = 100;

    document.documentElement.style.setProperty(
      "--grid-repeat",
      grid_repeat * 3
    );
  };

  // may not be needed
  setData(dt) {
    this.data = dt;
  }

  async requestMovieData() {
    const movieResponseData = new Object();
    for (let request in movieData) {
      var clientRequest = await new httpClientRequest();
      clientRequest.get(movieRequestData[request], function (response) {
        movieResponseData[request] = response;
      });
    }
  }

  // driver code to begin api request
  async requestMovieFetchData() {
    // default number of pages and number of execution
    var total_pages = 2;
    var requestArray = [];
    for (var requestFetch in movieRequestData) {
      // var clientRequest = new httpClientRequestFetch();

      var URL = movieRequestData[requestFetch];
      if (
        requestFetch !== "movieRequestTrendingDay" &&
        requestFetch !== "movieRequestGenre"
      ) {
        for (var page = 1; page < total_pages; page++) {
          var requestData = await this.httpClientRequestFetch2(URL + page);
          // Object.assign(this.movieResponseFetchData[requestFetch], requestData);
          requestArray.push(requestData);
          this.movieResponseFetchData[requestFetch] = requestArray;
          // total_pages = requestData.total_pages
        }
      } else {
        var requestData = await this.httpClientRequestFetch2(URL);
        // Object.defineProperties(this.movieResponseFetchData, requestFetch, { requestData })

        this.movieResponseFetchData[requestFetch] = requestData;
      }
    }
  }

  async createBanner() {
    await this.requestMovieFetchData();

    var pageTitleLen = this.movieResponseFetchData.movieRequestPopular.length;

    // console.log(this.movieResponseFetchData.movieRequestGenre["genres"]);
    for (var pageTitle = 0; pageTitle < pageTitleLen; pageTitle++) {
      for (var titleIndex = 0; titleIndex < pageTitleLen; titleIndex++) {
        this.movieTitles.push(
          this.movieResponseFetchData.movieRequestPopular[pageTitle]["results"][
            titleIndex
          ].title
        );
        this.movieGenreIds.push(
          this.movieResponseFetchData.movieRequestPopular[pageTitle]["results"][
            titleIndex
          ].genre_ids
        );
        this.movieImage.push(
          this.movieResponseFetchData.movieRequestPopular[pageTitle]["results"][
            titleIndex
          ].poster_path
        );
      }
    }
    // console.log(
    //   Object.entries(
    //     this.movieResponseFetchData.movieRequestTrendingDay.results
    //   ).map((v) => v[1])[0]
    // );

    var bannerData = Object.entries(
      this.movieResponseFetchData.movieRequestTrendingDay.results
    ).map((v) => v[1])[0];
    var movieDate = new Date(bannerData["release_date"])
      .toDateString()
      .split(" ");
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    var dataFormat = new Intl.DateTimeFormat("en-US", options);

    // console.log(document.getElementsByClassName("hscroll-wrapper")[1]);

    document.getElementById("left-banner-title").innerText =
      bannerData.original_title;
    document.getElementById("banner-text-date").innerText =
      movieDate[1] + " " + movieDate[2] + ", " + movieDate[3];
    document.getElementById("banner-text-description").innerText =
      bannerData.overview;
    document
      .getElementById("top-center-full-banner-image")
      .setAttribute("src", this.posterURL + bannerData.poster_path);

    // title tracker will prevent the previously used movie title from being added
    // and rendered as an HTML element
    this.titleTracker.push(bannerData.original_name);

    this.createMovieGenre(); // beginning of function call chain
  }

  createMovieThumbnails(imageMovie, titleMovie, classIndex, genreBool = false) {
    // SECTION: by genre
    const img = document.createElement("img");

    // TODO: check and confirm attributes
    img.setAttribute("class", "movie-thumbnail");
    img.setAttribute("id", "movie-thumbnail");
    img.setAttribute("alt", "Cover art of the movie " + titleMovie);
    img.setAttribute("width", "35");
    img.setAttribute("height", "40");
    img.setAttribute("role", "img");
    img.setAttribute("loading", "lazy");
    img.setAttribute("fetchpriority", "low");
    img.setAttribute("decoding", "auto");
    img.setAttribute("src", this.posterURL + imageMovie);

    document
      .getElementsByClassName("hscroll-wrapper")
      [classIndex].appendChild(img);
    //   console.log(document.getElementsByClassName("hscroll-wrapper").length);

    const iconSHeart = document.createElement("i");

    iconSHeart.setAttribute("class", "fa-solid fa-heart");
    iconSHeart.setAttribute("id", "fa-sheart");

    const iconRHeart = document.createElement("i");

    iconRHeart.setAttribute("class", "fa-regular fa-heart");
    iconRHeart.setAttribute("id", "fa-rheart");

    const iconGoogleHeart = document.createElement("i");

    iconGoogleHeart.setAttribute("class", "material-icons");
    iconGoogleHeart.setAttribute("id", "googleiconheart");

    iconGoogleHeart.textContent = "cloud";

    document
      .getElementsByClassName("hscroll-wrapper")
      [classIndex].appendChild(iconSHeart);

    document
      .getElementsByClassName("hscroll-wrapper")
      [classIndex].appendChild(iconRHeart);

    document
      .getElementsByClassName("hscroll-wrapper")
      [classIndex].appendChild(iconGoogleHeart);

    //eventhandler for mouseover event change style of css element
    document
      .getElementById("hscroll-wrapper")
      .addEventListener(
        "mouseover",
        (event) => (event.target.style.display = "flex")
      );

    // SECTION: by api elements
    if (genreBool) {
      const imgAPISection = document.createElement("img");

      // TODO: check and confirm attributes
      imgAPISection.setAttribute("class", "movie-thumbnail");
      imgAPISection.setAttribute("id", "movie-thumbnail");
      imgAPISection.setAttribute("alt", "Cover art of the movie " + titleMovie);
      imgAPISection.setAttribute("width", "35");
      imgAPISection.setAttribute("height", "40");
      imgAPISection.setAttribute("role", "img");
      imgAPISection.setAttribute("loading", "lazy");
      imgAPISection.setAttribute("fetchpriority", "low");
      imgAPISection.setAttribute("decoding", "auto");
      imgAPISection.setAttribute("src", this.posterURL + imageMovie);

      document
        .getElementsByClassName("hscroll-apisection-wrapper")
        [classIndex].appendChild(imgAPISection);

      // const iconSHeart = document.createElement("i");

      // iconSHeart.setAttribute("class", "fa-solid fa-heart");
      // iconSHeart.setAttribute("id", "fa-sheart");

      // const iconRHeart = document.createElement("i");

      // iconRHeart.setAttribute("class", "fa-regular fa-heart");
      // iconRHeart.setAttribute("id", "fa-rheart");

      // const iconGoogleHeart = document.createElement("i");

      // iconGoogleHeart.setAttribute("class", "material-icons");
      // iconGoogleHeart.setAttribute("id", "googleiconheart");

      // iconGoogleHeart.textContent = "cloud";

      // document
      //   .getElementsByClassName("hscroll-apisection-wrapper")
      //   [classIndex].appendChild(iconSHeart);

      // document
      //   .getElementsByClassName("hscroll-apisection-wrapper")
      //   [classIndex].appendChild(iconRHeart);

      // document
      //   .getElementsByClassName("hscroll-apisection-wrapper")
      //   [classIndex].appendChild(iconGoogleHeart);

      //eventhandler for mouseover event change style of css element
      // document
      //   .getElementById("hscroll-apisection-wrapper")
      //   .addEventListener(
      //     "mouseover",
      //     (event) => (event.target.style.display = "flex")
      //   );
    }
  }

  createMovieTitle(genre_id, genreBool = false) {
    // create container for two sections with title and image thumbnail as base elements
    // one section with base elements by genre
    // other section with base elements named by data request
    const vscroll_sections_container = document.createElement("div");
    vscroll_sections_container.setAttribute("id", "vscroll-sections-container");

    document
      .getElementById("top-center-full-banner")
      .after(vscroll_sections_container);

    // SECTION: by genre
    const vscroll_div = document.createElement("div");
    vscroll_div.setAttribute("id", "movie-title-thumbnail-vscroll-container");

    vscroll_div.setAttribute("id", "movie-title-thumbnail-vscroll-container");
    document
      .getElementById("vscroll-sections-container")
      .appendChild(vscroll_div);

    // SECTION: by api elements
    if (genre_id == 99999 && genreBool) {
      const vscroll_apisection_div = document.createElement("div");
      vscroll_apisection_div.setAttribute(
        "id",
        "movie-title-thumbnail-vscroll-container"
      );

      vscroll_apisection_div.setAttribute(
        "id",
        "movie-thumbnail-vscroll-apisection-container"
      );
      document
        .getElementById("movie-title-thumbnail-vscroll-container")
        .after(vscroll_apisection_div);
    }
    // SECTION: by genre
    var movieTitleLen = this.movieResponseFetchData.movieRequestPopular.length;
    // create data structure to hold title and genrie_ids
    // solution to empty element hscroll-wrapper creation
    // by avoiding recursively calling and creating elements
    for (var pageTitle = 0; pageTitle < movieTitleLen; pageTitle++) {
      for (
        var titleIndexObject = 0;
        titleIndexObject < this.movieTitleResultsLen;
        titleIndexObject++
      ) {
        this.movieTitles.push(
          this.movieResponseFetchData.movieRequestPopular[pageTitle]["results"][
            titleIndexObject
          ].title
        );
        this.movieGenreIds.push(
          this.movieResponseFetchData.movieRequestPopular[pageTitle]["results"][
            titleIndexObject
          ].genre_ids
        );
      }
    }

    // used to as reference and identify element of class hscroll-wrapper and append element
    var indexClass = 0;
    for (
      var titleIndexArray = 0;
      titleIndexArray < this.movieTitles.length;
      titleIndexArray++
    ) {
      // console.log(Array(movieTitles[titleIndex]["genre_ids"]).includes(genre_id));

      if (
        this.movieGenreIds[titleIndexArray].includes(genre_id) &&
        !this.titleTracker.includes(this.movieTitles[titleIndexArray])
      ) {
        // console.log(Object.values(movieTitles[i])[2].includes(genre_id), movieTitles[i].title, movieTitles[i].poster_path )

        const hscroll_wrapper = document.createElement("div");
        hscroll_wrapper.setAttribute("id", "hscroll-wrapper");
        hscroll_wrapper.setAttribute("class", "hscroll-wrapper");

        const title = document.createElement("p");

        title.setAttribute("color", "white");
        title.setAttribute("font-size", "16");
        title.setAttribute("id", "movie-title");
        title.innerText = this.movieTitles[titleIndexArray];

        // console.log(
        //   Math.max(
        //     document.getElementById("movie-title-thumbnail-hscroll-container")
        //       .childElementCount
        //   )
        // );

        document
          .getElementById("movie-title-thumbnail-hscroll-container")
          .appendChild(hscroll_wrapper);
        document
          .getElementsByClassName("hscroll-wrapper")
          [indexClass].appendChild(title);

        this.createMovieThumbnails(
          this.movieImage[titleIndexArray],
          this.movieTitles[titleIndexArray],
          indexClass
        );
        indexClass++;
      }

      // SECTION: by api elements (upcoming, now playing, trending, etc.)
      // prevent section of code from execute with each genre_id
      if (genre_id == 99999 && genreBool) {
        for (let key in this.movieResponseFetchData) {
          if (key != "movieRequestGenre") {
            var movieTitleAPISectionLen =
              this.movieResponseFetchData[key].length;
          }

          for (
            var pageTitle = 0;
            pageTitle < movieTitleAPISectionLen;
            pageTitle++
          ) {
            for (
              var titleIndexObject = 0;
              titleIndexObject < this.movieTitleAPISectionLen;
              titleIndexObject++
            ) {
              this.movieTitlesAPISection.push(
                this.movieResponseFetchData[key][pageTitle]["results"][
                  titleIndexObject
                ].title
              );
            }
          }

          // used to as reference and identify element of class hscroll-wrapper and append element
          var indexClass = 0;
          for (
            var titleIndexArray = 0;
            titleIndexArray < this.movieTitlesAPISection.length;
            titleIndexArray++
          ) {
            const hscroll_wrapper = document.createElement("div");
            hscroll_wrapper.setAttribute("id", "hscroll-apisection-wrapper");
            hscroll_wrapper.setAttribute("class", "hscroll-apisection-wrapper");

            const title = document.createElement("p");

            title.setAttribute("color", "white");
            title.setAttribute("font-size", "16");
            title.setAttribute("id", "movie-title");
            title.innerText = this.movieTitlesAPISection[titleIndexArray];

            document
              .getElementById("movie-thumbnail-hscroll-apisection-container")
              .appendChild(hscroll_wrapper);
            document
              .getElementsByClassName("hscroll-apisection-wrapper")
              [indexClass].appendChild(title);

            this.createMovieThumbnails(
              this.movieImageAPISection[titleIndexArray],
              this.movieTitlesAPISection[titleIndexArray],
              indexClass,
              false
            );
            indexClass++;
          }
        }
      }
      // title tracker will prevent the previously used movie title from being added
      // and rendered as an HTML element
      // this.titleTracker.push(this.movieTitles[titleIndex]);

      // an assumption is made about the data structure of by the movieTitle and movieGenreIds
      // as determined by the length we assume a corresponding title to genre ids and
      // the data structure is complete based on our expectations
      if (titleIndexArray == this.movieTitles.length) {
        if (this.movieTitles.length == this.movieGenreIds.length) {
          console.log(
            `Movie title has an associated genre_ids object value, the data structure is complete.\nMovie Titles: ${this.movieTitles.length}\nMovie Genre Ids: ${this.movieGenreIds.length}`
          );
        } else {
          console.error(
            `Movie title does not have an associated genre_ids object value, the data structure is complete.\nMovie Titles: ${this.movieTitles.length}\n Movie Genre Ids: ${this.movieGenreIds.length}`
          );
        }
      }
    }
  }

  createMovieGenre() {
    // await this.requestMovieFetchData()

    // for (var i = 0; i < movieTitles.length; i++) {
    //     if(Object.values(movieTitles[i])[2].includes(28))
    //     movieTitles.forEach(e => console.log(e.title))

    // }

    // SECTION: by genre
    var movieGenreArray =
      this.movieResponseFetchData.movieRequestGenre["genres"];

    while (movieGenreArray.length > 0) {
      var index = Math.floor(Math.random() * movieGenreArray.length);

      // console.log(
      //   movieGenreArray[index]["name"],
      //   movieGenreArray[index]["id"],
      //   movieGenreArray.length
      // );

      const hscroll_container = document.createElement("div");

      hscroll_container.setAttribute(
        "id",
        "movie-title-thumbnail-hscroll-container"
      );
      hscroll_container.setAttribute(
        "class",
        "movie-title-thumbnail-hscroll-container"
      );

      const genre = document.createElement("h1");

      genre.setAttribute("id", "movie-genre");
      genre.setAttribute("class", "movie-genre");
      genre.innerText = movieGenreArray[index]["name"];

      document
        .getElementById("movie-title-thumbnail-vscroll-container")
        .insertAdjacentElement("afterbegin", genre);
      // console.log(
      //   document.getElementById("movie-title-thumbnail-vscroll-container")
      //     .lastElementChild
      // );
      document
        .getElementById("movie-genre")
        .insertAdjacentElement("afterend", hscroll_container);

      this.createMovieTitle(movieGenreArray[index]["id"], false);

      movieapisectionArray.splice(index, 1);
    }

    // SECTION: by api elements
    for (let key in this.movieResponseFetchData) {
      movieLocalHeaderTitle = {
        movieRequestUpcoming: (String = "UpComing"),
        movieRequestNowPlaying: (String = "Now Playing"),
        movieRequestPopular: (String = "Popular"),
        movieRequestTopRated: (String = "Top Rated"),
        movieRequestTrendingDay: (String = "Trending Today"),
      };

      const hscroll_apisection_container = document.createElement("div");

      hscroll_apisection_container.setAttribute(
        "id",
        "movie-title-thumbnail-hscroll-apisection-container"
      );
      hscroll_apisection_container.setAttribute(
        "class",
        "movie-title-thumbnail-hscroll-apisection-container"
      );

      const apisectionTitle = document.createElement("h1");

      apisectionTitle.setAttribute("id", "movie-apisection-title");
      apisectionTitle.setAttribute("class", "movie-apisection-title");
      apisectionTitle.innerText = movieLocalHeaderTitle[key];

      document
        .getElementById("movie-title-thumbnail-vscroll-apisection-container")
        .insertAdjacentElement("afterbegin", apisectionTitle);

      document
        .getElementById("movie-apisection-title")
        .insertAdjacentElement("afterend", hscroll_apisection_container);

      this.createMovieTitle(99999, false);
    }

    // function call to css gridrepeat value
    this.gridRepeat();
  }
  // Object.entries(this.movieResponseFetchData.movieRequestGenre).forEach(v => Object.entries(v[1]).map(o => {

  //     const genre = document.createElement('h1');

  //     genre.setAttribute('id', 'movie-genre');
  //     genre.innerText = o[1]['name'];

  //     document.getElementById('movie-thumbnail-hscroll-wrapper').after(genre);

  //     this.createMovieTitle(o[1]['id']);
  // }));

  httpClientRequest(hURL) {
    this.get = function (hURL, hCallBack) {
      // hURL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=03ee6394a8103fd6e7633be9f543707c&language=en-US&page=1';
      var XMLHttpRequest = require("xhr2");
      var xmlHttpRequest = new XMLHttpRequest();

      xmlHttpRequest.onreadystatechange = function () {
        if ((xmlHttpRequest.readyState = 4 && xmlHttpRequest.status == 200)) {
          hCallBack(xmlHttpRequest.responseText);
        } else {
          xmlHttpRequest.readyState = 1;
        }
      };

      xmlHttpRequest.withCredentials = false;
      xmlHttpRequest.timeout = 2000;

      xmlHttpRequest.open("GET", hURL, true);
      // xmlHttpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlHttpRequest.setRequestHeader("Authorization", "Basic " + tmdbReadKey);
      xmlHttpRequest.setRequestHeader("api-key", tmdbKey);
      // xmlHttpRequest.setRequestHeader('Content-length', this.formData.length);
      // xmlHttpRequest.setRequestHeader('Connection', 'close');

      xmlHttpRequest.send(null);
      // review this...
      // xmlHttpRequest.ontimeout = () => {for(var i = 0; i <= 3; i++) {this.httpClientRequest;}}
      return xmlHttpRequest.responseText;
    };
  }

  // this.movieResponseFetchData = new Object;

  httpClientRequestFetch(hURL) {
    // const dataTransfer = new DataTransfer();

    // const jsonData = new Object();
    const options = {
      method: "Get",
      header: {
        accept: "application/json",
        Authorization: "Basic " + tmdbReadKey,
        keepalive: "timeout=5, max=1000",
      },
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
      .then(async (request) => await request.json())
      .then(async (json) => await json)
      .then((data) => this.setData(data))
      .catch((error) => console.error(error))
      .finally(() => console.log("Success", data));

    // fetch(hURL)
    //     .then(async request => await request.json()).then(async json => await this.setData(json))
    //     .catch(error => console.error(error))
    //     .finally(() => {
    //         console.log('Success!', data);
    //         // data = null;
    //     });
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
    });

    return response.json(); // parses JSON response into native JavaScript objects
  }
}

_ = (function () {
  let createElements = new CreateElements();
  createElements.createBanner();
  // createElements.createMovieGenre();
  // createElements.gridRepeat();
})();
