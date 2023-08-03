"use client";

import { formatStringToId } from "@/utils/format-string-to-id";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { TabItem } from "./TabItem";

interface ISettingsTabs {
  tabs: string[];
}

export function SettingsTabs({ tabs }: ISettingsTabs) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {tabs.map((tab) => {
          const id = formatStringToId(tab);

          return (
            <TabItem value={id} title={tab} isSelected={currentTab === id} />
          );
        })}
      </Tabs.List>
    </Tabs.Root>
  );
}
