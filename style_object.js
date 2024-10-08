/**
 * @name styleFuncBody
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

(function styleFuncBody() {


/* ==========================================================================
   Global Styles
   ========================================================================== */
/* TODO: consider creating default properties for global styles */
    const HTML = document.querySelector("html");
    const htmlStyle = {
        backgroundColor: "black !important",
        boxSizing: "border-box",
        color: "orange",
    };

    const BODY = document.body;
    const bodyStyle = {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Times Roman, Impact, Haettenschweiler, 'Arial Narrow Bold', sans_serif",
        margin: 0,
        overflowX: "hidden",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
    };

    Object.assign(BODY.style, bodyStyle);

/* ==========================================================================
   Custom Styles
   ========================================================================== */

/* --------------------------------------------------------------------------
   Nav Styles
   -------------------------------------------------------------------------- */    

    const IMAGELOGO = document.querySelector("#top-nav-icon-image-logo");
    const imageLogoStyle = {
        display: "none",
        backgroundColor: "transparent",
        width: "2.5em",
        height: "3.6875em",
    };

    Object.assign(IMAGELOGO.style, imageLogoStyle);

    const TOP_NAV_BTN = document.querySelector(".top-nav-btn");
    const topNavBtnStyle = {
        color: "darkred",
        textDecoration: "none",
    };

    Object.assign(TOP_NAV_BTN.style, topNavBtnStyle);


    const DESKTOPNAV = document.querySelector("#top-desktop-nav");
    const topDesktopNavStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        justifyContent: "space-between",
        height: "3vh",
        margin: "4px 4px",
        paddingLeft: "3px",
        paddingRight: "3.5px",
        paddingTop: "12px",
        paddingBottom: "12px",
        borderRadius: "7px",
        fontSize: "1em",
        textDecoration: "none",
    };

    Object.assign(DESKTOPNAV.style, topDesktopNavStyle);

    const NAVICONBATITEM = document.querySelector("#top-nav-icon-bar-item-hover");
    const topNavIconBarItemStyle = {
        imageRendering: "auto",
        width: "auto",
        backgroundColor: "transparent",
        float: "left",
        padding: "4px 4px",
        border: "none",
    };

    Object.assign(NAVICONBATITEM.style, topNavIconBarItemStyle);

    const NAVSEARCHINPUT = document.querySelector("#top-nav-search-input");
    const topNavSearchInputStyle = {
        width: "9.5em",
        margin: "0px 0px",
        height: "1.5em",
        borderColor: black,
        borderRadius: "25px",
        padding: "0 2px",
    };

    Object.assign(NAVSEARCHINPUT.style, topNavSearchInputStyle);


    const NAVONBOARDINGGROUP = document.querySelector("#top-nav-onboarding-group");
    const topNavOnboardingGroup = {
        display: "flex",
        flexDirection: "row",
        margin: "4px 0",
        padding: "1em",
        gap: "8px",
    };

    Object.assign(NAVONBOARDINGGROUP.style, topNavOnboardingGroup);


    const navBGOffSetStyle = {
        color: root.shadowColor,
        cursor: "pointer",
        fontSize: "1.05rem",
        lineHeight: "0.75rem",
        borderRadius: "50px",
        width: "5.25em",
        height: "1.5em",
    };

    const navBGOffSetALStyle = {
        backgroundColor: "red",
        color: "black",
    };

    const LOGINBGOFFSET = document.querySelector("#nav-login-bg-offset");
    const SIGNUPBGOFFSET = document.querySelector("#nav-signup-bg-offset");
    const ACCOUNTBGOFFSET = document.querySelector("#nav-account-bg-offset");
    const LOGOUTBGOFFSET = document.querySelector("#nav-logout-bg-offset");

    // TODO: review and confirm if assign function accepts array as argument
    Object.assign([LOGINBGOFFSET.style, SIGNUPBGOFFSET.style, ACCOUNTBGOFFSET.style, LOGOUTBGOFFSET.style], navBGOffSetStyle);

    Object.assign([LOGINBGOFFSET.style, ACCOUNTBGOFFSET.style], navBGOffSetALStyle);


    const AccLogIconStyle = {
        width: "20px",
        height: "20px",
        padding: "4px 0",
        /* backgroundColor: "transparent", */
        /* color: "black", */
        /* colorRendering: "optimizeQuality" */
    };

    const ACCICON = document.querySelector("#account-icon");
    const LOGICON = document.querySelector("#logout-icon");

    Object.assign([ACCICON.style, LOGICON.style], AccLogIconStyle);


    const PROFILECIRCLE = document.querySelector("#top-nav-profile-circle");
    const profileCircleStyle = {
        borderColor: "black",
        borderRadius: "50px",
        width: "24px",
        height: "24px",
    };   

    Object.assign(PROFILECIRCLE.style, profileCircleStyle)

    const LEFTSIDEPANEL = document.querySelector("#left-side-panel");
    const leftSidePanelStyle = {
        display: "none",
    };

    Object.assign(LEFTSIDEPANEL.style, leftSidePanelStyle);

/* --------------------------------------------------------------------------
   Banner Hero Styles
   -------------------------------------------------------------------------- */

})();