/**
 * @name StyleFunc
 * @description Function to assign css properties to html targets
 * @author Okino Kamali Leiba
 * @function
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/

const root = {
    gridRepeat: "100",
    shadowColor: "#a9a9a963",
    titleColor: "#d9b9b984",
}

    (function styleFunc() {


        /* ==========================================================================
           Global Styles
           ========================================================================== */
        /* TODO: consider creating default properties for global styles */
        document.querySelector("html").style.cssText = `
        background-color: black !important;
        box-sizing: border-box;
        color: blue;`;

        // document.html.style.cssText = `
        //     background-color: black !important;
        //     box-sizing: border-box;`;

        document.body.style.cssText = `
        position: relative;
        display: flex;
        flex-direction: column;
        font-family: Times Roman, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        margin: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;`;

        /* ==========================================================================
           Custom Styles
           ========================================================================== */

        /* --------------------------------------------------------------------------
           Nav Styles
           -------------------------------------------------------------------------- */

        document.querySelector("#top-nav-icon-image-logo").style.cssText = `
        display: none;
        background-color: transparent;
        width: 2.5em;
        height: 3.6875em;`;

        document.querySelector(".top-nav-btn").style.cssText = `
        color:darkred;
        text-decoration: none;`;

        document.querySelector("#top-desktop-nav").style.cssText = `
        display:flex;
        flex-direction: row;
        align-items:center;
        position: relative;
        justify-content: space-between;
        height: 3vh;
        margin: 4px 4px;
        padding-left: 3px;
        padding-right: 3.5px;
        padding-top: 12px;
        padding-bottom: 12px;
        border-radius: 7px;
        font-size: 1em;
        text-decoration: none;`;

        document.querySelector("#top-nav-icon-bar-item-hover").style.cssText = `
        image-rendering: auto;
        width: auto;
        background-color: transparent;
        float: left;
        padding: 4px 4px;
        border: none;`;

        document.querySelector("#top-nav-search-input").style.cssText = `
        width: 9.5em;
        margin: 0px 0px;
        height: 1.5em;
        border-color: black;
        border-radius: 25px;
        padding: 0 2px;`;

        document.querySelector("#top-nav-onboarding-group").style.cssText = `
        display: flex;
        flex-direction: row;
        margin: 4px 0;
        padding: 1em;
        gap: 8px;`;


        navBGOffSet = `
        color: root.shadowColor;
        cursor: pointer;
        font-size: 1.05rem;
        line-height: 0.75rem;
        border-radius: 50px;
        width: 5.25em;
        height: 1.5em;`;

        navBGOffSetAL = `
        background-color: red;
        color: black;`;

        // TODO: review and confirm destruct and assignment array
        document.querySelector("#nav-login-bg-offset").style.cssText = [navBGOffSet, navBGOffSetAL];
        document.querySelector("#nav-signup-bg-offset").style.cssText = navBGOffSet;
        document.querySelector("#nav-account-bg-offset").style.cssText = [navBGOffSet, navBGOffSetAL];
        document.querySelector("#nav-logout-bg-offset").style.cssText = navBGOffSet;
        // Review latter
        //     #nav-signup-bg-offset,
        // #nav-logout-bg-offset {
        //     background-color: transparent;
        // }

        // #nav-login-bg-offset,
        // #nav-signup-bg-offset {
        //     display: none;
        // }

        // #nav-account-bg-offset,
        // #nav-logout-bg-offset {
        //     display: block;
        //     }
        AccLogIcon = ` 
        width: 20px;
        height: 20px;
        padding: 4px 0;
        /* background-color: transparent; */
        /* color: black; */
        /* color-rendering: optimizeQuality; */`;

        document.querySelector("#account-icon").style.cssText = AccLogIcon;
        document.querySelector("#logout-icon").style.cssText = AccLogIcon;

        document.querySelector("#top-nav-profile-circle").style.cssText = `
        border-color: black;
        border-radius: 50px;
        width: 24px;
        height: 24px;`;

        document.querySelector("#left-side-panel").style.cssText = `display: none;`;


        /* --------------------------------------------------------------------------
           Banner Hero Styles
           -------------------------------------------------------------------------- */


        document.querySelector("#top-nav-btn-container").style.cssText = `
        display: flex;
        position: relative;
        flex-direction: row;
        gap: 8px;
        font-size: 0.9em;
        z-index: 1;`;

        document.querySelector("#nav-menu").style.cssText = `   
        position: relative;
        display: inline-flex;
        flex-direction: column;
        gap: 8px;
        padding: 0;
        margin: 0;`;

        document.querySelector("#menu-dropbtn").style.cssText = `
        font-size: 1.20em;
        line-height: 0.75em;
        background-color: black;
        color: var(--shadowColor);
        cursor: pointer;
        border: none;
        padding: 4px 4px;`;

        document.querySelector("#top-nav-btn").style.cssText = ` `;

        document.querySelector("#top-nav-icon-link-logo").style.cssText = `
        position: relative;
        left: 0;
        cursor: pointer;
        background-color: transparent;
        text-decoration: none;`;

        document.querySelector("#left-side-menu-inner").style.cssText = `
            display:flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0 auto;`;

        document.querySelector("#top-center-full-banner").style.cssText = `
        height: 100lvw;`; // Review: precedence

        document.querySelector("#top-center-full-banner").style.cssText = `
            position: relative;
            margin: 0;
            padding-top: 0;
            width: 100vw;
            height: inherit;
            color: #d1d5db;`;
        
        document.querySelector("#top-center-full-banner-container").style.cssText = `
            width: 100vw;
            height: auto;`;
        
        document.querySelector("#top-center-full-banner-left_blur").style.cssText = `
            width: auto;
            position: absolute;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.07), black);
            z-index: auto;`;
        
        document.querySelector("#top-center-full-banner-image").style.cssText = `
            width: 100vw;
            height: 550px;
            object-fit: cover;
            aspect-ratio: auto;`;


    })();