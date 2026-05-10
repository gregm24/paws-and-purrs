const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Reviews", href: "#reviews" },
];

export default function Footer() {
  return (
    <footer className="bg-navy paw-bg-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-serif text-2xl text-orange tracking-tight">
              Paws &amp; Purrs
            </span>
            <p className="text-base text-white/50 leading-relaxed max-w-xs">
              Pet care and neighborhood help on the Upper West Side, NYC. Real
              help from a real neighbor.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Sections
            </p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-base text-white/70 font-medium">Greg Myers</p>
              <a
                href="tel:9179008924"
                className="text-base text-orange hover:text-orange-light transition-colors"
              >
                917-900-8924
              </a>
              <p className="text-sm text-white/40 mt-1">
                Upper West Side · Lincoln Towers area
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} -Paws &amp; Purrs. All rights reserved.
          </p>
          <p className="text-sm text-white/20">Upper West Side, NYC</p>
        </div>
      </div>
    </footer>
  );
}
