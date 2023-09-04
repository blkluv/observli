import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

import FormsShow from "./Partials/FormsShow";

export default function Show({ auth, form }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {form.title}
                </h2>
            }
        >
            <Head title={form.title + " | Forms."} />

            <FormsShow form={form} />
        </AuthenticatedLayout>
    );
}
