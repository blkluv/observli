import React from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Snapshot } from "@/Components/Snapshot";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/Components/shadcn/Card";
import { ArrowRight, Gauge } from "lucide-react";
import InviteMembers from "@/Dialogs/InviteMembers";
import { set } from "date-fns";
import ConfigureDomain from "@/Dialogs/ConfigureDomain";
import { Skeleton } from "@/Components/shadcn/Skeleton";

export default function Dashboard({
    analytics,
    auth,
    events,
    currentWorkspace,
    reachability,
    workspaces,
}) {
    return (
        <AuthenticatedLayout
            currentWorkspace={currentWorkspace}
            topics={currentWorkspace.topics}
            user={auth.user}
            workspaces={workspaces}
        >
            <Head title="Dashboard" />

            <div className="flex flex-col">
                <div className="flex items-center px-8 h-12 border-b border-gray-500/20 sticky top-0 z-50 bg-dark-900/20 backdrop-blur drag">
                    <div className="flex items-center text-white/90">
                        <Gauge className="mx-2 w-4 h-4" />
                        <span className="whitespace-nowrap">Dashboard</span>
                    </div>
                    <div className="hidden items-center ml-auto md:flex no-drag">
                        <InviteMembers currentWorkspace={currentWorkspace} />
                    </div>
                </div>
                <div className="overflow-y-scroll flex-1">
                    <div className="flex-1 space-y-4 p-8">
                        <div className="space-y-4">
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Events
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            {analytics.event_count}
                                        </div>
                                        <p className="text-xs text-dark-200">
                                            {analytics.event_daily_change} from
                                            yesterday
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Executed Actions
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            {analytics.action_count}
                                        </div>
                                        <p className="text-xs text-dark-200">
                                            {analytics.action_daily_change} from
                                            yesterday
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="hidden lg:block relative">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Reachability
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {currentWorkspace.domain && (
                                            <div>
                                                {!reachability.ping && (
                                                    <div className="space-y-2 mb-2">
                                                        <Skeleton className="h-2 w-full" />
                                                        <Skeleton className="h-2 w-3/4" />
                                                    </div>
                                                )}
                                                {reachability.ping && (
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                                                        <div className="text-2xl font-bold">
                                                            {reachability.ping}
                                                            ms
                                                        </div>
                                                    </div>
                                                )}
                                                <p className="text-xs text-dark-200">
                                                    Last checked{" "}
                                                    {reachability.last_check}
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                    {!currentWorkspace.domain && (
                                        <div className="absolute inset-0 bg-dark-800/90 rounded-xl w-full h-full">
                                            <div className="flex items-center justify-center w-full h-full">
                                                <ConfigureDomain
                                                    workspace={currentWorkspace}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </Card>
                            </div>
                            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
                                <Card className="col-span-12 md:col-span-8">
                                    <CardHeader>
                                        <CardTitle className="text-sm font-medium">
                                            Snapshot
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pl-2">
                                        <Snapshot
                                            analytics={
                                                analytics.daily_event_count
                                            }
                                        />
                                    </CardContent>
                                </Card>
                                <Card className="hidden lg:block col-span-4">
                                    <CardHeader>
                                        <CardTitle className="text-sm font-medium">
                                            Feed
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {events.map((event) => (
                                                <div
                                                    key={event.id}
                                                    className="flex items-center justify-between overflow-hidden border-b border-dark-200/20 pb-2 last:border-0"
                                                >
                                                    <div className="space-y-2">
                                                        <p className="text-sm font-medium leading-none line-clamp-1">
                                                            {event.title}
                                                        </p>
                                                        <p className="text-xs text-dark-100 text-ellipsis">
                                                            {event.nice_time}
                                                        </p>
                                                    </div>
                                                    <Link
                                                        href={`/e/${event.id}`}
                                                        className="ml-4 text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition "
                                                    >
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
