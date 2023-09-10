<?php

namespace App\Actions;

use Illuminate\Support\Facades\Cache;

class RememberOTP
{
    public function handle(string $ip, string $otp, string $email): void
    {
        Cache::remember(
            key: "{$ip}-otp",
            ttl: (60 * 15),
            callback: fn (): array => [
                'email' => $email,
                'otp' => $otp,
            ],
        );
    }
}
