import { ComponentProps } from "react";

interface ITextarea extends ComponentProps<"textarea"> {}

export function Textarea({ ...props }: ITextarea) {
  return (
    <textarea
      className="min-h-[7.5rem] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
