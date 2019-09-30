# Maintain Translation files

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## About

This application can be used to maintain the translation files for several applications. The data is stored in a MySQL database.

You can get the translations in your applications directly from the database. You can also choose to create a .json file with your translations in the Downloads page and you can even create or update your translations by submitting a .json file on the Uploads page.

## Create Database

To create the database for this application, run sql script src/sql/mtf.sql in phpMyAdmin or another database editor.

Create user mtf_user in your database with access to the tables and views the script created.

## Install php files

To be able to load and store the data for this application, copy the files in src/php/mtf to your localhost. Or create a shortcut to src/php/mtf/mtf.php.

Make sure the username and password in the mtf.php file is correct.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
