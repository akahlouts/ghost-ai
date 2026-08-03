"use client";

import { useState } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

export default function EditorPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-base text-copy-primary">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={() => setIsSidebarOpen((open) => !open)}
      />

      <div className="relative flex-1 overflow-hidden">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="h-full p-4 sm:p-6 lg:p-8">
          <div className="flex h-full min-h-[24rem] items-center justify-center rounded-3xl border border-surface-border bg-surface">
            <div className="max-w-xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-copy-muted">
                Workspace
              </p>
              <h1 className="mt-4 text-2xl font-semibold text-copy-primary">
                Editor shell ready
              </h1>
              <p className="mt-3 text-sm leading-6 text-copy-secondary">
                The project sidebar and editor chrome are in place for the next
                architecture work.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
