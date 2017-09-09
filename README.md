https://wearethoughtfox.github.io/ashbright/

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

## Notes
- Nav: https://24ways.org/2014/responsive-enhancement/
- Nav from config
- layouts and includes
- Social sharing stuff
- Icons
- Accessibility: http://a11yproject.com/checklist.html
- https://stayintech.com/info/UX
- https://www.netlify.com
- https://www.netlifycms.org
- https://macwright.org/2017/05/08/https.html
- https://zengabor.github.io/zenscroll/#howtouse
- https://realfavicongenerator.net

## Images
Lighthouses, Fountain pens, Chess boards.

## Examples
- https://ashbrightcom.wordpress.com/about/
- http://www.iridiumadvisors.com/#welcome
- https://www.schillingspartners.com
- http://tachyons.io/components/headers/startup-hero/index.html



