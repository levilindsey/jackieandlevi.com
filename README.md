# jackieandlevi

#### Personal portfolio and website of Jackie and Levi Lindsey

_See this running at [jackieandlevi.com](http://www.jackieandlevi.com)!_

This site is where Levi tinkers with many different web app ideas. It's basically his playground. And his portfolio.

The combined technology stack for this site and its many sub-projects includes: HTML, CSS, Javascript, Node.js,
Express, MongoDB, AngularJS, Socket.IO, Gulp, SASS, EJS, Mocha, Git, NodeJitsu.

## Code Structure

### The General Server Code

TODO

### The App Code

The logic for each app is contained within its own sub-directory within `src/apps/`. Each of these 
sub-directories share a common structure:

- `routes.js`: If this file is present, then it specifies the server-side routing logic that is used for the app. If
  this file is not present, then the server will use the default routing logic for the app. The default behavior is to
  serve the app's files statically from the `public/` sub-directory with a mount path with the same name of the app
  directory.
- `public/`: This directory specifies the files that are statically served for the app.
- `templates/`: This directory specifies Jade template files used for the app. This directory is optional. If the app
  does not need server-side templating, then this directory can be omitted (as well as the `routes.js` file) and
  replaced with an `index.html` file.
- `index.html`: This is the main file used for defining and rendering the app. This file is optional. If the app needs
  server-side templating, then this file can be omitted and replaced with a `templates/` directory. **This is a
  template file.** Lo-Dash will be used to pre-compile this file as part of the build process. The final, compiled
  `index.html` that is actually sent to the client will be automatically placed within the `public/` directory.

======

[![Codeship Status for levisl176/jackieandlevi.com](https://www.codeship.io/projects/f7eaaf70-63a1-0131-6568-124350f7f3f0/status?branch=master)](https://www.codeship.io/projects/12381)

[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=levisl176&url=github.com/levisl176/jackieandlevi.com&title=jackieandlevi.com&language=javascript&tags=github&category=software)
