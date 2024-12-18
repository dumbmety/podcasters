"use client";

import clsx from "clsx";
import Link from "next/link";
import useQueryParams from "@/hooks/useQueryParams";

interface Item {
  label: string;
  value: string | null;
}

const items: Item[] = [
  { label: "All", value: null },
  { label: "Design", value: "design" },
  { label: "Product", value: "product" },
  { label: "Development", value: "development" },
  { label: "Business", value: "business" },
  { label: "Management", value: "management" },
];

export default function BlogFilters() {
  const { filterBy } = useQueryParams(["filterBy"]);

  const getLinkHref = (value: string | null) => {
    return value ? `/blog?filterBy=${value}` : "/blog";
  };

  const getItemClasses = (value: string | null) => {
    return clsx(
      "py-2 text-sm border-b",
      filterBy === value
        ? "border-b-black font-medium"
        : "border-b-transparent text-neutral-500"
    );
  };

  return (
    <ul className="relative flex mb-8 space-x-6 overflow-x-auto after:absolute after:w-full after:h-px after:bg-neutral-200 after:bottom-0 after:-z-10">
      {items.map(({ label, value }) => (
        <li key={value} className={getItemClasses(value)}>
          <Link href={getLinkHref(value)}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
