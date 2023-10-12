import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/shadcn/Dialog";
import { Plus } from "lucide-react";
import { Input } from "@/Components/shadcn/Input";
import { Label } from "@/Components/shadcn/Label";
import { Textarea } from "@/Components/shadcn/Textarea";
import { ArrowRight } from "lucide-react";

export default function CreateTopic({}) {
    return (
        <Dialog>
            <DialogTrigger>
                <p className="cursor-pointer inline-flex items-center group-hover:text-white text-dark-200">
                    <Plus className="mr-1.5 w-4 h-4" />
                    Create topic
                </p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                    <DialogTitle>Create topic</DialogTitle>
                    <DialogDescription>
                        Add a new topic to your workspace that can receive new
                        events
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" autoFocus />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea className="resize-none" id="description" />
                    </div>
                </div>
                <DialogFooter>
                    <button className="text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition ">
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
