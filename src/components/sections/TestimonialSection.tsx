function TestimonialSection() {
  return (
    <section className="bg-[#f2f0ea]/30 px-5 py-20 text-center sm:px-6 md:px-10 md:py-28 lg:px-12 lg:py-40">
      <div className="mx-auto w-full max-w-4xl">
        <span className="mb-12 block font-label text-[10px] font-bold uppercase tracking-[0.3em] text-[#603813]">
          The Patron View
        </span>

        <h3 className="mb-12 font-headline text-2xl font-light leading-[1.5] text-[#2f342e] sm:text-3xl md:text-[36px] lg:text-[42px]">
          "A sensory experience that feels incredibly personal. This is not just dessert; it is a
          labor of love that honors the <span className="italic">slow soak</span> tradition."
        </h3>

        <div className="flex flex-col items-center">
          <div className="mb-5 h-16 w-16 overflow-hidden rounded-full border border-[#603813]/20 p-1 md:h-20 md:w-20">
            <img
              src="/images/logo.jpg"
              alt="Julian Vance"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.2em] text-[#2f342e]">
            Julian Vance
          </p>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#5c605a]/70">
            Culinary Critic
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
