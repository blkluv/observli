import React, { useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/shadcn/Dialog";
import { ArrowLeft, Plus } from "lucide-react";
import { Input } from "@/Components/shadcn/Input";
import { Label } from "@/Components/shadcn/Label";
import { Icons } from "@/Components/shadcn/Icons";
import { ArrowRight } from "lucide-react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function ConfigureDomain({ workspace }) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        name: workspace.name,
        domain: "",
    });

    const [open, setOpen] = React.useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!data.domain) return;
        patch(route("workspaces.update"), {
            preserveScroll: true,
            onSuccess: () => setOpen(false),
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition ">
                    Configure Domain
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                    <DialogTitle>Configure Domain</DialogTitle>
                    <DialogDescription>
                        Add a domain to your workspace to enable reachability
                        monitoring and other features.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="domain">Domain</Label>
                        <Input
                            id="domain"
                            placeholder="https://app.myspace.com"
                            value={data.domain}
                            onChange={(e) => setData("domain", e.target.value)}
                        />
                        <InputError message={errors.domain} className="mt-1" />
                    </div>
                </div>
                <DialogFooter>
                    <button
                        onClick={(e) => onSubmit(e)}
                        className="text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition "
                    >
                        {processing && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {!processing && <ArrowRight className="w-4 h-4" />}
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
