/**
 * @name CreateBodyString
 * @description Class to encapsulate the creation to body tag of of html using a string 
 * @author Okino Kamali Leiba
 * @class
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/


const STRINGBODY = '<!--Banner Hero and Nav Section--><section id="top-section-banner-container"><nav id="top-desktop-nav"><a \
class="top-nav-icon-bar-item-hover" id="top-nav-icon-link-logo" title="" role="link" href="" hreflang="en-US" target="_self"\
referrerpolicy="origin"><h1 id="top-nav-icon-image-text">NETFLEX</h1><img id="top-nav-icon-image-logo"\
src="https://toppng.com/uploads/preview/netflix-logo-vector-free-download-11574237114rh16slxpn2.png" alt="Netflix red lettering logo"\
role="img" width=30 height=30 draggable="false" loading="eager" fetchpriority="high" decoding="async"></a><div \
id="top-nav-btn-container"><a class="top-nav-btn" id="top-nav-movie-btn" title="movie" role="button" href="" hreflang="ca"\
target="_self" referrerpolicy="">Movie</a><a class="top-nav-btn" id="top-nav-seris-btn" title="series" role="button" href="" \
hreflang="ga" target="_self" referrerpolicy="">Series</a><a class="top-nav-btn" id="top-nav-ebw-btn" title="eyeBleeding_binge_watchable"\
 role="button" href="" hreflang="es" target="_self" referrerpolicy="">EyeBleeding-Binge-Watchable</a></div><input\
id="top-nav-search-input" type="search" placeholder="Search..." aria-placeholder="Search..." width="10" height="8"\
aria-label="Search Input Field" autocapitalize="off" autocomplete="off" inputmode="search"><div id="top-nav-onboarding-group"><button\
id="nav-login-bg-offset" type="button" name="login-btn">Log In</button><button id="nav-signup-bg-offset" type="button" \
name="signup-btn">Sign Up</button><button id="nav-account-bg-offset" type="button" name="account-btn">Account</button><button \
id="nav-logout-bg-offset" type="button" name="logout-btn">Log Out</button></div><img id="top-nav-profile-circle" \
src="img/Black Panther.jpg" alt="A profile pic for the user or default image." draggable="false" width="auto" height="auto" role="img" \
loading="eager" fetchpriority="high" decoding="async"></nav><div id="left-side-panel"><div id="left-side-menu"><div \
id="left-side-menu-inner"><a class="left-side-menu-links" href="" hreflang="es" target="_top" rel="external" \
referrerpolicy="no-referrer">Movie</a><a class="left-side-menu-links" href="" hreflang="as" target="-top" rel="external" \
referrerpolicy="no-referrer">Series</a><a class="left-side-menu-links" href="" hreflang="en" target="-top" rel="external" \
referrerpolicy="no-referrer">EyeBleeding-Binge-Watchable</a></div></div></div><!--Banner Hero Div--><div id="top-center-full-banner">\
<div id="banner-left-shadow-blur"></div><div id="top-center-full-banner-container"><img id="top-center-full-banner-image" \
src="img/BP_Letter.jpg" alt="movie main banner" role="img" width="auto" height="auto" loading="eager" decoding="async" \
fetchpriority="high"><div id="title_button-container"><h1 id="left-banner-title">Black Panther</h1><button id="banner-button-p" \
type="button" name="play-btn">Play</button><button id="banner-button-wl" type="button" name="watch_later-btn">Watch Later</button>\
<button id="banner-button-tl" type="button" name="bt-the_list-btn">The List</button><p id="banner-text-date">Feb 15, 2028</p>\
<p id="banner-text-description">T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into\
a new future and must confront a challenger from his country\'s past.</p></div><!--<img id="banner-bottom-shadow-blur" src="" alt="" \
width="100%" height="10" role="img" loading="lazy" fetchpriority="low" decoding="auto">--><div id="banner-bottom-shadow-blur"></div>\
</div></div></section>';

// document fragment???
/*const STRINGBODYTEMPLATE = template(`<!--Banner Hero and Nav Section--><section id="top-section-banner-container"><nav id="top-desktop-nav"><a \
class="top-nav-icon-bar-item-hover" id="top-nav-icon-link-logo" title="" role="link" href="" hreflang="en-US" target="_self"\
referrerpolicy="origin"><h1 id="top-nav-icon-image-text">NETFLEX</h1><img id="top-nav-icon-image-logo"\
src="https://toppng.com/uploads/preview/netflix-logo-vector-free-download-11574237114rh16slxpn2.png" alt="Netflix red lettering logo"\
role="img" width=30 height=30 draggable="false" loading="eager" fetchpriority="high" decoding="async"></a><div \
id="top-nav-btn-container"><a class="top-nav-btn" id="top-nav-movie-btn" title="movie" role="button" href="" hreflang="ca"\
target="_self" referrerpolicy="">Movie</a><a class="top-nav-btn" id="top-nav-seris-btn" title="series" role="button" href="" \
hreflang="ga" target="_self" referrerpolicy="">Series</a><a class="top-nav-btn" id="top-nav-ebw-btn" title="eyeBleeding_binge_watchable"\
 role="button" href="" hreflang="es" target="_self" referrerpolicy="">EyeBleeding-Binge-Watchable</a></div><input\
id="top-nav-search-input" type="search" placeholder="Search..." aria-placeholder="Search..." width="10" height="8"\
aria-label="Search Input Field" autocapitalize="off" autocomplete="off" inputmode="search"><div id="top-nav-onboarding-group"><button\
id="nav-login-bg-offset" type="button" name="login-btn">Log In</button><button id="nav-signup-bg-offset" type="button" \
name="signup-btn">Sign Up</button><button id="nav-account-bg-offset" type="button" name="account-btn">Account</button><button \
id="nav-logout-bg-offset" type="button" name="logout-btn">Log Out</button></div><img id="top-nav-profile-circle" \
src="img/Black Panther.jpg" alt="A profile pic for the user or default image." draggable="false" width="auto" height="auto" role="img" \
loading="eager" fetchpriority="high" decoding="async"></nav><div id="left-side-panel"><div id="left-side-menu"><div \
id="left-side-menu-inner"><a class="left-side-menu-links" href="" hreflang="es" target="_top" rel="external" \
referrerpolicy="no-referrer">Movie</a><a class="left-side-menu-links" href="" hreflang="as" target="-top" rel="external" \
referrerpolicy="no-referrer">Series</a><a class="left-side-menu-links" href="" hreflang="en" target="-top" rel="external" \
referrerpolicy="no-referrer">EyeBleeding-Binge-Watchable</a></div></div></div><!--Banner Hero Div--><div id="top-center-full-banner">\
<div id="banner-left-shadow-blur"></div><div id="top-center-full-banner-container"><img id="top-center-full-banner-image" \
src="img/BP_Letter.jpg" alt="movie main banner" role="img" width="auto" height="auto" loading="eager" decoding="async" \
fetchpriority="high"><div id="title_button-container"><h1 id="left-banner-title">Black Panther</h1><button id="banner-button-p" \
type="button" name="play-btn">Play</button><button id="banner-button-wl" type="button" name="watch_later-btn">Watch Later</button>\
<button id="banner-button-tl" type="button" name="bt-the_list-btn">The List</button><p id="banner-text-date">Feb 15, 2028</p>\
<p id="banner-text-description">T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into\
a new future and must confront a challenger from his country\'s past.</p></div><!--<img id="banner-bottom-shadow-blur" src="" alt="" \
width="100%" height="10" role="img" loading="lazy" fetchpriority="low" decoding="auto">--><div id="banner-bottom-shadow-blur"></div>\
</div></div></section>`);*/

export default class CreateBodyString {
    

    // function to return string body
    createStringBody() {
        return STRINGBODY;
    }

    createBody() {
        let createStringBody = new CreateBodyString();
        // string is append but not parsed by dom
        // document.body.append(createStringBody.createStringBody()));


        // document.body.innerHTML = STRINGBODY;

        // document.body.innerHTML = createStringBody.createStringBody();

        const domParse = new DOMParser().parseFromString(STRINGBODY, 'text/html');
        document.body.appendChild(domParse.body.firstElementChild);

        // document.body.appendChild(STRINGBODYTEMPLATE);
    }

}