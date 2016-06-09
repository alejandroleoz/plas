
'use strict';

module.exports = function(grunt) {


    var globalConfig = {
        componentName: 'kanban',
    };

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    livereload: true,
                    base: 'www/',
                    port: 9009
                }
            }
        },

        watch: {
            html: {
                options: {
                    livereload: true
                },
//                files: ['**/*.html', '!plas/**/*.html'],
                files: ['**/*.html', '**/*.less'],
                tasks: ['less:dist']
            }
        },

        less:{
            dist: {
                options: {
                    paths: ["www"]
                },
                files: {
                    "www/styles.css": "www/styles.less"
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask('serve', [
        'less:dist',
        'connect:server',
        'watch'
    ]);

};





