/**
 * @name GridRepeat
 * @description Function manipulate css element gridrepeat
 * @author Okino Kamali Leiba
 * @function
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/

import assertType from "./asserttype.js";

  // set css element property gridrepeat
export default function gridRepeat() {
    

  var grid_repeat = Array();
  var grid_repeat_API =  Array();
  // var grid_repeat =
  //   document.getElementById("movie-title-image-hscroll-container")
  //     .childElementCount >
  //   document.getElementById(
  //     "movie-title-image-hscroll-apisection-container"
  //   ).childElementCount
  //     ? document.getElementById("movie-title-image-hscroll-container")
  //         .childElementCount
  //     : document.getElementById(
  //         "movie-title-image-hscroll-apisection-container"
  //     ).childElementCount;

  var classElementsContainer = document.getElementsByClassName("movie-title-image-hscroll-container");
  for (const key of classElementsContainer) {
    
    grid_repeat.push(key.childNodes.length);
  }

  var classElementsContainerAPI = document.getElementsByClassName("movie-title-image-hscroll-container");
    for (const key of classElementsContainerAPI) {
    
    grid_repeat_API.push(key.childNodes.length);
  }


  var grid_repeat_max = Math.max(grid_repeat_API.reduce((a, b) => Math.max(a, b), -Infinity), grid_repeat.reduce((a, b) => Math.max(a, b), -Infinity));


  assertType(grid_repeat_max, "number", "Grid Repeat");

  if (Math.max(grid_repeat_max) < 20) grid_repeat = 100;

  document.documentElement.style.setProperty(
    "--grid-repeat",
    grid_repeat_max * 3
  ); 
  

}
