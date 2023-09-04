import React from "react";

import AuthLayout from "@/Layouts/AuthLayout";
import GuestLayout from "@/Layouts/GuestLayout";

import { cn } from "@/Components/shadcn/lib/utils";
import { Button } from "@/Components/shadcn/Button";
import { Input } from "@/Components/shadcn/Input";
import { Label } from "@/Components/shadcn/Label";
import { Icons } from "@/Components/shadcn/Icons";

import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function Login({}) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        post(route("otp"));
    }

    return (
        <GuestLayout>
            <AuthLayout
                title="Sign in to your account"
                subtitle="Enter your email to get your link to sign in"
            >
                <Head title="Log in" />
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className={cn("grid gap-6")}>
                        <form onSubmit={onSubmit}>
                            <div className="grid gap-2">
                                <div className="grid gap-1">
                                    <div className="space-y-2">
                                        <Label
                                            className="sr-only"
                                            htmlFor="email"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            placeholder="peter@parker.com"
                                            type="email"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            disabled={processing}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        {errors.email && (
                                            <InputError
                                                message={errors.email}
                                            />
                                        )}
                                    </div>
                                </div>
                                <Button
                                    className="bg-wedgewood-700 hover:bg-gray-900 hover:bg-wedgewood-500/90 hover:shadow"
                                    disabled={processing}
                                >
                                    {processing && (
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Sign In with Email
                                </Button>
                            </div>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <Button
                            className="hover:bg-wedgewood-100"
                            variant="outline"
                            type="button"
                            disabled={processing}
                        >
                            {processing ? (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Icons.gitHub className="mr-2 h-4 w-4" />
                            )}{" "}
                            Github
                        </Button>
                    </div>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Don't have an account yet?{" "}
                        <Link
                            href="/register"
                            className="font-semibold underline underline-offset-4 hover:text-wedgewood-600"
                        >
                            Get started
                        </Link>
                    </p>
                </div>
            </AuthLayout>
        </GuestLayout>
    );
}
