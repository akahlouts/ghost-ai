import { SignIn } from "@clerk/nextjs";

import { AuthShell } from "@/components/auth/auth-shell";
import { clerkAppearance } from "@/components/auth/auth-shell";

export default function SignInPage() {
  return (
    <AuthShell
      eyebrow="Ghost AI"
      title="Welcome back"
      subtitle="Continue shaping your system architecture with your team."
    >
      <SignIn appearance={clerkAppearance} forceRedirectUrl="/editor" />
    </AuthShell>
  );
}
