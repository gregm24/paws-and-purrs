interface ReviewCardProps {
  name: string;
  location: string;
  quote: string;
  stars: number;
}

export default function ReviewCard({
  name,
  location,
  quote,
  stars,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
      <div className="text-orange text-lg tracking-widest">
        {"★".repeat(stars)}
      </div>
      <p className="text-charcoal leading-relaxed text-sm italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-navy font-semibold text-sm">{name}</p>
        <p className="text-muted text-xs">{location}</p>
      </div>
    </div>
  );
}
