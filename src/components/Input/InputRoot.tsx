import { ComponentProps, ReactNode } from "react";

interface IInputRoot extends ComponentProps<"div"> {
  children: ReactNode;
}

export function InputRoot({ children, ...props }: IInputRoot) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    >
      {children}
    </div>
  );
}
