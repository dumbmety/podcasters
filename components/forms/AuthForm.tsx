import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import googleLogo from "@/assets/logos/google.svg";

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex-1 flex flex-col w-full sm:w-[340px] space-y-4 mx-auto py-4 items-center justify-center">
      {children}
    </section>
  );
}

export function AuthHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="space-y-2 text-center mb-6">
      <h1 className="text-3xl font-medium">{title}</h1>
      <p className="text-sm sm:text-base font-light">{description}</p>
    </header>
  );
}

export function AuthGoogle({ children }: { children: string }) {
  return (
    <Button className="w-full space-x-2" variant="outline">
      <Image src={googleLogo} alt="Google Logo" />
      <span>{children}</span>
    </Button>
  );
}

export function AuthLink({
  question,
  answer,
  href,
}: {
  question: string;
  answer: string;
  href: string;
}) {
  return (
    <div className="text-xs font-light space-x-1">
      <span>{question}</span>{" "}
      <Link
        className="font-medium text-brand border-b border-transparent hover:border-brand"
        href={href}
      >
        {answer}
      </Link>
    </div>
  );
}
