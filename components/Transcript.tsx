interface TranscriptProps {
  content: string;
}

export default function Transcript({ content }: TranscriptProps) {
  return (
    <div className="space-y-3 pt-12">
      <div className="border-b">
        <h4 className="pb-3 font-semibold text-lg">Transcript</h4>
      </div>
      <p className="text-sm leading-6 text-neutral-700">{content}</p>
    </div>
  );
}
