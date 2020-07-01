<?php


use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::name('web.')->namespace('Frontend')->group(function(){
    Route::get('/', 'WebController@home')->name('home');
    Route::get('/quem-somos','WebController@theCourse')->name('who.we.are'); 
    Route::get('/formacoes','WebController@formations')->name('formations');
    Route::get('/unidades','WebController@units')->name('units');
    Route::get('/contato','WebController@contact')->name('contact');
    Route::post('/contato','WebController@sendContact')->name('send.contact');
    Route::name('formations.')->group(function(){        
        Route::get('/formacoes/kindergarten','WebController@kindergarten')->name('kindergarten');
        Route::get('/formacoes/kids','WebController@kids')->name('kids');
        Route::get('/formacoes/pre-teens','WebController@preTeens')->name('pre.teens');
        Route::get('/formacoes/teens','WebController@teens')->name('teens');
        Route::get('/formacoes/teens-young','WebController@teensYoung')->name('teens.young');
        Route::get('/formacoes/regular','WebController@regular')->name('regular');
        Route::get('/formacoes/espanhol','WebController@espanhol')->name('espanhol');
    }); 
    Route::name('units.')->group(function(){
        Route::get("/unidade/camaragibe","WebController@camaragibe")->name('camaragibe');
        Route::get("/unidade/lourenco","WebController@lourenco")->name('lourenco');
        Route::get("/unidade/carpina","WebController@carpina")->name('carpina');        
        Route::get("/unidade/cabo","WebController@cabo")->name('cabo');
        Route::get("/unidade/vitoria","WebController@vitoria")->name('vitoria');
    });     
});

Route::name('panel.')->namespace('Backend')->group(function(){
    Route::get('/login','PanelController@login')->name('login');
    Route::post('/login','PanelController@loginRequest')->name('loginRequest');
    
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/dashboard','PanelController@dashboard')->name('dashboard');
    });
    
});



