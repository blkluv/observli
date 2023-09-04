import React from "react";
import { RespondentsTable } from "@/Components/RespondentsTable";
import { columns } from "@/Data/Respondent/Respondent";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/Components/shadcn/Card";
import { CheckCircle, Clock, Eye } from "lucide-react";

export default function FormsShow({ form }) {
    return (
        <div className="bg-white relative flex flex-col h-full">
            <header className="relative isolate">
                <div
                    className="absolute inset-0 -z-10 overflow-hidden"
                    aria-hidden="true"
                >
                    <div
                        className="absolute inset-0 overflow-hidden opacity-[.03]"
                        style={{ backgroundImage: 'url("/grain.jpg")' }}
                    ></div>
                    <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
                        <div
                            className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-forms-600 to-forms-400"
                            style={{
                                clipPath:
                                    "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
                            }}
                        />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
                </div>

                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none ">
                        <div className="flex items-center gap-x-4">
                            <h1 className="text-3xl font-bold tracking-tightest text-gray-700">
                                {form.title}
                            </h1>
                        </div>
                        <div className="flex items-center gap-x-4 sm:gap-x-6">
                            <a
                                href={"/forms/" + form.id + "/edit"}
                                className="rounded-md bg-forms-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-forms-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forms-600"
                            >
                                Edit in Designer
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex-1 border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="h-full mx-auto lg:mx-0 lg:max-w-none pt-6 pb-16 space-y-8">
                        <div className="grid gap-4 md:grid-cols-3">
                            <Card className="pointer-events-none">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-forms-600">
                                    <CardTitle className="font-medium">
                                        Views
                                    </CardTitle>
                                    <Eye className="h-5 w-5" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-gray-800">
                                        252
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="pointer-events-none">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-forms-600">
                                    <CardTitle className="font-medium">
                                        Completions
                                    </CardTitle>
                                    <CheckCircle className="h-5 w-5" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-gray-800">
                                        <span className="text-gray-600">
                                            22
                                        </span>{" "}
                                        / <span>100</span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="pointer-events-none">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 space-x-2 pb-2 text-forms-600">
                                    <CardTitle className="font-medium text-ellipsis line-clamp-1 ">
                                        Avg. Completion Time
                                    </CardTitle>
                                    <Clock className="h-5 w-5 " />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-gray-800">
                                        3:20
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <RespondentsTable
                            data={form.respondents}
                            columns={columns}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
