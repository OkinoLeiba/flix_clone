/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/

// delete and move to separate file later 23/04/2024
const tmdbKey = "03ee6394a8103fd6e7633be9f543707c";
const tmdbReadKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2VlNjM5NGE4MTAzZmQ2ZTc2MzNiZTlmNTQzNzA3YyIsInN1YiI6IjY2MjgwMDc1YWY5NTkwMDE3ZDZiZWRjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZIYayf0-HeagHQf_VluyUhJQOm9CA7Zo_T5lOy0uJHQ";

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

    // http request results object length capped at 20 objects in array
    this.movieTitleResultsLen = 20;

    // index to identify heart icon for each class
    // set as attribute for each icon
    this.heartIndex = 0;
    
    
  }

  // static heartIndex = 0
  

  // get and set css element property gridrepeat
  gridRepeat = () => {
    var grid_repeat = Array();
    var grid_repeat_API =  Array();
    // var grid_repeat =
    //   document.getElementById("movie-title-thumbnail-hscroll-container")
    //     .childElementCount >
    //   document.getElementById(
    //     "movie-title-thumbnail-hscroll-apisection-container"
    //   ).childElementCount
    //     ? document.getElementById("movie-title-thumbnail-hscroll-container")
    //         .childElementCount
    //     : document.getElementById(
    //         "movie-title-thumbnail-hscroll-apisection-container"
    //     ).childElementCount;
    
    var classElementsContainer = document.getElementsByClassName("movie-title-thumbnail-hscroll-container");
    for (const key of classElementsContainer) {
      
      grid_repeat.push(key.childNodes.length);
    }
    
    var classElementsContainerAPI = document.getElementsByClassName("movie-title-thumbnail-hscroll-container");
     for (const key of classElementsContainerAPI) {
      
      grid_repeat_API.push(key.childNodes.length);
    }
    
    
    var grid_repeat_max = Math.max(grid_repeat_API.reduce((a, b) => Math.max(a, b), -Infinity), grid_repeat.reduce((a, b) => Math.max(a, b), -Infinity));
    
    this.assertType(grid_repeat_max, "number", "Grid Repeat");

    if (Math.max(grid_repeat_max) < 20) grid_repeat = 100;

    document.documentElement.style.setProperty(
      "--grid-repeat",
      grid_repeat_max * 3
    );

    new Comment(document.getElementById('left-banner-title'))
  }

  // may not be needed
  setData(dt) {
    this.data = dt;
  }

  static scrollLeft = (getThis) => {
    var movieGenre = getThis.attributes.id.value.split("-")[getThis.attributes.id.value.split("-").length-1];
    
    var scrollID = getThis.attributes.class.value == "button-chevron-apisection-left" ? `movie-title-thumbnail-hscroll-apisection-container-${movieGenre}` : `movie-title-thumbnail-hscroll-container-${movieGenre}`;

      const scrollButtonLeft = document.getElementById(getThis.attributes.id.value);
      const hscrollContainer = document.getElementById(scrollID);
      scrollButtonLeft.addEventListener("click", () => {
      hscrollContainer.scrollLeft -= 20;
      })

  }

  static scrollRight = (getThis) => {
    var movieGenre = getThis.attributes.id.value.split("-")[getThis.attributes.id.value.split("-").length-1];
    
    var scrollID = getThis.attributes.class.value == "button-chevron-apisection-right" ? `movie-title-thumbnail-hscroll-apisection-container-${movieGenre}` : `movie-title-thumbnail-hscroll-container-${movieGenre}`;

      const scrollButtonRight = document.getElementById(getThis.attributes.id.value);
      const hscrollContainer = document.getElementById(scrollID);
      scrollButtonRight.addEventListener("click", () => {
      hscrollContainer.scrollLeft += 20;
    })

  }

  static heartClickSolid = (heartThis) => {
    var heartClassIndex = Math.abs(Number(document.getElementsByClassName(`${heartThis.parentElement.classList.value}`).length) - Number(heartThis.attributes[3].value) - Number(document.getElementById(`${heartThis.parentElement.parentElement.id}`).childNodes.length))
    const rheartID = document.getElementById(heartThis.id);
    const rheartClass = document.getElementsByClassName("fa-regular fa-heart")[heartClassIndex];

    // const sheartID = document.getElementById("fa-sheart");
    const sheartClass = document.getElementsByClassName("fa-solid fa-heart")[heartClassIndex];

    rheartID.addEventListener("click", (event) => {
      // heartThis.parentElement.childNodes[2].style.display = "none";
      rheartClass.style.display = "block";

      // heartThis.parentElement.childNodes[3].style.display = "block";
      sheartClass.style.display = "none";
    })
  }

  static heartClick = (heartThis) => {
      var heartClassIndex = Math.abs(Number(document.getElementsByClassName(`${heartThis.parentElement.classList.value}`).length) - Number(heartThis.attributes[3].value) - Number(document.getElementById(`${heartThis.parentElement.parentElement.id}`).childNodes.length))
      const rheartID = document.getElementById(heartThis.id);
      const rheartClass = document.getElementsByClassName("fa-regular fa-heart")[heartClassIndex];

      // const sheartID = document.getElementById("fa-sheart");
      const sheartClass = document.getElementsByClassName("fa-solid fa-heart")[heartClassIndex];

      rheartID.addEventListener("click", (event) => {
        // heartThis.parentElement.childNodes[3].style.display = "none";
        rheartClass.style.display = "none";

        // heartThis.parentElement.childNodes[2].style.display = "block";
        sheartClass.style.display = "block";
      })
  }

  static scrollSectionLeft = () => {
    const scrollButton = document.getElementById("vscroll-icons-container-left");
    const scrollSectionID = document.getElementById("vscroll-sections-container");

    scrollButton.addEventListener("click", () => {
      scrollSectionID.scrollLeft = scrollSectionID.scrollLeftMax;
    })
  }

   static scrollSectionRight = () => {
    const scrollButton = document.getElementById("vscroll-icons-container-right");
    const scrollSectionID = document.getElementById("vscroll-sections-container");

    scrollButton.addEventListener("click", () => {
      scrollSectionID.scrollLeft = -scrollSectionID.scrollLeftMax;
    })
  }



  async requestMovieData() {
    const movieResponseData = new Object();
    for (var request in movieData) {
      var clientRequest = await new httpClientRequest();
      clientRequest.get(movieRequestData[request], function (response) {
        movieResponseData[request] = response;
      });
    }
  }

  // driver code to begin api request
  async requestMovieFetchData() {
    // default number of pages and number of execution
    // var total_pages = 2;
    var requestArray = [];
    for (var requestFetch in movieRequestData) {
      // var clientRequest = new httpClientRequestFetch();

      var URL = movieRequestData[requestFetch];
      if (
        requestFetch !== "movieRequestTrendingDay" &&
        requestFetch !== "movieRequestGenre"
      ) {
        // option to control number of requests
        // for (var page = 1; page < total_pages; page++) {
          var requestData = await this.httpClientRequestFetch2(URL);
          // Object.assign(this.movieResponseFetchData[requestFetch], requestData);
          requestArray.push(requestData);
          this.movieResponseFetchData[requestFetch] = requestArray;
          // total_pages = requestData.total_pages
        // }
      } else {
        var requestData = await this.httpClientRequestFetch2(URL);
        // define properties with Object performant?
        // Object.defineProperties(this.movieResponseFetchData, requestFetch, { requestData })

        this.movieResponseFetchData[requestFetch] = requestData;
      }
    }
  }

  async createBanner() {
    await this.requestMovieFetchData();

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
    ).map((v) => v[1])[0];

    var movieDate = new Date(bannerData["release_date" || "first_air_date"])
      .toDateString()
      .split(" ");
    

    
    this.assertType(movieDate, "object", "Movie Date");
    
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
    this.displayMenu();

    // create icon account, logout, login, and etc. in navbar
    this.navIcons();

    // display account, logout, login, and etc. icon 
    // based on window innnerWidth condition
    this.navIconsDisplay();

    // this.createTitleImageStruct();
    
    this.createMovieGenre(); // beginning of function call chain
  } 


  // create set data structure containing
  // movie title and image on demand
  // based on movieRequestData object key
  // single responsibility 
  createTitleImageStruct = (requestKey) => {
     var pageTitleLen = this.movieResponseFetchData.movieRequestPopular.length;

      for (var pageTitle = 0; pageTitle < pageTitleLen; pageTitle++) {

      var arrayTitleLen = this.movieResponseFetchData.movieRequestPopular[pageTitle]["results"].length;

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



  createMovieGenre() {
    // await this.requestMovieFetchData()

    // create html container for two sections 
    // one section with base elements by genre
    // other section with base elements named by data request/movieRequestData object key
    // with title and image thumbnail as base elements wrapped in container
    const vscroll_sections_container = document.createElement("section");
    vscroll_sections_container.setAttribute("id", "vscroll-sections-container");

    document
      .getElementById("top-section-banner-container")
      .after(vscroll_sections_container);
    
    

    // SECTION: by genre
    const vscroll_div = document.createElement("div");
    vscroll_div.setAttribute("id", "movie-title-thumbnail-vscroll-container");

    
    document
      .getElementById("vscroll-sections-container")
      .appendChild(vscroll_div);
    
   
      // icon to indicate and navigate to other section
      const vscroll_icons_container_left = document.createElement("button");
      vscroll_icons_container_left.setAttribute("id", "vscroll-icons-container-left");
      vscroll_icons_container_left.setAttribute("onclick", "CreateElements.scrollSectionLeft()");
      document.getElementById("movie-title-thumbnail-vscroll-container").insertAdjacentElement("afterbegin", vscroll_icons_container_left);

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
      "movie-title-thumbnail-vscroll-container-apisection"
    );

   
    document
      .getElementById("movie-title-thumbnail-vscroll-container")
      .after(vscroll_apisection_div);
    
     // icon to indicate and navigate to other section
      const vscroll_icons_container_right = document.createElement("button");
      vscroll_icons_container_right.setAttribute("id", "vscroll-icons-container-right");
      vscroll_icons_container_right.setAttribute("onclick", "CreateElements.scrollSectionRight()");
      document.getElementById("movie-title-thumbnail-vscroll-container-apisection").insertAdjacentElement("afterbegin", vscroll_icons_container_right);

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
        `movie-title-thumbnail-hscroll-container-${movieGenreName}`
      );
      hscroll_container.setAttribute(
        "class",
        "movie-title-thumbnail-hscroll-container"
      );

      const genre = document.createElement("h1");

      genre.setAttribute("id", `movie-genre-${movieGenreName}`);
      genre.setAttribute("class", "movie-genre");
      genre.innerText = movieGenreArray[index]["name"];

      document
        .getElementById("vscroll-icons-container-left")
        .after(genre);
      // console.log(
      //   document.getElementById("movie-title-thumbnail-vscroll-container")
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
      buttonChevronLeft.setAttribute("onclick", `CreateElements.scrollLeft(this)`);
      // buttonChevronLeft.setAttribute("hscrollIndex", genreIndex)

      document.getElementsByClassName("chevron-wrapper")[genreIndex].appendChild(buttonChevronLeft);

      const buttonChevronRight = document.createElement("button");

      buttonChevronRight.setAttribute("id", `button-chevron-right-${movieGenreName}`);
      buttonChevronRight.setAttribute("class", "button-chevron-right");
      buttonChevronRight.setAttribute("type", "button");
      buttonChevronRight.setAttribute("onclick", `CreateElements.scrollRight(this)`);
      // buttonChevronRight.setAttribute("hscrollIndex", genreIndex)

      document.getElementsByClassName("chevron-wrapper")[genreIndex].appendChild(buttonChevronRight);

      
      const iconLeftChevron = document.createElement("i");

      iconLeftChevron.setAttribute("class", "fas fa-chevron-circle-left");
      iconLeftChevron.setAttribute("id", `left-chevron-${movieGenreName}`);

      const iconRightChevron = document.createElement("i");

      iconRightChevron.setAttribute("class", "fas fa-chevron-circle-right");
      iconRightChevron.setAttribute("id", `right-chevron-${movieGenreName}`);

      // document
      //   .getElementById("movie-genre")
      //   .insertAdjacentElement("afterend", chevronWrapper);

     
      document.getElementsByClassName("button-chevron-left")[genreIndex].appendChild(iconLeftChevron);

      document.getElementsByClassName("button-chevron-right")[genreIndex].appendChild(iconRightChevron);

      // second stage in function chain: create section, movie title, and image; genre division
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
          `movie-title-thumbnail-hscroll-apisection-container-${movieLocalTitle}`
        );
        hscroll_apisection_container.setAttribute(
          "class",
          "movie-title-thumbnail-hscroll-apisection-container"

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
        apiButtonChevronLeft.setAttribute("onclick", `CreateElements.scrollLeft(this)`);
        apiButtonChevronLeft.setAttribute("hscrollIndex", genreIndex)


        document.getElementsByClassName("chevron-apisection-wrapper")[genreIndex].appendChild(apiButtonChevronLeft);

        
        const apiButtonChevronRight = document.createElement("button");

        apiButtonChevronRight.setAttribute("id", `button-chevron-apisection-right-${movieLocalTitle}`);
        apiButtonChevronRight.setAttribute("class", "button-chevron-apisection-right");
        apiButtonChevronRight.setAttribute("type", "button");
        apiButtonChevronRight.setAttribute("onclick", `CreateElements.scrollRight(this)`);
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
        
        // second stage in function chain: create section, movie title, and image; api division
        this.createMovieTitle(key, true, movieLocalTitle);
      }
     
    }


    // function call to generate css gridrepeat property value
    this.gridRepeat();
  }


  // Object.entries(this.movieResponseFetchData.movieRequestGenre).forEach(v => Object.entries(v[1]).map(o => {

  //     const genre = document.createElement('h1');

  //     genre.setAttribute('id', 'movie-genre');
  //     genre.innerText = o[1]['name'];

  //     document.getElementById('movie-thumbnail-hscroll-wrapper').after(genre);

  //     this.createMovieTitle(o[1]['id']);
  // }));


  createMovieTitle(genre_id, genreBool, genre_name) {
    // TODO: review and maybe incorporate
    this.createTitleImageStruct("movieRequestPopular");

    
    
    // SECTION: by genre
    if (!genreBool) {
      var movieTitleLen =
        this.movieResponseFetchData.movieRequestPopular.length;
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
        genreIndexArray < this.movieGenreIds.length ;
        genreIndexArray++
      ) {
        // console.log(Array(movieTitles[titleIndex]["genre_ids"]).includes(genre_id));

        if (
          this.movieGenreIds[genreIndexArray].includes(genre_id)
        ) {
          if (
            !this.titleTracker.includes([...this.movieTitles][genreIndexArray] &&
              typeof [...this.movieTitles][genreIndexArray] == "string"
            )) {
            // console.log(Object.values(movieTitles[i])[2].includes(genre_id), movieTitles[i].title, movieTitles[i].poster_path )

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
            //     document.getElementById("movie-title-thumbnail-hscroll-container")
            //       .childElementCount
            //   )
            // );

            document
              .getElementById(`movie-title-thumbnail-hscroll-container-${genre_name}`).appendChild(hscroll_wrapper);
            document
              .getElementsByClassName("hscroll-wrapper")
            [indexClass].appendChild(title);

            // solution to first element in container having in inline-styling
            // possibly causing hover to not target element
            // while descendants of container not having 
            // document.getElementById(`movie-title-${genre_name}`).style.display = "none";
            // Aug 18, 2024: cause was other element movie title content in parent container 
            // overflowing causing recalculation of parent container sizing 

            // third stage in function chain: create section, movie title, and image; genre division
            this.createMovieThumbnails(
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

    

    // SECTION: by api elements (upcoming, now playing, trending, etc.)
    // genreBool prevent section of code from execute with each genre_id
    // and function call

    if (genreBool == true) {
      var key = genre_id;
      if (key !== "movieRequestGenre") {
        var movieTitleAPISectionLen =
          this.movieResponseFetchData[key].length - 1;

        for (
          var pageTitle = 0;
          pageTitle < movieTitleAPISectionLen;
          pageTitle++
        ) {
          for (
            var titleIndexObject = 0;
            titleIndexObject < movieTitleAPISectionLen;
            titleIndexObject++
          ) {
            this.movieTitlesAPISection.add(
              this.movieResponseFetchData[key][pageTitle]["results"][
                titleIndexObject
              ].title
            );
             this.movieImageAPISection.add(
              this.movieResponseFetchData[key][pageTitle]["results"][
                titleIndexObject
            ].poster_path
        );
            // console.log(
            //   this.movieResponseFetchData[key][pageTitle]["results"][
            //     titleIndexObject
            //   ].title
            // );
          }
        }
        // console.log(
        //   this.movieTitlesAPISection,
        //   this.movieTitlesAPISection.size,
        //   this.movieTitlesAPISection[0]
        // );

        // used to as reference and to identify element of class hscroll-wrapper 
        // and target & append title and image elements by offset
        // order of elements in data structure and order of operation critical
        var indexClass = 0;
        for (
          var titleIndexArray = 0;
          titleIndexArray < this.movieTitlesAPISection.size;
          titleIndexArray++
        ) {
          const hscroll_apisection_wrapper = document.createElement("div");
          hscroll_apisection_wrapper.setAttribute(
            "id",
            "hscroll-apisection-wrapper"
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
            [...this.movieTitlesAPISection][titleIndexArray];

          document
            .getElementById(
              `movie-title-thumbnail-hscroll-apisection-container-${genre_name}`
            )
            .appendChild(hscroll_apisection_wrapper);
          document
            .getElementsByClassName("hscroll-apisection-wrapper")
            [indexClass].appendChild(title_apisection);
          
          // third stage in function chain: create section, movie title, and image; api division
          this.createMovieThumbnails(
            [...this.movieImageAPISection][titleIndexArray],
            [...this.movieTitlesAPISection][titleIndexArray],
            indexClass,
            true
          );
          indexClass++;
          this.heartIndex++;
        }
      }
    }
    

    // title tracker will prevent the previously 
    // used movie title from being added
    // along with set data type
    // and rendered as an HTML element
    // this.titleTracker.push([...this.movieTitles][titleIndex]);

    // an assumption is made about the data structure of by the movieTitle and movieGenreIds
    // as determined by the length we assume a corresponding title to genre ids and
    // the data structure is complete based on our expectations
    if (titleIndexArray == this.movieTitles.size) {
      if (this.movieTitles.size == this.movieGenreIds.length) {
        console.log(
          `Movie title has an associated genre_ids object value, the data structure is complete.\nMovie Titles: ${this.movieTitles.size}\nMovie Genre Ids: ${this.movieGenreIds.size}`
        );
      } else {
        console.error(
          `Movie title does not have an associated genre_ids object value, the data structure is complete.\nMovie Titles: ${this.movieTitles.size}\n Movie Genre Ids: ${this.movieGenreIds.length}`
        );
      }
    }
  }


  createMovieThumbnails(imageMovie, titleMovie, classIndex, genreBool = false) {
    
    // var heartIndex = 0;
    // SECTION: by genre
    if (!genreBool && typeof titleMovie == "string") {
      const img = document.createElement("img");

      // console.log(imageMovie)

      // TODO: check and confirm attributes
      img.setAttribute("class", "movie-thumbnail");
      img.setAttribute("id", `movie-thumbnail-${titleMovie.toLowerCase().replace(" ", "")}`);
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
      iconSHeart.setAttribute("id", `fa-sheart-${titleMovie}`);
      iconSHeart.setAttribute("onclick", "CreateElements.heartClickSolid(this)");
      iconSHeart.setAttribute("classIndex", this.heartIndex);

      const iconRHeart = document.createElement("i");

      iconRHeart.setAttribute("class", "fa-regular fa-heart");
      iconRHeart.setAttribute("id", `fa-rheart-${titleMovie}`);
      iconRHeart.setAttribute("onclick", "CreateElements.heartClick(this)");
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

      // TODO: check and confirm attributes
      imgAPISection.setAttribute("class", "movie-thumbnail");
      imgAPISection.setAttribute("id", "movie-thumbnail");
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
      iconSHeartAPISection.setAttribute("id", `fa-sheart-apisection-${titleMovie}`);
      iconSHeartAPISection.setAttribute("onclick", "CreateElements.heartClickSolid(this)");
      iconSHeartAPISection.setAttribute("classIndex", this.heartIndex);

      const iconRHeartAPISection = document.createElement("i");

      iconRHeartAPISection.setAttribute("class", "fa-regular fa-heart");
      iconRHeartAPISection.setAttribute("id", `fa-rheart-apisection-${titleMovie}`);
      iconRHeartAPISection.setAttribute("onclick", "CreateElements.heartClick(this)");
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

      // document
      //   .getElementsByClassName("hscroll-apisection-wrapper")
      //   [classIndex].appendChild(iconGoogleHeart);

      //eventHandler for mouseover event change style of css element
      // document
      //   .getElementById("hscroll-apisection-wrapper")
      //   .addEventListener(
      //     "mouseover",
      //     (event) => (event.target.style.display = "flex")
      //   );
    }

    // invoke function to check if thumbnails created as condition to change css display none
    // if not, display none parent container of title, button, title, thumbnail
    this.movieGenreCheck();

    // increment class index for heart icon
    // when function executes
    // this.heartIndex++;
  }

  movieGenreCheck = () => {
   
    var movieGenreCount = document.getElementsByClassName("movie-genre").length;

    for (var classIndex = 0; movieGenreCount > classIndex; classIndex++) {
      // movie-title-thumbnail-hscroll-apisection-container
      var containerCount = document.getElementsByClassName("movie-title-thumbnail-hscroll-container")[classIndex].children.length;

      if (containerCount == 0) {
        document.getElementsByClassName("movie-genre")[classIndex].style.display = "none";
        document.getElementsByClassName("chevron-wrapper")[classIndex].style.display = "none";
        document.getElementsByClassName("movie-title-thumbnail-hscroll-container")[classIndex].style.display = "none";
      }
    }
  }

  // multiple options to make client request are for learning and growth purposes
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

    // var request = fetch(hURL);
    // var data = await request.json();
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
  
  // primary option to make client request
  // because of simplicity 
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

  

  // perform type checks
  assertType(value, type, paramName) {
    if (typeof value !== type) {
      throw new TypeError(`${paramName} should be of type ${type}`);
    }
  }

  
  
  

  createMenu = () => {  
    // console.log(window.innerWidth);
    const menuCreate = document.createElement("menu");

    menuCreate.setAttribute("id", "nav-menu");

    document.getElementById("top-nav-btn-container").before(menuCreate);
    
    menuCreate.appendChild(document.getElementById("top-nav-btn-container"));


    const menuButton = document.createElement("button");

    menuButton.setAttribute("id", "menu-dropbtn");

    menuButton.innerText = "menu";

    document.getElementById("nav-menu").insertAdjacentElement("afterbegin", menuButton);
    
  }

  displayMenu = () => {

    const menuRemove = document.getElementById("nav-menu");

    const menuButtonRemove = document.getElementById("menu-dropbtn");

    const navContainerAppend = document.querySelector("#top-nav-btn-container");

    // const navContainerElement = document.querySelector("#top-nav-btn-container");


    if (window.innerWidth < 768 && menuRemove == null) {

      this.createMenu();

      navContainerAppend.style.flexDirection = "column";
      navContainerAppend.style.display = "none";

      document.getElementById("nav-menu").addEventListener("mouseover", () => this.menuHover().menuHoverShow(), false);
      document.getElementById("nav-menu").addEventListener("mouseout", () => this.menuHover().menuHoverHide(), false);


      
      // document.getElementById("nav-menu").style.display = "flex";

      // document.getElementById("menu-dropbtn").style.display = "flex";

      // document.getElementById("top-nav-btn-container").style.display = "none";
      
    }
    else if (window.innerWidth > 768 && menuRemove != null) {

      
      // var appendContainer = menuRemove.remove(navContainerAppend);

      document.getElementById("nav-menu").removeEventListener("mouseover", () => this.menuHover().menuHoverShow, false);
      document.getElementById("nav-menu").removeEventListener("mouseout",  () => this.menuHover().menuHoverHide, false);

      menuRemove.remove();
      menuButtonRemove.remove();

      document.getElementById("top-nav-icon-link-logo").after(navContainerAppend);
  

      navContainerAppend.style.flexDirection = "row";
      navContainerAppend.style.display = "flex";


      // document.getElementById("nav-menu").style.display = "none";

      // document.getElementById("menu-dropbtn").style.display = "none";

      // document.getElementById("top-nav-btn-container").style.display = "flex";

      // const menu = document.getElementById("nav-menu");

      // const menuButton = document.getElementById("menu-dropbtn")

      // menu.remove();

      // menuButton.remove();

      // const top_nav_container = document.createElement("div");

      // top_nav_container.setAttribute(id, "top-nav-btn-container");

      // document.getElementById("top-nav-icon-link-logo").after(top_nav_container);

      // var menuItems = ["Movie", "Series", "EyeBleeding-Binge-Watchable"];

      // for (item in menuItems) {
      //   const link = document.createElement("a");

        
      //   // link.setAttribute(class, "");
      //   link.setAttribute(id, "top-nav-"+`${item}`+"-btn");
      //   link.setAttribute(title, `${item}`);
      //   link.setAttribute(role, "button");
      //   link.setAttribute(href, "");
      //   link.setAttribute(hreflang, "en");
      //   link.setAttribute(target, "_self");
      //   link.setAttribute(referrerpolicy, "");

      //   document.getElementById("top-nav-btn-container").appendChild(link);

      //   document.getElementById("top-nav-" + `${item}` + "-btn").insertAdjacentElement('beforebegin', `${item}`);

      // }
          

    }

  }

   

  menuHover = () => {

    const menuHoverShow = () => {
      // triggered by eventlistener mouseover dropdown of menu items
      document.querySelector("#top-nav-btn-container").style.display = "flex";
      document.querySelector("#nav-menu").style.top = "2.15rem";
    
    }

    const menuHoverHide = () => {
      // triggered by eventlistener mouseout 
      document.querySelector("#top-nav-btn-container").style.display = "none";
      document.querySelector("#nav-menu").style.top = "0";
    
    }
    return { menuHoverShow, menuHoverHide };
  }


  navIcons = () => {
    const iconAccount = document.createElement("img");
    iconAccount.setAttribute("id", "account-icon");
    iconAccount.setAttribute("src", "img/icon/account_icon.png");
    iconAccount.setAttribute("alt", "Icon of figure in shape of a person to stand for account icon");
    document.getElementById("top-nav-onboarding-group").appendChild(iconAccount);
    

    const iconLogOut = document.createElement("img");
    iconLogOut.setAttribute("id", "logout-icon");
    iconLogOut.setAttribute("src", "img/icon/logout_icon_clipart_8.png");
    iconLogOut.setAttribute("alt", "Icon of figure in shape of a person to stand for account icon");
    document.getElementById("account-icon").insertAdjacentElement("afterend", iconLogOut);
    let iconsLogOutDisplay = iconLogOut.width;

   
  }

  navIconsDisplay = () => {
    let iconsAccountDisplay = document.getElementById("account-icon").width;
    let iconsLogOutDisplay = document.getElementById("logout-icon").width;
    
    if (window.innerWidth  < 556 ) {
    
      document.getElementById("nav-account-bg-offset").style.display = "none";
      document.getElementById("account-icon").style.display = "block";
      
      
      document.getElementById("nav-logout-bg-offset").style.display = "none";
      document.getElementById("logout-icon").style.display = "block";
      
    
    }
    
    else if (window.innerWidth  > 556) {
      
      document.getElementById("nav-account-bg-offset").style.display = "block";
      document.getElementById("account-icon").style.display = "none";
      
      
      document.getElementById("nav-logout-bg-offset").style.display = "block";
      document.getElementById("logout-icon").style.display = "none";
       
      // document.getElementById("nav-account-bg-offset").innerText = "Account";
      // document.getElementById("account-icon").remove();
      // document.getElementById("account-icon").style.display = "none";
      
      // document.getElementById("nav-logout-bg-offset").innerText = "Log Out";
      // document.getElementById("logout-icon").remove();
      // document.getElementById("logout-icon").style.display = "none";
  
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

_ = (function () {
  var createElements = new CreateElements();
  createElements.createBanner();
  // createElements.movieGenreCheck();
  // createElements.createMovieGenre();
  // createElements.gridRepeat();
  // createElements.createMenu();
})();


// different approaches to create event handler
// keep for learning and growth purposes
// may revisit code in future
var createElements = new CreateElements();
// document.body.onload = createElements.createMenu;
// window.addEventListener("load", () => createElements.createMenu(), false);
window.addEventListener("resize", createElements.displayMenu, false);
window.addEventListener("resize", createElements.navIconsDisplay, false);
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
