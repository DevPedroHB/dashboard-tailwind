"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface ISelectRoot extends Select.SelectProps {
  placeholder?: string;
  children: ReactNode;
}

export function SelectRoot({ placeholder, children, ...props }: ISelectRoot) {
  return (
    <Select.Root {...props}>
      <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400">
        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
