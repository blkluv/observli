<x-mail::message>
# Hello,

You have been invited to join the {{ $name }} workspace on {{ config('app.name') }}.

Click the button below to accept the invitation:

<x-mail::button :url="$url">
Join Workspace
</x-mail::button>

</x-mail::message>
