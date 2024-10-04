/**
 * @name MenuManagement
 * @description Class to handle creation, display, and events of menu in nav bar
 * @author Okino Kamali Leiba
 * @class
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/

export default class MenuManagement {


    createMenu = () => {
        // console.log(window.innerWidth);
        const menuCreate = document.createElement("menu");
        menuCreate.setAttribute("id", "nav-menu");
        document.getElementById("top-nav-btn-container").before(menuCreate);
        menuCreate.appendChild(document.getElementById("top-nav-btn-container"));

        const menuButton = document.createElement("button");
        menuButton.setAttribute("id", "menu-dropbtn");
        menuButton.innerText = "menu";
        document.getElementById("nav-menu").insertAdjacentElement("afterbegin", menuButton);
    
    }

    displayMenu = () => {
        const menuRemove = document.getElementById("nav-menu");
        const menuButtonRemove = document.getElementById("menu-dropbtn");
        const navContainerAppend = document.querySelector("#top-nav-btn-container");


        if (window.innerWidth < 768 && menuRemove == null) {
            this.createMenu();

            navContainerAppend.style.flexDirection = "column";
            navContainerAppend.style.display = "none";

            document.getElementById("nav-menu").addEventListener("mouseover", () => this.menuHover().menuHoverShow(), false);
            document.getElementById("nav-menu").addEventListener("mouseout", () => this.menuHover().menuHoverHide(), false);


      
            // document.getElementById("nav-menu").style.display = "flex"
            // document.getElementById("menu-dropbtn").style.display = "flex";
            // document.getElementById("top-nav-btn-container").style.display = "none";
      
        }
        else if (window.innerWidth > 768 && menuRemove != null) {
            // var appendContainer = menuRemove.remove(navContainerAppend);

            document.getElementById("nav-menu").removeEventListener("mouseover", () => this.menuHover().menuHoverShow, false);
            document.getElementById("nav-menu").removeEventListener("mouseout", () => this.menuHover().menuHoverHide, false);

            menuRemove.remove();
            menuButtonRemove.remove();

            document.getElementById("top-nav-icon-link-logo").after(navContainerAppend);
  
            navContainerAppend.style.flexDirection = "row";
            navContainerAppend.style.display = "flex";

            // different approach to onHover event dropdown of menu items
            // control css display and recreate html menu and dropdown menu with items

            // document.getElementById("nav-menu").style.display = "none";
            // document.getElementById("menu-dropbtn").style.display = "none";
            // document.getElementById("top-nav-btn-container").style.display = "flex";

            // const menu = document.getElementById("nav-menu");
            // const menuButton = document.getElementById("menu-dropbtn")

            // menu.remove();

            // menuButton.remove();

            // const top_nav_container = document.createElement("div");
            // top_nav_container.setAttribute(id, "top-nav-btn-container");
            // document.getElementById("top-nav-icon-link-logo").after(top_nav_container);

            // var menuItems = ["Movie", "Series", "EyeBleeding-Binge-Watchable"];

            // for (item in menuItems) {
            //   const link = document.createElement("a");

            //   // link.setAttribute(class, "");
            //   link.setAttribute(id, "top-nav-"+`${item}`+"-btn");
            //   link.setAttribute(title, `${item}`);
            //   link.setAttribute(role, "button");
            //   link.setAttribute(href, "");
            //   link.setAttribute(hreflang, "en");
            //   link.setAttribute(target, "_self");
            //   link.setAttribute(referrerpolicy, "");

            //   document.getElementById("top-nav-btn-container").appendChild(link);

            //   document.getElementById("top-nav-" + `${item}` + "-btn").insertAdjacentElement('beforebegin', `${item}`);

            // }
        }

    }


    menuHover = () => {

        const menuHoverShow = () => {
            // triggered by eventlistener mouseover dropdown of menu items
            document.querySelector("#top-nav-btn-container").style.display = "flex";
            document.querySelector("#nav-menu").style.top = "2.15rem";
    
        }

        const menuHoverHide = () => {
            // triggered by eventlistener mouseout 
            document.querySelector("#top-nav-btn-container").style.display = "none";
            document.querySelector("#nav-menu").style.top = "0";
    
        }
        return { menuHoverShow, menuHoverHide };
    }
}