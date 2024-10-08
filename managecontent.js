/**
 * @name SaveContent
 * @description Function will update object with user's favorite content
 * @author Okino Kamali Leiba
 * @function
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/
const fs = require("fs");
const jsonData = require("./show_content.json");

export default class ManageContent {
    
    saveContent(userID, showTitle) {
        if (userID === undefined || showTitle === undefined) {
            return Error("Data is missing.")
        }
        else {
            // confirm if user already exist in json file 
            if (jsonData["userSavedContent"][userID]) {
                // confirm if value is already in object
                if (!jsonData["userSavedContent"][userID].contains(showTitle)) {
                    jsonData["userSavedContent"][userID].append(showTitle);
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
        if (userID === undefined || showTitle === undefined) {
            return Error("Data is missing.")
        }
        else {
            // confirm if user already exist in json file 
            if (jsonData["userSavedContent"][userID]) {
                // confirm if value is already in object
                if (!jsonData["userSavedContent"][userID].contains(showTitle)) {
                    jsonData["userSavedContent"][userID].splice(jsonData["userSavedContent"][userID].indexOf(showTitle) + 1, 1)
                }
            }
        }
        // if no update should overwrite with the same json object
        fs.writeFileSync("./show_content.json", JSON.stringify(jsonData, null, 2));
    }
    
}
    
