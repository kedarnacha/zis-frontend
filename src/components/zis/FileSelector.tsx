
import React, { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"input">;

const CustomFileSelector = (props: Props) => {
    return (
        <input
            {...props}
            type="file"
            multiple
            className=
            "bg-violet-50 text-violet-500 hover:cursor-pointer border rounded-lg"
        />
    );
};

export default CustomFileSelector;
