
/**
 * @name CreateElements
 * @description Function creates banner, and movie title and img
 * @author Okino Kamali Leiba
 * @class
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/
import HTMLDATAREQUEST from "./request.js";
import MenuManagement from "./menu.js";
import NavIcon from './navicon.js';
import gridRepeat from "./gridrepeat.js";
import assertType from "./asserttype.js";




const tmdbKey = "03ee6394a8103fd6e7633be9f543707c";
const tmdbReadKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2VlNjM5NGE4MTAzZmQ2ZTc2MzNiZTlmNTQzNzA3YyIsInN1YiI6IjY2MjgwMDc1YWY5NTkwMDE3ZDZiZWRjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZIYayf0-HeagHQf_VluyUhJQOm9CA7Zo_T5lOy0uJHQ";

// option to pass url based on condition
const movieData = {
  movieUpcoming:
    Object.name === "httpClientRequestFetch"
      ? "https://api.themoviedb.org/3/movie/upcoming?language=en-US"
      : `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US`,
  movieNowPlaying:
    Object.name === "httpClientRequestFetch"
      ? "https://api.themoviedb.org/3/movie/now_playing?&language=en-US"
      : `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US`,
  moviePopular:
    Object.name === "httpClientRequestFetch"
      ? "https://api.themoviedb.org/3/movie/popular?language=en-US"
      : `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US`,
  movieTopRated:
    Object.name === "httpClientRequestFetch"
      ? "https://api.themoviedb.org/3/movie/top_rated?language=en-US"
      : `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US`,
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
  movieRequestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US`,
  movieRequestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US`,
  movieRequestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US`,
  movieRequestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US`,
  // movieRequestTrendingMonth:  `https://api.themoviedb.org/3/trending/all/month?api_key=${tmdbKey}&language=en-US`,
  movieRequestTrendingDay: `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbKey}&language=en-US`,
  movieRequestGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbKey}&language=en-US`,
};


class CreateElements {


  constructor() {
    this.requestClass = new HTMLDATAREQUEST();
    this.menuClass = new MenuManagement();
    this.navIconClass = new NavIcon();
   
    

    this.movieResponseFetchData = {
      movieRequestUpcoming: Object(),
      movieRequestNowPlaying: Object(),
      movieRequestPopular: Object(),
      movieRequestTopRated: Object(),
      // movieRequestTrendingMonth: Object(),
      movieRequestTrendingDay: Object(),
      movieRequestGenre: Object(),
    };

    this.posterURL = "https://image.tmdb.org/t/p";
    this.movieTitles = new Set();
    this.movieImage = new Set();
    this.movieTitlesAPISection = new Set();
    this.movieImageAPISection = new Set();
    this.movieGenreIds = Array();
    this.titleTracker = Array();

    // http request results object length and number of results capped at 20 objects in array
    this.movieTitleResultsLen = 20;

    // index to identify heart icon for each class
    // set as html attribute for each icon
    this.heartIndex = 0;
    
    
  }

 
 

  // simple version of code to begin api request 
  async requestMovieData() {
    const movieResponseData = new Object();
    for (var request in movieData) {
     
      var clientRequest = await new this.requestClass.httpClientRequest()
      // var clientRequest = await new httpClientSimpleRequest();
      clientRequest.get(movieRequestData[request], function (response) {
        movieResponseData[request] = response;
      });
    }
  }

  // driver code to begin api request main version
  async requestMovieFetchData() {
    // default number of pages and number of execution
    var total_pages = 2;
    var requestArray = [];
    for (var requestFetch in movieRequestData) {
      // var clientRequest = new this.requestClass.httpClientRequestFetch();

      var URL = movieRequestData[requestFetch];
      if (
        requestFetch !== "movieRequestTrendingDay" &&
        requestFetch !== "movieRequestGenre"
      ) {
        // option to control number of requests
        for (var page = 1; page < total_pages; page++) {
          var requestData = await this.requestClass.httpClientSimpleRequest(URL);
          // var requestData = await this.requestClass.httpClientSimpleRequest(URL);
          // Object.assign(this.movieResponseFetchData[requestFetch], requestData);
          requestArray.push(requestData);
          this.movieResponseFetchData[requestFetch] = requestArray;
          // total_pages = requestData.total_pages
        }
      } else {
        var requestData = await this.requestClass.httpClientSimpleRequest(URL);
        // define properties with Object performant?
        // Object.defineProperties(this.movieResponseFetchData, requestFetch, { requestData })

        this.movieResponseFetchData[requestFetch] = requestData;
      }
    }
  }

  async createBanner() {
    await this.requestMovieFetchData();

    let test = new Comment(document.getElementById('left-banner-title'))
    // option request for data needed by locally scoped objects in function
    // var pageTitleLen = this.movieResponseFetchData.movieRequestPopular.length / 2;
    

    // // console.log(this.movieResponseFetchData.movieRequestGenre["genres"]);
    // for (var pageTitle = 0; pageTitle < pageTitleLen; pageTitle++) {

    //   var arrayTitleLen = this.movieResponseFetchData.movieRequestPopular[pageTitle]["results"].length;

    //   for (var titleIndex = 0; titleIndex < arrayTitleLen; titleIndex++) {
    //     this.movieTitles.add(
    //       this.movieResponseFetchData.movieRequestPopular[pageTitle]["results"][
    //         titleIndex
    //       ].title
    //     );
    //     this.movieGenreIds.push(
    //       this.movieResponseFetchData.movieRequestPopular[pageTitle]["results"][
    //         titleIndex
    //       ].genre_ids
    //     );
    //     this.movieImage.add(
    //       this.movieResponseFetchData.movieRequestPopular[pageTitle]["results"][
    //         titleIndex
    //       ].poster_path
    //     );
    //   }
    // }
    // console.log(
    //   Object.entries(
    //     this.movieResponseFetchData.movieRequestTrendingDay.results
    //   ).map((v) => v[1])[0]
    // );
    

    // console.log(this.movieImage.push(
    //       this.movieResponseFetchData.movieRequestPopular[0]
    //     ))
       

    var bannerData = Object.entries(
      this.movieResponseFetchData.movieRequestTrendingDay.results
    ).map((v) => v[1])[1];

    var movieDate = new Date(bannerData["release_date" || "first_air_date"])
      .toDateString()
      .split(" ");
    

    
    assertType(movieDate, "object", "Movie Date");
    
    
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    var dataFormat = new Intl.DateTimeFormat("en-US", options);

    // console.log(document.getElementsByClassName("hscroll-wrapper")[1]);

    document.getElementById("left-banner-title").innerText = bannerData.original_name == undefined ?
      bannerData.original_title : bannerData.original_name;
    document.getElementById("banner-text-date").innerText =
      movieDate[1] + " " + movieDate[2] + ", " + movieDate[3];
    document.getElementById("banner-text-description").innerText =
      bannerData.overview;
    document
      .getElementById("top-center-full-banner-image")
      .setAttribute("src", this.posterURL + "/original" + bannerData.poster_path);
    // KEEP: even though set data structures accomplishes task 
    // title tracker will prevent the previously 
    // used movie title from being added
    // along with set data type
    // and rendered as an HTML element
    this.titleTracker.push(bannerData.original_name);

    // create menu for nav if conditions are met
    // TODO: move to different function or execute on load driver function
    this.menuClass.displayMenu();

    // create icon account, logout, login, and etc. in navbar
    this.navIconClass.navIcons();

    // display account, logout, login, and etc. icon 
    // based on window innnerWidth condition
    this.navIconClass.navIconsDisplay();

    // this.createTitleImageStruct();
    
    this.createMovieGenre(); // beginning of function call chain
  } 


  // create set data structure containing
  // movie title and image on demand
  // based on movieRequestData object key
  // single responsibility 
  createTitleImageStruct = (requestKey) => {

    if (requestKey != "movieRequestTrendingDay") {
      var pageTitleLen = this.movieResponseFetchData[requestKey].length;

      for (var pageTitle = 0; pageTitle < pageTitleLen; pageTitle++) {

        var arrayTitleLen = this.movieResponseFetchData[requestKey][pageTitle]["results"].length;

        for (var titleIndex = 0; titleIndex < arrayTitleLen; titleIndex++) {
          this.movieTitles.add(
            this.movieResponseFetchData[requestKey][pageTitle]["results"][
              titleIndex
            ].title
          );
          this.movieGenreIds.push(
            this.movieResponseFetchData[requestKey][pageTitle]["results"][
              titleIndex
            ].genre_ids
          );
          this.movieImage.add(
            this.movieResponseFetchData[requestKey][pageTitle]["results"][
              titleIndex
            ].poster_path
          );
        }
      }
    }
    else {
      var pageTitleLen = this.movieResponseFetchData[requestKey]["results"].length;

      for (var pageIndex = 0; pageIndex < pageTitleLen; pageIndex++) {
          this.movieTitles.add(
            this.movieResponseFetchData[requestKey]["results"][
              pageIndex
            ].title
          );
          this.movieGenreIds.push(
            this.movieResponseFetchData[requestKey]["results"][
              pageIndex
            ].genre_ids
          );
          this.movieImage.add(
            this.movieResponseFetchData[requestKey]["results"][
              pageIndex
            ].poster_path
          );
      }

    }
  }



  createMovieGenre() {
    // await this.requestMovieFetchData()

    // create html container for two sections 
    // one section with base elements by genre
    // other section with base elements named by data request/movieRequestData object key
    // with title and image as base elements wrapped in container
    const vscroll_sections_container = document.createElement("section");
    vscroll_sections_container.setAttribute("id", "vscroll-sections-container");

    document
      .getElementById("top-section-banner-container")
      .after(vscroll_sections_container);
    
    

    // SECTION: by genre
    const vscroll_div = document.createElement("div");
    vscroll_div.setAttribute("id", "movie-title-image-vscroll-container");

    
    document
      .getElementById("vscroll-sections-container")
      .appendChild(vscroll_div);
    
   
      // icon to indicate and navigate to other section
      const vscroll_icons_container_left = document.createElement("button");
      vscroll_icons_container_left.setAttribute("id", "vscroll-icons-container-left");
      vscroll_icons_container_left.setAttribute("onclick", "UtilityHeartScroll.scrollSectionLeft()");
      document.getElementById("movie-title-image-vscroll-container").insertAdjacentElement("afterbegin", vscroll_icons_container_left);

      for(var i = 0; i< 3; i++) {
      const vscroll_sections_icons = document.createElement("i");
      vscroll_sections_icons.setAttribute("class", "fas fa-greater-than")
      vscroll_sections_icons.setAttribute("id", "vscroll-icon-left");

      document.getElementById("vscroll-icons-container-left").appendChild(vscroll_sections_icons);
    }
    

   
      
  
    // SECTION: by api elements
    const vscroll_apisection_div = document.createElement("div");
    vscroll_apisection_div.setAttribute(
      "id",
      "movie-title-image-vscroll-container-apisection"
    );

   
    document
      .getElementById("movie-title-image-vscroll-container")
      .after(vscroll_apisection_div);
    
     // icon to indicate and navigate to other section
      const vscroll_icons_container_right = document.createElement("button");
      vscroll_icons_container_right.setAttribute("id", "vscroll-icons-container-right");
      vscroll_icons_container_right.setAttribute("onclick", "UtilityHeartScroll.scrollSectionRight()");
      document.getElementById("movie-title-image-vscroll-container-apisection").insertAdjacentElement("afterbegin", vscroll_icons_container_right);

      for(var i = 0; i< 3; i++) {
      const vscroll_sections_icons = document.createElement("i");
      vscroll_sections_icons.setAttribute("class", "fas fa-less-than")
      vscroll_sections_icons.setAttribute("id", "vscroll-icon-right");

      document.getElementById("vscroll-icons-container-right").appendChild(vscroll_sections_icons);
      }
    

    // SECTION: by genre
    var movieGenreArray =
      this.movieResponseFetchData.movieRequestGenre["genres"];

    while (movieGenreArray.length > 0) {
      var index = Math.floor(Math.random() * movieGenreArray.length);
      var genreIndex = 0;
      var scrollClassIndex = 0;
      var movieGenreName = movieGenreArray[index]["name"].toLowerCase().replace(" ", "");

      // console.log(
      //   movieGenreArray[index]["name"],
      //   movieGenreArray[index]["id"],
      //   movieGenreArray.length
      // );

      const hscroll_container = document.createElement("div");

      hscroll_container.setAttribute(
        "id",
        `movie-title-image-hscroll-container-${movieGenreName}`
      );
      hscroll_container.setAttribute(
        "class",
        "movie-title-image-hscroll-container"
      );

      const genre = document.createElement("h1");

      genre.setAttribute("id", `movie-genre-${movieGenreName}`);
      genre.setAttribute("class", "movie-genre");
      genre.innerText = movieGenreArray[index]["name"];

      document
        .getElementById("vscroll-icons-container-left")
        .after(genre);
      // console.log(
      //   document.getElementById("movie-title-image-vscroll-container")
      //     .lastElementChild
      // );
      document
        .getElementById(`movie-genre-${movieGenreName}`)
        .insertAdjacentElement("afterend", hscroll_container);
    

      // code block begins creation of button elements 
      const chevronWrapper = document.createElement("div");
      
      chevronWrapper.setAttribute("id", `chevron-wrapper-${movieGenreName}`);
      chevronWrapper.setAttribute("class", "chevron-wrapper");

      document.getElementsByClassName("movie-genre")[genreIndex].after(chevronWrapper);


      const buttonChevronLeft = document.createElement("button");

      buttonChevronLeft.setAttribute("id", `button-chevron-left-${movieGenreName}`);
      buttonChevronLeft.setAttribute("class", "button-chevron-left");
      buttonChevronLeft.setAttribute("type", "button");
      buttonChevronLeft.setAttribute("onclick", `UtilityHeartScroll.scrollLeft(this)`);
      // buttonChevronLeft.setAttribute("hscrollIndex", genreIndex)

      document.getElementsByClassName("chevron-wrapper")[genreIndex].appendChild(buttonChevronLeft);

      const buttonChevronRight = document.createElement("button");

      buttonChevronRight.setAttribute("id", `button-chevron-right-${movieGenreName}`);
      buttonChevronRight.setAttribute("class", "button-chevron-right");
      buttonChevronRight.setAttribute("type", "button");
      buttonChevronRight.setAttribute("onclick", `UtilityHeartScroll.scrollRight(this)`);
      // buttonChevronRight.setAttribute("hscrollIndex", genreIndex)

      document.getElementsByClassName("chevron-wrapper")[genreIndex].appendChild(buttonChevronRight);

      
      const iconLeftChevron = document.createElement("i");

      iconLeftChevron.setAttribute("class", "fas fa-chevron-circle-left");
      iconLeftChevron.setAttribute("id", `left-chevron-${movieGenreName}`);

      const iconRightChevron = document.createElement("i");

      iconRightChevron.setAttribute("class", "fas fa-chevron-circle-right");
      iconRightChevron.setAttribute("id", `right-chevron-${movieGenreName}`);


     
      document.getElementsByClassName("button-chevron-left")[genreIndex].appendChild(iconLeftChevron);

      document.getElementsByClassName("button-chevron-right")[genreIndex].appendChild(iconRightChevron);

      // second stage in function chain: create section, movie title, and image; genre div
      this.createMovieTitle(movieGenreArray[index]["id"], false, movieGenreName);

      movieGenreArray.splice(index, 1);
      genreIndex++;
      scrollClassIndex++;
    }



    // SECTION: by api elements
    for (var key in this.movieResponseFetchData) {
      var genreIndex = 0;

      var movieLocalHeaderTitle = {
        movieRequestUpcoming: "UpComing",
        movieRequestNowPlaying: "Now Playing",
        movieRequestPopular: "Popular",
        movieRequestTopRated: "Top Rated",
        movieRequestTrendingDay: "Trending Today",
      };

      var movieLocalTitle = String(movieLocalHeaderTitle[key]).toLowerCase().replace(" ", "");
      
      if (key != "movieRequestGenre") {
        const hscroll_apisection_container = document.createElement("div");

        hscroll_apisection_container.setAttribute(
          "id",
          `movie-title-image-hscroll-apisection-container-${movieLocalTitle}`
        );
        hscroll_apisection_container.setAttribute(
          "class",
          "movie-title-image-hscroll-apisection-container"

        );

        

        const apisectionTitle = document.createElement("h1");

        apisectionTitle.setAttribute("id", `movie-apisection-title-${movieLocalTitle}`);
        apisectionTitle.setAttribute("class", "movie-apisection-title");
        apisectionTitle.innerText = movieLocalHeaderTitle[key]

        document.getElementById("vscroll-icons-container-right").after(apisectionTitle);

        document
          .getElementById(`movie-apisection-title-${movieLocalTitle}`)
          .insertAdjacentElement("afterend", hscroll_apisection_container);
        
        
        // code block begins creation of button elements
        const apiChevronWrapper = document.createElement("div");

        apiChevronWrapper.setAttribute("id", `chevron-apisection-wrapper-${movieLocalTitle}`);
        apiChevronWrapper.setAttribute("class", "chevron-apisection-wrapper");

        document.getElementsByClassName("movie-apisection-title")[genreIndex].after(apiChevronWrapper);
        
        const apiButtonChevronLeft = document.createElement("button");

        apiButtonChevronLeft.setAttribute("id", `button-chevron-apisection-left-${movieLocalTitle}`);
        apiButtonChevronLeft.setAttribute("class", "button-chevron-apisection-left");
        apiButtonChevronLeft.setAttribute("type", "button");
        apiButtonChevronLeft.setAttribute("onclick", `UtilityHeartScroll.scrollLeft(this)`);
        apiButtonChevronLeft.setAttribute("hscrollIndex", genreIndex)


        document.getElementsByClassName("chevron-apisection-wrapper")[genreIndex].appendChild(apiButtonChevronLeft);

        
        const apiButtonChevronRight = document.createElement("button");

        apiButtonChevronRight.setAttribute("id", `button-chevron-apisection-right-${movieLocalTitle}`);
        apiButtonChevronRight.setAttribute("class", "button-chevron-apisection-right");
        apiButtonChevronRight.setAttribute("type", "button");
        apiButtonChevronRight.setAttribute("onclick", `UtilityHeartScroll.scrollRight(this)`);
        apiButtonChevronRight.setAttribute("hscrollIndex", genreIndex)

        document.getElementsByClassName("chevron-apisection-wrapper")[genreIndex].appendChild(apiButtonChevronRight);

      
        
        const apiIconLeftChevron = document.createElement("i");

        apiIconLeftChevron.setAttribute("class", "fas fa-chevron-circle-left");
        apiIconLeftChevron.setAttribute("id", `left-apisection-chevron--${movieLocalTitle}`);


        const apiIconRightChevron = document.createElement("i");

        apiIconRightChevron.setAttribute("class", "fas fa-chevron-circle-right");
        apiIconRightChevron.setAttribute("id", `right-apisection-chevron-${movieLocalTitle}`);



        document.getElementsByClassName("button-chevron-apisection-left")[genreIndex].appendChild(apiIconLeftChevron);

        document.getElementsByClassName("button-chevron-apisection-right")[genreIndex].appendChild(apiIconRightChevron);
        
        genreIndex++;
        
        // second stage in function chain: create section, movie title, and image; api div
        this.createMovieTitle(key, true, movieLocalTitle);
      }
     
    }


    // function call to generate css gridrepeat property value
    gridRepeat();
  }

  // different approach using Object to manage the data
  // from https request 
  
  // Object.entries(this.movieResponseFetchData.movieRequestGenre).forEach(v => Object.entries(v[1]).map(o => {

  //     const genre = document.createElement('h1');

  //     genre.setAttribute('id', 'movie-genre');
  //     genre.innerText = o[1]['name'];

  //     document.getElementById('movie-image-hscroll-wrapper').after(genre);

  //     this.createMovieTitle(o[1]['id']);
  // }));


  createMovieTitle(genre_id_key, genreBool, genre_name) {
   
    
    // SECTION: by genre
    if (!genreBool) {
       // TODO: review and maybe incorporate
      for (let requestKey in this.movieResponseFetchData) {
      this.createTitleImageStruct(requestKey);
      }
      // create data structure to hold title and genre_ids
      // solution to empty elements after hscroll-wrapper creation
      // by avoiding recursively calling function and creating elements
      // data is added from data structure by a loop
      // for (var pageTitle = 0; pageTitle < movieTitleLen; pageTitle++) {
      //   for (
      //     var titleIndexObject = 0;
      //     titleIndexObject < this.movieTitleResultsLen;
      //     titleIndexObject++
      //   ) {
      //     this.movieTitles.add(
      //       this.movieResponseFetchData.movieRequestPopular[pageTitle][
      //         "results"
      //       ][titleIndexObject].title
      //     );
      //     this.movieGenreIds.push(
      //       this.movieResponseFetchData.movieRequestPopular[pageTitle][
      //         "results"
      //       ][titleIndexObject].genre_ids
      //     );
      //     this.movieTitles.add(
      //       this.movieResponseFetchData.movieRequestPopular[pageTitle][
      //         "results"
      //       ][titleIndexObject].poster_path
      //     );
      //   }
      // }

      // used to as reference and to identify element of class hscroll-wrapper 
      // and target & append title and image elements by offset
      // order of elements in data structure and order of operation critical
      var indexClass = 0;
      for (
        var genreIndexArray = 0;
        genreIndexArray <=
        this.movieGenreIds.length - 1;
        genreIndexArray++
      ) {
        // console.log(Array(movieTitles[titleIndex]["genre_ids"]).includes(genre_id_key));

        if (
          this.movieGenreIds[genreIndexArray].includes(genre_id_key) &&
          [...this.movieTitles][genreIndexArray] !== undefined &&
          typeof [...this.movieTitles][genreIndexArray] == "string"
        ) {
          if (
            !this.titleTracker.includes([...this.movieTitles][genreIndexArray]           
            )) {
            // console.log(Object.values(movieTitles[i])[2].includes(genre_id_key), movieTitles[i].title, movieTitles[i].poster_path )

            const hscroll_wrapper = document.createElement("div");
            hscroll_wrapper.setAttribute("id", `hscroll-wrapper-${genre_name}`);
            hscroll_wrapper.setAttribute("class", "hscroll-wrapper");
            hscroll_wrapper.setAttribute("index-class", this.heartIndex)
            

            const title = document.createElement("p");

            title.setAttribute("color", "white");
            title.setAttribute("font-size", "16");
            title.setAttribute("id", `movie-title-${genre_name}`);
            title.setAttribute("class", "movie-title");
            title.innerText = [...this.movieTitles][genreIndexArray];

            

            // console.log(
            //   Math.max(
            //     document.getElementById("movie-title-image-hscroll-container")
            //       .childElementCount
            //   )
            // );

            document
              .getElementById(`movie-title-image-hscroll-container-${genre_name}`).appendChild(hscroll_wrapper);
            document
              .getElementsByClassName("hscroll-wrapper")
            [indexClass].appendChild(title);

            // solution to first element in container having in inline-styling
            // possibly causing hover to not target element
            // while descendants of container not having 
            // document.getElementById(`movie-title-${genre_name}`).style.display = "none";
            // Aug 18, 2024: cause was other element movie title content in parent container 
            // overflowing causing recalculation of parent container sizing 

            // third stage in function chain: create section, movie title, and image; genre div
            this.createMovieImages(
              [...this.movieImage][genreIndexArray],
              [...this.movieTitles][genreIndexArray],
              indexClass,
              false
            );
            indexClass++;
            this.heartIndex++;
          }
        }
      }
    }

    // reinitialize and empty object
    this.movieTitles = new Set();
    this.movieImage = new Set();
    

    // SECTION: by api elements (upcoming, now playing, trending, etc.)
    // genreBool prevent section of code from execute with each genre_id
    // and function call

    if (genreBool == true) {
      var key = genre_id_key;
      if (key !== "movieRequestGenre") {
        this.createTitleImageStruct(key);
        // var movieTitleAPISectionLen =
        //   this.movieResponseFetchData[key].length - 1;

        // for (
        //   var pageTitle = 0;
        //   pageTitle < movieTitleAPISectionLen;
        //   pageTitle++
        // ) {
        //   for (
        //     var titleIndexObject = 0;
        //     titleIndexObject < movieTitleAPISectionLen;
        //     titleIndexObject++
        //   ) {
        //     this.movieTitlesAPISection.add(
        //       this.movieResponseFetchData[key][pageTitle]["results"][
        //         titleIndexObject
        //       ].title
        //     );
        //      this.movieImageAPISection.add(
        //       this.movieResponseFetchData[key][pageTitle]["results"][
        //         titleIndexObject
        //     ].poster_path
        // );
        //     // console.log(
        //     //   this.movieResponseFetchData[key][pageTitle]["results"][
        //     //     titleIndexObject
        //     //   ].title
        //     // );
        //   }
        // }
        // console.log(
        //   this.movieTitlesAPISection,
        //   this.movieTitlesAPISection.size,
        //   this.movieTitlesAPISection[0]
        // );
        
          // used to reference and to identify element of class hscroll-wrapper 
          // and target & append title and image elements by offset
          // order of elements in data structure and order of operation critical
           
          var indexClass = 0;
          for (
            var titleIndexArray = 0;
            titleIndexArray < this.movieTitles.size;
            titleIndexArray++
          ) {
            if (typeof [...this.movieTitles][titleIndexArray] == "string" && [...this.movieTitles][titleIndexArray] !== undefined) {
            const hscroll_apisection_wrapper = document.createElement("div");
            hscroll_apisection_wrapper.setAttribute(
              "id",
              `hscroll-apisection-wrapper-${genre_name}`
            );
            hscroll_apisection_wrapper.setAttribute(
              "class",
              "hscroll-apisection-wrapper"
            );
            hscroll_apisection_wrapper.setAttribute("classIndex", this.heartIndex);


            const title_apisection = document.createElement("p");

            title_apisection.setAttribute("color", "white");
            title_apisection.setAttribute("font-size", "16");
            title_apisection.setAttribute("id", `movie-title-${genre_name}`);
            title_apisection.setAttribute("class", "movie-title");
            title_apisection.innerText =
              [...this.movieTitles][titleIndexArray];

            document
              .getElementById(
                `movie-title-image-hscroll-apisection-container-${genre_name}`
              )
              .appendChild(hscroll_apisection_wrapper);
            document
              .getElementsByClassName("hscroll-apisection-wrapper")
            [indexClass].appendChild(title_apisection);
          
            // third stage in function chain: create section, movie title, and image; api div
            this.createMovieImages(
              [...this.movieImage][titleIndexArray],
              [...this.movieTitles][titleIndexArray],
              indexClass,
              true
            );
            indexClass++;
            this.heartIndex++;
          }
        }
      }
    }
    

    // title tracker will prevent the previously 
    // used movie title from being added
    // along with set data type
    // and rendered as an HTML element
    // this.titleTracker.push([...this.movieTitles][titleIndex]);

    // an assumption is made about the data structure of the movieTitles and movieImage
    // as determined by the length or size we assume a corresponding title to image
    // the data structure is complete based on our expectations if length or size match 
    if (titleIndexArray == this.movieTitles.size) {
      if (this.movieTitles.size == this.movieImage.size) {
        console.log(
          `Movie title has an associated movie image object size value, the data structure is complete.\nMovie Titles: ${this.movieTitles.size}\nMovie Image: ${this.movieImage.size}`
        );
      } else {
        console.error(
          `Movie title does not have an associated movie image object size value, the data structure is complete.\nMovie Titles: ${this.movieTitles.size}\n Movie Image: ${this.movieImage.size}`
        );
      }
    }
  }


  createMovieImages(imageMovie, titleMovie, classIndex, genreBool = false) {
    
    // var heartIndex = 0;
    // SECTION: by genre
    if (!genreBool && typeof titleMovie == "string") {
      const img = document.createElement("img");

     
      img.setAttribute("class", "movie-image");
      img.setAttribute("id", `movie-image-${titleMovie.toLowerCase().replace(" ", "")}`);
      img.setAttribute("alt", "Cover art of the movie " + titleMovie);
      img.setAttribute("width", "auto");
      img.setAttribute("height", "auto");
      img.setAttribute("role", "img");
      img.setAttribute("loading", "lazy");
      img.setAttribute("fetchpriority", "low");
      img.setAttribute("decoding", "auto");
      img.setAttribute("src", this.posterURL + "/w500" + imageMovie);

      document
        .getElementsByClassName("hscroll-wrapper")
        [classIndex].appendChild(img);
      //   console.log(document.getElementsByClassName("hscroll-wrapper").length);

      const iconSHeart = document.createElement("i");

      iconSHeart.setAttribute("class", "fa-solid fa-heart");
      iconSHeart.setAttribute("id", `fa-sheart-${titleMovie.toLowerCase().replace(" ", "")}${this.heartIndex}`);
      iconSHeart.setAttribute("onclick", "UtilityHeartScroll.heartClickSolid(this)");
      iconSHeart.setAttribute("classIndex", this.heartIndex);

      const iconRHeart = document.createElement("i");

      iconRHeart.setAttribute("class", "fa-regular fa-heart");
      iconRHeart.setAttribute("id", `fa-rheart-${titleMovie.toLowerCase().replace(" ", "")}${this.heartIndex}`);
      iconRHeart.setAttribute("onclick", "UtilityHeartScroll.heartClick(this)");
      iconRHeart.setAttribute("classIndex", this.heartIndex);

      // const iconGoogleHeart = document.createElement("i");

      // iconGoogleHeart.setAttribute("class", "material-icons");
      // iconGoogleHeart.setAttribute("id", "googleiconheart");

      // iconGoogleHeart.textContent = "cloud";

      document
        .getElementsByClassName("hscroll-wrapper")
        [classIndex].appendChild(iconSHeart);

      document
        .getElementsByClassName("hscroll-wrapper")
        [classIndex].appendChild(iconRHeart);

      // different approach to onHover event
      // display heart in image 

      // document
      //   .getElementsByClassName("hscroll-wrapper")
      // [classIndex].appendChild(iconGoogleHeart);
      
      

      //eventHandler for mouseover event change style of css element
      // may not be needed
      // document
      //   .getElementById("hscroll-wrapper")
      //   .addEventListener(
      //     "mouseover",
      //     (event) => (event.target.style.display = "flex")
      //   );
    }

    // SECTION: by api elements
    if (genreBool && typeof titleMovie == "string") {
      const imgAPISection = document.createElement("img");

      
      imgAPISection.setAttribute("class", "movie-image");
      imgAPISection.setAttribute("id", `movie-image-${titleMovie.toLowerCase().replace(" ", "")}${this.heartIndex}`);
      imgAPISection.setAttribute("alt", "Cover art of the movie " + titleMovie);
      imgAPISection.setAttribute("width", "auto");
      imgAPISection.setAttribute("height", "auto");
      imgAPISection.setAttribute("role", "img");
      imgAPISection.setAttribute("loading", "lazy");
      imgAPISection.setAttribute("fetchpriority", "low");
      imgAPISection.setAttribute("decoding", "auto");
      imgAPISection.setAttribute("src", this.posterURL + "/w500" + imageMovie);

      document
        .getElementsByClassName("hscroll-apisection-wrapper")
        [classIndex].appendChild(imgAPISection);

      const iconSHeartAPISection = document.createElement("i");

      iconSHeartAPISection.setAttribute("class", "fa-solid fa-heart");
      iconSHeartAPISection.setAttribute("id", `fa-sheart-apisection-${titleMovie.toLowerCase().replace(" ", "")}${this.heartIndex}`);
      iconSHeartAPISection.setAttribute("onclick", "UtilityHeartScroll.heartClickSolid(this)");
      iconSHeartAPISection.setAttribute("classIndex", this.heartIndex);

      const iconRHeartAPISection = document.createElement("i");

      iconRHeartAPISection.setAttribute("class", "fa-regular fa-heart");
      iconRHeartAPISection.setAttribute("id", `fa-rheart-apisection-${titleMovie.toLowerCase().replace(" ", "")}`);
      iconRHeartAPISection.setAttribute("onclick", "UtilityHeartScroll.heartClick(this)");
      iconRHeartAPISection.setAttribute("classIndex", this.heartIndex);

      // const iconGoogleHeart = document.createElement("i");

      // iconGoogleHeart.setAttribute("class", "material-icons");
      // iconGoogleHeart.setAttribute("id", "googleiconheart");

      // iconGoogleHeart.textContent = "cloud";

      document
        .getElementsByClassName("hscroll-apisection-wrapper")
        [classIndex].appendChild(iconSHeartAPISection);

      document
        .getElementsByClassName("hscroll-apisection-wrapper")
      [classIndex].appendChild(iconRHeartAPISection);
      
      // different approach to onHover event
      // display heart in image 

      // document
      //   .getElementsByClassName("hscroll-apisection-wrapper")
      //   [classIndex].appendChild(iconGoogleHeart);

      //eventHandler for mouseover event change style of css element
      // document
      //   .getElementById(`hscroll-apisection-wrapper-${genre_name}`)
      //   .addEventListener(
      //     "mouseover",
      //     (event) => (event.target.style.display = "flex")
      //   );
    }

    // invoke function to check if images created 
    // also used as condition to change css display to none
    // if not, display none parent container of title, button, title, image
    this.movieGenreCheck();

    // increment class index for heart icon
    // when function executes
    // this.heartIndex++;
  }

  movieGenreCheck = () => {
   
    var movieGenreCount = document.getElementsByClassName("movie-genre").length;

    for (var classIndex = 0; movieGenreCount > classIndex; classIndex++) {
      // movie-title-image-hscroll-apisection-container
      var containerCount = document.getElementsByClassName("movie-title-image-hscroll-container")[classIndex].children.length;

      if (containerCount == 0) {
        document.getElementsByClassName("movie-genre")[classIndex].style.display = "none";
        document.getElementsByClassName("chevron-wrapper")[classIndex].style.display = "none";
        document.getElementsByClassName("movie-title-image-hscroll-container")[classIndex].style.display = "none";
      }
    }
  }


  
  // iconFlash = setInterval(function () {
  //   try {
  //     var flashValue = 1;
  //     const vic = document.getElementById("vscroll-icons-container");
  //     while (vic != null && flashValue > 0.5 ) {
  //       vic.style.opacity = flashValue;
  //       flashValue -= .1;
  //       vic.style.mixBlendMode = "difference";
  //       vic.style.backgroundColor = "red";
  // }
  //   vic.style.opacity = 1;
  //   } catch (error) {
      
  //   }
 
    
  // }, 1000)


  // KEEP: for debugging purposes and track size of window
  displaySize() {
    console.log("height", window.innerHeight);
    console.log("width", window.innerWidth);
  }
  

 
  
} // end of class

(function () {
  var createElements = new CreateElements();
  createElements.createBanner();
  // createElements.movieGenreCheck();
  // createElements.createMovieGenre();
})();


// different approaches to create event handler
// keep for learning and growth purposes
// may revisit code in future
var createElements = new CreateElements();

// document.body.onload = createElements.createMenu;

// window.addEventListener("load", () => createElements.createMenu(), false);
window.addEventListener("resize", createElements.menuClass.displayMenu, false);
window.addEventListener("resize", createElements.navIconClass.navIconsDisplay, false);
// const event = new Event("resize");

// window.addEventListener("resize", (event) => createElements.createMenu(), false);

// window.dispatchEvent(event);


// const element = window.document.getElementById("menu-dropbtn")
// createElements.addEventListener("mouseover", createElements, false);

setInterval(function () {
  try {
    
      var flashValue = 1;
 
      while (flashValue > 0.5 ) {
        document.getElementById("vscroll-icons-container").style.opacity = flashValue;
        flashValue -= .1;
        document.getElementById("vscroll-icons-container").style.mixBlendMode = "difference";
        document.getElementById("vscroll-icons-container").style.backgroundColor = "red";
    }
    document.getElementById("vscroll-icons-container").style.backgroundColor = "aqua";
    
    } catch (error) {
      
  }
  console.log("interval")
  }, 1000)

// provide global scope of class
// solve reference error for onclick event
window.CreateElements = CreateElements;

