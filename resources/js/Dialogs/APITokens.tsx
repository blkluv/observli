import React from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/shadcn/Sheet";

import {
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
} from "@/Components/shadcn/DropdownMenu";

import {
    Table,
    TableBody,
    TableCell,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/shadcn/Table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/Components/shadcn/Button";
import { router } from "@inertiajs/react";

export default function APITokens({ tokens, handleApiTokenCreated }) {
    const [showDialog, setShowDialog] = React.useState(false);

    const handleCreateApiTokenClicked = async (e) => {
        e.preventDefault();
        try {
            const response = await window.axios.post(route("tokens.store"));
            setShowDialog(false);
            handleApiTokenCreated(response.data);
        } catch (error) {}
    };

    const handleDeleteTokenClicked = (e, token) => {
        e.preventDefault();
        router.delete(route("tokens.destroy", token.id), {
            onSuccess: () => {},
        });
    };

    return (
        <Sheet onOpenChange={setShowDialog} open={showDialog}>
            <SheetTrigger className="w-full">
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    API Tokens
                    <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                </DropdownMenuItem>
            </SheetTrigger>
            <SheetContent className="sm:max-w-[520px]">
                <SheetHeader>
                    <SheetTitle>API Tokens</SheetTitle>
                </SheetHeader>

                <div className="mt-6">
                    <Table>
                        <TableCaption className="text-wedgewood-500/30 hover:text-wedgewood-500/90 cursor-pointer">
                            <Button
                                onClick={(e) => handleCreateApiTokenClicked(e)}
                                className="bg-wedgewood-700 hover:bg-gray-900 hover:bg-wedgewood-500/90 hover:shadow text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold  shadow rounded border border-gray-100/20 transition hover:scale-99"
                            >
                                <span className="text-sm font-medium">
                                    Create API Key
                                </span>
                            </Button>
                        </TableCaption>
                        {tokens.length && (
                            <TableHeader>
                                <TableRow className="hover:bg-transparent">
                                    <TableHead>ID</TableHead>
                                    <TableHead>Last used</TableHead>
                                    <TableHead className="text-right">
                                        Created
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                        )}
                        {tokens.length && (
                            <TableBody>
                                {tokens.map((token) => (
                                    <TableRow key={token.id}>
                                        <TableCell className="font-medium">
                                            {token.id}
                                        </TableCell>
                                        <TableCell>{token.last_used}</TableCell>
                                        <TableCell className="text-right">
                                            {token.created_at}
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="ml-auto opacity-80 no-drag focus:outline-none focus:ring-0 focus:border-0">
                                                    <MoreHorizontal className="w-4 h-4 text-wedgewood-500/30 hover:text-wedgewood-500/90" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent
                                                    className="w-42"
                                                    align="end"
                                                    forceMount
                                                >
                                                    <DropdownMenuGroup>
                                                        <DropdownMenuItem
                                                            onClick={(e) =>
                                                                handleDeleteTokenClicked(
                                                                    e,
                                                                    token
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuGroup>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        )}
                    </Table>
                </div>
            </SheetContent>
        </Sheet>
    );
}
