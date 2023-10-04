<?php

namespace App\Data;

use App\Models\Event;
use App\Objects\HashidManager;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use stdClass;

class EventData extends Data
{
    public function __construct(
        public readonly string $id,
        public readonly string $workspace_id,
        public readonly string $title,
        public readonly ?string $subtitle,
        public readonly stdClass $context,
        public readonly array $topics,
        public readonly int $time,
        public readonly string $nice_time,
    ) {

    }

    public static function fromModel(Event $event): self
    {
        $context = $event->context;
        $topics = $event->topics;

        return self::from([
            'id' =>  (new HashidManager())->encode($event->id),
            'workspace_id' => (new HashidManager())->encode($event->workspace_id),
            'title' => $event->title,
            'subtitle' => $event->subtitle,
            'context' => $context,
            'topics' => $topics->map(fn ($topic) => ['name' => $topic->name, 'id' => (new HashidManager())->encode($topic->id)])->all(),
            'time' => $event->created_at->timestamp,
            'nice_time' => $event->created_at->diffForHumans(),
        ]);
    }
}
