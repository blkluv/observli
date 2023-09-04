import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { FormColumnHeader } from "@/Data/Form/FormColumnHeader";

import { FormRowActions } from "@/Data/Form/FormRowActions";

export const formSchema = z.object({
    id: z.string(),
    title: z.string(),
    num_questions: z.number(),
    num_respondents: z.number(),
    team_id: z.string(),
});

export type Form = z.infer<typeof formSchema>;

export const columns: ColumnDef<Form>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => (
            <FormColumnHeader column={column} title="Title" />
        ),
        cell: ({ row, column }) => {
            return (
                <div className="flex space-x-2">
                    <a
                        className="block max-w-[500px] truncate font-medium"
                        href={"/forms/" + row.original.id}
                    >
                        {row.getValue("title")}
                    </a>
                </div>
            );
        },
        enableHiding: false,
    },
    {
        accessorKey: "num_respondents",
        header: ({ column }) => (
            <FormColumnHeader column={column} title="Respondents" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("num_respondents")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        enableHiding: false,
    },
    {
        accessorKey: "completion_rate",
        header: ({ column }) => (
            <FormColumnHeader column={column} title="Completion" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("completion_rate")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        enableHiding: false,
    },
    {
        accessorKey: "views",
        header: ({ column }) => (
            <FormColumnHeader column={column} title="Views" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">{row.getValue("views")}</div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        enableHiding: false,
    },
    {
        accessorKey: "num_questions",
        header: ({ column }) => (
            <FormColumnHeader column={column} title="Questions" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("num_questions")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "updated_at",
        header: ({ column }) => (
            <FormColumnHeader column={column} title="Updated" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("updated_at")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <FormRowActions row={row} />,
    },
];
