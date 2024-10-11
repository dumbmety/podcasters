import Image from "next/image";

interface ThumbnailProps {
  src: string;
  alt: string;
}

export default function Thumbnail({ src, alt }: ThumbnailProps) {
  return <Image src={src} width={335} height={428} alt={alt} />;
}
