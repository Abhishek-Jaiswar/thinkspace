import * as React from "react";

const Textarea = React.forwardRef(({ className = "", ...props }) => {

    return (
        <textarea
            className={`flex w-full min-h-[80px] px-2 py-2 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors placeholder:text-muted
            disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className}`}
            {...props}
        />
    );
});

Textarea.displayName = "Textarea";

export default Textarea;
