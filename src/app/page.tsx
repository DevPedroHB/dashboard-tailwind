import { SettingsTabs } from "@/components/SettingsTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Settings",
};

const tabs = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Billing",
  "Email",
  "Notifications",
  "Integrations",
  "API",
];

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs tabs={tabs} />
    </>
  );
}
