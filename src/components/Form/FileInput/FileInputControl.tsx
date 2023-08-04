"use client";

import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./FileInputRoot";

interface IFileInputControl extends ComponentProps<"input"> {}

export function FileInputControl({ ...props }: IFileInputControl) {
  const { id, onFilesSelected } = useFileInput();

  function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) {
      return;
    }

    const files = Array.from(e.target.files);

    onFilesSelected(files);
  }

  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      onChange={handleFilesSelected}
      {...props}
    />
  );
}
