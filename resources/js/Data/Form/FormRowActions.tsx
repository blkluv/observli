import React from "react";
import { Row } from "@tanstack/react-table";
import {
    Copy,
    MoreHorizontal,
    Pen,
    Share,
    SquareGantt,
    Trash,
} from "lucide-react";

import { Button } from "@/Components/shadcn/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/Components/shadcn/DropdownMenu";

import { formSchema } from "@/Data/Form/Form";
import { router } from "@inertiajs/react";

interface FormRowActionsProps<TData> {
    row: Row<TData>;
}

export function FormRowActions<TData>({ row }: FormRowActionsProps<TData>) {
    const form = formSchema.parse(row.original);

    const handleEditClicked = (e) => {
        e.preventDefault();
        router.visit(route("forms.edit", form.id));
    };

    const handleDuplicateClicked = (e) => {
        e.preventDefault();
        router.post(route("forms.duplicate", form.id));
    };

    const handleViewClicked = (e) => {
        e.preventDefault();
        window.open(
            "https://" + form.team_id + ".forms.test/" + form.id,
            "_blank"
        );
    };

    const handleDeleteClicked = (e) => {
        e.preventDefault();
        router.delete(route("forms.destroy", form.id));
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem onClick={(e) => handleEditClicked(e)}>
                    <Pen className="mr-2 h-4 w-4 text-muted-foreground/70" />
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => handleDuplicateClicked(e)}>
                    <Copy className="mr-2 h-4 w-4 text-muted-foreground/70" />
                    Duplicate
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={(e) => handleViewClicked(e)}>
                    <SquareGantt className="mr-2 h-4 w-4 text-muted-foreground/70" />
                    View
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={(e) => handleDeleteClicked(e)}>
                    <Trash className="mr-2 h-4 w-4 text-red-500/90" />
                    <span className="text-red-500/90">Delete</span>
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
