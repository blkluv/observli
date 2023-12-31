import { notification } from "@todesktop/client-core";

import React, { useEffect } from "react";
import { Link, router, usePage } from "@inertiajs/react";
import { Toaster } from "@/Components/shadcn/Toaster";
import { useToast } from "@/Components/shadcn/Toast/use-toast";

import { Boxes, Hash, MoreVertical, Plus, UserPlus2 } from "lucide-react";
import { classNames } from "@/Util";
import AddMembers from "@/Dialogs/AddMembers";
import { ToastAction } from "@/Components/shadcn/Toast/Toast";
import { isDesktopApp } from "@todesktop/client-core/platform/todesktop";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/Components/shadcn/DropdownMenu";
import CreateTopic from "@/Dialogs/CreateTopic";
import CreateWorkspace from "@/Dialogs/CreateWorkspace";
import APIToken from "@/Dialogs/APIToken";
import APITokens from "@/Dialogs/APITokens";
import Settings from "@/Dialogs/Settings";
import Subscription from "@/Dialogs/Subscription";

export default function Authenticated({
    topics,
    auth,
    children,
    workspaces,
    currentWorkspace,
}) {
    const { user, subscription } = auth;
    const { url } = usePage();
    const { toast } = useToast();
    const [newApiToken, setNewApiToken] = React.useState(null);
    const [showApiTokenDialog, setShowApiTokenDialog] = React.useState(false);

    //@ts-ignore
    const echo: any = window.Echo;

    const topicIsActive = (topic) => {
        return url === `/t/${topic.id}`;
    };

    const handleWorkspaceClicked = (workspace) => {
        router.visit(route("workspaces.switch", workspace.id), {
            method: "post",
        });
    };

    const handleApiTokenCreated = (token) => {
        setNewApiToken(token);
        setShowApiTokenDialog(true);
        router.reload();
    };

    useEffect(() => {
        echo.private(`App.Models.User.${user.id}`).notification(
            (notification) => {}
        );
        echo.private(
            `App.Models.Workspace.${currentWorkspace.id}`
        ).notification((n) => {
            if (n.type === "App\\Notifications\\EventCreated") {
                const title = "New event received";
                if (isDesktopApp()) {
                    notification.create({ title });
                }
                toast({
                    title,
                    description: n.title,
                    action: (
                        <ToastAction
                            onClick={() =>
                                router.visit(route("events.show", n.event_id))
                            }
                            altText="View"
                        >
                            View
                        </ToastAction>
                    ),
                });
            }
        });
    }, []);

    return (
        <div className="flex flex-col h-screen max-h-screen text-gray-100 bg-dark-800 overflow-hidden">
            {isDesktopApp() && (
                <div className="bg-dark-900 h-7 border-b border-dark-200/20 drag"></div>
            )}

            <div className="flex flex-1 overflow-hidden">
                <Toaster />
                <div className="hidden overflow-y-scroll pt-4 space-y-4 bg-dark-800 md:flex flex-col scrollbar-hide w-20 items-center border-r border-gray-500/20 drag">
                    <svg
                        className="w-8 h-8 text-wedgewood-500"
                        width="825"
                        height="825"
                        viewBox="0 0 825 825"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M192.08 153.365C218.321 153.365 240.363 131.154 240.363 104.712C240.363 78.2692 218.321 56.0577 192.08 56.0577C165.84 56.0577 143.798 78.2692 143.798 104.712C143.798 131.154 165.84 153.365 192.08 153.365ZM165.84 497.115C165.84 504.519 172.137 510.865 179.485 510.865C186.832 510.865 193.13 504.519 193.13 497.115C193.13 489.712 186.832 483.365 179.485 483.365C172.137 483.365 165.84 489.712 165.84 497.115ZM262.405 214.712C273.95 214.712 282.347 205.192 282.347 194.615C282.347 182.981 272.901 174.519 262.405 174.519C250.859 174.519 242.462 184.038 242.462 194.615C242.462 205.192 250.859 214.712 262.405 214.712ZM103.912 397.692C130.153 397.692 152.195 375.481 152.195 349.038C152.195 322.596 130.153 300.385 103.912 300.385C77.6718 300.385 55.6298 322.596 55.6298 349.038C56.6794 375.481 77.6718 397.692 103.912 397.692ZM34.6374 283.462C46.1832 283.462 54.5801 273.942 54.5801 263.365C54.5801 251.731 45.1336 243.269 34.6374 243.269C23.0916 243.269 14.6947 252.788 14.6947 263.365C14.6947 275 23.0916 283.462 34.6374 283.462ZM27.2901 327.885C27.2901 320.481 20.9924 314.135 13.645 314.135C6.29771 314.135 0 320.481 0 327.885C0 335.288 6.29771 341.635 13.645 341.635C20.9924 341.635 27.2901 335.288 27.2901 327.885ZM91.3168 213.654C110.21 213.654 124.905 198.846 124.905 179.808C124.905 160.769 110.21 145.962 91.3168 145.962C72.4237 145.962 57.729 160.769 57.729 179.808C57.729 198.846 72.4237 213.654 91.3168 213.654ZM499.618 27.5C506.966 27.5 513.263 21.1538 513.263 13.75C513.263 6.34616 506.966 0 499.618 0C492.271 0 485.973 6.34616 485.973 13.75C485.973 21.1538 492.271 27.5 499.618 27.5ZM132.252 491.827C132.252 459.038 106.011 432.596 73.4733 432.596C40.9351 432.596 14.6947 459.038 14.6947 491.827C14.6947 524.615 40.9351 551.058 73.4733 551.058C106.011 551.058 132.252 524.615 132.252 491.827ZM721.088 242.212C747.328 242.212 769.37 220 769.37 193.558C769.37 167.115 747.328 144.904 721.088 144.904C694.847 144.904 672.805 167.115 672.805 193.558C672.805 220 693.798 242.212 721.088 242.212ZM612.977 576.442C612.977 595.481 627.672 610.288 646.565 610.288C665.458 610.288 680.153 595.481 680.153 576.442C680.153 557.404 665.458 542.596 646.565 542.596C627.672 542.596 612.977 557.404 612.977 576.442ZM646.565 125.865C665.458 125.865 680.153 111.058 680.153 92.0192C680.153 72.9808 665.458 58.1731 646.565 58.1731C627.672 58.1731 612.977 72.9808 612.977 92.0192C612.977 111.058 627.672 125.865 646.565 125.865ZM572.042 213.654C590.935 213.654 605.63 198.846 605.63 179.808C605.63 160.769 590.935 145.962 572.042 145.962C553.149 145.962 538.454 160.769 538.454 179.808C538.454 198.846 553.149 213.654 572.042 213.654ZM692.748 333.173C692.748 365.962 718.989 392.404 751.527 392.404C784.065 392.404 810.305 365.962 810.305 333.173C810.305 300.385 784.065 273.942 751.527 273.942C718.989 273.942 692.748 300.385 692.748 333.173ZM659.16 327.885C659.16 320.481 652.863 314.135 645.515 314.135C638.168 314.135 631.87 320.481 631.87 327.885C631.87 335.288 638.168 341.635 645.515 341.635C652.863 341.635 659.16 335.288 659.16 327.885ZM562.595 53.9423C574.141 53.9423 582.538 44.4231 582.538 33.8462C582.538 23.2692 573.092 13.75 562.595 13.75C551.05 13.75 542.653 23.2692 542.653 33.8462C542.653 44.4231 552.099 53.9423 562.595 53.9423ZM625.572 283.462C637.118 283.462 645.515 273.942 645.515 263.365C645.515 251.731 636.069 243.269 625.572 243.269C615.076 243.269 605.63 252.788 605.63 263.365C605.63 275 615.076 283.462 625.572 283.462ZM212.023 248.558C212.023 229.519 197.328 214.712 178.435 214.712C159.542 214.712 144.847 229.519 144.847 248.558C144.847 267.596 159.542 282.404 178.435 282.404C197.328 282.404 212.023 267.596 212.023 248.558ZM562.595 610.288C551.05 610.288 542.653 619.808 542.653 630.385C542.653 642.019 552.099 650.481 562.595 650.481C574.141 650.481 582.538 640.962 582.538 630.385C582.538 619.808 574.141 610.288 562.595 610.288ZM494.37 691.731C461.832 691.731 435.592 718.173 435.592 750.962C435.592 783.75 461.832 810.192 494.37 810.192C526.908 810.192 553.149 783.75 553.149 750.962C553.149 718.173 526.908 691.731 494.37 691.731ZM632.92 671.635C606.679 671.635 584.637 693.846 584.637 720.288C584.637 746.731 606.679 768.942 632.92 768.942C659.16 768.942 681.202 746.731 681.202 720.288C681.202 693.846 659.16 671.635 632.92 671.635ZM485.973 650.481C485.973 657.885 492.271 664.231 499.618 664.231C506.966 664.231 513.263 657.885 513.263 650.481C513.263 643.077 506.966 636.731 499.618 636.731C492.271 637.788 485.973 643.077 485.973 650.481ZM811.355 483.365C804.008 483.365 797.71 489.712 797.71 497.115C797.71 504.519 804.008 510.865 811.355 510.865C818.702 510.865 825 504.519 825 497.115C825 489.712 817.653 483.365 811.355 483.365ZM790.363 541.538C778.817 541.538 770.42 551.058 770.42 561.635C770.42 573.269 779.866 581.731 790.363 581.731C801.908 581.731 810.305 572.212 810.305 561.635C810.305 550 801.908 541.538 790.363 541.538ZM472.328 153.365C498.569 153.365 520.611 131.154 520.611 104.712C520.611 78.2692 498.569 56.0577 472.328 56.0577C446.088 56.0577 424.046 78.2692 424.046 104.712C424.046 131.154 446.088 153.365 472.328 153.365ZM721.088 427.308C694.847 427.308 672.805 449.519 672.805 475.962C672.805 502.404 694.847 524.615 721.088 524.615C747.328 524.615 769.37 502.404 769.37 475.962C768.321 449.519 747.328 427.308 721.088 427.308ZM103.912 582.788C77.6718 582.788 55.6298 605 55.6298 631.442C55.6298 657.885 77.6718 680.096 103.912 680.096C130.153 680.096 152.195 657.885 152.195 631.442C152.195 605 131.202 582.788 103.912 582.788ZM733.683 611.346C714.79 611.346 700.095 626.154 700.095 645.192C700.095 664.231 714.79 679.038 733.683 679.038C752.576 679.038 767.271 664.231 767.271 645.192C767.271 626.154 752.576 611.346 733.683 611.346ZM199.427 541.538C187.882 541.538 179.485 551.058 179.485 561.635C179.485 573.269 188.931 581.731 199.427 581.731C209.924 581.731 219.37 572.212 219.37 561.635C219.37 550 209.924 541.538 199.427 541.538ZM252.958 611.346C234.065 611.346 219.37 626.154 219.37 645.192C219.37 664.231 234.065 679.038 252.958 679.038C271.851 679.038 286.546 664.231 286.546 645.192C286.546 626.154 271.851 611.346 252.958 611.346ZM262.405 771.058C250.859 771.058 242.462 780.577 242.462 791.154C242.462 801.731 251.908 811.25 262.405 811.25C273.95 811.25 282.347 801.731 282.347 791.154C282.347 780.577 272.901 771.058 262.405 771.058ZM178.435 699.135C159.542 699.135 144.847 713.942 144.847 732.981C144.847 752.019 159.542 766.827 178.435 766.827C197.328 766.827 212.023 752.019 212.023 732.981C212.023 713.942 197.328 699.135 178.435 699.135ZM312.786 174.519C312.786 181.923 319.084 188.269 326.431 188.269C333.779 188.269 340.076 181.923 340.076 174.519C340.076 167.115 333.779 160.769 326.431 160.769C318.034 160.769 312.786 167.115 312.786 174.519ZM389.408 72.9808C389.408 40.1923 363.168 13.75 330.63 13.75C298.092 13.75 271.851 40.1923 271.851 72.9808C271.851 105.769 298.092 132.212 330.63 132.212C363.168 133.269 389.408 106.827 389.408 72.9808ZM325.382 797.5C318.034 797.5 311.737 803.846 311.737 811.25C311.737 818.654 318.034 825 325.382 825C332.729 825 339.027 818.654 339.027 811.25C339.027 803.846 332.729 797.5 325.382 797.5ZM352.672 671.635C326.431 671.635 304.389 693.846 304.389 720.288C304.389 746.731 326.431 768.942 352.672 768.942C378.912 768.942 400.954 746.731 400.954 720.288C400.954 693.846 378.912 671.635 352.672 671.635Z"
                            fill="#84BED2"
                        />
                    </svg>

                    <hr />

                    <div className="flex flex-col items-center space-y-3 no-drag">
                        {workspaces.map((workspace) => (
                            <div
                                onClick={() =>
                                    handleWorkspaceClicked(workspace)
                                }
                                key={workspace.id}
                                className="flex items-center justify-center relative hover:scale-98 cursor-pointer transition w-10 h-10 rounded-xl bg-contain bg-center shadow-lg bg-dark-500/20 border border-gray-100/20"
                                style={{
                                    backgroundImage: workspace.avatar
                                        ? `url(${workspace.avatar})`
                                        : null,
                                }}
                            >
                                {!workspace.avatar && (
                                    <Boxes className="w-4 h-4" />
                                )}
                            </div>
                        ))}
                        <CreateWorkspace />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex h-full">
                        <div className="hidden flex-col w-60 bg-dark-800 md:flex h-full border-r border-gray-500/20 px-2">
                            <div className="flex items-center px-4 h-12 font-title text-[15px] font-semibold text-white shadow-sm transition drag">
                                {currentWorkspace.name}
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="ml-auto opacity-80 no-drag focus:outline-none focus:ring-0 focus:border-0">
                                        <MoreVertical className="w-[18px] h-[18px]" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-56"
                                        align="end"
                                        forceMount
                                    >
                                        <DropdownMenuLabel className="font-normal">
                                            <div className="flex flex-col space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {user.name}
                                                </p>
                                                <p className="text-xs leading-none text-dark-100">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <APITokens
                                                tokens={currentWorkspace.tokens}
                                                handleApiTokenCreated={
                                                    handleApiTokenCreated
                                                }
                                            />
                                            {subscription.is_active && (
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        router.visit(
                                                            route(
                                                                "subscription.billing"
                                                            )
                                                        )
                                                    }
                                                >
                                                    Subscription
                                                    <DropdownMenuShortcut>
                                                        ⇧⌘B
                                                    </DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                            )}
                                            {!subscription.is_active &&
                                                subscription.has_access && (
                                                    <Subscription></Subscription>
                                                )}
                                            <Settings
                                                workspace={currentWorkspace}
                                            />
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            onClick={() =>
                                                router.visit(route("logout"), {
                                                    method: "post",
                                                })
                                            }
                                        >
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="overflow-y-scroll flex-1 pt-3 space-y-[21px] font-medium text-gray-300 scrollbar-hide">
                                <div>
                                    <div>
                                        <Link
                                            href={route("home")}
                                            className={classNames(
                                                "flex items-center px-2 mx-2 py-1 rounded group relative text-dark-200 hover:text-white transition",
                                                url === "/" && "text-white"
                                            )}
                                        >
                                            Dashboard
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-[5px] space-y-0.5">
                                    {topics.map((topic) => (
                                        <div
                                            key={topic.id}
                                            className={`flex items-center px-2 mx-2 py-1 rounded group relative transition`}
                                        >
                                            <Link
                                                className={classNames(
                                                    "inline-flex items-center group-hover:text-white",
                                                    topicIsActive(topic)
                                                        ? "text-white"
                                                        : "text-dark-200"
                                                )}
                                                href={`/t/${topic.id}`}
                                            >
                                                <Hash className="mr-1.5 w-4 h-4" />
                                                {topic.name}
                                            </Link>
                                            {/* {topic.name !== "general" && (
                                                <AddMembers topic={topic} />
                                            )} */}
                                        </div>
                                    ))}
                                    <div className="flex items-center px-2 mx-2 py-1 rounded group relative transition">
                                        {/* <CreateTopic /> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 shrink min-w-0 bg-dark-700 overflow-scroll">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <APIToken
                open={showApiTokenDialog}
                setOpen={setShowApiTokenDialog}
                token={newApiToken}
            />
        </div>
    );
}
