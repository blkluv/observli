<x-mail::message>
# Hello,

Your one time password is:

<x-mail::panel>
# {{ $otp }}
</x-mail::panel>

@if ($is_registration)
  Use this code to complete your registration. Do not share this code with anyone. This code will expire in 15 minutes.
@endif

@if(!$is_registration)
  Use this code to login to your account. Do not share this code with anyone. This code will expire in 15 minutes.
@endif

</x-mail::message>
