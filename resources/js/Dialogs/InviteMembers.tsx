import React from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/Components/shadcn/Dialog";
import { Input } from "@/Components/shadcn/Input";
import { Label } from "@/Components/shadcn/Label";
import { ArrowRight, ChevronDown, UserPlus2 } from "lucide-react";

import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
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
