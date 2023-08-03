import { ComponentProps, ReactNode } from "react";

interface IInputPrefix extends ComponentProps<"div"> {
  children: ReactNode;
}

export function InputPrefix({ children, ...props }: IInputPrefix) {
  return <div {...props}>{children}</div>;
}
