'use client';

import { useState } from 'react';
import BookingsTab, { type Booking } from './BookingsTab';
import ReviewsTab, { type Review } from './ReviewsTab';

type Tab = 'bookings' | 'reviews';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<Tab>('bookings');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const authHeaders = (pw: string) => ({ Authorization: `Bearer ${pw}` });

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const [bRes, rRes] = await Promise.all([
        fetch('/api/admin/bookings', { headers: authHeaders(password) }),
        fetch('/api/admin/reviews', { headers: authHeaders(password) }),
      ]);
      if (!bRes.ok) { setError('Wrong password.'); setLoading(false); return; }
      const [bData, rData] = await Promise.all([bRes.json(), rRes.json()]);
      setBookings(bData.bookings ?? []);
      setReviews(rData.reviews ?? []);
      setAuthed(true);
    } catch {
      setError('Failed to connect.');
    }
    setLoading(false);
  };

  const refreshReviews = async () => {
    const res = await fetch('/api/admin/reviews', { headers: authHeaders(password) });
    const data = await res.json();
    setReviews(data.reviews ?? []);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <form onSubmit={login} className="bg-white/10 rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white">Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-orange transition"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="px-6 py-3 bg-orange text-white font-semibold rounded-full hover:bg-orange-light transition disabled:opacity-60">
            {loading ? 'Checking…' : 'Login'}
          </button>
        </form>
      </div>
    );
  }

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: 'bookings', label: 'Bookings', count: bookings.length },
    { id: 'reviews', label: 'Reviews', count: reviews.length },
  ];

  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 pb-2 font-semibold text-sm border-b-2 transition-colors ${
                tab === t.id ? 'border-orange text-navy' : 'border-transparent text-muted hover:text-charcoal'
              }`}
            >
              {t.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${tab === t.id ? 'bg-orange/10 text-orange' : 'bg-navy/10 text-navy/50'}`}>
                {t.count}
              </span>
            </button>
          ))}
        </div>

        {tab === 'bookings' ? (
          <BookingsTab bookings={bookings} />
        ) : (
          <ReviewsTab reviews={reviews} password={password} onRefresh={refreshReviews} />
        )}
      </div>
    </div>
  );
}
