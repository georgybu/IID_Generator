module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            js: {
                files: {
                    'app.min.js': ['app.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'app.min.css': ['app.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin', 'uglify']);

};
