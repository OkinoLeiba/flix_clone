/**
 * @name HTMLBody
 * @description Class to encapsulate the creation to body of of html 
 * @author Okino Kamali Leiba
 * @class
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/

export default class HTMLBody {

    
    createBody = () => {

        // create body of html append to html after head tag
        // const body = document.createElement("body");
        // document.head.after(body);
        // document.getElementsByTagName("html").append(body);

        // create section one top banner
        const sectionOneBanner = document.createElement("section");
        sectionOneBanner.setAttribute("id", "top-section-banner-container");
        document.body.append(sectionOneBanner);
        // document.getElementsByTagName("body").append("top-section-banner-container");

        //create nav bar append to top section banner
        const navBanner = document.createElement("nav");
        navBanner.setAttribute("id", "top-desktop-nav");
        document.getElementById("top-section-banner-container").append(navBanner);

        // create elements in nav bar
        const navATag = document.createElement("a");
        navATag.setAttribute("id", "top-nav-icon-link-logo");
        navATag.setAttribute("class", "top-nav-icon-bar-item-hover");
        navATag.setAttribute("title", "");
        navATag.setAttribute("role", "link");
        navATag.setAttribute("href", "");
        navATag.setAttribute("hreflang", "en-US");
        navATag.setAttribute("target", "_self");
        navATag.setAttribute("referrerpolicy", "origin");
        document.getElementById("top-desktop-nav").append(navATag);

        const navH1Tag = document.createElement("h1");
        navH1Tag.setAttribute("id", "top-nav-icon-image-text");
        navH1Tag.textContent = "NETFLEX";
        document.getElementById('top-nav-icon-link-logo').append(navH1Tag);

        const navIMGTag = document.createElement("img");
        navIMGTag.setAttribute("id", "top-nav-icon-image-logo");
        navIMGTag.setAttribute("src", "https://toppng.com/uploads/preview/netflix-logo-vector-free-download-11574237114rh16slxpn2.png");
        navIMGTag.setAttribute("alt", "Netflix red lettering logo");
        navIMGTag.setAttribute("role", "img");
        navIMGTag.setAttribute("width", 30);
        navIMGTag.setAttribute("height", 30);
        navIMGTag.setAttribute("draggable", "false");
        navIMGTag.setAttribute("loading", "eager");
        navIMGTag.setAttribute("fetchpriority", "high");
        navIMGTag.setAttribute("decoding", "async");
        document.getElementById('top-nav-icon-image-text').after(navIMGTag);

        const navButtonContainer = document.createElement("div");
        navButtonContainer.setAttribute("id", "top-nav-btn-container");
        document.getElementById('top-nav-icon-link-logo').after(navButtonContainer);

        // elements within navButtonContainer
        const movieLink = document.createElement("a");
        movieLink.setAttribute("id", "top-nav-movie-btn");
        movieLink.setAttribute("class", "top-nav-btn");
        movieLink.setAttribute("title", "movie");
        movieLink.setAttribute("role", "button");
        movieLink.setAttribute("href", "");
        movieLink.setAttribute("hreflang", "ca");
        movieLink.setAttribute("target", "_self");
        movieLink.setAttribute("referrerpolicy", "");
        movieLink.textContent = "Movie";
        document.getElementById("top-nav-btn-container").appendChild(movieLink);

        const seriesLink = document.createElement("a");
        seriesLink.setAttribute("id", "top-nav-series-btn");
        seriesLink.setAttribute("class", "top-nav-btn");
        seriesLink.setAttribute("title", "series");
        seriesLink.setAttribute("role", "button");
        seriesLink.setAttribute("href", "");
        seriesLink.setAttribute("hreflang", "ga");
        seriesLink.setAttribute("target", "_self");
        seriesLink.setAttribute("referrerpolicy", "");
        seriesLink.textContent = "Series";
        document.getElementById("top-nav-btn-container").appendChild(seriesLink);

        const ebwLink = document.createElement("a");
        ebwLink.setAttribute("id", "top-nav-ebw-btn");
        ebwLink.setAttribute("class", "top-nav-btn");
        ebwLink.setAttribute("title", "eyeBleeding_binge_watchable");
        ebwLink.setAttribute("role", "button");
        ebwLink.setAttribute("href", "");
        ebwLink.setAttribute("hreflang", "es");
        ebwLink.setAttribute("target", "_self");
        ebwLink.setAttribute("referrerpolicy", "");
        ebwLink.textContent = "EyeBleeding-Binge-Watchable";
        document.getElementById("top-nav-btn-container").appendChild(ebwLink);
        // end of navButtonContainer with links
    
        const navInput = document.createElement("input");
        navInput.setAttribute("id", "top-nav-search-input");
        navInput.setAttribute("type", "text");
        navInput.setAttribute("placeholder", "Search...");
        navInput.setAttribute("aria-placeholder", "Search...");
        navInput.setAttribute("width", 10);
        navInput.setAttribute("height", 8);
        navInput.setAttribute("aria-label", "Search Input Field");
        navInput.setAttribute("autocapitalize", "off");
        navInput.setAttribute("autocomplete", "off");
        navInput.setAttribute("inputmode", "search");
        document.getElementById("top-nav-btn-container").after(navInput);
    
        // create nav button container 
        const navButtonWrapper = document.createElement("div");
        navButtonWrapper.setAttribute("id", "top-nav-onboarding-group")
        document.getElementById("top-nav-search-input").after(navButtonWrapper);

        // elements in nav button container
        const loginButton = document.createElement("button");
        loginButton.setAttribute("id", "nav-login-bg-offset");
        loginButton.setAttribute("type", "button");
        loginButton.setAttribute("name", "login-btn");
        loginButton.textContent = "Log In";
        document.getElementById("top-nav-onboarding-group").appendChild(loginButton);
    
        const signupButton = document.createElement("button");
        signupButton.setAttribute("id", "nav-signup-bg-offset");
        signupButton.setAttribute("type", "button");
        signupButton.setAttribute("name", "signup-btn");
        signupButton.textContent = "Sign Up";
        document.getElementById("top-nav-onboarding-group").appendChild(signupButton);
    
        const accountButton = document.createElement("button");
        accountButton.setAttribute("id", "nav-account-bg-offset");
        accountButton.setAttribute("type", "button");
        accountButton.setAttribute("name", "account-btn");
        accountButton.textContent = "Account";
        document.getElementById("top-nav-onboarding-group").appendChild(accountButton);
    
        const logoutButton = document.createElement("button");
        logoutButton.setAttribute("id", "nav-logout-bg-offset");
        logoutButton.setAttribute("type", "logout");
        logoutButton.setAttribute("name", "logout-btn");
        logoutButton.textContent = "Log Out";
        document.getElementById("top-nav-onboarding-group").appendChild(logoutButton);
        // end of button group

        const profileIMGTag = document.createElement("img");
        profileIMGTag.setAttribute("id", "top-nav-profile-circle");
        profileIMGTag.setAttribute("src", "img/Black Panther.jpg");
        profileIMGTag.setAttribute("alt", "A profile pic for the user or default image");
        profileIMGTag.setAttribute("role", "img");
        profileIMGTag.setAttribute("width", "auto");
        profileIMGTag.setAttribute("height", "auto");
        profileIMGTag.setAttribute("draggable", "false");
        profileIMGTag.setAttribute("loading", "eager");
        profileIMGTag.setAttribute("fetchpriority", "high");
        profileIMGTag.setAttribute("decoding", "async");
        document.getElementById("top-nav-onboarding-group").after(profileIMGTag);
        // end of nav


        // create left side panel
        //TODO: right code to comment section
        const leftSidePanel = document.createElement("div");
        leftSidePanel.setAttribute("id", "left-side-panel");
        document.getElementById("top-desktop-nav").after(leftSidePanel);

        const leftSidePanelMenu = document.createElement("div");
        leftSidePanelMenu.setAttribute("id", "left-side-menu");
        document.getElementById("left-side-panel").appendChild(leftSidePanelMenu);

        const leftSidePanelMenuInner = document.createElement("div");
        leftSidePanelMenuInner.setAttribute("id", "left-side-menu-inner");
        document.getElementById("left-side-menu").appendChild(leftSidePanelMenuInner);

        const leftSidePanelLinksMovie = document.createElement("a");
        leftSidePanelLinksMovie.setAttribute("class", "left-side-menu-links");
        leftSidePanelLinksMovie.setAttribute("href", "");
        leftSidePanelLinksMovie.setAttribute("hreflang", "es");
        leftSidePanelLinksMovie.setAttribute("target", "_top");
        leftSidePanelLinksMovie.setAttribute("rel", "external");
        leftSidePanelLinksMovie.setAttribute("referrerpolicy", "no-referrer");
        leftSidePanelLinksMovie.textContent = "Movie";
        document.getElementById("left-side-menu-inner").appendChild(leftSidePanelLinksMovie);

        const leftSidePanelLinksSeries = document.createElement("a");
        leftSidePanelLinksSeries.setAttribute("class", "left-side-menu-links");
        leftSidePanelLinksSeries.setAttribute("href", "");
        leftSidePanelLinksSeries.setAttribute("hreflang", "es");
        leftSidePanelLinksSeries.setAttribute("target", "_top");
        leftSidePanelLinksSeries.setAttribute("rel", "external");
        leftSidePanelLinksSeries.setAttribute("referrerpolicy", "no-referrer");
        leftSidePanelLinksSeries.textContent = "Series";
        document.getElementById("left-side-menu-inner").appendChild(leftSidePanelLinksSeries);

        const leftSidePanelLinksEBW = document.createElement("a");
        leftSidePanelLinksEBW.setAttribute("class", "left-side-menu-links");
        leftSidePanelLinksEBW.setAttribute("href", "");
        leftSidePanelLinksEBW.setAttribute("hreflang", "es");
        leftSidePanelLinksEBW.setAttribute("target", "_top");
        leftSidePanelLinksEBW.setAttribute("rel", "external");
        leftSidePanelLinksEBW.setAttribute("referrerpolicy", "no-referrer");
        leftSidePanelLinksEBW.textContent = "EyeBleeding-Binge-Watchable";
        document.getElementById("left-side-menu-inner").appendChild(leftSidePanelLinksEBW);
        // end of left side panel

        // create center banner that container main img
        const centerBanner = document.createElement("div");
        centerBanner.setAttribute("id", "top-center-full-banner");
        document.getElementById("left-side-panel").after(centerBanner);

        const leftBannerBlur = document.createElement("div");
        leftBannerBlur.setAttribute("id", "banner-left-shadow-blur");
        document.getElementById("top-center-full-banner").appendChild(leftBannerBlur);

        const bannerContainerFull = document.createElement("div");
        bannerContainerFull.setAttribute("id", "top-center-full-banner-container");
        document.getElementById("banner-left-shadow-blur").after(bannerContainerFull);

        const bannerImg = document.createElement("img");
        bannerImg.setAttribute("id", "top-center-full-banner-image");
        bannerImg.setAttribute("src", "img/BP_Letter.jpg");
        bannerImg.setAttribute("alt", "Movie main banner");
        bannerImg.setAttribute("role", "img");
        bannerImg.setAttribute("width", "auto");
        bannerImg.setAttribute("height", "auto");
        bannerImg.setAttribute("draggable", "false");
        bannerImg.setAttribute("loading", "eager");
        bannerImg.setAttribute("fetchpriority", "high");
        bannerImg.setAttribute("decoding", "async");
        document.getElementById("top-center-full-banner-container").after(bannerImg);

        const titleButtonContainer = document.createElement("div");
        titleButtonContainer.setAttribute("id", "title_button-container");
        document.getElementById("top-center-full-banner-image").after(titleButtonContainer);

        // child elements in title button container
        const titleHeaderBanner = document.createElement("h1");
        titleHeaderBanner.setAttribute("id", "left-banner-title");
        titleHeaderBanner.textContent = "Black Panther";
        document.getElementById("title_button-container").appendChild(titleHeaderBanner);

        const buttonPlay = document.createElement("button");
        buttonPlay.setAttribute("id", "banner-button-p");
        buttonPlay.setAttribute("type", "button");
        buttonPlay.setAttribute("name", "play-btn");
        buttonPlay.textContent = "Play";
        document.getElementById("left-banner-title").after(buttonPlay);

        const buttonWL = document.createElement("button");
        buttonWL.setAttribute("id", "banner-button-wl");
        buttonWL.setAttribute("type", "button");
        buttonWL.setAttribute("name", "watch_later-btn");
        buttonWL.textContent = "Watch Later";
        document.getElementById("banner-button-p").after(buttonWL);
    
        const buttonTL = document.createElement("button");
        buttonTL.setAttribute("id", "banner-button-tl");
        buttonTL.setAttribute("type", "button");
        buttonTL.setAttribute("name", "bt-the_list-btn");
        buttonTL.textContent = "The List";
        document.getElementById("banner-button-p").after(buttonTL);

        const bannerText = document.createElement("p");
        bannerText.setAttribute("id", "banner-text-date");
        bannerText.textContent = "Feb 15, 2028";
        document.getElementById("banner-button-tl").after(bannerText);

        const bannerDesc = document.createElement("p");
        bannerDesc.setAttribute("id", "banner-text-description");
        bannerDesc.textContent = "T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.";
        document.getElementById("banner-text-date").after(bannerDesc);
        
        // create banner blur for bottom of banner img with img element
        const bannerBottomBlurIMG = document.createElement("img");
        bannerBottomBlurIMG.setAttribute("id", "banner-bottom-shadow-blur");
        bannerBottomBlurIMG.setAttribute("src", "");
        bannerBottomBlurIMG.setAttribute("alt", "Blur background at the bottom of banner image.");
        bannerBottomBlurIMG.setAttribute("role", "img");
        bannerBottomBlurIMG.setAttribute("width", "100vw");
        bannerBottomBlurIMG.setAttribute("height", "10px");
        bannerBottomBlurIMG.setAttribute("draggable", "false");
        bannerBottomBlurIMG.setAttribute("loading", "eager");
        bannerBottomBlurIMG.setAttribute("fetchpriority", "low");
        bannerBottomBlurIMG.setAttribute("decoding", "async");
        document.getElementById("title_button-container").after(bannerBottomBlurIMG);

        // create banner blur for bottom of banner img with div element
        const bannerBottomBlur = document.createElement("div");
        bannerBottomBlur.setAttribute("id", "banner-bottom-shadow-blur");
        document.getElementById("banner-bottom-shadow-blur").after(bannerBottomBlur);
    
    }

}        

        
        