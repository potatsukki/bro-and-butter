function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-6 md:px-10 md:pb-16 md:pt-32 lg:px-12 lg:pb-32 lg:pt-48">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-24">
        <div className="z-10 lg:col-span-5">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-[#d9d5cc] px-4 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a43333]" />
            <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#5c605a]">
              Next Release: Wednesday, March 4th
            </span>
          </div>

          <h1 className="mb-8 font-headline text-4xl font-light leading-[1.08] tracking-tight text-[#2f342e] sm:text-5xl md:text-[48px] lg:text-[84px]">
            The Art of <br />
            <span className="italic text-[#603813]">Patient</span> Layers.
          </h1>

          <p className="mb-10 max-w-md text-[15px] font-light leading-[1.8] text-[#5c605a]/90 md:text-[17px] lg:text-xl">
            An intentional study in texture and time. Our tiramisu is cured for 48 hours to
            achieve a harmony found nowhere else.
          </p>

          <div className="flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-10">
            <button
              type="button"
              className="rounded-[8px] bg-[#603813] px-10 py-4 font-label text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:shadow-lg hover:shadow-[#603813]/10"
            >
              Join Next Drop
            </button>

            <button
              type="button"
              className="group inline-flex items-center gap-3 font-label text-[11px] font-bold uppercase tracking-[0.2em] text-[#2f342e]"
            >
              The Philosophy
              <span className="material-symbols-outlined text-[#603813] transition-transform duration-500 group-hover:translate-x-1.5">
                east
              </span>
            </button>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="aspect-[16/11] overflow-hidden rounded-[8px] border border-[#d9d5cc] bg-white p-2.5 shadow-sm md:p-3">
            <img
              src="/images/supporting-image2.jpg"
              alt="Premium tiramisu presentation"
              className="h-full w-full rounded-[6px] object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 hidden max-w-[240px] rounded-[8px] border border-[#d9d5cc] bg-white p-10 shadow-2xl xl:block">
            <p className="mb-2 font-headline text-2xl italic text-[#603813]">Limited Curation</p>
            <p className="text-[12px] font-light leading-[1.8] text-[#5c605a]">
              Only 40 boxes are crafted per batch to maintain absolute integrity of flavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
