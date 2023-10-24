<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Jobs\HandleOTPProcess;
use App\Models\User;
use App\Models\WorkspaceInvitation;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        $request->session()->put('otp.email', $request->email);

        dispatch(new HandleOTPProcess(
            email: $request->email,
            is_registration: true,
        ));

        return redirect(route('otp'));
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function invite(Request $request): RedirectResponse
    {
        $invitation = WorkspaceInvitation::where('token', $request->token)->firstOrFail();
        $workspace = $invitation->workspace;

        if($auth = auth()->user()){
            if($workspace->hasUserWithEmail($auth->email)) {
                return redirect(route('home'));
            }
        }

        if($user = User::where('email', $invitation->email)->first()) {
            if(!$workspace->hasUserWithEmail($invitation->email)) {
                $workspace->users()->attach($user, [
                    'role' => $invitation->role,
                ]);
            }
        } else {
            $user = User::create([
                'name' => $invitation->name,
                'email' => $invitation->email,
            ]);
            $workspace->users()->attach($user, [
                'role' => $invitation->role,
            ]);
        }

        $user->switchWorkspace($workspace);

        $invitation->delete();

        $request->session()->put('otp.email', $invitation->email);

        dispatch(new HandleOTPProcess(
            email: $invitation->email,
            is_registration: true,
        ));

        return redirect(route('otp'));
    }
}
