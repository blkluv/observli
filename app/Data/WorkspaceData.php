<?php

namespace App\Data;

use App\Models\Workspace;
use App\Objects\HashidManager;
use Spatie\LaravelData\Data;

class WorkspaceData extends Data
{
    public function __construct(
        public readonly string $id,
        public readonly string $name,
        public readonly ?string $domain,
        public readonly ?string $avatar,
        public readonly string $created_at,
        public readonly string $updated_at,
    ) {

    }

    public static function fromModel(Workspace $workspace): self
    {
        return self::from([
            'id' => (new HashidManager())->encode($workspace->id),
            'name' => $workspace->name,
            'domain' => $workspace->domain,
            'avatar' => $workspace->avatar,
            'created_at' => $workspace->created_at->diffForHumans(),
            'updated_at' => $workspace->updated_at->diffForHumans(),
        ]);
    }
}
