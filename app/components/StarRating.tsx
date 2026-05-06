'use client';

import { useState } from 'react';

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-9 h-9"
      fill={filled ? '#E8722A' : 'none'}
      stroke={filled ? '#E8722A' : 'rgba(0,0,0,0.2)'}
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const display = hovered ?? value;

  return (
    <div className="flex gap-0.5" onMouseLeave={() => setHovered(null)}>
      {[1, 2, 3, 4, 5].map((star) => {
        const full = display >= star;
        const half = !full && display >= star - 0.5;
        return (
          <div key={star} className="relative w-9 h-9">
            <StarIcon filled={false} />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: full ? undefined : half ? 'inset(0 50% 0 0)' : 'inset(0 100% 0 0)',
              }}
            >
              <StarIcon filled={true} />
            </div>
            <div
              className="absolute inset-y-0 left-0 w-1/2 cursor-pointer"
              onMouseEnter={() => setHovered(star - 0.5)}
              onClick={() => onChange(star - 0.5)}
            />
            <div
              className="absolute inset-y-0 right-0 w-1/2 cursor-pointer"
              onMouseEnter={() => setHovered(star)}
              onClick={() => onChange(star)}
            />
          </div>
        );
      })}
      {display > 0 && (
        <span className="self-center ml-2 text-sm text-muted font-medium">{display} / 5</span>
      )}
    </div>
  );
}
