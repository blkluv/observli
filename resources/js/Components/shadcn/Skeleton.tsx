import React from "react";
import { cn } from "@/Components/shadcn/lib/utils";

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-wedgewood-600/10",
                className
            )}
            {...props}
        />
    );
}

export { Skeleton };
