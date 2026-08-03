import { SignUp } from "@clerk/nextjs";

import { AuthShell } from "@/components/auth/auth-shell";
import { clerkAppearance } from "@/components/auth/auth-shell";

export default function SignUpPage() {
  return (
    <AuthShell
      eyebrow="Ghost AI"
      title="Create your account"
      subtitle="Start designing architecture with AI-powered collaboration."
    >
      <SignUp appearance={clerkAppearance} forceRedirectUrl="/editor" />
    </AuthShell>
  );
}
