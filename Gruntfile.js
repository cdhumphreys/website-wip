module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		connect: {
	    	server: {
		      options: {
		        port: 8000,
		        base: 'index.html',
		        livereload: true,
		        open: true,
		        hostname: 'localhost',
		        base: '.'
		      }
		    }
		},
		jshint: {
    		files: ['js/*.js']
	  	},
		sass: {
			dist: {
				files: {
					'css/output.css': 'css/input.scss'
				}
   			}
		},
		watch: {
			options: {
				livereload: true
			},
			files: ['./*.html'],
			js: {
			    files: ['js/*.js'],
			    tasks: ['jshint', 'uglify']
		  	},
		  	css: {
		  		files: ['css/input.scss'],
		  		tasks: ['sass', 'cssmin']
		  	}
		},
		uglify: {
			my_target: {
				files: {
				'build/js/scripts.min.js': 'js/scripts.js'
				}
		    }
  		},
  		cssmin: {
			target: {
				files: [{				
				  src: 'css/output.css',
				  dest: 'build/css/output.min.css'
				}]
			}	
  		}
	});

	grunt.registerTask('default',['jshint', 'sass', 'uglify', 'cssmin','connect', 'watch']);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};