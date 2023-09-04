import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import Designer from "./Partials/Designer";
import FormsIndex from "./Partials/FormsIndex";

export default function Create({ auth, forms }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Forms
                </h2>
            }
        >
            <Head title="Forms" />

            <Designer />

            <FormsIndex forms={forms} />
        </AuthenticatedLayout>
    );
}
