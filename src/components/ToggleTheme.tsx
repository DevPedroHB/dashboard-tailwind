"use client";

import { Loader2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleChangeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" type="button">
        <Loader2 className="h-6 w-6 animate-spin" />
      </Button>
    );
  } else {
    return (
      <Button variant="ghost" type="button" onClick={handleChangeTheme}>
        {theme === "light" ? (
          <Moon className="h-6 w-6" />
        ) : (
          <Sun className="h-6 w-6" />
        )}
      </Button>
    );
  }
}
