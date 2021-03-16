const gulp = require("gulp");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const del = require("del");
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const less = require("gulp-less");
const stylus = require("gulp-stylus");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");

//Порядок подключения файлов со стилями
const styleFiles = [
	"./src/css/color.scss",
	"./src/css/main.scss",
	"./src/css/header.scss",
	"./src/css/fonts.scss",
	"./src/css/footer.scss",
	"./src/css/first-section.scss",
	"./src/css/sprey-section.scss",
	"./src/css/second-section.scss",
	"./src/css/reviews.scss",
	"./src/css/sliders.scss",
	"./src/css/modal.scss",
	"./src/css/adaptive.scss",
];
//Порядок подключения js файлов
const scriptFiles = [
	"./src/js/slider.js",
	"./src/js/lib.js",
	"./src/js/main.js",
];

//Таск для обработки стилей
gulp.task("styles", () => {
	//Шаблон для поиска файлов CSS
	//Всей файлы по шаблону './src/css/**/*.css'
	return (
		gulp
			.src(styleFiles)
			// .pipe(sourcemaps.init())
			//Объединение файлов в один
			.pipe(concat("style.css"))
			//Указать stylus() , sass() или less()
			.pipe(sass({ outputStyle: 'expanded' }))
			//Добавить префиксы
			.pipe(
				autoprefixer({
					cascade: false,
				}),
			)
			//Минификация CSS
			// .pipe(
			// 	cleanCSS({
			// 		level: 2,
			// 	}),
			// )
			// .pipe(sourcemaps.write("./"))
			// .pipe(
			// 	rename({
			// 		suffix: ".min",
			// 	}),
			// )
			//Выходная папка для стилей
			.pipe(gulp.dest("./build/css"))
			.pipe(browserSync.stream())
	);
});

gulp.task("fonts", () => {
	return gulp.src("./src/fonts/**").pipe(gulp.dest("./build/fonts/")).pipe(browserSync.stream());
});

gulp.task("libs", () => {
	return gulp.src("./src/libs/**").pipe(gulp.dest("./build/libs/")).pipe(browserSync.stream());
});

//Таск для обработки скриптов
gulp.task("scripts", () => {
	//Шаблон для поиска файлов JS
	//Всей файлы по шаблону './src/js/**/*.js'
	return (
		gulp
			.src(scriptFiles)
			//Объединение файлов в один
			.pipe(concat("main.js"))
			//Минификация JS
			.pipe(
				uglify({
					toplevel: true,
				}),
			)
			// .pipe(
			// 	rename({
			// 		suffix: ".min",
			// 	}),
			// )
			//Выходная папка для скриптов
			.pipe(gulp.dest("./build/js"))
			.pipe(browserSync.stream())
	);
});

//Таск для очистки папки build
gulp.task("del", () => {
	return del(["build/*"]);
});

//Таск для сжатия изображений
gulp.task("img-compress", () => {
	return gulp
		.src("./src/img/**")
		// .pipe(
		// 	imagemin({
		// 		progressive: true,
		// 	}),
		// )
		.pipe(gulp.dest("./build/img/"))
		.pipe(browserSync.stream());
});

//Таск для отслеживания изменений в файлах
gulp.task("watch", () => {
	browserSync.init({
		server: {
			baseDir: "./",
		},
	});
	gulp.watch("./src/img/**", gulp.series("img-compress"));
	gulp.watch("./src/fonts/**", gulp.series("fonts"));
	gulp.watch("./src/libs/**", gulp.series("libs"));
	gulp.watch("./src/css/**/*.scss", gulp.series("styles"));
	gulp.watch("./src/js/**/*.js", gulp.series("scripts"));
	gulp.watch("./*.html").on("change", browserSync.reload);
});

//Таск по умолчанию, Запускает del, styles, scripts, img-compress и watch
gulp.task(
	"default",
	gulp.series("del", gulp.parallel("styles", "scripts", "img-compress", "fonts", "libs"), "watch"),
);
