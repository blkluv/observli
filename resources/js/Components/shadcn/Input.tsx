import * as React from "react";

import { cn } from "./lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "transition text-white/90 flex h-10 w-full rounded-md border border-dark-200/20 focus:border-wedgewood-500/90 bg-transparent px-3 py-2 text-sm ring-dark-200/50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-dark-100/75 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
