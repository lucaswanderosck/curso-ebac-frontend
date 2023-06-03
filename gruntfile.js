module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Tarefa para complilar o sass
    less: {
      development: {
        files: {
          "dev/styles/main.css": "src/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: { "dist/styles/main.min.css": "src/styles/main.less" },
      },
    },

    //Tarefa para comprimir o codigo Javascript
    uglify: {
      target: {
        files: { "dist/scripts/main.min.js": "src/scripts/main.js" },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less", "uglify"]);
};
