<?php

namespace App\Jobs;

use App\Actions\RememberOTP;
use App\Actions\GenerateOTP;
use App\Actions\SendOTPNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class HandleOTPProcess implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public readonly string $email,
        public readonly bool $is_registration,
    ) {
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $otp = (new GenerateOTP())->handle();
        (new SendOTPNotification())->handle(otp: $otp, email: $this->email, is_registration: $this->is_registration);
        (new RememberOTP())->handle(otp: $otp, email: $this->email);
    }
}
