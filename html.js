const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "#black"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
    }
  };
  
  function generateHtml(data, themeColor) {
    const {
      avatar_url: imgUrl,
      name,
      location,
      html_url: githubUrl,
      blog: blogUrl,
      bio,
      public_repos: repos,
      followers,
      public_gists: stars,
      following
    } = data;
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <title>Document</title>
        <!--------------StyleBEGIN------------->
        <style>
             h1 {
                font-size: 48px;
             }
             h2 {
                font-size: 40px;
             }
             h3 {
                font-size: 32px;
             }
             h4 {
                font-size: 24px;
             }
             h5 {
                font-size: 20px;
             }
             h6 {
                font-size: 20px;
             }
             h1, h2, h3, h4, h5, h6 {
                font-family: Arial, Helvetica, sans-serif;
                margin: 0;
             }
    
             .wrapper {
                background-color: ${colors[themeColor].wrapperBackground};
                padding-top: 100px;
             }
    
             body {
                background-color: white;
                font-family: Arial, Helvetica, sans-serif;
             }
    
             main {
                background-color: #E9EDEE;
                height: auto;
                padding-top: 30px;
             }
    
             html, body, .wrapper {
                height: 100%;
             }
    
             .picBox {
                 background-color: ${colors[themeColor].headerBackground};
                 color: ${colors[themeColor].headerColor};
                 padding: 10px;
                 width: 95%;
                 border-radius: 5px;
                 position: relative;
                 margin: 0 auto;
                 margin-bottom: -50px;
                 display: flex;
                 justify-content: center;
                 flex-wrap: wrap;
             }
    
             .picBox img {
                width: 220px;
                height: 220px;
                border-radius: 50%;
                object-fit: contain;
                margin-top: -75px;
                border: 5px solid ${colors[themeColor].photoBorderColor};
                box-shadow: 4px 1px 20px 4px black;
             }
    
             .picBox h1, .picBox h2 {
                width: 100%;
                text-align: center;
             }
    
             .container {
             padding: 50px;
             padding-left: 100px;
             padding-right: 100px;
             }
    
             .card {
               padding: 20px;
               border-radius: 6px;
               background-color: ${colors[themeColor].headerBackground};
               color: ${colors[themeColor].headerColor};
               margin: 20px;
             }
    
             .row {
               display: flex;
               flex-wrap: wrap;
               justify-content: space-between;
               margin-top: 20px;
               margin-bottom: 20px;
             }
             
             .col {
                flex: 1;
                text-align: center;
             }
    
             a, a:hover {
                text-decoration: none;
                color: inherit;
                font-weight: bold;
             }
    
             .links-nav {
                 width: 100%;
                 text-align: center;
                 padding: 20px 0;
                 font-size: 1.1em;
             }
    
             .nav-link {
                display: inline-block;
                margin: 5px 10px;
             }
             
             
        </style>
        <!--------------StyleEND------------->
    </head>
    <body>
        <div class="wrapper">
            <div class="picBox">
              <img src="${imgUrl}" alt="profile_pic" />
              <h1>Hi!</h1>
              <h1>My name is ${name}</h1>
              <h4>Currently at ...</h4>
              <div class="links-nav">
                <a class="nav-link" href="#" target="_blank"
                  ><i class="fas fa-location-arrow"></i> ${location}</a
                >
                <a class="nav-link" href="${githubUrl}" target="_blank"
                  ><i class="fab fa-github-alt"></i> GitHub</a
                >
                <a class="nav-link" href="${blogUrl}" target="_blank"
                  ><i class="fas fa-rss"></i> Blog</a
                >
              </div>
            </div>
            <main>
              <div class="container">
                <div class="row">
                  <div class="col"><h2>${bio}</h2></div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="card">
                      <h3>Public Repositories</h3>
                      <h4>${repos}</h4>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <h3>Followers</h3>
                      <h4>${followers}</h4>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="card">
                      <h3>GitHub Stars</h3>
                      <h4>${stars}</h4>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <h3>Following</h3>
                      <h4>${following}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        
    </body>
    </html>`;
    }
  module.exports = generateHtml;
