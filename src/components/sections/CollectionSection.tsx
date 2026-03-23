type Product = {
  name: string;
  price: string;
  label: string;
  labelColor: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    name: 'The Original',
    price: '$14.00',
    label: '48h Espresso Soak',
    labelColor: 'text-[#603813]',
    description:
      'Single-origin Ethiopian coffee, hand-whipped mascarpone, and a generous layer of 70% dark cocoa.',
    image: '/images/supporting-image.jpg',
  },
  {
    name: 'Signature Cocoa',
    price: '$16.00',
    label: "Chef's Selection",
    labelColor: 'text-[#a43333]',
    description:
      'Our signature deep cocoa flavor with a perfectly balanced cream layer that melts in your mouth.',
    image: '/images/supporting-image2.jpg',
  },
  {
    name: 'Midnight Cocoa',
    price: '$15.00',
    label: 'Intense Dark',
    labelColor: 'text-[#675e4b]',
    description:
      'For the purist. Triple layers of cocoa with a hint of sea salt and bourbon vanilla.',
    image: '/images/supporting-image.jpg',
  },
];

type CollectionSectionProps = {
  onOrderClick: (itemLabel: string) => void;
};

function CollectionSection({ onOrderClick }: CollectionSectionProps) {
  return (
    <section id="collection" className="bg-[#f2f0ea]/50 px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-12 lg:py-40">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end md:gap-12">
          <div className="max-w-2xl">
            <h2 className="mb-4 font-headline text-4xl font-light tracking-tight text-[#2f342e] md:text-[42px] lg:text-5xl">
              March 4th Collection
            </h2>
            <p className="text-base font-light leading-[1.8] text-[#5c605a] md:text-lg">
              Three distinct expressions of the classic Italian profile, refined for the modern
              palate.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 border-b border-[#d9d5cc] pb-2 font-label text-[10px] uppercase tracking-[0.2em]">
            <button type="button" className="font-bold text-[#603813]">
              All Objects
            </button>
            <button type="button" className="text-[#5c605a] transition-colors hover:text-[#603813]">
              Classics
            </button>
            <button type="button" className="text-[#5c605a] transition-colors hover:text-[#603813]">
              Seasonal
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-16">
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className="mb-8 aspect-square overflow-hidden rounded-[8px] border border-[#d9d5cc] bg-white p-2">
                <div className="h-full w-full overflow-hidden rounded-[6px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h3 className="font-headline text-2xl font-medium text-[#2f342e]">{product.name}</h3>
                <span className="text-sm font-light text-[#5c605a]/70">{product.price}</span>
              </div>

              <p className={[product.labelColor, 'mb-5 font-label text-[10px] font-bold uppercase tracking-[0.2em]'].join(' ')}>
                {product.label}
              </p>
              <p className="mb-7 text-sm font-light leading-[1.8] text-[#5c605a]">{product.description}</p>

              <button
                type="button"
                onClick={() => onOrderClick(`Pre-Order: ${product.name}`)}
                className="w-full rounded-[8px] border border-[#d9d5cc] py-4 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#2f342e] transition-all duration-500 hover:border-[#603813] hover:bg-[#603813] hover:text-white"
              >
                Pre-Order
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;
