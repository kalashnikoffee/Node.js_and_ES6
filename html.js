function createNewDoc(data, themeColor) {
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
    
        </style>
        <!--------------StyleEND------------->
    </head>
    <body>
        <div class="wrapper">
            <div class="photo-header">
              <img src="${imgURL}" alt="" />
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
  
  module.exports = createNewDoc;