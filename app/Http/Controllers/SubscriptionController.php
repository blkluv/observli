<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Cashier\Cashier;

class SubscriptionController extends Controller
{
    public function redirectToBillingPortal(Request $request)
    {
        $workspace = $request->user()->currentWorkspace;
        return Inertia::location($workspace->billingPortalUrl(route('home')));
    }

    public function redirectToCheckout(Request $request)
    {
        $variant = $request->query('variant') ?? "startup_monthly";
        $prices = collect(Cashier::stripe()->prices->all()['data']);
        $price = $prices->filter(function ($price) use ($variant) {
            return $price['lookup_key'] === $variant;
        })->first();
        $workspace = $request->user()->currentWorkspace;
        $workspace->createOrGetStripeCustomer();
        return $workspace->newSubscription('default', $price->id)->checkout();
    }
}
