function PromoSection() {
  return (
    <section id="catering" className="px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-12 lg:py-40">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-[8px] border border-[#d9d5cc]">
        <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-[#603813] p-8 text-white sm:p-10 md:p-14 lg:p-20">
            <h2 className="mb-8 font-headline text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-[44px] lg:text-6xl">
              Taste the Labor <br />of Love.
            </h2>
            <p className="mb-12 max-w-md text-[15px] font-light leading-[1.8] text-white/75 md:text-lg">
              Our next shipment window opens on{' '}
              <span className="ml-1 border-b border-white/30 text-white font-medium">
                Wednesday, March 4th
              </span>
              . Reserve your box today to avoid disappointment.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <button
                type="button"
                className="rounded-[8px] bg-white px-8 py-4 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#603813] transition-colors hover:bg-[#f2f0ea]"
              >
                Secure Next Box
              </button>
              <button
                type="button"
                className="rounded-[8px] border border-white/30 px-8 py-4 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
              >
                Wholesale Inquiry
              </button>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-full">
            <img
              src="/images/supporting-image.jpg"
              alt="Lifestyle curation"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
