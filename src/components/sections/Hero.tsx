/*
Hero Section

Landing section introducing Paws & Purrs.
Designed to feel modern and startup-like.
*/

export default function Hero() {
  return (

    <section className="relative bg-gradient-to-b from-blue-50 to-white py-32">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Paws & Purrs
          </h1>

          <p className="text-xl text-slate-700 mb-8">
            Reliable pet care and neighborhood help.
            Dog walking, pet sitting, errands, tech help,
            and more — trusted by residents and their pets.
          </p>

          <div className="flex gap-4">

            <a
              href="#booking"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Book a Service
            </a>

            <a
              href="#services"
              className="border border-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              View Services
            </a>

          </div>

          <p className="mt-6 text-sm text-slate-500">
            Started as a flyer in my apartment building.
          </p>

        </div>

        {/* RIGHT SIDE IMAGE */}

        <div className="relative">

          <div className="bg-slate-200 h-96 rounded-2xl flex items-center justify-center text-slate-500 text-lg shadow-lg">
            Pet Photo Here
          </div>

        </div>

      </div>

    </section>
  );
}