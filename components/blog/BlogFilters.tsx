import clsx from "clsx";
import Link from "next/link";

interface Item {
  label: string;
  filterBy: string | null;
}

const items: Item[] = [
  { label: "View all", filterBy: null },
  { label: "Design", filterBy: "design" },
  { label: "Product", filterBy: "product" },
  { label: "Development", filterBy: "development" },
  { label: "Leadership", filterBy: "leadership" },
  { label: "Management", filterBy: "management" },
];

export default function BlogFilters() {
  return (
    <ul className="relative flex space-x-6">
      {items.map(({ label, filterBy }, index) => (
        <li
          key={index}
          className={clsx(
            "py-2 text-sm border-b",
            filterBy
              ? "border-b-transparent text-neutral-500"
              : "border-b-black font-medium"
          )}
        >
          <Link href={filterBy ? `/blog?filterBy=${filterBy}` : "/blog"}>
            {label}
          </Link>
        </li>
      ))}

      <hr className="absolute -z-10 bottom-0 left-0 right-0" />
    </ul>
  );
}
