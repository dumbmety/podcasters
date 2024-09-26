const items = ["heist", "crime_drama", "thriller"];

export default function Hashtags() {
  return (
    <ul className="flex space-x-6 font-light text-neutral-500 text-sm">
      {items.map((item, index) => (
        <li key={index}>#{item}</li>
      ))}
    </ul>
  );
}
