module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            }
        },
        uglify: {
            dist: {
                options: {style: 'compressed'},
                files: [{expand: true, cwd: 'src/js', src: '**/*.js', dest: 'dist/assets/js', ext: '.min.js'}]
            }
        },
        sass: {
            dist: {
                options: {style: 'compressed'},
                files: [{expand: true, cwd: 'src/sass', src: '**/*.scss', dest: 'dist/assets/css', ext: '.min.css'}]
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: [
                            'node_modules/angular/angular.min.js',
                            //'node_modules/angular-route/angular-route.min.js',
                            //'node_modules/angular-sanitize/angular-sanitize.min.js',
                            //'node_modules/angular-animate/angular-animate.min.js',
                            'node_modules/angular-touch/angular-touch.min.js'
                        ],
                        dest: 'dist/assets/js/',
                        flatten: true
                    }/*,
                    {
                        expand: true,
                        src: [
                            'node_modules/angular-ui-grid/ui-grid.eot',
                            'node_modules/angular-ui-grid/ui-grid.min.css',
                            'node_modules/angular-ui-grid/ui-grid.svg',
                            'node_modules/angular-ui-grid/ui-grid.ttf',
                            'node_modules/angular-ui-grid/ui-grid.woff'
                        ],
                        dest: 'dist/assets/css/',
                        flatten: true
                    },
                    {
                        expand: true, cwd: 'node_modules/font-awesome/fonts/', src: '**', dest: 'dist/assets/fonts/'
                    },
                    {
                        expand: true, cwd: 'node_modules/bourbon/app/assets/stylesheets/', src: '**', dest: 'src/sass/bourbon/'
                    }*/
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('actualizar', ['copy', 'sass', 'uglify']);
};