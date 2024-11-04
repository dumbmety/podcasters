import clsx from "clsx";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={clsx("mt-auto", className)}>
      <p className="text-xs text-center text-neutral-500">
        Made by Amir & Mety
      </p>
    </footer>
  );
}
