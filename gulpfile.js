const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function tarea(done){
    console.log("Hola Mundo");
    console.log("Estamos desde gulpfile");
    done();
}
function css(done){
    src("src/scss/app.scss")
        .pipe( sass() )
        .pipe( dest("build/css") )
    done();
}
function dev(done){
    watch("src/scss/**/*.scss", css);
    done();
}


exports.tarea = tarea;
exports.css = css;
exports.dev = dev;