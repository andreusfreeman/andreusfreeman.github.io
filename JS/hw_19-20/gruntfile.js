module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      a: {
        src: ['src/js/*.js'],
        dest: 'src/js/script-concat.js',
      },
      b: {
        src: ['src/styles/*.css'],
        dest: 'src/styles/style-concat.css',
      },
      c: {
        src: ['src/*.html'],
        dest: 'dest/index.html',
      },
    },
    uglify: {
      my_target: {
        files: {
          'dest/js/script.min.js': ['src/js/script-concat.js']
        }
      }
    },
    cssmin: {
      my_target: {
        files: {
          'dest/css/style.min.css': ['src/styles/style-concat.css']
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss'],
          dest: 'styles',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['src/styles/*.scss'],
        tasks: ['sass'],
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);

};
