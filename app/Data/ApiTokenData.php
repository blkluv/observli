<?php

namespace App\Data;

use App\Objects\HashidManager;
use Spatie\LaravelData\Data;
use Laravel\Sanctum\PersonalAccessToken;

class ApiTokenData extends Data
{
    public function __construct(
        public readonly string $id,
        public readonly string $created_at,
        public readonly string $last_used,
    ) {

    }

    public static function fromModel(PersonalAccessToken $token): self
    {
        return self::from([
            'id' => (new HashidManager())->encode($token->id),
            'created_at' => $token->created_at->diffForHumans(),
            'last_used' => $token->last_used_at ? $token->last_used_at->diffForHumans() : 'Never',
        ]);
    }
}
