<?php

namespace App\Objects;

use Hashids\Hashids;

class HashidManager
{
    protected $hashids;

    public function __construct()
    {
        $this->hashids = new Hashids(config('app.key'), 7, 'abcdefghijklmnopqrstuvwxyz1234567890');
    }

    public function encode($id)
    {
        return $this->hashids->encode($id);
    }

    public function decode($hash)
    {
        if(!is_int($hash)) {
            return $this->hashids->decode($hash)[0];
        }
        return $hash;
    }

}
