import { ComponentProps } from "react";

type TInputControl = ComponentProps<"input">;

export function InputControl(props: TInputControl) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  );
}
