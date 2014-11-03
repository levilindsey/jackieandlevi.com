# Understanding the Code

### The General Server Code

TODO

### The App Code

The logic for each app is contained within its own sub-directory within `apps/`. Each of these  sub-directories share a
common structure:

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
