<?php

namespace App\Data;

use App\Models\Action;
use App\Objects\HashidManager;
use Spatie\LaravelData\Data;
use stdClass;

class ActionData extends Data
{
    public function __construct(
        public readonly string $id,
        public readonly ?string $type,
        public readonly stdClass $context,
        public readonly int $timestamp,
    ) {

    }

    public static function fromModel(Action $action): self
    {
        $context = $action->context;

        return self::from([
            'id' =>  (new HashidManager())->encode($action->id),
            'type' => $action->type,
            'context' => $context,
            'timestamp' => $action->created_at->timestamp,
        ]);
    }
}
