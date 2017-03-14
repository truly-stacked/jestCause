module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['client/app/**/*.js'],
        dest: 'build/js/scripts.js',
      },
      css: {
        src: ['client/styles/**/*.css'],
        dest: 'build/css/styles.css',
      },
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-es2015']
      },
      dist: {
        files: {
          'build/js/complied.scripts.js': 'build/js/scripts.js'
        }
      }
    },

    jshint: {
      all: ['client/app/**/*.js']
    },

    uglify: {
      target: {
        files: {
          'deploy/scripts.min.js': ['build/js/complied.scripts.js']
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'deploy/styles.min.css': ['build/css/styles.css']
        }
      }
    },

    watch: {
      js: {
        files: ['client/app/**/*.js'],
        tasks: ['concat', 'babel', 'uglify'],
      },
      css: {
        files: ['client/styles/**/*.css'],
        tasks: ['concat', 'babel', 'cssmin'],
      },
    },

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('start', ['nodemon']);
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['jshint', 'concat', 'babel', 'uglify', 'cssmin']);
}