/**
 * @name UtilityHeartScroll
 * @description Utility class that handles events scrolling the movie images in container and click heart transforms solid and empty
 * @author Okino Kamali Leiba
 * @class
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/
import manageContent from "./managecontent.js";


  
export default class UtilityHeartScroll {
  

  
  static scrollLeft = (getThis) => {
    var movieGenre = getThis.attributes.id.value.split("-")[getThis.attributes.id.value.split("-").length - 1];
    var wrapperID = getThis.attributes.class.value == "button-chevron-apisection-left" ? `hscroll-apisection-wrapper-${movieGenre}` : `hscroll-wrapper-${movieGenre}`;
    var scrollWidth = document.getElementById(wrapperID).clientWidth;
    
    var scrollID = getThis.attributes.class.value == "button-chevron-apisection-left" ? `movie-title-image-hscroll-apisection-container-${movieGenre}` : `movie-title-image-hscroll-container-${movieGenre}`;

      const scrollButtonLeft = document.getElementById(getThis.attributes.id.value);
      const hscrollContainer = document.getElementById(scrollID);
      scrollButtonLeft.addEventListener("click", () => {
      hscrollContainer.scrollLeft -= scrollWidth;
      })

  }

  static scrollRight = (getThis) => {
    var movieGenre = getThis.attributes.id.value.split("-")[getThis.attributes.id.value.split("-").length - 1];
    var wrapperID = getThis.attributes.class.value == "button-chevron-apisection-right" ? `hscroll-apisection-wrapper-${movieGenre}` : `hscroll-wrapper-${movieGenre}`;
    var scrollWidth = document.getElementById(wrapperID).clientWidth;
    
    var scrollID = getThis.attributes.class.value == "button-chevron-apisection-right" ? `movie-title-image-hscroll-apisection-container-${movieGenre}` : `movie-title-image-hscroll-container-${movieGenre}`;

      const scrollButtonRight = document.getElementById(getThis.attributes.id.value);
      const hscrollContainer = document.getElementById(scrollID);
      scrollButtonRight.addEventListener("click", () => {
      hscrollContainer.scrollLeft += scrollWidth;
    })

  }

  static heartClickSolid = (heartThis) => {
    // var heartClassIndex = Math.abs(Number(document.getElementsByClassName(`${heartThis.parentElement.classList.value}`).length) - Number(heartThis.attributes[3].value) - Number(document.getElementById(`${heartThis.parentElement.parentElement.id}`).childNodes.length))
    const solidHeartID = document.getElementById(heartThis.id);
    // const rheartClass = document.getElementsByClassName("fa-regular fa-heart")[heartClassIndex];

    const regularHeartID = document.getElementById(heartThis.id.replace('sheart', 'rheart'));
    // const sheartClass = document.getElementsByClassName("fa-solid fa-heart")[heartClassIndex];

    solidHeartID.addEventListener("click", (event) => {
      // heartThis.parentElement.childNodes[2].style.display = "none";
      regularHeartID.style.display = "block";

      // heartThis.parentElement.childNodes[3].style.display = "block";
      solidHeartID.style.display = "none";

      // manageContent.saveContent("User1234", heartThis.id);
      
    })
  }

  static heartClick = (heartThis) => {
      // var heartClassIndex = Math.abs(Number(document.getElementsByClassName(`${heartThis.parentElement.classList.value}`).length) - Number(heartThis.attributes[3].value) - Number(document.getElementById(`${heartThis.parentElement.parentElement.id}`).childNodes.length))
      const regularHeartID = document.getElementById(heartThis.id);
      // const rheartClass = document.getElementsByClassName("fa-regular fa-heart")[heartClassIndex];

    
      
      const solidHeartID = document.getElementById(heartThis.id.replace('rheart', 'sheart'));
      // const sheartClass = document.getElementsByClassName("fa-solid fa-heart")[heartClassIndex];

      regularHeartID.addEventListener("click", (event) => {
        // heartThis.parentElement.childNodes[3].style.display = "none";
        regularHeartID.style.display = "none";

        // heartThis.parentElement.childNodes[2].style.display = "block";
        solidHeartID.style.display = "block";

        // manageContent.deleteContent("User1234", heartThis.id)
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

}


// provide global scope of class
// solve reference error for onclick event
window.UtilityHeartScroll = UtilityHeartScroll;