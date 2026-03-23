type NavbarProps = {
  isScrolled: boolean;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

const navLinks = [
  { label: 'The Story', href: '#story' },
  { label: 'Collections', href: '#collection' },
  { label: 'Catering', href: '#catering' },
  { label: 'Visit', href: '#visit' },
];

function Navbar({ isScrolled, isMenuOpen, onToggleMenu, onCloseMenu }: NavbarProps) {
  return (
    <>
      <nav
        className={[
          'fixed top-0 z-50 w-full border-b border-[#d9d5cc]/30 backdrop-blur-md transition-colors duration-500',
          isScrolled ? 'bg-[#faf9f5]/95' : 'bg-[#faf9f5]/60',
        ].join(' ')}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 md:px-9 md:py-4 lg:px-12 lg:py-6">
          <a href="#" className="flex items-center gap-3 md:gap-4">
            <img
              src="/images/logo.jpg"
              alt="Bros and Batter logo"
              className="h-8 w-8 rounded-full object-cover md:h-9 md:w-9"
            />
            <span className="font-headline text-lg font-semibold tracking-tight text-[#603813] md:text-xl">
              Bros and Batter
            </span>
          </a>

          <div className="hidden items-center gap-10 font-label text-[11px] font-medium uppercase tracking-[0.2em] text-[#2f342e]/60 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onCloseMenu}
                className="transition-colors duration-500 hover:text-[#603813]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <button
              type="button"
              aria-label="Open cart"
              className="hidden text-[#2f342e]/70 transition-colors hover:text-[#603813] lg:inline-flex"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            </button>

            <button
              type="button"
              className="hidden rounded-[8px] bg-[#603813] px-6 py-3 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-sm transition-all duration-500 hover:bg-[#4d2c25] lg:inline-flex"
            >
              Reserve Batch
            </button>

            <button
              type="button"
              onClick={onToggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center rounded-[8px] border border-[#d9d5cc] p-2 text-[#2f342e] lg:hidden"
            >
              <span className="material-symbols-outlined text-[22px]">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={[
          'fixed inset-0 z-40 bg-[#faf9f5] px-8 pt-28 transition-all duration-300 lg:hidden',
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <div className="space-y-7 border-t border-[#d9d5cc] pt-10 font-label text-[12px] uppercase tracking-[0.2em] text-[#2f342e]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onCloseMenu}
              className="block transition-colors hover:text-[#603813]"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="inline-flex rounded-[8px] bg-[#603813] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
          >
            Reserve Batch
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
