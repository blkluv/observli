import { Label } from "@/Components/shadcn/Label";
import { Input } from "@/Components/shadcn/Input";
import InputError from "@/Components/InputError";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { CircleDashed } from "lucide-react";

export default function ProfileInformationForm({ className = "" }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route("profile.update"));
    };

    return (
        <div className="px-4">
            <form className="w-full" onSubmit={submit}>
                <div className="grid grid-cols-1 gap-y-6 sm:max-w-xl">
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

                    <div className="w-full">
                        <Label htmlFor="email">Email address</Label>
                        <div className="mt-2">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                autoComplete="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                className="mt-2"
                                message={errors.email}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-x-2">
                    <button
                        disabled={processing}
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
