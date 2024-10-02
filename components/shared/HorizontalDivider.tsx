interface Props {
  children: string;
}

export default function HorizontalDivider({ children }: Props) {
  return (
    <div className="relative w-full text-center text-sm before:absolute before:left-0 before:right-0 before:top-1/2 before:border before:border-neutral-100">
      <span className="bg-white px-1 relative z-10">{children}</span>
    </div>
  );
}
