import { classNames } from "@/Util";
import { Play } from "lucide-react";
import React from "react";

export function PlayActions({ event, size = "large" }) {
    const handlePlayActionsClicked = (e, event) => {
        e.stopPropagation();
        event.manual_actions.forEach((action) => {
            switch (action.type) {
                case "visit_url":
                    let link = document.createElement("a");
                    link.href = action.context.url;
                    link.target = "_blank";
                    link.click();
                    window.axios.post(
                        route("events.action.execute", event.id),
                        {
                            type: action.type,
                        }
                    );
                    break;
            }
        });
    };

    const baseClass =
        "flex items-center justify-center transition bg-dark-900 border border-gray-500/20 rounded text-dark-100 hover:border-wedgewood-500 hover:text-wedgewood-500 disabled:opacity-50 disabled:cursor-not-allowed";

    return size == "large" ? (
        <button
            disabled={event.manual_actions.length === 0}
            onClick={(e) => {
                handlePlayActionsClicked(e, event);
            }}
            className={classNames(baseClass, "w-10 h-10")}
        >
            <Play className="w-5 h-5" />
        </button>
    ) : (
        <button
            disabled={event.manual_actions.length === 0}
            onClick={(e) => {
                handlePlayActionsClicked(e, event);
            }}
            className={classNames(baseClass, "w-7 h-7")}
        >
            <Play className="w-3 h-3" />
        </button>
    );
}
