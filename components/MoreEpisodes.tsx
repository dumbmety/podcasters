const episodes = [
  {
    id: "1",
    title: "Cinemaholics",
    duration: "43:54",
    description:
      "Hosts review new films and streaming releases, offering insightful analysis and discussion.",
  },
  {
    id: "2",
    title: "The Movie Crypt",
    duration: "57:21",
    description:
      "Filmmakers discuss their behind-the-scenes experiences and offer advice to aspiring creators.",
  },
  {
    id: "3",
    title: "The Next Picture Show",
    duration: "34:55",
    description:
      "Compares modern films with classic counterparts, highlighting thematic connections.",
  },
];

export default function MoreEpisodes() {
  return (
    <div className="space-y-3 pt-8">
      <h3 className="text-lg font-semibold">More Episodes</h3>
      <ul className="space-y-4">
        {episodes.map(({ id, title, description, duration }) => (
          <li
            key={id}
            className="space-y-1 cursor-pointer select-none relative before:-z-10 before:rounded-xl before:transition-all before:absolute hover:before:scale-100 before:scale-0 before:ease-in-out before:-inset-3 before:bg-neutral-100"
          >
            <header className="flex items-center justify-between">
              <h4 className="text-sm">{title}</h4>
              <span className="text-xs font-light text-neutral-700">
                {duration}
              </span>
            </header>
            <p className="text-xs text-neutral-700">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
