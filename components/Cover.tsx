import Player from "./player";

interface CoverProps {
  url: string;
  cover: string;
}

export default function Cover({ url, cover }: CoverProps) {
  return (
    <section
      className={`h-72 flex mx-24 items-end pb-8 pr-8 pl-[575px] relative bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/30 before:to-transparent`}
      style={{ backgroundImage: `url('${cover}')` }}
    >
      <div className="text-white z-10 w-full">
        <Player url={url} />
      </div>
    </section>
  );
}
