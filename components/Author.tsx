import Link from "next/link";
import Image from "next/image";
import { User } from "@/types/models";

export default function Author({ biography, image, name, username }: User) {
  return (
    <section className="space-y-2">
      <Link
        href={`/profile/${username}`}
        className="inline-flex items-center space-x-3"
      >
        <Image src={image} width={64} height={64} alt={`${name}'s Profile`} />
        <div className="translate-y-0.5">
          <h4 className="font-semibold text-lg leading-3">{name}</h4>
          <span className="text-xs inline-block text-neutral-500">
            @{username}
          </span>
        </div>
      </Link>
      <p className="font-light text-sm leading-normal">{biography}</p>
    </section>
  );
}
