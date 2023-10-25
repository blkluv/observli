<?php

namespace App\Http\Resources;

use App\Objects\HashidManager;
use Illuminate\Http\Request;

class TopicResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $payload = parent::toArray($request);
        $payload['id'] = (new HashidManager())->encode($this->id);
        $payload['workspace_id'] = (new HashidManager())->encode($this->workspace_id);
        $payload['event_count'] = $this->events()->count();
        $payload['created'] = $this->created_at->timestamp;
        unset($payload['slug']);
        unset($payload['created_at']);
        unset($payload['updated_at']);
        $payload = $this->sort_like($payload, ["id", "workspace_id", "name", "description", "event_count", "created"]);
        return $payload;
    }
}
