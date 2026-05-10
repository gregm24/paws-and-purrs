import { google } from 'googleapis';
import FadeIn from './FadeIn';
import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';

type Review = { name: string; rating: number; review: string };

async function getApprovedReviews(): Promise<Review[]> {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    const sheets = google.sheets({ version: 'v4', auth });
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Reviews!A:E',
    });
    const rows = res.data.values ?? [];
    const data = rows[0]?.[0] === 'Timestamp' ? rows.slice(1) : rows;
    return data
      .filter((row) => row[4] === 'TRUE')
      .map((row) => ({
        name: row[1] ?? 'Anonymous',
        rating: Math.round((parseFloat(row[2]) || 5) * 2) / 2,
        review: row[3] ?? '',
      }));
  } catch {
    return [];
  }
}

function PlaceholderCard() {
  return (
    <div className="bg-white/60 rounded-2xl p-6 border border-cream-dark flex flex-col gap-3">
      <div className="flex gap-0.5 mb-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-3 bg-cream-dark rounded w-full" />
        <div className="h-3 bg-cream-dark rounded w-5/6" />
        <div className="h-3 bg-cream-dark rounded w-3/4" />
      </div>
      <div className="h-3 bg-cream-dark rounded w-1/3 mt-1" />
    </div>
  );
}

export default async function Reviews() {
  const reviews = await getApprovedReviews();

  return (
    <section id="reviews" className="bg-orange-pale py-10 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-8 sm:mb-14">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-4">
            Reviews
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-navy leading-tight">What Neighbors Say</h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 items-start">
          <FadeIn direction="left" className="flex flex-col gap-6">
            <p className="text-base text-charcoal/70 leading-relaxed">
              Worked with me? I&apos;d love to hear from you — reviews help neighbors find someone they can trust.
            </p>
            <ReviewForm />
          </FadeIn>

          <FadeIn direction="right" delay={150} className="lg:col-span-2">
            {reviews.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {reviews.map((r, i) => (
                  <ReviewCard key={i} name={r.name} rating={r.rating} review={r.review} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <PlaceholderCard /><PlaceholderCard />
                  <PlaceholderCard /><PlaceholderCard />
                </div>
                <p className="text-sm text-muted text-center mt-6">Reviews will appear here once submitted</p>
              </>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
