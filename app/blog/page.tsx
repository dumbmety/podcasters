import BlogBanner from "@/components/blog/BlogBanner";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogPosts from "@/components/blog/BlogPosts";
import Footer from "@/components/shared/Footer";
import LoadMoreButton from "@/components/blog/LoadMoreButton";
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/blog/Subscribe";

export default function Blog() {
  return (
    <div>
      <Navbar activeLink="/blog" />
      <section className="container mx-auto px-6 py-16">
        <header className="space-y-4 pb-16">
          <div className="space-y-2 md:space-y-0 md:flex items-center justify-between">
            <h1 className="text-3xl font-bold">Blog Posts</h1>
            <p className="md:text-lg font-light leading-5 md:leading-6 text-neutral-600">
              New products features, the latest in
              <br /> technology, solutions, and updates.
            </p>
          </div>
          <Subscribe />
        </header>

        <BlogFilters />
        <BlogPosts />
        <LoadMoreButton />
      </section>

      <BlogBanner />

      <section className="container mx-auto px-6 py-16 space-y-6 md:space-y-0 md:flex items-start justify-between">
        <div className="space-y-1 md:space-y-2">
          <h2 className="text-xl font-semibold">
            Ready to grow your business?
          </h2>
          <p className="text-xs md:text-sm md:font-medium">
            Join over 4,000+ startups already growing with Podcasters.
          </p>
        </div>
        <Subscribe />
      </section>

      <Footer className="pb-12" />
    </div>
  );
}
