<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use App\Objects\HashidManager;
use App\Models\User;

class UserData extends Data
{
    public function __construct(
        public string $id,
        public string $name,
        public string $email,
    ) {

    }

    public static function fromModel(User $user): self
    {
        return self::from([
            'id' => (new HashidManager())->encode($user->id),
            'name' => $user->name,
            'email' => $user->email,
        ]);
    }
}
