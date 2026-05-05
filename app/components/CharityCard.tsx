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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark flex flex-col gap-4">
      <div className="text-3xl">{emoji}</div>
      <div>
        <h3 className="font-bold text-navy text-base mb-2">{name}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-orange border border-orange px-4 py-2 rounded-full hover:bg-orange hover:text-white transition-colors duration-150 w-fit"
      >
        Donate →
      </a>
    </div>
  );
}
