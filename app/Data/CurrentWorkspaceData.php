<?php

namespace App\Data;

use App\Models\Workspace;
use App\Objects\HashidManager;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class CurrentWorkspaceData extends Data
{
    public function __construct(
        public readonly string $id,
        public readonly string $name,
        /** @var DataCollection<TopicData> */
        public readonly DataCollection $topics,
        /** @var DataCollection<ApiTokenData> */
        public readonly DataCollection $tokens,
        public readonly string $created_at,
        public readonly string $updated_at,
    ) {

    }

    public static function fromModel(Workspace $workspace): self
    {
        return self::from([
            'id' => (new HashidManager())->encode($workspace->id),
            'name' => $workspace->name,
            'topics' => TopicData::collection($workspace->topics),
            'tokens' => ApiTokenData::collection($workspace->tokens),
            'created_at' => $workspace->created_at->diffForHumans(),
            'updated_at' => $workspace->updated_at->diffForHumans(),
        ]);
    }
}
