/**
 * @name ManageContent
 * @description Class contains functions that will update object with user's favorite content
 * @author Okino Kamali Leiba
 * @function
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/

// import fs from './node_modules/fs';
// const fs = require("fs")
const jsonData = require("./show_content.json");

export default class ManageContent {
    // fs = require("fs");
    // jsonData = require("./show_content.json");
    
    saveContent(userID, showTitle) {
        if (userID === "" || showTitle === "") {
            return Error("Data is missing.")
            console.log("Data is missing")
        }
        else {
            // confirm if user already exist in json file 
            if (jsonData["userSavedContent"][userID]) {
                // confirm if value is already in object
                if (!jsonData["userSavedContent"][userID].includes(showTitle)) {
                    jsonData["userSavedContent"][userID].push(showTitle);
                }
            }
            else {
                jsonData["userSavedContent"][userID] = [showTitle];
            }
        }
        // if no update should overwrite with the same json object
        fs.writeFileSync("./show_content.json", JSON.stringify(jsonData, null, 2));
    }

    deleteContent(userID, showTitle) {
        if (userID === "" || showTitle === "") {
            return Error("Data is missing.")
        }
        else {
            // confirm if user already exist in json file 
            if (jsonData["userSavedContent"][userID]) {
                // confirm if value is already in object
                if (jsonData["userSavedContent"][userID].includes(showTitle)) {
                    jsonData["userSavedContent"][userID].splice(jsonData["userSavedContent"][userID].indexOf(showTitle), 1)
                }
            }
            else {
                console.log("User does not exist.")
            }
        }
        // if no update should overwrite with the same json object
        fs.writeFileSync("./show_content.json", JSON.stringify(jsonData, null, 2));
    }
    
}

    
