<?php

namespace App\Http\Resources;

use App\Objects\HashidManager;
use Illuminate\Http\Request;

class ActionResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $is_top_level = $request->path() == 'actions';
        $payload = parent::toArray($request);
        $payload['id'] = (new HashidManager())->encode($this->id);
        $payload['event_id'] = (new HashidManager())->encode($this->event_id);
        $payload['created'] = $this->created_at->timestamp;
        $payload['is_executed'] = $this->is_executed;
        $payload['timestamp'] = now()->timestamp;
        unset($payload['created_at']);
        unset($payload['updated_at']);
        unset($payload['laravel_through_key']);
        if(!$is_top_level) {
            unset($payload['created']);
            unset($payload['context']);
            unset($payload['event_id']);
            unset($payload['timestamp']);
        }
        $payload = $this->sort_like($payload, ["id", "workspace_id", "title", "context", "actions", "created", "timestamp"]);
        return $payload;
    }
}
