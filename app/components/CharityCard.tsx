interface CharityCardProps {
  emoji: string;
  name: string;
  description: string;
  url: string;
}

export default function CharityCard({
  emoji,
  name,
  description,
  url,
}: CharityCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark flex flex-col gap-5">
      <div className="text-4xl">{emoji}</div>
      <div>
        <h3 className="font-bold text-navy text-lg mb-3">{name}</h3>
        <p className="text-base text-muted leading-relaxed">{description}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 text-base font-semibold text-orange border border-orange px-5 py-2.5 rounded-full hover:bg-orange hover:text-white transition-colors duration-150 w-fit"
      >
        Donate →
      </a>
    </div>
  );
}
