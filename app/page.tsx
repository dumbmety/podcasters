import Author from "@/components/Author";
import Cover from "@/components/Cover";
import Hashtags from "@/components/Hashtags";
import MoreEpisodes from "@/components/MoreEpisodes";
import Navbar from "@/components/Navbar";
import ShareEpisode from "@/components/ShareEpisode";
import Thumbnail from "@/components/Thumbnail";
import Transcript from "@/components/Transcript";

export default function Home() {
  return (
    <>
      <Navbar />
      <Cover />

      <section className="container mx-auto py-6 flex space-x-12">
        <aside className="space-y-12 w-[335px] -translate-y-64">
          <Thumbnail />
          <Author />
        </aside>
        <section className="flex-1 pr-12 border-r space-y-4">
          <Hashtags />
          <h1 className="text-4xl font-bold leading-snug">
            Cracking the Code: The
            <br /> Genius Behind Money Heist
          </h1>
          <Transcript />
        </section>
        <aside className="w-64 space-y-8 divide-y">
          <ShareEpisode />
          <MoreEpisodes />
        </aside>
      </section>
    </>
  );
}
