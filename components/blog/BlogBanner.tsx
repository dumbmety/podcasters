import Marquee from "react-fast-marquee";

const items = [
  "How it works",
  "Documentation",
  "Join the community",
  "Subscribe to our newsletter",
];

const REPEAT_COUNT = 5;

const BannerItem = ({ item }: { item: string }) => (
  <span className="flex items-center pl-4">
    {item}
    <span className="ml-4">•</span>
  </span>
);

export default function BlogBanner() {
  const repeatedItems = Array.from(
    { length: REPEAT_COUNT },
    () => items
  ).flat();

  return (
    <div className="bg-black text-white py-1 text-sm font-light h-7">
      <Marquee speed={25}>
        {repeatedItems.map((item, index) => (
          <BannerItem key={index} item={item} />
        ))}
      </Marquee>
    </div>
  );
}
