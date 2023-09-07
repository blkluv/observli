import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

import TopicsIndex from "./Partials/TopicsIndex";

export default function Index({ auth, topics }) {
    return (
        <AuthenticatedLayout topics={topics} user={auth.user}>
            <Head title="Observli" />

            {/* <TopicsIndex topics={topics} /> */}
        </AuthenticatedLayout>
    );
}
