import React from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import EventsGrid from "./Topic/Partials/EventsGrid";

export default function Dashboard({ auth, events, topics }) {
    return (
        <AuthenticatedLayout topics={topics} user={auth.user}>
            <Head title="Dashboard" />
            <div className="flex flex-col">
                <div className="flex items-center px-8 h-12 shadow-sm border-b border-gray-500/20">
                    <div className="flex items-center">
                        <span className="mr-2 font-title text-white whitespace-nowrap">
                            Dashboard
                        </span>
                    </div>
                    <div className="hidden items-center ml-auto md:flex"></div>
                </div>
                <div className="overflow-y-scroll flex-1">
                    <EventsGrid events={events} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
