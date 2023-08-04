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
  onFilesSelected: (files: File[]) => void;
}

const FileInputContext = createContext({} as IFileInputContext);

interface IFileInputRoot extends ComponentProps<"div"> {
  children: ReactNode;
}

export function FileInputRoot({ children, ...props }: IFileInputRoot) {
  const [files, setFiles] = useState<File[]>([]);
  const id = useId();

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props}>{children}</div>
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
