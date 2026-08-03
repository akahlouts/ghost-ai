import type { ReactNode } from "react";

import { dark } from "@clerk/ui/themes";
import { ArrowRight } from "lucide-react";

export const clerkAppearance = {
  theme: dark,
  variables: {
    colorBackground: "var(--bg-surface)",
    colorPrimary: "var(--accent-primary)",
    colorPrimaryForeground: "var(--bg-base)",
    colorText: "var(--text-primary)",
    colorTextSecondary: "var(--text-secondary)",
    colorNeutral: "var(--text-primary)",
    colorInputBackground: "var(--bg-elevated)",
    colorInputText: "var(--text-primary)",
    colorInputForeground: "var(--text-primary)",
    colorBorder: "var(--border-default)",
    colorDanger: "var(--state-error)",
    colorSuccess: "var(--state-success)",
    fontFamily: "var(--font-geist-sans)",
    fontFamilyButtons: "var(--font-geist-sans)",
    fontFamilyMono: "var(--font-geist-mono)",
  },
  elements: {
    rootBox: {
      backgroundColor: "var(--bg-base)",
    },
    card: {
      backgroundColor: "var(--bg-surface)",
      borderColor: "var(--border-default)",
      boxShadow: "none",
    },
    formButtonPrimary: {
      backgroundColor: "var(--accent-primary)",
      color: "var(--bg-base)",
    },
    headerTitle: {
      color: "var(--text-primary)",
    },
    headerSubtitle: {
      color: "var(--text-secondary)",
    },
    formFieldInput: {
      backgroundColor: "var(--bg-elevated)",
      borderColor: "var(--border-default)",
      color: "var(--text-primary)",
    },
    socialButtonsBlockButton: {
      backgroundColor: "var(--bg-elevated)",
      borderColor: "var(--border-default)",
      color: "var(--text-primary)",
    },
    footerActionLink: {
      color: "var(--accent-primary)",
    },
  },
};

interface AuthShellProps {
  children: ReactNode;
  eyebrow?: string;
  title: string;
  subtitle: string;
}

const featureList = [
  "Shared architecture canvas",
  "AI-assisted system design",
  "Project workspaces with collaborators",
];

export function AuthShell({
  children,
  eyebrow,
  title,
  subtitle,
}: AuthShellProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base p-4 sm:p-6 lg:p-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-surface-border bg-surface lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center border-b border-surface-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <div className="flex items-center gap-3 text-copy-primary">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-surface-border bg-subtle text-sm font-semibold text-brand">
              G
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-copy-muted">
                {eyebrow ?? "Ghost AI"}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h1 className="text-2xl font-semibold text-copy-primary">
              {title}
            </h1>
            <p className="max-w-md text-sm leading-6 text-copy-secondary">
              {subtitle}
            </p>
          </div>

          <ul className="mt-8 space-y-3 text-sm text-copy-secondary">
            {featureList.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-dim text-brand">
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-10">
          {children}
        </div>
      </div>
    </div>
  );
}
