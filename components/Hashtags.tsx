interface HashtagsProps {
  tags: string[];
}

export default function Hashtags({ tags }: HashtagsProps) {
  return (
    <ul className="flex space-x-6 font-light text-neutral-500 text-sm">
      {tags.map((tag, index) => (
        <li key={index}>#{tag}</li>
      ))}
    </ul>
  );
}
