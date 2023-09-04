import { Fragment } from "react";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useToast } from "@/Components/shadcn/Toast/use-toast";

import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const messages = [
    {
        id: 1,
        subject: "Velit placeat sit ducimus non sed",
        sender: "Gloria Roberston",
        href: "#",
        date: "1d ago",
        datetime: "2021-01-27T16:35",
        preview:
            "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
        id: 2,
        subject:
            "Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil",
        sender: "Virginia Abshire",
        href: "#",
        date: "1d ago",
        datetime: "2021-01-27T16:35",
        preview:
            "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
        id: 3,
        subject:
            "Doloremque reprehenderit et harum quas explicabo nulla architecto dicta voluptatibus",
        sender: "Kyle Gulgowski",
        href: "#",
        date: "1d ago",
        datetime: "2021-01-27T16:35",
        preview:
            "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
        id: 4,
        subject: "Eos sequi et aut ex impedit",
        sender: "Hattie Haag",
        href: "#",
        date: "1d ago",
        datetime: "2021-01-27T16:35",
        preview:
            "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
        id: 5,
        subject: "Quisquam veniam explicabo",
        sender: "Wilma Glover",
        href: "#",
        date: "1d ago",
        datetime: "2021-01-27T16:35",
        preview:
            "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
        id: 6,
        subject:
            "Est ratione molestiae modi maiores consequatur eligendi et excepturi magni",
        sender: "Dolores Morissette",
        href: "#",
        date: "1d ago",
        datetime: "2021-01-27T16:35",
        preview:
            "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
        id: 7,
        subject: "Commodi deserunt aut veniam rem ipsam",
        sender: "Guadalupe Walsh",
        href: "#",
        date: "1d ago",
        datetime: "2021-01-27T16:35",
        preview:
            "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
        id: 8,
        subject: "Illo illum aut debitis earum",
        sender: "Jasmine Hansen",
        href: "#",
        date: "1d ago",
        datetime: "2021-01-27T16:35",
        preview:
            "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
        id: 9,
        subject: "Qui dolore iste ut est cumque sed",
        sender: "Ian Volkman",
        href: "#",
        date: "1d ago",
        datetime: "2021-01-27T16:35",
        preview:
            "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
        id: 10,
        subject: "Aut sed aut illum delectus maiores laboriosam ex",
        sender: "Rafael Klocko",
        href: "#",
        date: "1d ago",
        datetime: "2021-01-27T16:35",
        preview:
            "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
];

const message = {
    subject: "Re: New pricing for existing customers",
    sender: "joearmstrong@example.com",
    status: "Open",
    items: [
        {
            id: 1,
            author: "Joe Armstrong",
            date: "Yesterday at 7:24am",
            datetime: "2021-01-28T19:24",
            body: "<p>Thanks so much! Can't wait to try it out.</p>",
        },
        {
            id: 2,
            author: "Monica White",
            date: "Wednesday at 4:35pm",
            datetime: "2021-01-27T16:35",
            body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
          <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
          <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
        `,
        },
        {
            id: 3,
            author: "Joe Armstrong",
            date: "Wednesday at 4:09pm",
            datetime: "2021-01-27T16:09",
            body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
          <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
          <p>– Joe</p>
        `,
        },
    ],
};

export default function Inbox({ auth }) {
    const { toast } = useToast();

    const handleMarkAllAsRead = (e) => {
        e.preventDefault();
        toast({
            title: "Inbox zero!",
            description: "All responses have been marked as read.",
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Inbox
                </h2>
            }
        >
            <Head title="Inbox | Forms." />

            <div className="bg-white relative flex flex-col h-full">
                <header className="relative isolate">
                    <div
                        className="absolute inset-0 -z-10 overflow-hidden"
                        aria-hidden="true"
                    >
                        <div
                            className="absolute inset-0 overflow-hidden opacity-[.03]"
                            style={{ backgroundImage: 'url("/grain.jpg")' }}
                        ></div>
                        <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
                            <div
                                className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-forms-600 to-forms-400"
                                style={{
                                    clipPath:
                                        "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
                                }}
                            />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
                    </div>

                    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none ">
                            <div className="flex items-center gap-x-4">
                                <h1 className="text-3xl font-bold tracking-tightest text-gray-700">
                                    Inbox
                                </h1>
                            </div>
                            <div className="flex items-center gap-x-4 sm:gap-x-6">
                                <button
                                    onClick={(e) => handleMarkAllAsRead(e)}
                                    className="rounded-md bg-forms-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-forms-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forms-600"
                                >
                                    Mark All Read
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="min-w-0 h-full overflow-hidden flex-1 border-t border-gray-200 lg:flex bg-white">
                    <section
                        aria-labelledby="message-heading"
                        className="flex h-full min-w-0 flex-1 flex-col overflow-hidden lg:order-last"
                    >
                        <div className="min-h-0 flex-1 overflow-y-auto">
                            <div className="bg-white pb-6 pt-5 shadow">
                                <div className="px-4 sm:flex sm:items-baseline sm:justify-between sm:px-6 lg:px-8">
                                    <div className="sm:w-0 sm:flex-1">
                                        <h1
                                            id="message-heading"
                                            className="text-lg font-medium text-gray-900"
                                        >
                                            {message.subject}
                                        </h1>
                                        <p className="mt-1 truncate text-sm text-gray-500">
                                            {message.sender}
                                        </p>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
                                        <span className="inline-flex items-center rounded-full bg-forms-100 px-3 py-0.5 text-sm font-medium text-forms-800">
                                            {message.status}
                                        </span>
                                        <Menu
                                            as="div"
                                            className="relative ml-3 inline-block text-left"
                                        >
                                            <div>
                                                <Menu.Button className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-forms-600">
                                                    <span className="sr-only">
                                                        Open options
                                                    </span>
                                                    <EllipsisVerticalIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    type="button"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "flex w-full justify-between px-4 py-2 text-sm"
                                                                    )}
                                                                >
                                                                    <span>
                                                                        Copy
                                                                        email
                                                                        address
                                                                    </span>
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "flex justify-between px-4 py-2 text-sm"
                                                                    )}
                                                                >
                                                                    <span>
                                                                        Previous
                                                                        conversations
                                                                    </span>
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "flex justify-between px-4 py-2 text-sm"
                                                                    )}
                                                                >
                                                                    <span>
                                                                        View
                                                                        original
                                                                    </span>
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                            {/* Thread section*/}
                            <div className="grid grid-cols-1 py-4 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                                {message.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white px-4 py-6 border border-gray-300/75 shadow sm:rounded-lg sm:px-6"
                                    >
                                        <div className="sm:flex sm:items-baseline sm:justify-between">
                                            <h3 className="text-base font-medium">
                                                <span className="text-gray-900">
                                                    {item.author}
                                                </span>{" "}
                                                <span className="text-gray-600">
                                                    wrote
                                                </span>
                                            </h3>
                                            <p className="mt-1 whitespace-nowrap text-sm text-gray-600 sm:ml-3 sm:mt-0">
                                                <time dateTime={item.datetime}>
                                                    {item.date}
                                                </time>
                                            </p>
                                        </div>
                                        <div
                                            className="mt-4 space-y-6 text-sm text-gray-800"
                                            dangerouslySetInnerHTML={{
                                                __html: item.body,
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Message list*/}
                    <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
                        <div className="relative flex h-full w-72 flex-col border-r border-gray-200 bg-gray-100">
                            <div className="flex-shrink-0">
                                <div className="border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500">
                                    <div className="flex justify-between items-center">
                                        <span>
                                            {messages.length} unread responses
                                        </span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <nav
                                aria-label="Message list"
                                className="min-h-0 flex-1 overflow-y-auto"
                            >
                                <ul
                                    role="list"
                                    className="divide-y divide-gray-200 border-b border-gray-200"
                                >
                                    {messages.map((message) => (
                                        <li
                                            key={message.id}
                                            className="relative bg-white px-6 py-5 hover:bg-forms-700/5 group"
                                        >
                                            <div className="flex justify-between space-x-3">
                                                <div className="min-w-0 flex-1">
                                                    <a
                                                        href={message.href}
                                                        className="block focus:outline-none"
                                                    >
                                                        <span
                                                            className="absolute inset-0"
                                                            aria-hidden="true"
                                                        />
                                                        <p className="truncate text-sm font-medium text-gray-900 group-hover:text-forms-900">
                                                            {message.sender}
                                                        </p>
                                                        <p className="truncate text-sm text-gray-500 group-hover:text-gray-700">
                                                            {message.subject}
                                                        </p>
                                                    </a>
                                                </div>
                                                <time
                                                    dateTime={message.datetime}
                                                    className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                                                >
                                                    {message.date}
                                                </time>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </aside>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
