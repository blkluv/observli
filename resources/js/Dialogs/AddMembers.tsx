import React from "react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/shadcn/Avatar";
import { Button } from "@/Components/shadcn/Button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandList,
    CommandInput,
    CommandItem,
} from "@/Components/shadcn/Command";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/Components/shadcn/Dialog";

import { ArrowRight, Check, UserPlus2 } from "lucide-react";
import { Arrow } from "@radix-ui/react-popover";

const users = [
    {
        name: "Olivia Martin",
        email: "m@example.com",
        avatar: "/avatars/01.png",
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        avatar: "/avatars/03.png",
    },
    {
        name: "Emma Wilson",
        email: "emma@example.com",
        avatar: "/avatars/05.png",
    },
    {
        name: "Jackson Lee",
        email: "lee@example.com",
        avatar: "/avatars/02.png",
    },
    {
        name: "William Kim",
        email: "will@email.com",
        avatar: "/avatars/04.png",
    },
] as const;

export default function AddMembers({ topic }) {
    const [selectedUsers, setSelectedUsers] = React.useState([]);

    return (
        <Dialog>
            <DialogTrigger className="transition ml-auto text-gray-200 hover:text-gray-100 opacity-0 group-hover:opacity-100">
                <UserPlus2 className="w-4 h-4"></UserPlus2>{" "}
            </DialogTrigger>
            <DialogContent className="gap-0 p-0 outline-none">
                <DialogHeader className="px-4 pb-4 pt-5">
                    <DialogTitle>Add team member</DialogTitle>
                    <DialogDescription>
                        Invite a user to view the {"#"}
                        {topic.name} topic
                    </DialogDescription>
                </DialogHeader>
                <Command className="overflow-hidden rounded-t-none border-t border-dark-200/20">
                    <CommandInput placeholder="Search user..." />
                    <CommandList>
                        <CommandEmpty>No users found.</CommandEmpty>
                        <CommandGroup className="p-2">
                            {users.map((user) => (
                                <CommandItem
                                    key={user.email}
                                    className="flex items-center px-2"
                                    onSelect={() => {
                                        if (selectedUsers.includes(user)) {
                                            return setSelectedUsers(
                                                selectedUsers.filter(
                                                    (selectedUser) =>
                                                        selectedUser !== user
                                                )
                                            );
                                        }

                                        return setSelectedUsers(
                                            [...users].filter((u) =>
                                                [
                                                    ...selectedUsers,
                                                    user,
                                                ].includes(u)
                                            )
                                        );
                                    }}
                                >
                                    <Avatar>
                                        <AvatarImage
                                            src={user.avatar}
                                            alt="Image"
                                        />
                                        <AvatarFallback>
                                            {user.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium leading-none">
                                            {user.name}
                                        </p>
                                        <p className="text-sm text-dark-100 mt-1">
                                            {user.email}
                                        </p>
                                    </div>
                                    {selectedUsers.includes(user) ? (
                                        <Check className="ml-auto flex h-5 w-5 text-wedgewood-500" />
                                    ) : null}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
                <DialogFooter className="flex items-center border-t border-dark-200/20 p-4 sm:justify-between text-white/90">
                    {selectedUsers.length > 0 ? (
                        <div className="flex -space-x-2 overflow-hidden">
                            {selectedUsers.map((user) => (
                                <Avatar
                                    key={user.email}
                                    className="inline-block"
                                >
                                    <AvatarImage src={user.avatar} />
                                    <AvatarFallback>
                                        {user.name[0]}
                                    </AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-dark-100">
                            Select users to add to this topic
                        </p>
                    )}
                    <button
                        className="text-white/90 flex items-center space-x-1 px-3 h-8 text-xs font-semibold bg-wedgewood-700 shadow rounded border border-gray-100/20 transition hover:scale-99"
                        disabled={selectedUsers.length < 2}
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
