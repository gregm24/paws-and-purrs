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
    <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-cream-dark flex flex-col gap-3 sm:gap-4 hover:shadow-md transition-shadow duration-150">
      <div className="text-4xl">{icon}</div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-navy">{title}</h3>
        <span className="shrink-0 text-sm font-bold text-white bg-orange px-3 py-1.5 rounded-full">
          {price}
        </span>
      </div>
      <p className="text-base text-muted leading-relaxed">{description}</p>
    </div>
  );
}
