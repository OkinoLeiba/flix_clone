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


        NavBGOffSet = `
        color: root.shadowColor;
        cursor: pointer;
        font-size: 1.05rem;
        line-height: 0.75rem;
        border-radius: 50px;
        width: 5.25em;
        height: 1.5em;`;

        NavBGOffSetAL = `
        background-color: red;
        color: black;`;

        // TODO: review and confirm destruct and assignment array
        document.querySelector("#nav-login-bg-offset").style.cssText = [NavBGOffSet, NavBGOffSetAL];
        document.querySelector("#nav-signup-bg-offset").style.cssText = NavBGOffSet;
        document.querySelector("#nav-account-bg-offset").style.cssText = [NavBGOffSet, NavBGOffSetAL];
        document.querySelector("#nav-logout-bg-offset").style.cssText = NavBGOffSet;
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
        color: var(${root["shadowColor"]});
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
        
        document.querySelector("#title_button-container").style.cssText = `
            padding: 8px 0 8px 4px;
            top: 10em;
            left: 8px;
            position: absolute;
            width: inherit;
            max-width: 50rem;
            line-height: 8px;
            font-size: 0.875em;`;
        
        document.querySelector("h1#left-banner-title").style.cssText = `
            font-size: 1.875rem;
            line-height: 0.75rem;
            margin-left: 0;
            margin-bottom: 1.50rem;`;
        
        document.querySelector("#banner-text-date").style.cssText = `
            font-size: 0.875rem; /* 14px */
            font-weight: 400;
            line-height: 1.25rem; /* 20px */
            color: gray;
            margin-bottom: 4px;`;
        
        document.querySelector("#banner-text-description").style.cssText = `
            width: 100vw;
            max-width: 90%;
            line-height: 16px;
            font-weight: 300;
            margin-top: 0;`;
        
        
        bannerButton = `
            margin: 2px 4px;
            padding: 8px;
            border: 0.04rem solid darkgrey;
            color: black;
            font-size: 0.625em;`;
        
        bannerButtonColor = `
            background-color: transparent;
            color: white;`

        
        document.querySelector("button#banner-button-p").style.cssText = [bannerButton, bannerButtonColor];
        document.querySelector("button#banner-button-tl").style.cssText = bannerButton;
        document.querySelector("button#banner-button-wl").style.cssText = [bannerButton, bannerButtonColor];


        document.querySelector("#banner-bottom-shadow-blur").style.cssText = `
            height: 1em;
            margin: 0;
            /* box-shadow: 0 0 0 0 var(${root["shadowColor"]}); */
            /* background-color: black; */
            background-image: linear-gradient(to bottom, var(${root["shadowColor"]}), var(${root["shadowColor"]}) 50%, var(${root["shadowColor"]}) 50%, var(${root["shadowColor"]}) 50%);
            -webkit-filter: blur(1em); /* for older browsers */
            filter: blur(1em);
            /* filter: drop-shadow(var(${root["shadowColor"]}) 1rem 1rem 1rem); */`
        
        document.querySelector("#banner-left-shadow-blur").style.cssText = `
            width: 1.25em;
            margin: 0;
            background-image: linear-gradient(to bottom, var(${root["shadowColor"]}), var(${root["shadowColor"]}) 50%, var(${root["shadowColor"]}) 50%, var(${root["shadowColor"]}) 75%);
            background-color: var(${root["shadowColor"]});
            -webkit-filter: blur(1em); /* for older browsers */
            filter: blur(1em);
            /* filter: drop-shadow(var(${root["shadowColor"]}) 1rem 1rem 1rem); */`;
        
        document.querySelector("#top-section-banner-container").style.cssText = `
            margin: 0;
            padding: 0;`
        
        
        /* --------------------------------------------------------------------------
        Movie: Title, {Genre, API}, Image Styles
        -------------------------------------------------------------------------- */

        document.querySelector("#vscroll-sections-container").style.cssText = `
            display: flex;
            flex-direction: row;
            max-width: 100vw;
            padding-top: 5px;
            margin: 0;
            overflow-y: scroll;
            overflow-x: scroll;
            scrollbar-width: none; /* Firefox */
            scroll-snap-type: mandatory;
            /* scroll-snap-points-x: repeat(100vw); */
            scroll-snap-type: x mandatory;`
        
        document.querySelector("#vscroll-sections-container::-webkit-scrollbar").style.cssText = `
             display: none; /* Chrome, Safari and Opera */`
        
        VscrollIconLR = `
            display: inline-flex;
            position: relative;
            gap: 0;
            padding: 0;
            background-color: aqua;
            mix-blend-mode: difference;
            filter: invert(100%);
            -webkit-filter: invert(100%);
            justify-content: flex-end;
            cursor: pointer;`;
        VscrollIconL = `left: 0;`;
        VscrollIconR = `left: 99%;`;


        VSCROLLICONSLEFT = document.querySelector("#vscroll-icons-container-left").style.cssText = [VscrollIconLR, VscrollIconL];
        VSCROLLICONSLEFT = document.querySelector("#vscroll-icons-container-right").style.cssText = [VscrollIconLR, VscrollIconR];


        MovieSection = `
            color: var(--titleColor);
            font-size: 1.75rem;
            line-height: 1.25;
            margin-bottom: 0;`
        
        MOVIEGENRE = document.querySelector(".movie-genre").style.cssText = MovieSection;
        MOVIEAPISECTION = document.querySelector(".movie-apisection-title").style.cssText = MovieSection;


        ChevronWrapper = `
            display: flex;
            gap: 8px;`;
        
        
        CHEVRONWRAPPER = document.querySelector(".chevron-wrapper").style.cssText = ChevronWrapper;
        CHEVRONAPIWRAPPER = document.querySelector(".chevron-apisection-wrapper").style.cssText = ChevronWrapper;


        ButtonChevron = `
            border: none;
            background-color: tan;
            mix-blend-mode: lighten;
            border-radius: 100%;`;
        
        document.querySelector(".button-chevron-left").style.cssText = ButtonChevron;
        document.querySelector(".button-chevron-right").style.cssText = ButtonChevron;
        document.querySelector(".button-chevron-apisection-left").style.cssText = ButtonChevron;
        document.querySelector(".button-chevron-apisection-right").style.cssText = ButtonChevron;
        

        LRChevron = `
            font-size: 1.25em;
            /* line-height: 1.25em; */
            background-color: whitesmoke;`
        
        document.querySelector("#left-chevron").style.cssText = LRChevron;
        document.querySelector("#right-chevron").style.cssText = LRChevron;
        document.querySelector("#left-apisection-chevron").style.cssText = LRChevron;
        document.querySelector("#right-apisection-chevron").style.cssText = LRChevron;


        ChevronCircle = `
            font-size: 1.55em;
            /* line-height: 1.25em; */
            mix-blend-mode: darken;`
        
        // TODO: test whether querySelector will find given the format
        document.querySelector('i[class="fas fa-chevron-circle-left"]').style.cssText = ChevronCircle;
        document.querySelector('i[class="fas fa-chevron-circle-right"]').style.cssText = ChevronCircle;

        document.querySelector("#movie-title-image-vscroll-container").style.cssText = `
            padding-left: 8px;
            padding-right: 8px;
            width: 100vw;
            margin-right: -52px;`;
        
        document.querySelector("#movie-title-image-vscroll-container").style.cssText = `
            padding-left: 3.5em;
            width: 100vw;
            height: max-content;
            margin: 0 1.2em;`;
        
        MovieTIHscrollContainer = `
            width: auto;
            height: auto;
            overflow-x: scroll;
            overflow-y: hidden;
            margin: 0 auto;
            padding: 0.05em;
            display: grid;
            grid-template-columns: repeat(var(--grid-repeat), auto) !important;
            gap: 10px;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            border-radius: 10px;
            align-items: center;
            justify-content: flex-start;`;
        
        document.querySelector(".movie-title-image-hscroll-container").style.cssText = MovieTIHscrollContainer;
        document.querySelector(".movie-title-image-hscroll-apisection-container").style.cssText = MovieTIHscrollContainer;
        
         
    })();