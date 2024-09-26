import Image from "next/image";

import profile from "@/assets/profile.png";

export default function Author() {
  return (
    <section className="space-y-2">
      <div className="flex items-center space-x-3">
        <Image src={profile.src} width={64} height={64} alt="Mety's Profile" />
        <div className="translate-y-0.5">
          <h4 className="font-semibold text-lg leading-3">Mety</h4>
          <span className="text-xs inline-block text-neutral-500">
            @dumbmety
          </span>
        </div>
      </div>
      <p className="font-light text-sm leading-normal">
        Join me on my podcast for movie reviews,
        <br /> insights, and behind-the-scenes stories.
      </p>
    </section>
  );
}
