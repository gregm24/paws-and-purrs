interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
}

export default function ReviewCard({ name, review, rating }: ReviewCardProps) {
  const filled = Math.round(rating);
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5">
      <div className="text-orange text-xl tracking-widest">
        {'★'.repeat(filled)}{'☆'.repeat(5 - filled)}
      </div>
      <p className="text-charcoal leading-relaxed text-base italic">&ldquo;{review}&rdquo;</p>
      <p className="text-navy font-semibold text-base">{name}</p>
    </div>
  );
}
