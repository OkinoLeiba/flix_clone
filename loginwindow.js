/**
 * @name LogInWindow
 * @description Function will create login window
 * @author Okino Kamali Leiba
 * @function
 * @returns {void} 
 */

/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/


logInWindow = () => {
    // let logwindow = window.open(url = "login_window", target = "_parent", features = "fullscreen=no, resizable=no, scrollbars=no, status=no, width=100, height=200");

    const popupWindowContainer = document.createElement("div");
    popupWindowContainer.setAttribute("class", "window-container");

    document.body.appendChild(popupWindowContainer);

    const loginFormContainer = document.createElement("div");
    loginFormContainer.setAttribute("class", "form-popup");
    loginFormContainer.setAttribute("id", "form-popup-id");

    document.getElementsByClassName("window-container").appendChild(loginFormContainer);

    const popupForm = document.createElement("form");
    popupForm.setAttribute("action", "");
    popupForm.setAttribute("class", "popup-form");

    document.getElementById("form-popup-id").appendChild(popupForm);

    const formHeader = document.createElement("h2");
    formHeader.setAttribute("id", "form-header")
    formHeader.innerHTML = "Please Log in";

    document.getElementsByClassName("popup-form").after(formHeader);

    const formLabelEmail = document.createElement("label"); 
    formLabelEmail.setAttribute("for", "email");
    formLabelEmail.setAttribute("id", "form-label-email");

    document.getElementById("form-header").after(formLabel);

    const strongEmail = document.createElement("strong");
    strongEmail.setAttribute("id", "strong-email");

    document.getElementById("form-label-email").appendChild(strongEmail);

    const inputFormEmail = document.createElement("input");
    inputFormEmail.setAttribute("type", "text");
    inputFormEmail.setAttribute("id", "input-email");
    inputFormEmail.setAttribute("placeholder", "Email");
    inputFormEmail.setAttribute("name", "email");
    inputFormEmail.setAttribute("required", "");

    document.getElementById("form-label-email").after(inputForm);


    const formLabelPassword = document.createElement("label"); 
    formLabelPassword.setAttribute("for", "password");
    formLabelPassword.setAttribute("id", "form-label-password");

    document.getElementById("form-header").after(formLabelPassword);

    const inputFormPassword = document.createElement("input");
    inputFormPassword.setAttribute("type", "text");
    inputFormPassword.setAttribute("id", "input-password");
    inputFormPassword.setAttribute("placeholder", "Password");
    inputFormPassword.setAttribute("name", "password");
    inputFormPassword.setAttribute("required", "");

    document.getElementById("form-label-password").after(inputFormPassword);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submit-btn")
    submitButton.setAttribute("class", "form-btn");
    closeButton.setAttribute("onclick", "submitForm()");
    submitButton.innerText = "Log In";

    document.getElementById("form-label-password").after(submitButton);

    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("class", "form-btn");
    closeButton.setAttribute("id", "cancel-btn");
    closeButton.setAttribute("onclick", "closeForm()");
    closeButton.innerText = "Close";

    document.getElementById("submit-btn").after(submitButton);

    function assignCSSProperty() {
        const element = [".window-container", "#form-popup-id", ".popup-form", "#form-header", "#form-label-email", ".strong-email",
            "#input-email", "#form-label-password", "#input-password", "#submit-btn", "#form-btn"]
        const cssStyle = {
            ".window-container": {
                position: "relative",
                textAlign: "center",
                width: "100%",
            },
            "#form-popup-id": {
                display: "none",
                position: "fixed",
                left: "45%",
                top: "5%",
                transform: "translate(-50%, 5%)",
                border: "3px solid #999999",
                zIndex: 9,
            },
            ".popup-form": {
                maxwidth: "300px",
                padding: "20px",
                backgroundColor: "#fff",
            },
            ".popup-form input[type=text]": {
                width: "100%",
                padding: "15px",
                margin: "5px 0 20px 0",
                border: "none",
                background: "#eee",
            },
            ".popup-form input[type=password]": {
                width: "100%",
                padding: "15px",
                margin: "5px 0 20px 0",
                border: "none",
                background: "#eee",
            },
            ".popup-form input[type=text]:focus": {
                backgroundColor: "#ddd",
                outline: "none",
            },
            ".popup-form input[type=password]:focus": {
                backgroundColor: "#ddd",
                outline: "none",
            },
            ".popup-form .btn": {
                padding: "12px 20px",
                border: "none",
                backgroundColor: "#8ebf42",
                color: "#fff",
                cursor: "pointer",
                width: "100%",
                marginBottom: "15px",
                opacity: 0.8,
            },
            ".popup-form .cancel": {
                backgroundColor: "#cc0000",
            },
            ".popup-form .btn:hover": {
                opacity: 1,
            },
            ".popup-form .openButton:hover": {
                opacity: 1,
            },
        };
        for (var i = 0; i < length(element); i++) {
            for (key in cssStyle.element[i]) {
                document.querySelector(element[i]).style.cssStyle.element[i].key = cssStyle.element[i][key]
            }
        };
    }




// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Title of the document</title>
//     <style>
//       * {
//         box-sizing: border-box;
//       }
//       .openBtn {
//         display: flex;
//         justify-content: left;
//       }
//       .openButton {
//         border: none;
//         border-radius: 5px;
//         background-color: #1c87c9;
//         color: white;
//         padding: 14px 20px;
//         cursor: pointer;
//         position: fixed;
//       }
//       .loginPopup {
//         position: relative;
//         text-align: center;
//         width: 100%;
//       }
//       .formPopup {
//         display: none;
//         position: fixed;
//         left: 45%;
//         top: 5%;
//         transform: translate(-50%, 5%);
//         border: 3px solid #999999;
//         z-index: 9;
//       }
//       .formContainer {
//         max-width: 300px;
//         padding: 20px;
//         background-color: #fff;
//       }
//       .formContainer input[type=text],
//       .formContainer input[type=password] {
//         width: 100%;
//         padding: 15px;
//         margin: 5px 0 20px 0;
//         border: none;
//         background: #eee;
//       }
//       .formContainer input[type=text]:focus,
//       .formContainer input[type=password]:focus {
//         background-color: #ddd;
//         outline: none;
//       }
//       .formContainer .btn {
//         padding: 12px 20px;
//         border: none;
//         background-color: #8ebf42;
//         color: #fff;
//         cursor: pointer;
//         width: 100%;
//         margin-bottom: 15px;
//         opacity: 0.8;
//       }
//       .formContainer .cancel {
//         background-color: #cc0000;
//       }
//       .formContainer .btn:hover,
//       .openButton:hover {
//         opacity: 1;
//       }
                
//                 /* Keyframes for fadeInUp animation */
//         @keyframes fadeInUp {
//             from {
//                 opacity: 0;
//                 transform: translateY(20px);
//             }

//             to {
//                 opacity: 1;
//                 transform: translateY(0);
//             }
//         }

//         /* Animation for popup */
//         .overlay-container.show {
//             display: flex;
//             opacity: 1;
//     </style>
//   </head>
//   <body>
//     <h2>Popup Form</h2>
//     <p>Click on the "Open Form" button to open the popup form.</p>
//     <div class="openBtn">
//       <button class="openButton" onclick="openForm()"><strong>Open Form</strong></button>
//             </div>
            
//     <div class="loginPopup">
//       <div class="formPopup" id="popupForm">
//         <form action="/action_page.php" class="formContainer">
//           <h2>Please Log in</h2>
//           <label for="email">
//             <strong>E-mail</strong>
//           </label>
//           <input type="text" id="email" placeholder="Your Email" name="email" required>
//           <label for="psw">
//             <strong>Password</strong>
//           </label>
//           <input type="password" id="psw" placeholder="Your Password" name="psw" required>
//           <button type="submit" class="btn">Log in</button>
//           <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
//         </form>
//       </div>
//     </div>
//     <script></script>
  
//       function openForm() {
//         document.getElementById("popupForm").style.display = "block";
//       }
//       function closeForm() {
//         document.getElementById("popupForm").style.display = "none";
//       }
//     </script>
//   </body>
// </html>

}