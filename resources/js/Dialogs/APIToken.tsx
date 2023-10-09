import React from "react";
import { useCopyToClipboard } from "usehooks-ts";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/shadcn/Dialog";
import { ClipboardCopy } from "lucide-react";
export default function APIToken({ open, setOpen, token }) {
    const [clipboardValue, copy] = useCopyToClipboard();
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {token && (
                <DialogContent className="sm:max-w-[475px]">
                    <DialogHeader>
                        <DialogTitle>API Token: {token.id}</DialogTitle>
                        <DialogDescription>
                            Please store your token somewhere safe. You will be
                            unable to access the key once you close this dialog.{" "}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between w-full overflow-hidden space-x-4">
                            <div className="rounded-md bg-black p-4 w-full overflow-scroll">
                                <pre>
                                    <code className="grid gap-1 text-sm text-white/90 [&_span]:h-4">
                                        <span>
                                            <span className="text-sky-300">
                                                {token.token}{" "}
                                            </span>{" "}
                                        </span>
                                    </code>
                                </pre>
                            </div>
                            <ClipboardCopy
                                onClick={() => copy(token.token)}
                                className="cursor-pointer w-5 h-5 text-white/80 hover:text-white/90 transition"
                            />
                        </div>
                    </div>
                </DialogContent>
            )}
        </Dialog>
    );
}
