import React from "react";
import Image from "next/image";

type Props = {
  files: File[];
};

const FilePreview = ({ files }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 my-2">
        {files.map((file) => {
          const src = URL.createObjectURL(file);
          return (
            <div className="relative aspect-video col-span-4" key={file.name}>
              <Image src={src} alt={file.name} className="object-cover" fill />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilePreview;