
(function styleClass() {


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
})();