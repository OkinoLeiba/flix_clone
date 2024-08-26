/* 
    Created on : June 24, 2024, 3:21:44 PM
    Author     : Okino Kamali Leiba
*/

createHead = () => {
    // create head tag with meta elements
    const headElement = document.createElement("head");
    document.getElementsByTagName("html").append(headElement);

    const metaCharset = document.createElement("meta");
    metaCharset.setAttribute("charset", "utf-8");
    document.getElementsByTagName("head");

    const metaViewPort = document.createElement("meta");
    metaViewPort.setAttribute("name", "viewport");
    metaViewPort.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.getElementsByTagName("meta").after(metaViewPort);

    const metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", "Okino Kamali Leiba,  Netflix clone");
    document.getElementsByName("viewport").after(metaViewPort);

    const metaAuthor = document.createElement("meta");
    metaAuthor.setAttribute("name", "author");
    metaAuthor.setAttribute("content", "Okino Kamali Leiba");
    document.getElementsByName("keywords").after(metaViewPort);

    const metaDesc = document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    metaDesc.setAttribute("content", "Netflix clone");
    document.getElementsByName("author").after(metaViewPort);


    const siteProp = document.createElement("meta");
    siteProp.setAttribute("name", "og:type")
    siteProp.setAttribute("property", "og:type");
    siteProp.setAttribute("content", "website");
    document.getElementsByName("description").after(siteProp);
}





<head>
  

    <meta content="website" property="og:type" />
    <meta content="Okino Leiba's Resume" property="og:title" />
    <meta content="en_US" property="og:locale" />
    <meta property="og:image" content="">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:wight" content="440">
    <meta property="og:description" content="Netflix Clone">
    <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src *; style-src-elem *; connect-src * " > -->
                        <title>Flix</title>
                        <link rel="icon" type="image/x-icon" href="/img/icon/rubber-ducky-cartoon-black.ico" >
    <link type="text/css" rel="stylesheet" href="style.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script type="text/javascript" src="javascript.js" defer></script>
    <script src="https://kit.fontawesome.com/b2ef8ab3ab.js" crossorigin="anonymous"></script>
      </head>
                                    
                                    const siteTitle = document.createElement("title");
                                    siteTitle.textContent = "Flix";
                                    document.getElementsByName("content-policy").after(siteTitle);


                                    const faviconLink = document.createElement("link");
                                    faviconLink.setAttribute("name", "favicon-link");
                                    faviconLink.setAttribute("type", "image/x-icon");
                                    faviconLink.setAttribute("rel", "icon");
                                    faviconLink.setAttribute("href", "/img/icon/rubber-ducky-cartoon-black.ico");
                                    document.getElementsByTagName("title").after(faviconLink);

                                    const styleLink = document.createElement("link");
                                    styleLink.setAttribute("name", "style-link");
                                    styleLink.setAttribute("type", "text/css");
                                    styleLink.setAttribute("rel", "stylesheet");
                                    styleLink.setAttribute("href", "style.css");
                                    document.getElementsByName("favicon-link").after(styleLink);

                                    
                                    const fontAwesome = document.createElement("link");
                                    fontAwesome.setAttribute("name", "style-link");
                                    fontAwesome.setAttribute("type", "text/css");
                                    fontAwesome.setAttribute("rel", "stylesheet");
                                    fontAwesome.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
                                    document.getElementsByTagName("style-link").after(fontAwesome);

                                    const googleIcons = document.createElement("link");
                                    googleIcons.setAttribute("name", "google-icons");
                                    googleIcons.setAttribute("type", "text/css");
                                    googleIcons.setAttribute("rel", "stylesheet");
                                    googleIcons.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
                                    document.getElementsByTagName("style-link").after(googleIcons);

                                    const mainScript = document.createElement("script");
                                    mainScript.setAttribute("name", "main-script);
                                    mainScript.setAttribute("type", "text/javascript");
                                    googleIcons.setAttribute("src", "javascript.js");
                                    googleIcons.setAttribute("defer");
                                    document.getElementsByTagName("google-icons").after(mainScript);

                                    const fontAwesomeScript = document.createElement("script");
                                    fontAwesomeScript.setAttribute("name", "font-awesome-script);
                                    fontAwesomeScript.setAttribute("type", "text/javascript");
                                    fontAwesomeScript.setAttribute("src", "https://kit.fontawesome.com/b2ef8ab3ab.js");
                                    fontAwesomeScript.setAttribute("crossorigin", "anonymous");
                                    document.getElementsByTagName("main-script").after(fontAwesomeScript);


                            
