"use client";

import {
  ComponentProps,
  ReactNode,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

interface IFileInputContext {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
}

const FileInputContext = createContext({} as IFileInputContext);

interface IFileInputRoot extends ComponentProps<"div"> {
  children: ReactNode;
}

export function FileInputRoot({ children, ...props }: IFileInputRoot) {
  const [files, setFiles] = useState<File[]>([]);
  const id = useId();

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props}>{children}</div>
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
