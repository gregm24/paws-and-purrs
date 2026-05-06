'use client';

import { useState } from 'react';
import StarRating from './StarRating';

const inputClass =
  'w-full rounded-xl px-5 py-4 bg-white border border-cream-dark text-charcoal placeholder-muted/50 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange/20 transition text-base';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, review: message, rating }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.error ?? 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">⭐</div>
        <h3 className="text-xl font-bold text-navy mb-2">Thanks for the review!</h3>
        <p className="text-muted text-sm">Your feedback means a lot.</p>
        <button
          onClick={() => { setStatus('idle'); setRating(0); setName(''); setMessage(''); }}
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

      {status === 'error' && <p className="text-red-500 text-sm">{errorMsg}</p>}

      <button
        type="submit"
        disabled={rating === 0 || status === 'loading'}
        className="flex items-center justify-center gap-2 w-full sm:w-auto sm:self-start px-10 py-4 text-lg bg-orange text-white font-semibold rounded-full hover:bg-orange-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Submitting…
          </>
        ) : 'Submit Review'}
      </button>
    </form>
  );
}
