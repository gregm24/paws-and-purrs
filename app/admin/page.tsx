'use client';

import { useState } from 'react';

type Booking = {
  timestamp: string;
  name: string;
  email: string;
  service: string;
  date: string;
  notes: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/bookings', {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (!res.ok) {
        setError('Wrong password.');
        setLoading(false);
        return;
      }
      const data = await res.json();
      setBookings(data.bookings);
      setAuthed(true);
    } catch {
      setError('Failed to connect.');
    }
    setLoading(false);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <form
          onSubmit={login}
          className="bg-white/10 rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4"
        >
          <h1 className="text-2xl font-bold text-white">Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-orange transition"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-orange text-white font-semibold rounded-full hover:bg-orange-light transition disabled:opacity-60"
          >
            {loading ? 'Checking…' : 'Login'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-navy">Bookings</h1>
          <span className="text-muted text-sm">{bookings.length} total</span>
        </div>
        {bookings.length === 0 ? (
          <p className="text-muted">No bookings yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-navy/20">
                  {['Submitted', 'Name', 'Email', 'Service', 'Date', 'Notes'].map((h) => (
                    <th key={h} className="pb-3 pr-6 text-navy font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr key={i} className="border-b border-navy/10 hover:bg-navy/5 transition-colors">
                    <td className="py-3 pr-6 text-muted whitespace-nowrap">
                      {new Date(b.timestamp).toLocaleDateString()}
                    </td>
                    <td className="py-3 pr-6 font-medium text-charcoal">{b.name}</td>
                    <td className="py-3 pr-6 text-muted">{b.email}</td>
                    <td className="py-3 pr-6">
                      <span className="px-2 py-1 bg-orange/10 text-orange text-xs font-semibold rounded-full">
                        {b.service}
                      </span>
                    </td>
                    <td className="py-3 pr-6 text-muted whitespace-nowrap">{b.date}</td>
                    <td className="py-3 text-muted">{b.notes || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
