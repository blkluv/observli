import React from "react";
import Modal from "@/Components/Modal";
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
import { UserPlus2 } from "lucide-react";

export default function AddMembers({}) {
    return (
        <Dialog>
            <DialogTrigger className="text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition hover:scale-99">
                <UserPlus2 className="w-4 h-4"></UserPlus2>{" "}
                <span>Add members</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                    <DialogTitle>Save preset</DialogTitle>
                    <DialogDescription>
                        This will save the current playground state as a preset
                        which you can access later or share with others.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" autoFocus />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
