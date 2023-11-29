import React, { FormEvent, useState } from "react";
import CustomFileSelector from "./zis/FileSelector";
import FilePreview from "./zis/FilePreview";
import axios from "axios";

const FileUploadForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const _files = Array.from(e.target.files);
      setImages(_files);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    images.forEach((image, i) => {
      formData.append(image.name, image);
    });
    setUploading(true);
    await axios.post("/api/upload", formData);
    setUploading(false);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <CustomFileSelector
          accept="image/png, image/jpeg"
          onChange={handleFileSelected}
        />
        <button
          type="submit"
          className=
            "bg-violet-50 text-violet-500 hover:bg-violet-100 px-4 py-2 rounded-md"
          disabled={uploading}
        >
          Upload
        </button>
      </div>
      <FilePreview files={images} />
    </form>
  );
};

export default FileUploadForm;