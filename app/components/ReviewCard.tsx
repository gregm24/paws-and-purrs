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
    <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5">
      <div className="text-orange text-xl tracking-widest">
        {"★".repeat(stars)}
      </div>
      <p className="text-charcoal leading-relaxed text-base italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-navy font-semibold text-base">{name}</p>
        <p className="text-muted text-sm">{location}</p>
      </div>
    </div>
  );
}
