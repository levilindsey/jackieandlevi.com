# jackieandlevi

#### Personal portfolio and website of Jackie and Levi Lindsey

_See the app running at [www.jackieandlevi.com](http://www.jackieandlevi.com)!_

This site is where Levi tinkers with many different web app ideas. It's basically his playground. And his portfolio.

The combined technology stack for this site and its many sub-projects includes: HTML, CSS, Javascript, Node.js, Express, MongoDB, AngularJS, Socket.IO, Gulp, SASS, EJS, Mocha, Git, NodeJitsu.

## Code Structure

### The General Server Code

TODO

### The App Code

The logic for each app is contained within its own sub-directory within `src/apps/`. Each of these 
sub-directories share a few common components:

- `routes.js`: This file specifies the server-side routes used for the app.
- `public/`: This directory specifies the files that are statically served for the app.
- `templates/`: This directory specifies Jade template files used for the app. This directory is 
  optional. If the app does not need server-side templating, then this directory can be omitted 
  and replaced with an `index.html` file.
- `index.html`: This is the main file used for defining and rendering the app. This file is 
  optional. If the app needs server-side templating, then this file can be omitted and replaced 
  with a `templates/` directory.

======

[![Codeship Status for levisl176/JackieAndLevi](https://www.codeship.io/projects/f7eaaf70-63a1-0131-6568-124350f7f3f0/status?branch=master)](https://www.codeship.io/projects/12381)

[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=levisl176&url=github.com/levisl176/jackieandlevi&title=jackieandlevi&language=javascript&tags=github&category=software)
