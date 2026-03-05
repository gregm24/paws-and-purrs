/*
Footer component

Displays copyright information and a simple
closing section for the website.
*/

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-lg font-semibold mb-2">
          Paws & Purrs
        </h2>

        <p className="text-gray-400 mb-4">
          Trusted pet care and neighborhood help services.
        </p>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Greg Myers
        </p>

      </div>
    </footer>
  );
}