import React from "react";
import { Fragment, useState } from "react";
import { Toaster } from "@/Components/shadcn/Toaster";
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardDescription,
} from "@/Components/shadcn/Card";

import { DiscordLogoIcon } from "@radix-ui/react-icons";
import {
    Bell,
    Check,
    ChevronDown,
    Circle,
    Gauge,
    Hash,
    Star,
    UserPlus2,
} from "lucide-react";
import { Button } from "@/Components/shadcn/Button";
import { Separator } from "@/Components/shadcn/Separator";

const data = [
    {
        id: 1,
        label: "Tailwind CSS",
        img: "https://discord-tailwind.vercel.app/_next/image?url=%2Fservers%2Ftailwind.png&w=48&q=75",
        categories: [
            {
                id: 2,
                label: "Tailwind CSS",
                channels: [
                    {
                        id: 3,
                        label: "general",
                        description:
                            "General discussion of Tailwind CSS (please move off-topic discussion in the off-topic channels).",
                        unread: true,
                    },
                    {
                        id: 4,
                        label: "plugins",
                        description: "Tailwind CSS plugins.",
                        unread: true,
                    },
                    {
                        id: 5,
                        label: "help",
                        description:
                            "Help with Tailwind CSS and build process integration.",
                        unread: true,
                    },
                    {
                        id: 6,
                        label: "internals",
                        description:
                            "Development of the Tailwind CSS framework itself.",
                    },
                ],
            },
            {
                id: 3,
                label: "Tailwind Labs",
                channels: [
                    {
                        id: 7,
                        label: "tailwind-ui",
                        description: "General discussion of Tailwind UI.",
                    },
                    {
                        id: 8,
                        label: "headless-ui",
                        description: "General discussion of Headless UI.",
                    },
                    {
                        id: 9,
                        label: "refactoring-ui",
                        description: "General discussion of Refactoring UI.",
                        unread: true,
                    },
                    {
                        id: 10,
                        label: "heroicons",
                        description: "General discussion of Heroicons.",
                        unread: true,
                    },
                ],
            },
            {
                id: 4,
                label: "Off topic",
                channels: [
                    {
                        id: 11,
                        label: "design",
                        description: "General discussion of web design.",
                    },
                    {
                        id: 12,
                        label: "development",
                        description: "General discussion of web development.",
                    },
                    {
                        id: 13,
                        label: "random",
                        description: "General discussion of everything else!",
                        unread: true,
                    },
                ],
            },
            {
                id: 5,
                label: "Community",
                channels: [
                    {
                        id: 14,
                        label: "jobs",
                        description:
                            "Job board. Please put [HIRING] or [FOR HIRE] at the beginning of your post.",
                    },
                    {
                        id: 15,
                        label: "showcase",
                        description:
                            "Share your projects built with Tailwind CSS!",
                        unread: true,
                    },
                    {
                        id: 16,
                        label: "bots",
                        description: "Bot spam containment.",
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        label: "Next.js",
        img: "https://yt3.googleusercontent.com/05lhMeAH6tZrPIUsp2yHNz3DwzhKbDUQcxcY0_qeXVyZttR_pktBzw0FcLUSR6D4fVqsEgL3ZO0=s900-c-k-c0x00ffffff-no-rj",
        categories: [
            {
                id: 6,
                label: "",
                channels: [
                    {
                        id: 17,
                        label: "welcome",
                        icon: "Book",
                    },
                    {
                        id: 18,
                        label: "announcements",
                        icon: "Speakerphone",
                        description:
                            "Announcements related to this Discord server and Next.js",
                    },
                    {
                        id: 19,
                        label: "introductions",
                        unread: true,
                        description:
                            "Welcome to the server! Feel free to introduce yourself",
                    },
                ],
            },
            {
                id: 7,
                label: "Need-Help",
                channels: [
                    {
                        id: 20,
                        label: "community-help",
                        description:
                            "Members of the community can help each other here, but we recommend checking GitHub discussions first: ",
                    },
                ],
            },
            {
                id: 8,
                label: "Community",
                channels: [
                    {
                        id: 21,
                        label: "general",
                        icon: "HashtagWithSpeechBubble",
                        description: "Discussions about Next.js in general",
                    },
                    {
                        id: 22,
                        label: "off-topic",
                        unread: true,
                        description:
                            "Discussions about topics not related to Next.js or other channels",
                    },
                    {
                        id: 23,
                        label: "showcase",
                        unread: true,
                    },
                    {
                        id: 24,
                        label: "jobs-board",
                        description:
                            "Is your company looking for Next.js developers? Discuss here!",
                    },
                    {
                        id: 25,
                        label: "hire-me",
                        unread: true,
                        description:
                            "Are you a developer looking to work with Next.js?",
                    },
                    {
                        id: 26,
                        label: "makers",
                        description:
                            "Share as you build in public. Welcoming all makers and indie hackers.",
                    },
                    {
                        id: 27,
                        label: "moderation-feedback",
                        description:
                            "Discussion about this Discord server and moderation topics",
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        label: "Mirage JS",
        img: "https://discord-tailwind.vercel.app/_next/image?url=%2Fservers%2Fmirage.png&w=48&q=75",
        categories: [
            {
                id: 9,
                label: "Text Channels",
                channels: [
                    { id: 28, label: "general" },
                    { id: 29, label: "graphql", unread: true },
                    {
                        id: 30,
                        label: "typescript",
                        unread: true,
                    },
                ],
            },
        ],
    },
];

export default function Authenticated({ user, header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [closedCategories, setClosedCategories] = useState<Array<number>>([]);

    function toggleCategory(categoryId: number) {
        setClosedCategories((closedCategories) =>
            closedCategories.includes(categoryId)
                ? closedCategories.filter((id) => id !== categoryId)
                : [...closedCategories, categoryId]
        );
    }

    return (
        <div className="flex h-screen text-gray-100">
            <Toaster />
            <div className="hidden overflow-y-scroll p-3 space-y-4 bg-dark-800 md:flex flex-col scrollbar-hide w-20 items-center border-r border-gray-500/20">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="h-8 w-8 text-wedgewood-500"
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

                <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />

                <div className="flex flex-col items-center space-y-3">
                    {data.map((server) => (
                        <div
                            key={server.id}
                            className="hover:scale-95 cursor-pointer transition w-10 h-10 rounded-xl bg-contain bg-center shadow-lg border border-gray-100/20"
                            style={{
                                backgroundImage: `url(${server.img})`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="flex-grow">
                <div className="flex h-full">
                    <div className="hidden flex-col w-60 bg-dark-800 md:flex h-full border-r border-gray-500/20 px-2">
                        <button className="flex items-center px-4 h-12 font-title text-[15px] font-semibold text-white hover:bg-gray-550/[0.16] shadow-sm transition">
                            Tailwind CSS
                            <ChevronDown className="ml-auto w-[18px] h-[18px] opacity-80" />
                        </button>
                        <div className="overflow-y-scroll flex-1 pt-3 space-y-[21px] font-medium text-gray-300 scrollbar-hide">
                            <div>
                                <div>
                                    <a
                                        className={`flex items-center px-2 mx-2 py-1 rounded group relative`}
                                    >
                                        <Gauge className="mr-1.5 w-4 h-4 text-gray-400" />
                                        Dashboard
                                    </a>
                                </div>
                            </div>
                            {data[0].categories.map((category) => (
                                <div key={category.id}>
                                    {category.label && (
                                        <button
                                            onClick={() =>
                                                toggleCategory(category.id)
                                            }
                                            className="flex items-center px-0.5 w-full font-title text-xs tracking-wide hover:text-gray-100 uppercase"
                                        >
                                            <ChevronDown
                                                className={`${
                                                    closedCategories.includes(
                                                        category.id
                                                    )
                                                        ? "-rotate-90"
                                                        : ""
                                                } w-3 h-3 mr-0.5 transition duration-200`}
                                            />
                                            {category.label}
                                        </button>
                                    )}

                                    <div className="mt-[5px] space-y-0.5">
                                        {category.channels
                                            .filter((channel) => {
                                                let categoryIsOpen =
                                                    !closedCategories.includes(
                                                        category.id
                                                    );

                                                return (
                                                    categoryIsOpen ||
                                                    channel.unread
                                                );
                                            })
                                            .map((channel) => (
                                                <a
                                                    key={channel.id}
                                                    className={`flex items-center px-2 mx-2 py-1 rounded group relative`}
                                                >
                                                    <Hash className="mr-1.5 w-4 h-4 text-gray-400" />
                                                    {channel.label}
                                                    <UserPlus2 className="transition ml-auto w-4 h-4 text-gray-200 hover:text-gray-100 opacity-0 group-hover:opacity-100" />
                                                </a>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 shrink min-w-0 bg-dark-700">
                        <div className="flex items-center px-8 h-12 shadow-sm border-b border-gray-500/20">
                            <div className="flex items-center">
                                <Hash className="mx-2 w-4 h-4 font-semibold text-gray-200" />
                                <span className="mr-2 font-title text-white whitespace-nowrap">
                                    general
                                </span>
                            </div>

                            {true && (
                                <>
                                    <div className="hidden mx-2 w-px h-6 bg-white/[.06] md:block"></div>
                                    <div className="hidden mx-2 text-sm font-medium text-gray-200 truncate md:block">
                                        Our main channel for announcements and
                                    </div>
                                </>
                            )}
                            <div className="hidden items-center ml-auto md:flex">
                                <div className="relative mx-2">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="px-3 w-72 h-8 text-sm font-medium placeholder:text-gray-400 bg-dark-800 shadow rounded border border-gray-100/20 focus:ring-white focus:outline-none focus:border-transparent transition"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="overflow-y-scroll flex-1">
                            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[0, 1, 2, 3, 4].map((item) => (
                                    <Card
                                        className="bg-dark-900 border border-gray-500/20 shadow"
                                        key={item}
                                    >
                                        <CardHeader className="space-y-0">
                                            <div className="space-y-3">
                                                <CardTitle className="text-white">
                                                    shadcn/ui
                                                </CardTitle>
                                                <CardDescription className="text-gray-300">
                                                    Beautifully designed
                                                    components built with Radix
                                                    UI and Tailwind CSS.
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex space-x-4 text-sm text-gray-100">
                                                <div>04/07/23</div>
                                                <div>14:27</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
