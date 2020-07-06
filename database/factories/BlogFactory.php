<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Blog;
use Faker\Generator as Faker;

$factory->define(Blog::class, function (Faker $faker) {
            
    return [ 
        'user_id' => 1,      
        'title' => $faker->name,        
        'description' => $faker->paragraph(),
        'content' => $faker->sentence(),
        'slider' => $faker->url,        
    ];
});
