import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { Toaster } from "@/Components/shadcn/Toaster";

import { Hash, MoreVertical, Plus, UserPlus2 } from "lucide-react";
import { classNames } from "@/Util";
import AddMembers from "@/Dialogs/AddMembers";

const data = [
    {
        id: 1,
        label: "Figma",
        img: "https://viget.imgix.net/icon-figma.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&w=1200&s=df8e9219322a4044ec13ce998c4fa129",
    },
    {
        id: 2,
        label: "Apple",
        img: "https://yt3.googleusercontent.com/05lhMeAH6tZrPIUsp2yHNz3DwzhKbDUQcxcY0_qeXVyZttR_pktBzw0FcLUSR6D4fVqsEgL3ZO0=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        id: 3,
        label: "Vercel",
        img: "https://i.pinimg.com/736x/c4/35/6c/c4356cd5454d06585e0a46066b555172.jpg",
    },
];

export default function Authenticated({ topics, user, children }) {
    const { url } = usePage();

    const topicIsActive = (topic) => {
        return url === `/t/${topic.id}`;
    };
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
                            className="hover:scale-98 cursor-pointer transition w-10 h-10 rounded-xl bg-contain bg-center shadow-lg border border-gray-100/20"
                            style={{
                                backgroundImage: `url(${server.img})`,
                            }}
                        ></div>
                    ))}
                    <div className="flex items-center justify-center hover:scale-95 cursor-pointer transition w-10 h-10 rounded-xl bg-dark-500/20 shadow-lg border border-gray-100/20">
                        <Plus className="w-4 h-4" />
                    </div>
                </div>
            </div>
            <div className="flex-grow">
                <div className="flex h-full">
                    <div className="hidden flex-col w-60 bg-dark-800 md:flex h-full border-r border-gray-500/20 px-2">
                        <button className="flex items-center px-4 h-12 font-title text-[15px] font-semibold text-white hover:bg-gray-550/[0.16] shadow-sm transition">
                            Tailwind CSS
                            <MoreVertical className="ml-auto w-[18px] h-[18px] opacity-80" />
                        </button>
                        <div className="overflow-y-scroll flex-1 pt-3 space-y-[21px] font-medium text-gray-300 scrollbar-hide">
                            <div>
                                <div>
                                    <a
                                        href="/"
                                        className={classNames(
                                            "flex items-center px-2 mx-2 py-1 rounded group relative text-dark-200 hover:text-white transition",
                                            url === "/" && "text-white"
                                        )}
                                    >
                                        Dashboard
                                    </a>
                                </div>
                            </div>
                            <div className="mt-[5px] space-y-0.5">
                                {topics.map((topic) => (
                                    <div
                                        key={topic.id}
                                        className={`flex items-center px-2 mx-2 py-1 rounded group relative transition`}
                                    >
                                        <Link
                                            className={classNames(
                                                "inline-flex items-center group-hover:text-white",
                                                topicIsActive(topic)
                                                    ? "text-white"
                                                    : "text-dark-200"
                                            )}
                                            href={`/t/${topic.id}`}
                                        >
                                            <Hash className="mr-1.5 w-4 h-4" />
                                            {topic.name}
                                        </Link>
                                        {topic.name !== "general" && (
                                            // <UserPlus2 className="transition ml-auto w-4 h-4 text-gray-200 hover:text-gray-100 opacity-0 group-hover:opacity-100" />
                                            <AddMembers topic={topic} />
                                        )}
                                    </div>
                                ))}
                                <div className="flex items-center px-2 mx-2 py-1 rounded group relative transition">
                                    <p className="cursor-pointer inline-flex items-center group-hover:text-white text-dark-200">
                                        <Plus className="mr-1.5 w-4 h-4" />
                                        Create topic
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 shrink min-w-0 bg-dark-700 overflow-scroll">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
