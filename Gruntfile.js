module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            all: [
                'Gruntfile.js',
                '/www/js/*.js',
                '/www/js/admin/*.js'
            ]
        },

        uglify: {
            build: {
                files: {
                    '/www/js/build/admin/main.min.js': ['/www/js/admin/main.js'],
                    '/www/js/build/admin/plugins.min.js': ['/www/js/admin/plugins.js'],
                    '/www/www/js/build/main.min.js': ['/www/www/js/main.js'],
                    '/www/js/build/plugins.min.js': ['/www/js/plugins.js']
                }
            }
        },

        imagemin: {
            dynamic: {
              files: [{
                expand: true,
                cwd: '/img/',
                src: [
                    '*.{png,jpg,gif,svg}',
                    '**/*.{png,jpg,gif,svg}'
                ],
                dest: '/img/'
              }]
            }
        },
        
        sass:{
            dist:{
                options:{
                    style:'compressed'
                },
                files:{
                    '/www/css/build/style.css':'/www/css/style.scss',
                    '/www/css/build/admin/style.css':'/www/css/admin/style.scss'
                }
            }
        },

        postcss:{
            options:{
                map:true,
                processors:[
                    require('autoprefixer')({
                        browsers:[
                            'last 2 versions',
                            '> 10%',
                        ]
                    })
                ]
            },
            dist:{
                src: ['/www/css/build/style.css', '/www/css/build/admin/style.css']
            }
        },

        watch: {
            html: {
                files: ['*.html']
            },
            js: {
                files: [
                    '/www/js/admin/plugins.js',
                    '/www/js/admin/main.js',
                    '/www/js/plugins.js',
                    '/www/js/main.js'
                ],
                tasks: [
                    'jshint', 'uglify'
                ]
            },
            css: {
                files: [
                    '/www/css/admin/style.scss',
                    '/www/css/admin/main.sass',
                    '/www/css/style.scss',
                    '/www/css/main.sass',
                    '/www/css/_animations.sass',
                    '/www/css/_fonts.sass',
                    '/www/css/_bits.sass',
                    '/www/css/_base.sass'
                ],
                tasks: [
                    'sass', 'postcss'
                ]
            },
            options:{
                livereload: true
            }
        },
        
        connect:{
            server:{
                options:{
                    livereload: true
                }
            }
        },
        
        // browser-sync allows you to debug sites on your phone.
        // more info at http://browsersync.io 
        //
        // Below is the dummy browser-sync Grunt task:
        //  browserSync: {
        //     dev: {                
        //         options: {
        //             server: 'localhost/projects/project-name/'
        //         }
        //     }
        // },
        //
        // ALTERNATIVELY ENTER THIS IN THE PROJECT DIR TERMINAL:
        // browser-sync start --proxy localhost/projects/project-name/

    });
    require('es6-promise').polyfill();
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'postcss']);
    grunt.registerTask('serve', ['connect:server', 'watch']);

    // Uncomment lines below to register browser-sync tasks.
    // grunt.registerTask('bs', 'browserSync');
    // grunt.registerTask('bs-watch', ['browserSync', 'watch']);
};