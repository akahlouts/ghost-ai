"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;
  const sidebarAction = isSidebarOpen ? "Close projects sidebar" : "Open projects sidebar";

  return (
    <header className="grid h-14 shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-surface-border bg-surface px-4">
      <div>
        <Button
          aria-label={sidebarAction}
          onClick={onSidebarToggle}
          size="icon"
          variant="ghost"
        >
          <SidebarIcon aria-hidden="true" />
        </Button>
      </div>
      <div aria-hidden="true" />
      <div aria-hidden="true" className="justify-self-end" />
    </header>
  );
}
