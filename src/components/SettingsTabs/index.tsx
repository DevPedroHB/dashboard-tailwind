"use client";

import { formatStringToId } from "@/utils/format-string-to-id";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { TabItem } from "./TabItem";

interface ISettingsTabs {
  tabs: string[];
}

export function SettingsTabs({ tabs }: ISettingsTabs) {
  const [currentTab, setCurrentTab] = useState(formatStringToId(tabs[0]));

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            {tabs.map((tab) => {
              const id = formatStringToId(tab);

              return (
                <TabItem
                  key={id}
                  value={id}
                  title={tab}
                  isSelected={currentTab === id}
                />
              );
            })}
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  );
}
