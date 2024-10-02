"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <form
      className="w-[320px] flex relative h-10"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        type="email"
        placeholder="Enter your email"
        className="flex-1 border pl-4 pr-[104px] rounded-full"
      />
      <Button className="rounded-full h-10 absolute top-0 right-0 bottom-0">
        Subscribe
      </Button>
    </form>
  );
}
