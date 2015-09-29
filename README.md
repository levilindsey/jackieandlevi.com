# jackieandlevi.com

[![Codeship Status for levisl176/jackieandlevi.com][codeship-image]][codeship-url]
[![Flattr this git repo][flattr-image]][flattr-url]

#### Personal portfolio and website of Jackie and Levi Lindsey

_See this running at [jackieandlevi.com](http://www.jackieandlevi.com)!_

- [Getting Set Up](./docs/getting-set-up.md)
- [Understanding the Code](./docs/understanding-the-code.md)

This site is where Levi tinkers with many different web app ideas. It's basically his playground. And his portfolio.

## The Data

The media for Jackie's and Levi's profiles is stored in an [AWS S3 bucket][aws-s3-url]. The textual content and
metadata is currently stored within the repository as JSON and Markdown files, but will soon be moved to a MongoDB
database hosted by [MongoLab][mongolab-url].

## Acknowledgements / Technology Stack

This project uses technology from a number of third-parties. These technologies include:

- [Node.js][node-url]
- [AngularJS][angular-url]
- [MongoDB][mongo-url]
- [gulp.js][gulp-url]
- [SASS][sass-url]
- [Git][git-url]
- Numerous other packages that are available via [NPM][npm-url] (these are listed within the `package.json` file)
- Numerous other packages that are available via [Bower][bower-url] (these are listed within the `bower.json` file)

## License

MIT



[codeship-image]: https://www.codeship.io/projects/f7eaaf70-63a1-0131-6568-124350f7f3f0/status?branch=master
[codeship-url]: https://www.codeship.io/projects/12381

[flattr-image]: http://api.flattr.com/button/flattr-badge-large.png
[flattr-url]: https://flattr.com/submit/auto?user_id=levisl176&url=github.com/levisl176/jackieandlevi.com&title=jackieandlevi.com&language=javascript&tags=github&category=software

[gulp-url]: http://gulpjs.com/
[node-url]: http://nodejs.org/
[angular-url]: https://angularjs.org/
[mongo-url]: https://mongodb.org/
[sass-url]: http://sass-lang.com/
[git-url]: http://git-scm.com/
[npm-url]: http://npmjs.org/
[bower-url]: http://bower.io/
