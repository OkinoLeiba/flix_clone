/**
 * @name Main
 * @description Main entry point of the program
 * @author Okino Kamali Leiba
 * @function
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/

import HTMLBody from "./html_body.js";
import HTMLBodyString from "./html_body_string.js";
import CreateElements from "./javascript.js";

// main entry point to program
(function () {
    
    
    let htmlBody = new HTMLBody();
    htmlBody.createBody();

    // let htmlBodyString = new HTMLBodyString();
    // htmlBodyString.createBody();

    let createElements = new CreateElements();
    createElements.createBanner();

})();