import React from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Snapshot } from "@/Components/Snapshot";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/Components/shadcn/Card";
import { Gauge, UserPlus2 } from "lucide-react";

export default function Dashboard({ auth, events, topics }) {
    return (
        <AuthenticatedLayout topics={topics} user={auth.user}>
            <Head title="Dashboard" />
            <div className="flex flex-col">
                <div className="flex items-center px-8 h-12 border-b border-gray-500/20 sticky top-0 z-50 bg-dark-700">
                    <div className="flex items-center text-white/90">
                        <Gauge className="mx-2 w-4 h-4" />
                        <span className="whitespace-nowrap">Dashboard</span>
                    </div>
                    <div className="hidden items-center ml-auto md:flex">
                        <button className="text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition hover:scale-99">
                            <UserPlus2 className="w-4 h-4"></UserPlus2>{" "}
                            <span>Add members</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-y-scroll flex-1">
                    <div className="flex-1 space-y-4 p-8">
                        <div className="space-y-4">
                            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Events
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            0
                                        </div>
                                        <p className="text-xs text-dark-200">
                                            +0% from yesterday
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
                                            0
                                        </div>
                                        <p className="text-xs text-dark-200">
                                            +0% from yesterday
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Reachability
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent></CardContent>
                                </Card>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                <Card className="col-span-5">
                                    <CardHeader>
                                        <CardTitle>Snapshot</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pl-2">
                                        <Snapshot />
                                    </CardContent>
                                </Card>
                                <Card className="col-span-2">
                                    <CardHeader>
                                        <CardTitle>Feed</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {/* <RecentSales /> */}
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
