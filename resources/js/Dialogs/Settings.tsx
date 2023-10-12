import React, { useEffect } from "react";
import { Tab } from "@headlessui/react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/shadcn/Dialog";
import {
    DropdownMenuItem,
    DropdownMenuShortcut,
} from "@/Components/shadcn/DropdownMenu";
import { classNames } from "@/Util";
import ProfileInformationForm from "./Partials/ProfileInformationForm";
import WorkspaceInformationForm from "./Partials/WorkspaceInformationForm";

export default function Settings({ workspace }) {
    const [open, setOpen] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="w-full">
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    Settings
                    <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                    <DialogTitle>Settings</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Tab.Group
                        selectedIndex={activeTab}
                        onChange={setActiveTab}
                    >
                        <div className="flex space-x-4">
                            <Tab.List className="flex flex-col space-y-4 w-28">
                                <Tab
                                    as="div"
                                    className="text-left focus:outline-none foucs:ring-0"
                                >
                                    {({ selected }) => (
                                        <button
                                            className={classNames(
                                                "text-left text-sm text-dark-100 hover:text-white/90 transition font-medium focus:outline-none foucs:ring-0",
                                                selected && "text-white/90"
                                            )}
                                        >
                                            Account
                                        </button>
                                    )}
                                </Tab>
                                <Tab
                                    as="div"
                                    className="text-left focus:outline-none foucs:ring-0"
                                >
                                    {({ selected }) => (
                                        <button
                                            className={classNames(
                                                "text-left text-sm text-dark-100 hover:text-white/90 transition font-medium focus:outline-none foucs:ring-0",
                                                selected && "text-white/90"
                                            )}
                                        >
                                            Workspace
                                        </button>
                                    )}
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="flex-grow">
                                <Tab.Panel>
                                    <ProfileInformationForm />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <WorkspaceInformationForm
                                        workspace={workspace}
                                    />
                                </Tab.Panel>
                            </Tab.Panels>
                        </div>
                    </Tab.Group>
                </div>
            </DialogContent>
        </Dialog>
    );
}
