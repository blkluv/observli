import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/shadcn/Dialog";
import {
    DropdownMenuItem,
    DropdownMenuShortcut,
} from "@/Components/shadcn/DropdownMenu";
import { classNames } from "@/Util";
import { Check } from "lucide-react";
import { RadioGroup } from "@headlessui/react";

export default function Subscription({}) {
    const pricing = {
        frequencies: [
            { value: "monthly", label: "Monthly", priceSuffix: "/month" },
            { value: "yearly", label: "Yearly", priceSuffix: "/year" },
        ],
        tiers: [
            {
                name: "Startup",
                id: "startup",
                price: { monthly: "$19", yearly: "$190" },
                features: [
                    "5,000 events / month",
                    "Unlimited retention",
                    "Unlimited seats",
                ],
                mostPopular: true,
            },
            {
                name: "Pro",
                id: "pro",
                price: { monthly: "$49", yearly: "$490" },
                features: [
                    "15,000 events / month",
                    "Unlimited retention",
                    "Unlimited seats",
                ],
                mostPopular: false,
            },
        ],
    };

    const [frequency, setFrequency] = useState(pricing.frequencies[0]);
    const [open, setOpen] = React.useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="w-full">
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    Subscription
                    <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="sm:max-w-screen-sm w-full">
                <DialogHeader>
                    <DialogTitle>Subscription</DialogTitle>
                </DialogHeader>
                <div className="mt-4 flex justify-center">
                    <RadioGroup
                        value={frequency}
                        onChange={setFrequency}
                        className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200 "
                    >
                        {pricing.frequencies.map((option) => (
                            <RadioGroup.Option
                                key={option.value}
                                value={option}
                                className={() =>
                                    classNames(
                                        option.value === frequency.value
                                            ? "bg-wedgewood-600 text-white"
                                            : "text-dark-100",
                                        "cursor-pointer rounded-full px-2.5 py-1 focus:ring-0 focus:outline-none"
                                    )
                                }
                            >
                                <span>{option.label}</span>
                            </RadioGroup.Option>
                        ))}
                    </RadioGroup>
                </div>
                <div className="isolate mt-4 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none mx-auto">
                    {pricing.tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular
                                    ? " border-wedgewood-600"
                                    : " border-gray-200",
                                "rounded-3xl p-8 border"
                            )}
                        >
                            <h2
                                id={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? "text-wedgewood-600"
                                        : "text-white/90",
                                    "text-lg font-semibold leading-8"
                                )}
                            >
                                {tier.name}
                            </h2>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-white/90">
                                    {tier.price[frequency.value]}
                                </span>
                                <span className="text-sm font-semibold leading-6 text-dark-100">
                                    {frequency.priceSuffix}
                                </span>
                            </p>
                            <a
                                href={route("subscription.checkout", {
                                    variant: `${tier.id}_${frequency.value}`,
                                })}
                                aria-describedby={tier.id}
                                className={classNames(
                                    "bg-wedgewood-600 text-white shadow-sm hover:bg-wedgewood-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wedgewood-600"
                                )}
                            >
                                Subscribe
                            </a>
                            <ul
                                role="list"
                                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                            >
                                {tier.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex gap-x-3 text-white/90"
                                    >
                                        <Check
                                            className="h-6 w-5 flex-none text-wedgewood-600"
                                            aria-hidden="true"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
