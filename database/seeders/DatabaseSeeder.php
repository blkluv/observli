<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = \App\Models\User::factory()->create([
            'name' => 'Peter Parker',
            'email' => 'peter@parker.com',
        ]);
        $user->ownedTeams()->create([
            'name' => "Personal",
            'is_personal' => true,
        ]);
    }
}
