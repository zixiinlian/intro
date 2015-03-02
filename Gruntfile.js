module.exports = function (grunt) {
	'use strict';
	var pkg = grunt.file.readJSON('package.json');
	var cfg = {
		base: '',
		src: 'src/',
		dist: 'build/',
		host: '127.0.0.1',
		port: 8000,
		livereload: 35729
	};

	grunt.initConfig({
		pkg: pkg,
		cfg: cfg,
		uglify: {
			options: {
				banner: '/**\n' +
					' * -------------------------------------------------------------\n' +
					' * Copyright (c) 2014 All rights reserved.\n' +
					' * @version: <%= pkg.version%>\n' +
					' * @author: <%= pkg.author%>\n' +
					' * @description: <%= pkg.description%>\n' +
					' * -------------------------------------------------------------\n' +
					' */\n\n'
			},
			dist: {
				src: '<%= cfg.src %><%= pkg.name %>.js',
				dest: '<%= cfg.dist %><%= pkg.name %>.min.js'
			}
		},

		qunit: {
			files: ['test/**/*.html']
		},

		jshint: {
			files: ['<%= cfg.src %>**.js'],
			options: {
				curly: true,
				undef: true,
				eqeqeq: true,
				ignores: ['<%= cfg.src %>js/jquery-1.8.3.min.js'],
				browser: true,
				jquery: true,
				devel: true,
				globals: {
					alert: true,
					module: true
				}
			}
		},

		cssmin: {
			banner: '/**\n' +
				' * -------------------------------------------------------------\n' +
				' * Copyright (c) 2014 All rights reserved.\n' +
				' * @version: <%= pkg.version%>\n' +
				' * @author: <%= pkg.author%>\n' +
				' * @description: <%= pkg.description%>\n' +
				' * -------------------------------------------------------------\n' +
				' */\n\n',
			minify: {
				expand: true,
				cwd: '<%= cfg.src %>css/',
				src: ['*.css', '!*.min.css'],
				dest: '<%= cfg.dest %>css/',
				ext: '.min.css'
			}
		},

		connect: {
			options: {
				port: cfg.port,
				hostname: cfg.host,
				livereload: cfg.livereload
			},
			server: {
				options: {
					open: true,
					base: cfg.base
				}
			}
		},

		compass: {
			dist: {
				options: {
					config: 'config.rb'
						// sassDir: '<%= cfg.src %>sass/',
						// cssDir: '<%= cfg.dist %>css/',
						// imagesDir: '<%= cfg.src %>images/',
						// outputStyle: 'expanded',
						// relativeAssets: true,
						// boring: false,
						// quiet: false,
						// debugInfo: false,
						// noLineComments: true,
						// trace: true
				}
			},
			server: {
				options: {
					debugInfo: false
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			css: {
				files: './**/*.{scss,sass}',
				tasks: ['compass:dist']
			},
			scripts: {
				files: ['./**/*.js'],
				tasks: ['jshint'],
				options: {
					spawn: false,
				},
			},
			livereload: {
				options: {
					livereload: '<%=connect.options.livereload%>' //监听前面声明的端� 35729
				},
				files: [ //任何文件的改变就会实时刷新网�
					'<%= cfg.src %>**'
				]
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('test', ['jshint', 'qunit']);
	grunt.registerTask('dev', ['connect:server', 'watch']);
	grunt.registerTask('default', ['watch', 'uglify']);
};