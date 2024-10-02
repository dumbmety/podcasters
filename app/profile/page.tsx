import moment from "moment";
import Link from "next/link";
import Image from "next/image";

import profile from "@/assets/profile.png";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { DotsVerticalIcon, HeartIcon } from "@radix-ui/react-icons";
import { posts } from "@/constants/data";

export default function Profile() {
  return (
    <div>
      <Navbar activeLink="/" />
      <div className="bg-red-100 w-full h-64 relative">
        <Image
          src="https://images.unsplash.com/photo-1508669232496-137b159c1cdb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mety's Cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto px-6 py-16 flex space-x-16">
        <div className="-translate-y-28 w-[300px]">
          <Image
            src={profile.src}
            width={92}
            height={92}
            alt="Mety's Profile"
            className="border-4 rounded-full border-white"
          />
          <h1 className="text-2xl font-semibold mt-4">Mety</h1>
          <span className="text-neutral-500 text-sm">@dumbmety</span>
          <p className="text-xs text-neutral-600 mt-4 leading-5">
            Look again at that dot. That's here. That's home. That's us. On it
            everyone you love, everyone you know, everyone you ever heard of,
            every human being who ever was, lived out their lives
          </p>
          <div className="rounded-xl border p-4 mt-4">
            <div className="flex space-x-8">
              <div className="flex-1 flex flex-col">
                <h5 className="font-medium">13.5k</h5>
                <span className="text-xs text-neutral-500">Followers</span>
              </div>
              <div className="flex-1 flex flex-col">
                <h5 className="font-medium">345</h5>
                <span className="text-xs text-neutral-500">Posts</span>
              </div>
            </div>
            <hr className="mt-4 pb-4" />
            <div className="flex space-x-8">
              <div className="flex-1 flex flex-col">
                <h5 className="font-medium">43</h5>
                <span className="text-xs text-neutral-500">Collections</span>
              </div>
              <div className="flex-1 flex flex-col">
                <h5 className="font-medium">11.2k</h5>
                <span className="text-xs text-neutral-500">Likes</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Badge className="bg-neutral-100 text-neutral-700 font-normal">
              Subscribed Dec 08
            </Badge>
          </div>
        </div>

        <div className="flex-1">
          <ul className="relative flex space-x-6 w-full">
            <li className="py-2 text-sm border-b border-b-black font-medium">
              <Link href="/profile" className="flex items-center space-x-1">
                <span>Podcasts</span>
                <Badge className="bg-black font-normal">98</Badge>
              </Link>
            </li>
            <li className="py-2 text-sm border-b border-b-transparent text-neutral-500">
              <Link
                href="/profile/playlists"
                className="flex items-center space-x-1"
              >
                <span>Playlists</span>
                <Badge className="text-black bg-white border-neutral-300 font-normal">
                  12
                </Badge>
              </Link>
            </li>

            <hr className="absolute -z-10 bottom-0 left-0 right-0" />
          </ul>

          <ul className="mt-4 grid gap-4 grid-cols-2">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="border rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex space-x-4 items-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-black relative">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-medium text-sm">{post.title}</h5>
                    <p className="text-xs text-neutral-500">
                      {post.category} • {moment(post.createdAt).format("LL")}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <HeartIcon className="size-5" />
                  <DotsVerticalIcon className="size-5" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
