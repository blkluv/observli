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

    public function redirectToStartupCheckout(Request $request)
    {
        $prices = collect(Cashier::stripe()->prices->all()['data']);
        $workspace = $request->user()->currentWorkspace;
        $workspace->createOrGetStripeCustomer();
        return $workspace->newSubscription('default', $prices->sortBy('unit_amount')->first()->id)->checkout();
    }
}
