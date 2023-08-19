"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FileInputItem } from "./FileInputItem";
import { useFileInput } from "./FileInputRoot";

export function FileInputFileList() {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileInputItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="complete"
          />
        );
      })}
    </div>
  );
}
