'use client';

export type Review = {
  row: number;
  timestamp: string;
  name: string;
  rating: string;
  review: string;
  display: boolean;
};

type Props = {
  reviews: Review[];
  password: string;
  onRefresh: () => void;
};

export default function ReviewsTab({ reviews, password, onRefresh }: Props) {
  const headers = {
    Authorization: `Bearer ${password}`,
    'Content-Type': 'application/json',
  };

  const toggle = async (row: number, display: boolean) => {
    await fetch('/api/admin/reviews', {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ row, display }),
    });
    onRefresh();
  };

  const remove = async (row: number) => {
    if (!confirm('Delete this review? This cannot be undone.')) return;
    await fetch('/api/admin/reviews', {
      method: 'DELETE',
      headers,
      body: JSON.stringify({ row }),
    });
    onRefresh();
  };

  if (reviews.length === 0) return <p className="text-muted">No reviews yet.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-navy/20">
            {['Submitted', 'Name', 'Rating', 'Review', 'Display', ''].map((h) => (
              <th key={h} className="pb-3 pr-4 text-navy font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {reviews.map((r) => (
            <tr key={r.row} className="border-b border-navy/10 hover:bg-navy/5 transition-colors">
              <td className="py-3 pr-4 text-muted whitespace-nowrap">
                {new Date(r.timestamp).toLocaleDateString()}
              </td>
              <td className="py-3 pr-4 font-medium text-charcoal">{r.name}</td>
              <td className="py-3 pr-4 text-muted">{r.rating || '—'}</td>
              <td className="py-3 pr-4 text-muted max-w-xs">{r.review}</td>
              <td className="py-3 pr-4">
                <button
                  onClick={() => toggle(r.row, !r.display)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    r.display
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {r.display ? 'Shown' : 'Hidden'}
                </button>
              </td>
              <td className="py-3">
                <button
                  onClick={() => remove(r.row)}
                  className="text-red-400 hover:text-red-600 text-xs font-medium transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
