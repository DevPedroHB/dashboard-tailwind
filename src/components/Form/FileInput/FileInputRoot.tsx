import { ComponentProps, ReactNode } from "react";

interface IFileInputRoot extends ComponentProps<"div"> {
  children: ReactNode;
}

export function FileInputRoot({ children, ...props }: IFileInputRoot) {
  return <div {...props}>{children}</div>;
}
