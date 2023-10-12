import { Label } from "@/Components/shadcn/Label";
import { Input } from "@/Components/shadcn/Input";
import { Button } from "@/Components/shadcn/Button";
import InputError from "@/Components/InputError";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { CircleDashed } from "lucide-react";

export default function WorkspaceInformationForm({
    className = "",
    workspace,
}) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: workspace.name,
            domain: workspace.domain,
            avatar: workspace.avatar,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route("workspaces.update"));
    };

    return (
        <div className="px-4">
            <form className="w-full" onSubmit={submit}>
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <Label htmlFor="name">Name</Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError
                                className="mt-2"
                                message={errors.name}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-6">
                        <Label htmlFor="name">Domain</Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="domain"
                                id="domain"
                                autoComplete="domain"
                                value={data.domain}
                                onChange={(e) =>
                                    setData("domain", e.target.value)
                                }
                            />
                            <InputError
                                className="mt-2"
                                message={errors.domain}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-6">
                        <Label htmlFor="name">Avatar</Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="avatar"
                                id="avatar"
                                autoComplete="avatar"
                                value={data.avatar}
                                onChange={(e) =>
                                    setData("avatar", e.target.value)
                                }
                            />
                            <InputError
                                className="mt-2"
                                message={errors.avatar}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-x-2">
                    <button
                        disabled={processing}
                        type="submit"
                        className="text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition"
                    >
                        {processing && (
                            <CircleDashed className="animate-spin h-4 w-4"></CircleDashed>
                        )}
                        {!processing && <span>Save</span>}
                    </button>
                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-wedgewood-400">Saved.</p>
                    </Transition>
                </div>
            </form>
        </div>
    );
}
