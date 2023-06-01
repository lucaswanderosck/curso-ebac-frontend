const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

// Tarefa para comprimir imagens
function comprimeImg() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

// Tarefa para comprimir javaScript
function comprimeJs() {
  return gulp
    .src("./source/scripts/*js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts"));
}

// Tarefa para compilar o SASS
function compilaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

// Exportação
exports.default = function () {
  gulp.watch("./source/styles/*.scss", gulp.series(compilaSass));

  gulp.watch("./source/scripts/*.js", gulp.series(comprimeJs));

  gulp.watch("./source/images/*", gulp.series(comprimeImg));
};
