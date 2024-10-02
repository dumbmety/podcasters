import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { posts } from "@/constants/data";

export default function BlogPosts() {
  return (
    <ul className="grid grid-cols-4 gap-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="space-y-4 group">
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
                <span className="font-medium">{post.category}</span>
              </div>
            </div>

            <header className="space-y-1">
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
      ))}
    </ul>
  );
}
