import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ArrowLeft } from "lucide-react";
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardDescription,
    CardFooter,
} from "@/Components/shadcn/Card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/shadcn/Table";
import { Play } from "lucide-react";

export default function Show({ auth, event, topics }) {
    return (
        <AuthenticatedLayout topics={topics} user={auth.user}>
            <Head title="Observli" />

            <div className="flex flex-col">
                <div className="flex items-center px-8 h-12 border-b border-gray-500/20 sticky top-0 z-50 bg-dark-700 backdrop-blur drag">
                    <div className="flex items-center text-white/90">
                        <ArrowLeft
                            onClick={() => history.back()}
                            className="mx-2 w-4 h-4 cursor-pointer no-drag"
                        />
                        <span className="mr-2 whitespace-nowrap">
                            {event.id}
                        </span>
                    </div>

                    {true && (
                        <>
                            <div className="hidden mx-2 w-px h-6 bg-white/[.06] md:block"></div>
                            <div className="hidden mx-2 text-sm font-medium text-gray-200 truncate md:block">
                                {event.title}
                            </div>
                        </>
                    )}
                    <div className="hidden items-center ml-auto md:flex">
                        <div className="relative mx-2"></div>
                    </div>
                </div>
                <div className="overflow-y-scroll flex-1">
                    <div className="p-8">
                        <Card className="mx-auto max-w-2xl" key={event.id}>
                            <CardHeader className="space-y-0">
                                <div className="space-y-3">
                                    <CardTitle className="text-white/90 flex items-center justify-between">
                                        <span className="text-xl">
                                            {event.title}
                                        </span>
                                        <button
                                            disabled={false}
                                            className="flex items-center justify-center w-10 h-10 transition bg-dark-900 border border-gray-500/20 rounded text-dark-100 hover:border-wedgewood-500 hover:text-wedgewood-500"
                                        >
                                            <Play className="w-5 h-5" />
                                        </button>
                                    </CardTitle>
                                    <CardDescription className="text-dark-100">
                                        {event.description}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Table>
                                    <TableBody>
                                        {Object.keys(event.context).map(
                                            (key) => (
                                                <TableRow key={key}>
                                                    <TableCell className="text-white/90 font-medium w-[120px]">
                                                        {key}
                                                    </TableCell>
                                                    <TableCell>
                                                        {event.context[key]}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        )}
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between">
                                <div className="flex space-x-4 text-sm text-dark-100">
                                    <p className="text-xs">{event.nice_time}</p>
                                </div>
                                <div className="flex space-x-4 text-sm text-dark-100">
                                    {event.topics.map((topic) => (
                                        <Link
                                            href={`/t/${topic.id}`}
                                            className="border-wedgewood-500/20 rounded text-xs hover:text-wedgewood-500 transition"
                                        >
                                            #{topic.name}
                                        </Link>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
