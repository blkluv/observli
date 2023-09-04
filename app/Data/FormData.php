<?php

namespace App\Data;

use App\Models\Form;
use App\Objects\HashidManager;
use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class FormData extends Data
{
    public function __construct(
        public readonly string $id,
        public readonly string $team_id,
        public readonly string $title,
        public readonly ?CarbonImmutable $published_at,
        public readonly array $content_items,
        /** @var DataCollection<RespondentData> */
        public readonly DataCollection $respondents,
        public readonly int $num_questions,
        public readonly int $num_respondents,
        public readonly string $updated_at,
        public readonly int $views,
        public readonly int $completion_rate,
    ) {

    }

    public static function fromModel(Form $form): self
    {
        $content_items = $form->content_items;
        $respondents = $form->respondents;
        return self::from([
            'id' =>  (new HashidManager())->encode($form->id),
            'team_id' => (new HashidManager())->encode($form->team_id),
            'title' => $form->title,
            'published_at' => $form->published_at,
            'content_items' => $content_items,
            'respondents' => RespondentData::collection($respondents),
            'num_questions' => count($content_items),
            'num_respondents' => count($respondents),
            'updated_at' => $form->updated_at->diffForHumans(),
            'views' => 0,
            'completion_rate' => 0,

        ]);
    }
}
