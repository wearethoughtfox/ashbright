## Usage

**development mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc etc.

```shell
$ gulp
```

**jekyll**

As this is just a Jekyll project, you can use any of the commands listed in their [docs](http://jekyllrb.com/docs/usage/)

```
jekyll serve --watch --incremental
```

To solve:

- Wrap everything in Gulp command
- Jekyll base url


## Deploy with Gulp

You can easily deploy your site build to a gh-pages branch. First, follow the instructions at [gulp-gh-pages](https://github.com/rowoot/gulp-gh-pages) to get your branch prepared for the deployment and to install the module. Then, in `gulpfile.js` you'll want to include something like the code below. `gulp.src()` needs to be the path to your final site folder, which by default will be `_site`. If you change the `destination` in your `_config.yml` file, be sure to reflect that in your gulpfile.

```javascript
var deploy = require("gulp-gh-pages");

gulp.task("deploy", ["jekyll-build"], function () {
    return gulp.src("./_site/**/*")
        .pipe(deploy());
});
```

## Based on jekyll-gulp-sass-browser-sync and Tachyons
- https://medium.com/@simonswiss/full-re-write-in-10-days-with-tachyons-and-functional-css-a-case-study-part-4-b565745ca1e5
- https://github.com/shakyShane/jekyll-gulp-sass-browser-sync
- https://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/

- Use variables to customise
- Don't touch the main Tachyons folder
- Comment partials that you don't need in the master Tachyons file
- To customise, create a file with the same name and import into tachyons-extend

## SEO tags
Provided by https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md

## Animation on scroll examples
https://codepen.io/michalsnik/pen/WxNdvq

## Smooth scroll
https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/

## Scroll to top button
https://www.shareicon.net/arrow-up-app-ui-essential-884106

## Notes
- https://stayintech.com/info/UX
- https://www.netlifycms.org
- https://github.com/giakki/uncss

## To do
- Netlify
- Image gulp process workflow
- Accessibility: http://a11yproject.com/checklist.html
- Get permalinks working locally - no .html





