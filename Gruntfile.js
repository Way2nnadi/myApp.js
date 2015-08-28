
module.exports = function(grunt){

    require('load-grunt-tasks')(grunt, {config: "./package"}); 

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                     'public/production/logic.js': 'public/client/logic.jsx'
                }
            }
        },

        nodemon: {
                dev: {
                    script: 'app.js'
                }
        },

        watch: {
            scripts: {
                options: {
                    event: ['added', 'deleted']
                },
                files: ['public/client/logic.jsx'],
                task: ['babel'],
                
            }
        }

    });

    grunt.registerTask('build', ['babel']);

    grunt.registerTask('deploy', []);


}

