

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