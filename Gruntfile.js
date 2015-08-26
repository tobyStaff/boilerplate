module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   sass: {
        development: {
            options: {
                //paths: ["assets/css"]
            },
            files: {
                "assets/css/compiled.css": "assets/css/main.scss"
            },
        }
    },
    watch: {
        css: {
            files: '**/*.scss',
            tasks: ['sass'],
            options: {
              livereload: true,
            },
        },
    }
  });

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass'], ['watch']);

};