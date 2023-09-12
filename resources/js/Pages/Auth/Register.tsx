import React, { useEffect } from "react";

import AuthLayout from "@/Layouts/AuthLayout";
import GuestLayout from "@/Layouts/GuestLayout";

import { cn } from "@/Components/shadcn/lib/utils";
import { Button } from "@/Components/shadcn/Button";
import { Input } from "@/Components/shadcn/Input";
import { Label } from "@/Components/shadcn/Label";
import { Icons } from "@/Components/shadcn/Icons";

import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function Register() {
    const { setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
    });

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        post(route("register"));
    }

    useEffect(() => {
        reset();
    }, []);

    return (
        <GuestLayout>
            <AuthLayout
                title="Create your account"
                subtitle="Enter your name and email below to get started"
            >
                <Head title="Register | Forms." />
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className={cn("grid gap-6")}>
                        <form onSubmit={onSubmit}>
                            <div className="grid gap-2">
                                <div className="grid gap-2 mb-4">
                                    <div className="space-y-2">
                                        <Label
                                            className="sr-only"
                                            htmlFor="name"
                                        >
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            placeholder="Peter Parker"
                                            autoCapitalize="none"
                                            autoComplete="off"
                                            autoCorrect="off"
                                            disabled={processing}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        {errors.name && (
                                            <InputError message={errors.name} />
                                        )}
                                    </div>
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
                                    Register with Email
                                </Button>
                            </div>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-dark-100" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-dark-800 px-2 text-dark-100">
                                    Or get started with
                                </span>
                            </div>
                        </div>
                        <Button
                            className="bg-white/90 text-dark-800 hover:bg-white"
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
                    <p className="px-8 text-center text-sm text-dark-100">
                        By continuing, you agree to our{" "}
                        <Link
                            href="/terms"
                            className="font-medium underline underline-offset-4 hover:text-forms-600"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            className="font-medium underline underline-offset-4 hover:text-forms-600"
                        >
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </AuthLayout>
        </GuestLayout>
    );
}
