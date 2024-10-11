"use client";
import { useState } from "react";

import { Podcast } from "@/types/models";
import Author from "@/components/Author";
import Cover from "@/components/Cover";
import Hashtags from "@/components/Hashtags";
import MoreEpisodes from "@/components/MoreEpisodes";
import Navbar from "@/components/Navbar";
import ShareEpisode from "@/components/ShareEpisode";
import Thumbnail from "@/components/Thumbnail";
import Transcript from "@/components/Transcript";
import { podcasts } from "@/constants/data";

export default function Home() {
  const [podcast, setPodcast] = useState<Podcast>(podcasts[0]);

  const handleChangePodcast = (slug: string) => {
    const targetPodcast = podcasts.find((p) => p.slug === slug);

    if (targetPodcast) {
      setPodcast(targetPodcast);
    }
  };

  return (
    <div>
      <Navbar activeLink="/" />
      <Cover />

      <section className="container mx-auto py-6 flex space-x-12">
        <aside className="space-y-12 w-[335px] -translate-y-64">
          <Thumbnail
            src={podcast.thumbnail}
            alt={`${podcast.title} thumbnail`}
          />
          <Author {...podcast.author} />
        </aside>
        <section className="flex-1 pr-12 border-r space-y-4">
          <Hashtags tags={podcast.tags} />
          <h1 className="text-4xl font-bold leading-snug w-2/3">
            {podcast.title}
          </h1>
          <Transcript content={podcast.transcript} />
        </section>
        <aside className="w-64 space-y-8 divide-y">
          <ShareEpisode
            title={podcast.title}
            slug={podcast.slug}
            tags={podcast.tags}
          />
          <MoreEpisodes />
        </aside>
      </section>
    </div>
  );
}
