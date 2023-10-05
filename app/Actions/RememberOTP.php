<?php

namespace App\Actions;

use Illuminate\Support\Facades\Cache;

class RememberOTP
{
    public function handle(string $otp, string $email): void
    {
        Cache::put(
            key: "{$email}-otp",
            ttl: (60 * 15),
            value: $otp,
        );
    }
}
