<?php

namespace App\Data;

use App\Models\Event;
use App\Objects\HashidManager;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class EventData extends Data
{
    public function __construct(
        public readonly string $id,
        public readonly string $team_id,
        public readonly string $title,
        public readonly ?string $message,
        public readonly array $context,
        /** @var DataCollection<TopicData> */
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
            'team_id' => (new HashidManager())->encode($event->team_id),
            'title' => $event->title,
            'message' => $event->message,
            'context' => $event->context,
            'topics' => $topics->map(fn ($topic) => ['name' => $topic->name, 'id' => (new HashidManager())->encode($topic->id)])->all(),
            'time' => $event->created_at->timestamp,
            'nice_time' => $event->created_at->diffForHumans(),
        ]);
    }
}
