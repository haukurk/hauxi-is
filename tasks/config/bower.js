/**
 * Bower
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Runs bower tasks
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

    grunt.config.set('bower', {
        dev: {
            dest: '.tmp/public',
            js_dest: '.tmp/public/js',
            css_dest: '.tmp/public/styles',
            fonts_dest: 'public/fonts/',
            options: {
                packageSpecific: {
                    bootstrap: {
                        files: ["dist/js/bootstrap.js","dist/fonts/*.*","dist/css/bootstrap.css"]
                    },
                    jquery: {
                        files: ["dist/jquery.js"]
                    },
                    classie: {
                        files: ["classie.js"]
                    },
                    moment: {
                        files: ["moment.js"]
                    },
                    "jquery-easing-original": {
                        files: ["jquery.easing.1.3.js"]
                    },
                    "jqBootstrapValidation": {
                        files: ["dist/jqBootstrapValidation-1.3.7.js"]
                    },
                    ionicons: {
                        files: ["fonts/*.*","css/ionicons.css"]
                    },
                    fontawesome: {
                        files: ["fonts/*.*","css/font-awesome.css"]
                    },
                    mustache: {
                        files: ["mustache.js"]
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower');
};