/**
 * @name HTMLDATAREQUEST
 * @description Class container function and data to make request for URL data from remote source
 * @author Okino Kamali Leiba
 * @class
 * @returns {object} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/
  
export default class HTMLDATAREQUEST {
  // multiple options to make client request are for learning and growth purposes
  async httpClientRequest(hURL) {
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

  async httpClientRequestFetch(hURL) {
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
  async httpClientSimpleRequest(hURL, data = {}) {
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



  
  
  