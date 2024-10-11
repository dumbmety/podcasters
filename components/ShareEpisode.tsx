import ShareButton from "./shared/ShareButton";

interface ShareEpisodeProps {
  slug: string;
  title: string;
  tags: string[];
}

export default function ShareEpisode({ title, slug, tags }: ShareEpisodeProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Share Episode</h3>
      <ul className="flex space-x-2">
        <ShareButton
          platform="facebook"
          slug={slug}
          tags={tags}
          title={title}
        />
        <ShareButton platform="twitter" slug={slug} tags={tags} title={title} />
        <ShareButton
          platform="linkedin"
          slug={slug}
          tags={tags}
          title={title}
        />
      </ul>
    </div>
  );
}
