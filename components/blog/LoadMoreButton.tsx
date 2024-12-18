"use client";

import { ArrowDownIcon } from "@radix-ui/react-icons";

import useQueryParams from "@/hooks/useQueryParams";
import { Button } from "@/components/ui/button";

export default function LoadMoreButton() {
  const { filterBy } = useQueryParams(["filterBy"]);

  return filterBy ? null : (
    <div className="py-2 flex items-center justify-center">
      <Button className="rounded-full inline-flex space-x-1 text-xs">
        <ArrowDownIcon />
        <span>Load more</span>
      </Button>
    </div>
  );
}
