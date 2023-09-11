<?php

namespace Database\Seeders;

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
        $token = $user->workspaces()->first()->createToken('api')->plainTextToken;
        $this->command->info($token);

        $user->ownedWorkspaces()->create([
            'name' => 'Infisical',
            'domain' => 'https://infisical.com',
            'avatar' => 'https://avatars.githubusercontent.com/u/107880645?s=280&v=4'
        ]);

        $user->ownedWorkspaces()->create([
            'name' => 'Cal.com',
            'domain' => 'https://cal.com',
            'avatar' => 'https://ph-files.imgix.net/39eadfe0-8f39-40f8-8213-ee9e516df919.png?auto=format'
        ]);
        
        $user->ownedWorkspaces()->create([
            'name' => 'Documenso',
            'domain' => 'https://documenso.com',
            'avatar' => 'https://images.saasworthy.com/documenso_43761_logo_1685435809_b6pj4.jpg'
        ]);

        $user->ownedWorkspaces()->create([
            'name' => 'Formbricks',
            'domain' => 'https://formbricks.com',
            'avatar' => 'https://avatars.githubusercontent.com/u/105877416?s=200&v=4'
        ]);
    }
}
