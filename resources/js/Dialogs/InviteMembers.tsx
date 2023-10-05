import React from "react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/shadcn/Avatar";
import { Button } from "@/Components/shadcn/Button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/Components/shadcn/Dialog";
import { Input } from "@/Components/shadcn/Input";
import { Label } from "@/Components/shadcn/Label";
import { ArrowRight, ChevronDown, UserPlus2 } from "lucide-react";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/Components/shadcn/Popover";
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/Components/shadcn/Command";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectValue,
} from "@/Components/shadcn/Select";
import { router, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function InviteMembers({ currentWorkspace }) {
    const [popoverOpen, setPoppoverOpen] = React.useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        role: "viewer",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("workspaces.invite", currentWorkspace.id), {
            onSuccess: () => {
                reset();
            },
        });
    };

    const handleRoleChanged = (e, role) => {
        console.log(role);
        e.preventDefault();
        setData("role", role);
        setPoppoverOpen(false);
    };

    return (
        <Dialog>
            <DialogTrigger className="text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition hover:scale-99">
                <UserPlus2 className="w-4 h-4"></UserPlus2>{" "}
                <span>Invite members</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[405px]">
                <DialogHeader>
                    <DialogTitle>Invite team member</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            onChange={(e) => setData("name", e.target.value)}
                            id="name"
                            autoFocus
                        />
                        {errors.name && <InputError message={errors.name} />}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Email address</Label>
                        <Input
                            onChange={(e) => setData("email", e.target.value)}
                            id="email"
                            type="email"
                        />
                        {errors.email && <InputError message={errors.email} />}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Role</Label>
                        <Select value={data.role}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="viewer">
                                        Viewer
                                    </SelectItem>
                                    <SelectItem value="administrator">
                                        Administrator
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* <Popover
                            open={popoverOpen}
                            onOpenChange={setPoppoverOpen}
                        >
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="text-left w-full capitalize"
                                >
                                    {data.role}{" "}
                                    <ChevronDown className="ml-2 h-4 w-4 text-white/90" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0" align="start">
                                <Command>
                                    <CommandList>
                                        <CommandGroup className="p-1.5">
                                            <CommandItem
                                                className="space-y-1 flex flex-col items-start px-4 py-2"
                                                onSelect={(e) =>
                                                    handleRoleChanged(
                                                        e,
                                                        "viewer"
                                                    )
                                                }
                                            >
                                                <p>Viewer</p>
                                                <p className="text-sm text-dark-100">
                                                    Can view and comment.
                                                </p>
                                            </CommandItem>
                                            <CommandItem
                                                className="space-y-1 flex flex-col items-start px-4 py-2"
                                                onSelect={(e) =>
                                                    handleRoleChanged(
                                                        e,
                                                        "administrator"
                                                    )
                                                }
                                            >
                                                <p>Administrator</p>
                                                <p className="text-sm text-dark-100">
                                                    Can view, comment and edit.
                                                </p>
                                            </CommandItem>
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover> */}
                    </div>
                </div>
                <DialogFooter>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className="text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition hover:scale-99"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
