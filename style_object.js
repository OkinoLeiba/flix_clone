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
    const topNavBtnClassStyle = {
        color: "darkred",
        textDecoration: "none",
    };

    Object.assign(TOP_NAV_BTN.style, topNavBtnClassStyle);


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


    const TOPNAVBTNCONTAINER = document.querySelector("#top-nav-btn-container");
    const topNavBtnContStyle = {
        display: "flex",
        position: "relative",
        flexDirection: "row",
        gap: "8px",
        fontSize: "0.9em",
        zIndex: 1,
    };

    Object.assign(TOPNAVBTNCONTAINER.style, topBannerStyle);

    const NAVMENU = document.querySelector("#nav-menu");
    const navMenuStyle = {
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        gap: "8px",
        padding: 0,
        margin: 0,
    };

    Object.assign(NAVMENU.style, navMenuStyle);

    const MENUDROPBTN = document.querySelector("#menu-dropbtn");
    const menuDropBtnStyle = {
        fontSize: "1.20em",
        lineHeight: "0.75em;",
        backgroundColor: "black",
        color: root["shadowColor"],
        cursor: "pointer",
        border: "none",
        padding: "4px 4px",
    };

    Object.assign(MENUDROPBTN, style, menuDropBtnStyle);

    const TOPNAVBTN = document.querySelector("#top-nav-btn");
    const topNavBtnIdStyle = {};

    Object.assign(TOPNAVBTN.style, topNavBtnIdStyle);

    const TOPNAVICONLINK = document.querySelector("#top-nav-icon-link-logo");
    const topNavIconLinkStyle = {
        position: "relative",
        left: 0,
        cursor: "pointer",
        backgroundColor: "transparent",
        textDecoration: "none",
    };

    Object.assign(TOPNAVICONLINK.style, topNavIconLinkStyle);

    const LEFTSIDEMENUINNER = document.querySelector("#left-side-menu-inner ");
    const leftSideMenuInnerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        margin: "0 auto",
    };

    Object.assign(LEFTSIDEMENUINNER.style, leftSidePanelStyle);

    // const TOPCENTERFULLBANNER = document.querySelector("#top-center-full-banner");
    // const topBannerStyle = {
    //     height: "100lvw",
    // }; // Review: precedence

    Object.assign(TOPCENTERFULLBANNER.style, topBannerStyle);

    const TOPCENTERFULLBANNER = document.querySelector("#top-center-full-banner");
    const topBannerStyle = {
        position: "relative",
        margin: 0,
        paddingTop: 0,
        width: "100vw",
        height: "inherit",
        color: "#d1d5db",
    };

    Object.assign(TOPCENTERFULLBANNER.style, topBannerStyle);


    const TOPCENTERFULLBANNERCONTAINER = document.querySelector("#top-center-full-banner-container");
    const topBannerContainerStyle = {
        width: "100vw",
        height: "auto",
    };

    Object.assign(TOPCENTERFULLBANNERCONTAINER.style, topBannerContainerStyle);


    const TOPCENTERFULLBANNERLEFTBLUR = document.querySelector("#top-center-full-banner-left_blur");
    const topBannerLeftBlurStyle = {
        width: "auto",
        position: "absolute",
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.07), black)",
        zIndex: "auto",
    };

    Object.assign(TOPCENTERFULLBANNERLEFTBLUR.style, topBannerLeftBlurStyle);


    const TOPCENTERFULLBANNERIMAGE = document.querySelector("#top-center-full-banner-image");
    const topBannerImage = {
        width: "100vw",
        height: "550px",
        objectFit: "cover",
        aspectRatio: "auto",
    };

    Object.assign(TOPCENTERFULLBANNERIMAGE.style, topBannerImage);
    

    const TITLEBTNCONTAINER = document.querySelector("#title_button-container");
    const titleBtnContainerStyle = {
        padding: "8px 0 8px 4px",
        top: "10em",
        left: "8px",
        position: "absolute",
        width: "inherit",
        maxWidth: "50rem",
        lineHeight: "8px",
        fontSize: "0.875em",
    };

    Object.assign(TITLEBTNCONTAINER.style, titleBtnContainerStyle);

    const LEFTBANNERTITLE = document.querySelector("h1#left-banner-title");
    const leftBannerTitleStyle = {
        fontSize: "1.875rem",
        lineHight: "0.75rem",
        marginLeft: 0,
        marginBottom: "1.50rem",
    };

    Object.assign(LEFTBANNERTITLE.style, leftSidePanelStyle);

    const BANNERTEXTDATE = document.querySelector("#banner-text-date");
    const bannerTextDateStyle = {
        fontSize: '0.875rem', /* 14px */
        fontWeight: 400,
        lineHeight: "1.25rem", /* 20px */
        color: "gray",
        marginBottom: "4px",
    };

    Object.assign(BANNERTEXTDATE.style, bannerTextDateStyle);


    const BANNERTEXTDESCRIP = document.querySelector("#banner-text-description");
    const bannerTextDescripStyle = {
        width: "100vw",
        maxWidth:" 90%",
        lineHeight: "16px",
        fontWeight: 300,
        marginTop: 0,
    };

    Object.assign(BANNERTEXTDESCRIP.style, bannerTextDescripStyle);

    const bannerButtonStyle = {
        margin: "2px 4px",
        padding: "8px",
        border: "0.04rem solid darkgrey",
        color: "black",
        fontSize: "0.625em",
    };

    const bannerButtonColorStyle = {
        backgroundColor: "transparent",
        color: "white",
    }; 
    
    const BANNERBUTTONP = document.querySelector("button#banner-button-p");
    const BANNERBUTTONTL = document.querySelector("button#banner-button-tl");
    const BANNERBUTTONWL = document.querySelector("button#banner-button-wl");

    Object.assign([BANNERBUTTONP, BANNERBUTTONTL, BANNERBUTTONWL], bannerButtonStyle);

    Object.assign([BANNERBUTTONP, BANNERBUTTONWL], bannerButtonColorStyle);


    const SHADOWBLUR = document.querySelector("#banner-bottom-shadow-blur");
    const shadowBlurStyle = {
        height: "1em",
        margin: 0,
        /* boxShadow: `0 0 0 0 var(${root["shadowColor"]})`, */
        /* backgroundColor: "black", */
        backgroundImage: `linear-gradient(to bottom, var(${root["shadowColor"]}), var(${root["shadowColor"]}) 50%, var(${root["shadowColor"]}) 50%, var(${root["shadowColor"]}) 50%)`,
        //-webkit-filter: "blur(1em)", /* for older browsers */
        filter: "blur(1em)",
        /* filter: `drop-shadow(var(${root["shadowColor"]}) 1rem 1rem 1rem)`, */
    };

    Object.assign(SHADOWBLUR.style, shadowBlurStyle);

    const BANNERLEFTBLUR = document.querySelector("#banner-left-shadow-blur");
    const bannerLeftBlurStyle = {
        width: "1.25em",
        margin: 0,
        backgroundImage: `linear-gradient(to bottom, var(${root["shadowColor"]}), var(${root["shadowColor"]}) 50%, var(${root["shadowColor"]}) 50%, var(${root["shadowColor"]}) 75%)`,
        backgroundColor: `var(${root["shadowColor"]})`,
        //-webkit-filter: "blur(1em)", /* for older browsers */
        filter: "blur(1em)",
        /* filter: `drop-shadow(var(${root["shadowColor"]}) 1rem 1rem 1rem)`, */
    };
    Object.assign(BANNERLEFTBLUR.style, bannerLeftBlurStyle);

    const TOPSECTIONBANNERCONTAINER = document.querySelector("#top-section-banner-container");
    const topSectionBannerConatinerSytle = {
        margin: 0,
        padding: 0,
    };

    Object.assign(TOPSECTIONBANNERCONTAINER.style, topSectionBannerConatinerSytle);

/* --------------------------------------------------------------------------
   Movie: Title, {Genre, API}, Image Styles
   -------------------------------------------------------------------------- */

   
    





})();