
import React, { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"input">;

const CustomFileSelector = (props: Props) => {
  return (
    <input
      {...props}
      type="file"
      multiple
      className=
        "hover:cursor-pointer border rounded-lg text-gray-400"
    />
  );
};

export default CustomFileSelector;
