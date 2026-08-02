"use client";

import { FolderOpen, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EmptyProjectsStateProps {
  description: string;
}

function EmptyProjectsState({ description }: EmptyProjectsStateProps) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-subtle-border bg-subtle px-6 text-center">
      <FolderOpen aria-hidden="true" className="h-8 w-8 text-copy-faint" />
      <p className="text-sm text-copy-muted">{description}</p>
    </div>
  );
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      aria-label="Projects"
      className={cn(
        "fixed top-[4.5rem] bottom-4 left-4 z-20 flex w-[min(20rem,calc(100vw-2rem))] flex-col rounded-2xl border border-surface-border bg-surface/95 p-4 shadow-2xl backdrop-blur transition-all duration-200 ease-out",
        isOpen
          ? "translate-x-0 opacity-100"
          : "pointer-events-none -translate-x-[calc(100%+1rem)] opacity-0"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-copy-primary">Projects</h2>
        <Button
          aria-label="Close projects sidebar"
          onClick={onClose}
          size="icon"
          variant="ghost"
        >
          <X aria-hidden="true" />
        </Button>
      </div>

      <Tabs className="mt-6 min-h-0 flex-1" defaultValue="my-projects">
        <TabsList className="w-full">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent className="pt-4" value="my-projects">
          <EmptyProjectsState description="Your projects will appear here." />
        </TabsContent>
        <TabsContent className="pt-4" value="shared">
          <EmptyProjectsState description="Projects shared with you will appear here." />
        </TabsContent>
      </Tabs>

      <Button className="mt-4 w-full" type="button">
        <Plus aria-hidden="true" />
        New Project
      </Button>
    </aside>
  );
}
