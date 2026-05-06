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
    <div className="bg-white rounded-2xl p-3 sm:p-6 lg:p-8 shadow-sm border border-cream-dark flex flex-col gap-2 sm:gap-4 hover:shadow-md transition-shadow duration-150">
      <div className="text-2xl sm:text-4xl">{icon}</div>
      <div className="flex items-start justify-between gap-1 sm:gap-2">
        <h3 className="text-sm sm:text-lg font-semibold text-navy leading-tight">{title}</h3>
        <span className="shrink-0 text-xs sm:text-sm font-bold text-white bg-orange px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
          {price}
        </span>
      </div>
      <p className="text-xs sm:text-base text-muted leading-relaxed line-clamp-1 sm:line-clamp-none">{description}</p>
    </div>
  );
}
