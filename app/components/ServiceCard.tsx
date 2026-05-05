interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  price,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark flex flex-col gap-3 hover:shadow-md transition-shadow duration-150">
      <div className="text-3xl">{icon}</div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-navy">{title}</h3>
        <span className="shrink-0 text-xs font-bold text-white bg-orange px-2.5 py-1 rounded-full">
          {price}
        </span>
      </div>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
