import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { Hash } from "lucide-react";
import EventsGrid from "./Partials/EventsGrid";

export default function Show({
    auth,
    currentWorkspace,
    events,
    topic,
    workspaces,
}) {
    return (
        <AuthenticatedLayout
            currentWorkspace={currentWorkspace}
            topics={currentWorkspace.topics}
            user={auth.user}
            workspaces={workspaces}
        >
            <Head title={"# " + topic.name} />

            <div className="flex flex-col">
                <div className="flex items-center px-8 h-12 border-b border-gray-500/20 sticky top-0 z-50 bg-dark-900/20 backdrop-blur drag">
                    <div className="flex items-center text-white/90">
                        <Hash className="mx-2 w-4 h-4" />
                        <span className="mr-2 whitespace-nowrap">
                            {topic.name}
                        </span>
                    </div>
                    <>
                        <div className="hidden mx-2 w-px h-6 bg-white/[.06] md:block"></div>
                        <div className="hidden mx-2 text-sm font-medium text-gray-200 truncate md:block">
                            {topic.description}
                        </div>
                    </>
                    <div className="hidden items-center ml-auto md:flex no-drag">
                        <div className="relative mx-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-3 w-72 h-8 text-sm font-medium placeholder:text-dark-200 bg-dark-800 shadow rounded border border-gray-100/20 focus:ring-white focus:outline-none focus:border-transparent transition"
                            />
                        </div>
                    </div>
                </div>
                <div className="overflow-y-scroll flex-1">
                    <EventsGrid events={events} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
