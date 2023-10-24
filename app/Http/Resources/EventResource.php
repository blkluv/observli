<?php

namespace App\Http\Resources;

use App\Objects\HashidManager;
use Illuminate\Http\Request;

class EventResource extends BaseResource
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
        $payload['created'] = $this->created_at->timestamp;
        $payload['actions'] = ActionResource::collection($this->actions);
        $payload['timestamp'] = now()->timestamp;
        unset($payload['workspace']);
        unset($payload['created_at']);
        unset($payload['updated_at']);
        $payload = $this->sort_like($payload, ["id", "workspace_id", "title", "context", "actions", "created", "timestamp"]);
        return $payload;
    }
}
