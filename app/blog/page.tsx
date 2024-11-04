import { ArrowDownIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/shared/Footer";
import BlogBanner from "@/components/blog/BlogBanner";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogPosts from "@/components/blog/BlogPosts";
import Subscribe from "@/components/blog/Subscribe";

export default function Blog() {
  return (
    <div>
      <Navbar activeLink="/blog" />
      <section className="container mx-auto px-6 py-16 space-y-16">
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Blog Posts</h1>
            <p className="text-lg font-light leading-6 text-neutral-600">
              New products features, the latest in
              <br /> technology, solutions, and updates.
            </p>
          </div>
          <Subscribe />
        </header>

        <BlogFilters />
        <BlogPosts />

        <div className="py-2 flex items-center justify-center">
          <Button className="rounded-full inline-flex space-x-1 text-xs">
            <ArrowDownIcon />
            <span>Load more</span>
          </Button>
        </div>
      </section>

      <BlogBanner />

      <section className="container mx-auto px-6 py-16 flex items-start justify-between">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            Ready to grow your business?
          </h2>
          <p className="text-sm font-medium">
            Join over 4,000+ startups already growing with Podcasters.
          </p>
        </div>
        <Subscribe />
      </section>

      <Footer className="pb-12" />
    </div>
  );
}
