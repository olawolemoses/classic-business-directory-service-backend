<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

// Route::get('/', 'EventsController@show')->name('events1');

Auth::routes();

Route::middleware('auth')->group(function () {

    Route::get('/', 'HomeController@index')->name('home');
    Route::post('/search', 'SearchController@index')->name('search');

    // Category
    Route::post('/categories/{category}/edit', 'CategoriesController@update')->name('categories.update');
    Route::post('/categories', 'CategoriesController@store')->name('categories.store');
    Route::get('/categories', 'CategoriesController@index')->name('categories');
    Route::delete('categories/{category}/delete','CategoriesController@destroy')->name('categories.delete');

    // Business
    Route::get('/business', 'BusinessController@index')->name('business');
    Route::post('/business/{business}/add/{category}/category', 'BusinessController@addCategory')->name('business.addCategory');
    Route::get('/business/{business}/show', 'BusinessController@show')->name('business.show');
    Route::post('/business/{business}/activate', 'BusinessController@toggleActivate')->name('business.activate');
    Route::post('/business/{business}/edit', 'BusinessController@update')->name('business.update');
    Route::post('/business', 'BusinessController@store')->name('business.store');
    Route::delete('/business/{business}/delete','BusinessController@destroy')->name('business.delete');
});

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/test',  function (Request $request) {
    //
  
    \Cloudinary::config(array(
        "cloud_name" => "olawolemoses",
        "api_key" => "655847859633484",
        "api_secret" => "t4l7Na05gUHzgFPmoZAoD09MNnE"
    ));

    $response = \Cloudinary\Uploader::upload("data:image/jpeg;base64,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
");

dd($response);
});
