interface GalleryCardProps {
  name: string;
  breed: string;
  description: string;
  color: string;
}

export default function GalleryCard({
  name,
  breed,
  description,
  color,
}: GalleryCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="w-full aspect-square rounded-2xl flex items-center justify-center text-5xl shadow-sm"
        style={{ backgroundColor: color }}
      >
        {breed === "Cat" ? "🐈" : "🐕"}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-navy text-base">{name}</h3>
          <span className="text-xs text-muted bg-cream-dark px-2 py-0.5 rounded-full">
            {breed}
          </span>
        </div>
        <p className="text-sm text-muted mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
