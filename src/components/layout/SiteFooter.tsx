const studioLinks = ['Our Story', 'The Process', 'Wholesale'];
const serviceLinks = ['Shipping', 'Batch FAQ', 'Gifting'];

function SiteFooter() {
  return (
    <footer id="visit" className="border-t border-[#d9d5cc] bg-[#faf9f5] px-5 pb-12 pt-20 sm:px-6 md:px-10 md:pb-14 md:pt-20 lg:px-12 lg:pt-28">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 grid grid-cols-1 gap-10 md:mb-16 lg:mb-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="mb-8 flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="Bros and Batter"
                className="h-8 w-8 rounded-full object-cover opacity-90"
              />
              <span className="font-headline text-lg font-bold text-[#603813]/80">Bros and Batter</span>
            </div>

            <p className="mb-8 max-w-sm text-sm font-light leading-[2] text-[#5c605a]">
              A boutique tiramisu studio in Quezon City, Philippines dedicated to the art of the
              slow soak and intentional curation.
            </p>

            <div className="flex gap-5 text-[#5c605a]/60">
              <a
                href="/"
                aria-label="Visit website"
                className="inline-flex items-center justify-center text-[18px] transition-colors hover:text-[#603813]"
              >
                <span className="material-symbols-outlined">language</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587442452745"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook page"
                className="inline-flex items-center justify-center text-[18px] transition-colors hover:text-[#603813]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.4V11H8v3h2.1v8h3.4Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-6 font-label text-[10px] font-bold uppercase tracking-[0.3em] text-[#2f342e]">
              The Studio
            </h4>
            <ul className="space-y-4 text-[13px] font-light text-[#5c605a]">
              {studioLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-[#603813]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-6 font-label text-[10px] font-bold uppercase tracking-[0.3em] text-[#2f342e]">
              Service
            </h4>
            <ul className="space-y-4 text-[13px] font-light text-[#5c605a]">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-[#603813]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-6 font-label text-[10px] font-bold uppercase tracking-[0.3em] text-[#2f342e]">
              Join the Curation
            </h4>
            <p className="mb-6 text-[12px] font-light leading-[1.8] text-[#5c605a]">
              Receive early access notifications for upcoming batch releases and seasonal objects.
            </p>
            <div className="flex border-b border-[#d9d5cc] py-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full border-none bg-transparent text-[13px] font-light text-[#2f342e] placeholder:text-[#5c605a]/40 focus:ring-0"
              />
              <button
                type="button"
                className="px-3 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#603813] transition-opacity hover:opacity-70"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-[#d9d5cc]/40 pt-8 text-[10px] font-light uppercase tracking-[0.1em] text-[#5c605a]/60 md:flex-row md:items-center md:text-[11px]">
          <p>© 2024 Bros and Batter. Quezon City, Philippines.</p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <span className="font-bold tracking-[0.15em] text-[#603813]/40 md:tracking-[0.2em]">Visited February 27, 2026</span>
            <span className="h-1 w-1 rounded-full bg-[#d9d5cc]" />
            <p>Crafted with Patience</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
