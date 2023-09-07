import React from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import EventsGrid from "./Topic/Partials/EventsGrid";

import { Button } from "@/Components/shadcn/Button";
import { CalendarDateRangePicker } from "@/Components/shadcn/CalendarDateRangePicker";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/shadcn/Card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/Components/shadcn/Tabs";

export default function Dashboard({ auth, events, topics }) {
    return (
        <AuthenticatedLayout topics={topics} user={auth.user}>
            <Head title="Dashboard" />
            <div className="flex flex-col">
                <div className="flex items-center px-8 h-12 border-b border-gray-500/20 sticky top-0 z-50 bg-dark-700">
                    <div className="flex items-center">
                        <span className="mr-2 font-title text-white whitespace-nowrap">
                            Dashboard
                        </span>
                    </div>
                    <div className="hidden items-center ml-auto md:flex">
                        <CalendarDateRangePicker />
                    </div>
                </div>
                <div className="overflow-y-scroll flex-1">
                    <div className="flex-1 space-y-4 p-8">
                        <div className="space-y-4">
                            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Total Revenue
                                        </CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            $45,231.89
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            +20.1% from last month
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Subscriptions
                                        </CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            +2350
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            +180.1% from last month
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Sales
                                        </CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <rect
                                                width="20"
                                                height="14"
                                                x="2"
                                                y="5"
                                                rx="2"
                                            />
                                            <path d="M2 10h20" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            +12,234
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            +19% from last month
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                <Card className="col-span-4">
                                    <CardHeader>
                                        <CardTitle>Overview</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pl-2">
                                        {/* <Overview /> */}
                                    </CardContent>
                                </Card>
                                <Card className="col-span-3">
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
