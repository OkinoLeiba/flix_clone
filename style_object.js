(function styleClassBody() {


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
})();