import React from "react";
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardDescription,
} from "@/Components/shadcn/Card";
import { Play, Trash } from "lucide-react";
import { Link, router } from "@inertiajs/react";

export default function EventsGrid({ events }) {
    const handleDeleteClicked = (e) => {
        e.stopPropagation();
        console.log("delete clicked");
    };
    const handlePlayActionsClicked = (e) => {
        e.stopPropagation();
        console.log("play clicked");
    };
    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
            {events.map((event) => (
                <div
                    key={event.id}
                    onClick={() => router.visit(route("events.show", event.id))}
                >
                    <Card className="cursor-pointer" key={event.id}>
                        <CardHeader className="space-y-0">
                            <div className="space-y-3">
                                <CardTitle className="text-white/90 flex items-center justify-between">
                                    <span className="text-ellipsis mr-2 line-clamp-1">
                                        {event.title}
                                    </span>
                                    <button
                                        onClick={(e) => {
                                            handlePlayActionsClicked(e);
                                        }}
                                        className="flex items-center justify-center w-7 h-7 transition bg-dark-900 border border-gray-500/20 rounded text-dark-100 hover:border-wedgewood-500 hover:text-wedgewood-500"
                                    >
                                        <Play className="w-3 h-3" />
                                    </button>
                                </CardTitle>
                                {event.description && (
                                    <CardDescription className="text-dark-100">
                                        {event.description}
                                    </CardDescription>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex space-x-4 text-sm text-dark-100">
                                <p className="text-xs">{event.nice_time}</p>
                            </div>
                        </CardContent>
                        <div className="absolute left-0 bottom-[-.75rem] right-0 opacity-0 hover:opacity-100 transition">
                            <div className="flex items-center justify-end px-6 space-x-1">
                                <div
                                    onClick={(e) => handleDeleteClicked(e)}
                                    className="cursor-pointer flex items-center justify-center w-7 h-7 transition bg-dark-900 border border-gray-500/20 rounded text-dark-100 hover:border-wedgewood-500 hover:text-wedgewood-500"
                                >
                                    <Trash className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}
