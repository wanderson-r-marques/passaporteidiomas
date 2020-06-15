const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/assets/frontend/bundles/css6a06.css',
    'resources/assets/frontend/css/estilo-campanha-2018.css',
    'resources/assets/frontend/css/passaporte.css',
    'resources/assets/frontend/css/estilo8619.css'
],'public/assets/frontend/css/web.css');

mix.js([
    'resources/assets/frontend/js/passaporte.js',
    'resources/assets/frontend/js/EnumJS.js'
],'public/assets/frontend/js/web.js');

mix.copy(['resources/assets/frontend/css/images'],'public/assets/frontend/css/images');
mix.copy(['resources/assets/frontend/fonts'],'public/assets/frontend/fonts');
mix.copy(['resources/assets/frontend/bundles'],'public/assets/frontend/bundles');
mix.copy(['resources/assets/frontend/external'],'public/assets/frontend/external');
mix.copy(['resources/assets/frontend/js/passaporte.js'],'public/assets/frontend/js/passaporte.js');
