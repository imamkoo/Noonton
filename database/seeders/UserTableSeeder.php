<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Traits\HasRoles;


class UserTableSeeder extends Seeder
{
    use WithoutModelEvents;
    use HasRoles;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin =  User::create([
            'name' => 'Admin',
            'email' => 'admin@noonton.test',
            'password' => bcrypt('password'),
        ]);

        $admin->assignRole('admin');
    }
}
