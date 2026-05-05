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
    <div className="flex flex-col gap-5">
      <div
        className="w-full aspect-square rounded-2xl flex items-center justify-center text-6xl shadow-sm"
        style={{ backgroundColor: color }}
      >
        {breed === "Cat" ? "🐈" : "🐕"}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-navy text-xl">{name}</h3>
          <span className="text-sm text-muted bg-cream-dark px-3 py-1 rounded-full">
            {breed}
          </span>
        </div>
        <p className="text-base text-muted mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
