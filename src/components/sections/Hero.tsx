/*
Hero Section

This is the landing section users see first.
It introduces Paws & Purrs and encourages booking.
*/

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Paws & Purrs
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Reliable pet care and neighborhood help services.
            Trusted by residents and pets for dog walking, cat sitting,
            errands, and everyday help.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#booking"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Book a Service
            </a>

            <a
              href="#services"
              className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Placeholder Image */}
        <div className="bg-gray-200 rounded-xl h-72 flex items-center justify-center text-gray-500">
          Pet Photo Placeholder
        </div>

      </div>
    </section>
  );
}