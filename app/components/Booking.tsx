import BookingForm from "./BookingForm";
import FadeIn from "./FadeIn";

export default function Booking() {
  return (
    <section id="booking" className="bg-navy paw-bg-dark py-16 sm:py-20 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          {/* Left: copy */}
          <FadeIn direction="left" className="flex flex-col gap-5 sm:gap-8">
            <div className="inline-flex items-center gap-2 bg-white/10 text-orange text-sm font-medium px-4 py-2 rounded-full w-fit">
              <span>📅</span>
              <span>Get Started</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Book a Service
            </h2>

            <p className="text-lg text-white/70 leading-relaxed">
              Fill out the form and I&apos;ll follow up within 24 hours to
              confirm details and scheduling. No payment up front — we&apos;ll
              sort out the specifics together.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {[
                ["📍", "Upper West Side & Lincoln Towers"],
                ["📞", "917-900-8924"],
                ["🎓", "Available summers, winter & spring break"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-3 text-base text-white/60">
                  <span className="text-lg">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right" delay={150}>
            <BookingForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
