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

export default function CreateWorkspace({}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        domain: "",
        avatar: "",
    });
    const [onboarded, setOnboarded] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        post(route("workspaces.store"), {
            onSuccess: () => {
                reset();
                setOnboarded(true);
            },
        });
    }

    useEffect(() => {
        reset();
        setOnboarded(false);
    }, [open]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <div className="flex items-center justify-center hover:scale-95 cursor-pointer transition w-10 h-10 rounded-xl bg-dark-500/20 shadow-lg border border-gray-100/20">
                    <Plus className="w-4 h-4" />
                </div>
            </DialogTrigger>
            {!onboarded && (
                <DialogContent className="sm:max-w-[475px]">
                    <DialogHeader>
                        <DialogTitle>Create workspace</DialogTitle>
                        <DialogDescription>
                            Add a new workspace to your account to easily
                            monitor and manage a new SaaS application.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                autoFocus
                                placeholder="MySpace"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <InputError message={errors.name} />
                            )}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="domain">Domain</Label>
                            <Input
                                id="domain"
                                placeholder="https://app.myspace.com"
                                value={data.domain}
                                onChange={(e) =>
                                    setData("domain", e.target.value)
                                }
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="avatar">Avatar</Label>
                            <Input
                                id="avatar"
                                placeholder="https://app.myspace.com/logo.png"
                                value={data.avatar}
                                onChange={(e) =>
                                    setData("avatar", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <button
                            onClick={(e) => onSubmit(e)}
                            className="text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition hover:scale-99"
                        >
                            {processing && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            {!processing && <ArrowRight className="w-4 h-4" />}
                        </button>
                    </DialogFooter>
                </DialogContent>
            )}
            {onboarded && (
                <DialogContent className="sm:max-w-[475px]">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-center text-2xl font-medium tracking-tight text-white/90">
                                You're all set!
                            </h1>
                            <p className="text-center text-dark-100">
                                You can check out your new workspace.
                            </p>
                            <button
                                onClick={() => setOpen(false)}
                                className="mt-4 text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition hover:scale-99"
                            >
                                Get started {""}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </DialogContent>
            )}
        </Dialog>
    );
}
