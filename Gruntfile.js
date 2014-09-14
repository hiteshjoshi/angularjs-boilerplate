module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env : {
      dev: {
          NODE_ENV : 'DEVELOPMENT'
      },
      prod : {
          NODE_ENV : 'PRODUCTION'
      }
    },
    preprocess : {
      layout: {
        src : 'src/layout/index.html',
        dest : 'public/index.html',
        options : {
          context : {
            pkgname : '<%= pkg.name %>',
          }
        }
      }
    },
    copy: {
      modernizr:            { src: 'bower_components/foundation/js/vendor/modernizr.js', dest: 'public/shared/dev/1_modernizr.js' },
      angular_js:           { src: 'bower_components/angular/angular.js', dest: 'public/shared/dev/2_angular.js' },
      angular_route_js:     { src: 'bower_components/angular-route/angular-route.js', dest: 'public/shared/dev/3_angular-route.js'},
      jquery_js:            { src: 'bower_components/jquery/dist/jquery.js', dest: 'public/shared/dev/4_jquery.js'},
      foundation_js:        { src: 'bower_components/foundation/js/foundation.js', dest: 'public/shared/dev/5_foundation.js'},

      // CSS files 
      normalize_css:        { src: 'bower_components/foundation/css/normalize.css', dest: 'public/shared/dev/normalize.css'},
      foundation_css:       { src: 'bower_components/foundation/css/foundation.min.css', dest: 'public/shared/dev/foundation.min.css'},
      fundation_icons_css:  { expand: true, flatten: true, src: 'bower_components/foundation-icon-fonts/foundation-icons.*', dest: 'public/shared/'},
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'public/shared/<%= pkg.name %>.css' : 'src/styles/*.scss'
        }
      }
    },
    concat: {
      jsdev: {
        src: ['src/scripts/*.js'],
        dest: 'public/shared/<%= pkg.name %>.js'
      }
      //jsprod: {
      //  src: ['public/shared/dev/*.js'],
      //  dest: 'public/shared/<%= pkg.name %>.js'
      //},
      //cssprod: {
      //  src: ['public/shared/dev/<%= pkg.name %>.css'],
      //  dest: 'public/shared/<%= pkg.name %>.css'
      //}
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {
        src: ['public/shared/<%= pkg.name %>.js'],
        dest: 'public/shared/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'public/shared/<%= pkg.name %>.min.css': ['public/shared/<%= pkg.name %>.css','public/shared/foundation-icons.css']
        }
      }
    },
    clean: {
      dev: ["public/shared/dev", 
            "public/shared/<%= pkg.name %>.js", 
            "public/shared/<%= pkg.name %>.css"]
    },
    watch: {
      files: ['src/layout/*', 'src/scripts/*', 'src/styles/*'],
      tasks: ['default']
    },
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'public',
          keepalive: true
        }
      }
    }
  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Default task(s).
  grunt.registerTask('default', ['env:dev', 'preprocess', 'copy', 'sass', 'concat:jsdev']);
  grunt.registerTask('prod', ['env:prod', 'preprocess', 'copy', 'sass', 'concat','uglify','cssmin','clean']);


};
