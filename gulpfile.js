// var imageminSvgo = require("imagemin-svgo");
// var imageminPngquant = require("imagemin-pngquant");
// var imageminMozjpeg = require('imagemin-mozjpeg');
// const imagemin = require("gulp-imagemin");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var sass = require("gulp-sass");
var pug = require("gulp-pug");
var rename = require("gulp-rename");
const {
  watch,
  src,
  dest
} = require("gulp");
sass.compiler = require("node-sass");

//delete a função e extraia o conteudo conforme precisar
function images() {
  // function minifyJPG() {
  //   return src("./src/img/**/*.jpg")
  //     .pipe(
  //       imagemin(
  //         [
  //           imageminMozjpeg({
  //             quality: 75,
  //             dcScanOpt: 2
  //           })
  //         ], {
  //           verbose: true
  //         }
  //       )
  //     )
  //     .pipe(dest("./public/assets"));}
  // function minifyPNG() {
  //   return src("./src/img/**/*.png")
  //     .pipe(
  //       imagemin(
  //         [
  //           imageminPngquant({
  //             quality: [0.9, 1],
  //             speed: 1,
  //             strip: true
  //           })
  //         ], {
  //           verbose: true
  //         }
  //       )
  //     )
  //     .pipe(dest("./public/assets"));}
  // function minifySVG() {
  //   return src("./src/svg/**/*.svg")
  //     .pipe(
  //       imagemin(
  //         [
  //           imageminSvgo({
  //             progressive: true
  //           })
  //         ], {
  //           verbose: true
  //         }
  //       )
  //     )
  //     .pipe(dest("./public/assets"));}
}

function buildHTML() {
  return src("./src/*.pug")
    .pipe(
      pug({
        doctype: "html",
        pretty: true
      })
    )
    .pipe(dest("./public"));
}

function buildCSS() {
  var plugins = [autoprefixer(), cssnano()];
  return src("./src/styles/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(dest("./public/styles"));
}

function scss() {
  return src("./src/styles/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(dest("./public/styles"));
}

exports.default = () => {
  buildHTML();
  return buildCSS();
};
exports.watch = () => {
  watch(
    "./src/styles/*.scss", {
      events: "all"
    },
    buildCSS
  );
  watch(
    "./src/*.pug", {
      events: "all"
    },
    buildHTML
  );
};
exports.comp_sass = buildCSS;

exports.comp_img = () => {
  minifySVG();
  minifyPNG();
  return minifyJPG();
};

exports.css = scss;