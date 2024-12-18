"use client";

import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { posts } from "@/constants/data";
import useQueryParams from "@/hooks/useQueryParams";

export default function BlogPosts() {
  const { filterBy } = useQueryParams(["filterBy"]);

  const filteredPosts = useMemo(() => {
    return filterBy ? posts.filter((p) => p.category === filterBy) : posts;
  }, [filterBy]);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-6 mb-8">
      {filteredPosts.length === 0 ? (
        <p className="text-sm">No posts available for this filter!</p>
      ) : (
        filteredPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="space-y-4 group flex flex-col h-full"
            >
              <div className="relative h-64 bg-neutral-200">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="bg-white/30 absolute bottom-0 left-0 backdrop-blur-md right-0 border-t border-white/30 p-3 text-xs flex justify-between text-white">
                  <div>
                    <h4 className="font-medium">{post.createdBy}</h4>
                    <span>{moment(post.createdAt).format("LL")}</span>
                  </div>
                  <span className="font-medium capitalize">
                    {post.category}
                  </span>
                </div>
              </div>

              <header className="space-y-1 flex-1">
                <h3 className="text-lg font-medium group-hover:border-b-black inline border-b border-b-transparent">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-600 max-w-[400px]">
                  {post.description}
                </p>
              </header>
              <div className="flex items-center space-x-1 text-sm font-medium">
                <span>Read post</span> <ArrowTopRightIcon />
              </div>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
}
