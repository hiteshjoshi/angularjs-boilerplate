# AngularJs boiler-plate 

With Foundation and Sass (most boiler-plates are with Bootstrap and Less).

The tools we use are Node Package Manager (npm), Bower and Grunt

* Read the package.json for the npm packages.
* Read the bower.json for the bower fontend packages. 
* Read the Gruntfile for background processing in development mode.

## Install 

    sudo apt-get install nodejs
    sudo npm install -g bower
    sudo npm install -g grunt-cli

## Run node

Install all the packages from `packages.json`.

    npm install

## Run bower

Install all the packages from `bower.json`.

    bower install

## Run grunt for development

Run the default actions from `Gruntfile.js` to develop.

    grunt

Run the server on `localhost:3000` for development.

    grunt connect

Browse to `localhost:3000` 

### Grunt development packages (package.json)

* grunt-env -> for development and production enviroment
* grunt-preprocess -> create the index.html from `src/layout/index.html`
* grunt-contrib-copy -> to copy `src/*` files and bower files to `public/shared/dev/`
* grunt-contrib-concat -> push all files (js,css) to one 'uncompressed file'
* grunt-contrib-sass -> scss files so we can use vars in our css files, and more!
* grunt-contrib-watch -> to run all tasks after a file is changed in i.o. `src/*`
* grunt-contrib-connect -> http server for local development
* grunt-contrib-uglify -> minify javascript files for production
* grunt-contrib-cssmin -> minify css files for production
* grunt-contrib-clean -> delete development files for production.

## Run grunt for production

Create the production myApp and clean up develoment files.

    grunt prod

Publish the `public` directory on a webserer


