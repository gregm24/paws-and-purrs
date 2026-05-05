"use client";

import { useState } from "react";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-9 h-9"
      fill={filled ? "#E8722A" : "none"}
      stroke={filled ? "#E8722A" : "rgba(0,0,0,0.2)"}
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarRating({
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
            {/* Empty base */}
            <StarIcon filled={false} />
            {/* Filled overlay, clipped for half-star support */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: full
                  ? undefined
                  : half
                  ? "inset(0 50% 0 0)"
                  : "inset(0 100% 0 0)",
              }}
            >
              <StarIcon filled={true} />
            </div>
            {/* Left half hitbox → 0.5 increment */}
            <div
              className="absolute inset-y-0 left-0 w-1/2 cursor-pointer"
              onMouseEnter={() => setHovered(star - 0.5)}
              onClick={() => onChange(star - 0.5)}
            />
            {/* Right half hitbox → full star */}
            <div
              className="absolute inset-y-0 right-0 w-1/2 cursor-pointer"
              onMouseEnter={() => setHovered(star)}
              onClick={() => onChange(star)}
            />
          </div>
        );
      })}
      {display > 0 && (
        <span className="self-center ml-2 text-sm text-muted font-medium">
          {display} / 5
        </span>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl px-5 py-4 bg-white border border-cream-dark text-charcoal placeholder-muted/50 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange/20 transition text-base";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to Google Sheets
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">⭐</div>
        <h3 className="text-xl font-bold text-navy mb-2">
          Thanks for the review!
        </h3>
        <p className="text-muted text-sm">Your feedback means a lot.</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setRating(0);
            setName("");
            setMessage("");
          }}
          className="mt-6 text-orange text-sm underline underline-offset-2"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="block text-sm text-charcoal/60 mb-3 font-medium">
          Rating <span className="text-orange">*</span>
        </label>
        <StarRating value={rating} onChange={setRating} />
      </div>

      <div>
        <label className="block text-sm text-charcoal/60 mb-2 font-medium">
          Name <span className="text-orange">*</span>
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm text-charcoal/60 mb-2 font-medium">
          Review <span className="text-orange">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell others about your experience..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={rating === 0}
        className="flex items-center justify-center w-full sm:w-auto sm:self-start px-10 py-4 text-lg bg-orange text-white font-semibold rounded-full hover:bg-orange-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Review
      </button>
    </form>
  );
}
