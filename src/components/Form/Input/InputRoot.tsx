import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IInputRoot extends ComponentProps<"div"> {
  children: ReactNode;
}

export function InputRoot({ children, ...props }: IInputRoot) {
  return (
    <div
      className={twMerge(
        "flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm",
        "focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20",
        props.className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
