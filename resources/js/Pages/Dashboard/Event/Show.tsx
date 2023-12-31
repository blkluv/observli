import { isDesktopApp } from "@todesktop/client-core/platform/todesktop";

import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ArrowLeft, Trash } from "lucide-react";
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
    TableCell,
    TableRow,
} from "@/Components/shadcn/Table";

import { useToast } from "@/Components/shadcn/Toast/use-toast";
import { PlayActions } from "@/Components/PlayActions";

export default function Show({ auth, currentWorkspace, event, workspaces }) {
    const { toast } = useToast();

    const handleDeleteClicked = (e) => {
        router.delete(route("events.destroy", event.id), {
            onSuccess: () => {
                toast({
                    title: "Event deleted",
                });
            },
        });
    };

    return (
        <AuthenticatedLayout
            currentWorkspace={currentWorkspace}
            topics={currentWorkspace.topics}
            auth={auth}
            workspaces={workspaces}
        >
            <Head title="Observli" />

            <div className="flex flex-col">
                <div className="flex items-center px-8 h-12 border-b border-gray-500/20 sticky top-0 z-50 bg-dark-900/20 backdrop-blur drag">
                    <div className="flex items-center text-white/90">
                        {isDesktopApp() && (
                            <ArrowLeft
                                onClick={() => history.back()}
                                className="mx-2 w-4 h-4 cursor-pointer no-drag"
                            />
                        )}
                        <span className="mr-2 text-sm whitespace-nowrap">
                            {event.id}
                        </span>
                    </div>
                    <>
                        <div className="hidden mx-2 w-px h-6 bg-white/[.07] md:block"></div>
                        <div className="hidden mx-2 text-sm font-medium text-gray-200 truncate md:block">
                            {event.title}
                        </div>
                    </>
                    <div className="hidden items-center ml-auto md:flex">
                        <Trash
                            onClick={(e) => handleDeleteClicked(e)}
                            className="cursor-pointer no-drag w-4 h-4 text-white/90 hover:text-white/80"
                        />
                    </div>
                </div>
                <div className="overflow-y-scroll flex-1">
                    <div className="p-8">
                        <Card className="mx-auto max-w-2xl" key={event.id}>
                            <CardHeader className="space-y-0">
                                <div className="space-y-3">
                                    <CardTitle className="text-white/90 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <h3 className="text-xl">
                                                {event.title}
                                            </h3>
                                            <p className="font-normal text-sm mt-2 text-white/75">
                                                {event.subtitle}
                                            </p>
                                        </div>
                                        {event.has_manual_actions && (
                                            <PlayActions
                                                event={event}
                                                size="large"
                                            />
                                        )}
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
                                            key={topic.id}
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
