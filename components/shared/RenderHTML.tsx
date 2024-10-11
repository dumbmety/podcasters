import clsx from "clsx";

interface RenderHTMLProps {
  html: string;
  className?: string;
}

export default function RenderHTML({ html, className }: RenderHTMLProps) {
  return (
    <div
      className={clsx("render-html", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
