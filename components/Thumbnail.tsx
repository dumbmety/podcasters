import Image from "next/image";

import image from "@/assets/thumbnail.png";

export default function Thumbnail() {
  return <Image src={image.src} width={335} height={428} alt="Thumbnail" />;
}
