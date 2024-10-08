/**
 * @name NavIcon
 * @description Class to manage nav icon creation and display
 * @author Okino Kamali Leiba
 * @class
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/

export default class NavIcon {


  navIcons = () => {
    const iconAccount = document.createElement("img");
    iconAccount.setAttribute("id", "account-icon");
    iconAccount.setAttribute("src", "img/icon/account_icon.png");
    iconAccount.setAttribute("alt", "Icon of figure in shape of a person to stand for account icon");
    document.getElementById("top-nav-onboarding-group").appendChild(iconAccount);
    

    const iconLogOut = document.createElement("img");
    iconLogOut.setAttribute("id", "logout-icon");
    iconLogOut.setAttribute("src", "img/icon/logout_icon_clipart_8.png");
    iconLogOut.setAttribute("alt", "Icon of figure in shape of a person to stand for account icon");
    document.getElementById("account-icon").insertAdjacentElement("afterend", iconLogOut);
    let iconsLogOutDisplay = iconLogOut.width;
  }

  navIconsDisplay = () => {
    let iconsAccountDisplay = document.getElementById("account-icon").width;
    let iconsLogOutDisplay = document.getElementById("logout-icon").width;
    
    if (window.innerWidth  < 556 ) {
    
      document.getElementById("nav-account-bg-offset").style.display = "none";
      document.getElementById("account-icon").style.display = "block";
      
      
      document.getElementById("nav-logout-bg-offset").style.display = "none";
      document.getElementById("logout-icon").style.display = "block";
      
    
    }
    
    else if (window.innerWidth  > 556) {
      
      document.getElementById("nav-account-bg-offset").style.display = "block";
      document.getElementById("account-icon").style.display = "none";
      
      
      document.getElementById("nav-logout-bg-offset").style.display = "block";
      document.getElementById("logout-icon").style.display = "none";
      
      // keep for learning and growth purposes
      // may revisit code in future
      // document.getElementById("nav-account-bg-offset").innerText = "Account";
      // document.getElementById("account-icon").remove();
      // document.getElementById("account-icon").style.display = "none";
      
      // document.getElementById("nav-logout-bg-offset").innerText = "Log Out";
      // document.getElementById("logout-icon").remove();
      // document.getElementById("logout-icon").style.display = "none";
  
    }  
  }

}