type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: 'hourglass_empty',
    title: '48-Hour Cold Cure',
    description:
      'Time is our most vital ingredient. Each batch cures for two days to allow the coffee and cocoa to harmonize with the cream.',
  },
  {
    icon: 'eco',
    title: 'Heritage Mascarpone',
    description:
      'Sourced from a boutique dairy that uses traditional Italian methods, ensuring a texture that is impossibly light yet incredibly rich.',
  },
  {
    icon: 'filter_vintage',
    title: 'Single Origin Profiles',
    description:
      'We only use Ethiopian beans, specifically selected for their floral notes that balance the heavy cream profile.',
  },
];

function ProcessSection() {
  return (
    <section id="story" className="px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-12 lg:py-40">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-28">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-square overflow-hidden rounded-[8px] border border-[#d9d5cc] bg-white p-3 shadow-sm">
            <img
              src="/images/supporting-image2.jpg"
              alt="Layering process"
              className="h-full w-full rounded-[6px] object-cover"
            />
          </div>

          <div className="absolute -right-6 -top-6 hidden h-32 w-32 overflow-hidden rounded-[8px] border border-[#d9d5cc] bg-white p-2 shadow-xl md:block md:h-48 md:w-48 md:-right-10 md:-top-10">
            <img
              src="/images/supporting-image.jpg"
              alt="Detail shot"
              className="h-full w-full rounded-[6px] object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="mb-10 font-headline text-4xl font-light leading-tight tracking-tight text-[#2f342e] md:text-[42px] lg:text-5xl">
            The Patience <br />of <span className="italic">Perfection.</span>
          </h2>

          <div className="space-y-12 md:space-y-14">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-5 md:gap-8">
                <span className="material-symbols-outlined text-2xl font-light text-[#603813]">
                  {feature.icon}
                </span>
                <div>
                  <h4 className="mb-2 font-headline text-xl font-medium text-[#2f342e]">{feature.title}</h4>
                  <p className="max-w-sm text-sm font-light leading-[1.8] text-[#5c605a] md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
