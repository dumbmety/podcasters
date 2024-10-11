import { Podcast } from "@/types/models";
import { formatDuration } from "@/utils/timing";

interface MoreEpisodesProps {
  items: Podcast[];
  onChangePodcast: (slug: string) => void;
}

export default function MoreEpisodes({
  items,
  onChangePodcast,
}: MoreEpisodesProps) {
  return (
    <div className="space-y-3 pt-8">
      <h3 className="text-lg font-semibold">More Episodes</h3>
      <ul className="space-y-4">
        {items.map(({ slug, title, description, duration }) => (
          <li
            key={slug}
            onClick={() => onChangePodcast(slug)}
            className="space-y-1 cursor-pointer select-none relative before:-z-10 before:rounded-xl before:transition-all before:absolute hover:before:scale-100 before:scale-0 before:ease-in-out before:-inset-3 before:bg-neutral-100"
          >
            <header className="flex items-center space-x-2 justify-between">
              <h4 className="text-sm truncate">{title}</h4>
              <span className="text-xs font-light text-neutral-600">
                {formatDuration(duration)}
              </span>
            </header>
            <p className="text-xs text-neutral-600 leading-5 line-clamp-2 overflow-hidden">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
