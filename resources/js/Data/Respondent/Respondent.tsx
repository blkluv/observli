import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { RespondentColumnHeader } from "@/Data/Respondent/RespondentColumnHeader";

import { RespondentRowActions } from "@/Data/Respondent/RespondentRowActions";

export const respondentSchema = z.object({
    // id: z.string(),
    id: z.number(),
    completion_time: z.number().optional(),
    // responses: z.array().optional(),
});

export type Respondent = z.infer<typeof respondentSchema>;

export const columns: ColumnDef<Respondent>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <RespondentColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <p className="font-medium">{row.getValue("id")}</p>
                </div>
            );
        },
        enableHiding: false,
    },
    {
        accessorKey: "contact",
        header: ({ column }) => (
            <RespondentColumnHeader column={column} title="Contact" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("contact")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        enableHiding: false,
    },
    {
        accessorKey: "completion_time",
        header: ({ column }) => (
            <RespondentColumnHeader column={column} title="Completion" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("completion_time")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        enableHiding: false,
    },

    {
        accessorKey: "completed_at",
        header: ({ column }) => (
            <RespondentColumnHeader column={column} title="Updated" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("created_at")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        enableHiding: false,
    },
    {
        id: "actions",
        cell: ({ row }) => <RespondentRowActions row={row} />,
    },
];
