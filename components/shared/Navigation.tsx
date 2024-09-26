import Link from "next/link";

type Item = {
  label: string;
  href: string;
};

const items: Item[] = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  return (
    <nav className="pl-12">
      <ul className="flex space-x-12 text-sm uppercase font-light">
        {items.map(({ label, href }) => (
          <li key={href}>
            <Link className="transition-all hover:text-brand" href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
