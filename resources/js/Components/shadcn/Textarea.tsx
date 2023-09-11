import * as React from "react";

import { cn } from "@/Components/shadcn/lib/utils";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                spellCheck="false"
                autoComplete="off"
                className={cn(
                    "transition text-white/90 flex min-h-[60px] w-full rounded-md border border-dark-200/20 focus:border-wedgewood-500/90 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-dark-100 ring-dark-200/50 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
