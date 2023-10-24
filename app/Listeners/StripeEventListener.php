<?php

namespace App\Listeners;

use Laravel\Cashier\Cashier;
use Laravel\Cashier\Events\WebhookReceived;
use Laravel\Cashier\Subscription;

class StripeEventListener
{
    /**
     * Handle the event.
     */
    public function handle(WebhookReceived $event): void
    {
        /* new checkout */
        if($event->payload['type'] === 'checkout.session.completed'){
            $subscription = $event->payload['data']['object']['subscription'];
            $subscription = Subscription::where('stripe_id', $subscription)->first();
            $invoice = $event->payload['data']['object']['invoice'];
            $line_item = Cashier::stripe()->invoices->retrieve($invoice)->lines->last();
            $subscription->update([
                'stripe_lookup_key' => $line_item['price']['lookup_key']
            ]);
        }
        /* updated plan checkout */
        if($event->payload['type'] === 'invoice.payment_succeeded'){
            $subscription = $event->payload['data']['object']['subscription'];
            $subscription = Subscription::where('stripe_id', $subscription)->first();
            $invoice = $event->payload['data']['object']['id'];
            $line_item = Cashier::stripe()->invoices->retrieve($invoice)->lines->last();
            $subscription->update([
                'stripe_lookup_key' => $line_item['price']['lookup_key']
            ]);
        }
    }
}
