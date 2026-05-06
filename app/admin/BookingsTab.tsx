export type Booking = {
  timestamp: string;
  name: string;
  email: string;
  service: string;
  date: string;
  notes: string;
};

export default function BookingsTab({ bookings }: { bookings: Booking[] }) {
  if (bookings.length === 0) return <p className="text-muted">No bookings yet.</p>;

  return (
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
  );
}
