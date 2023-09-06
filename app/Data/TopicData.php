<?php

namespace App\Data;

use App\Models\Topic;
use App\Objects\HashidManager;
use Spatie\LaravelData\Data;

class TopicData extends Data
{
    public function __construct(
        public readonly string $id,
        public readonly string $name,
        public readonly ?string $description,
        public readonly string $created_at,
    ) {

    }

    public static function fromModel(Topic $topic): self
    {
        return self::from([
            'id' =>  (new HashidManager())->encode($topic->id),
            'name' => $topic->name,
            'description' => $topic->description,
            'created_at' => $topic->updated_at->diffForHumans(),
        ]);
    }
}
