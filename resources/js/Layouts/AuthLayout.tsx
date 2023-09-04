import { Link } from "@inertiajs/react";
import React from "react";
import { CirclesBackground } from "@/Components/CirclesBackground";

export default function AuthLayout({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
            <div className="mx-auto flex w-full max-w-xl flex-col px-4 sm:px-6">
                <Link href="/" aria-label="Home">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="h-10 w-10 mx-auto"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <line
                            x1="208"
                            y1="128"
                            x2="128"
                            y2="208"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                        ></line>
                        <line
                            x1="192"
                            y1="40"
                            x2="40"
                            y2="192"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                        ></line>
                    </svg>
                </Link>
                <div className="relative mt-12 sm:mt-16">
                    <CirclesBackground
                        width="1090"
                        height="1090"
                        className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto"
                    />
                    <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-3 text-center text-lg text-gray-600">
                            {subtitle}
                        </p>
                    )}
                </div>
                <div className="-mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-3xl sm:py-12 border border-gray-100">
                    {children}
                </div>
            </div>
        </main>
    );
}
