<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BaseResource extends JsonResource {
    public function sort_like($array, $order) {
        return array_merge(
            array_intersect_key(array_flip($order), $array),
            $array
        );
    }
}