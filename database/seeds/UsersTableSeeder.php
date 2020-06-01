<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'SimpleAdmin',
            'email' => 'simpleadmin@intis.com',
            'password' => bcrypt('123456'),
        ]);
    }
}