<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 1; $i++) { 
            DB::table('users')->insert([
                'name' => 'Wanderson Marques',
                'email' => 'wanderson@gmail.com',
                'password' => bcrypt('senha')
            ]);
        }
    }
}
