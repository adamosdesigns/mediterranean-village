import PageHero from './PageHero';

export default function About() {
  return (
    <div className="bg-warm-white min-h-screen">
      <PageHero
        title="Our Story"
        subtitle="The Essence of Mediterranean Village"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-palm font-semibold mb-4 block">Heritage & Design</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-8 leading-tight">
            A Masterpiece of Coastal Architecture
          </h2>
          <p className="text-deep-gray/70 font-light text-lg leading-relaxed">
            Mediterranean Village was conceived as a private sanctuary, blending the timeless elegance of Mediterranean design with the vibrant, sun-drenched lifestyle of South Florida. Here, every archway, courtyard, and garden path tells a story of refined living.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
            alt="Interior detail"
            className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover rounded-2xl shadow-sm border border-sand-dark/50"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-navy mb-2 lg:mb-4">Intimate Scale & Privacy</h3>
              <p className="text-deep-gray/70 font-light leading-relaxed">
                Unlike the towering high-rises that dominate the skyline, Mediterranean Village offers a low-rise, garden-style environment. Designed with only <strong>two apartments per floor</strong>, the community ensures maximum privacy, peace, and an intimate, exclusive home feel.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-navy mb-2 lg:mb-4">Convenient Self-Parking</h3>
              <p className="text-deep-gray/70 font-light leading-relaxed">
                Enjoy the absolute convenience and rare privilege to <strong>park your own car</strong> directly at your residence, bypassing the waits and constraints of traditional high-rise valet.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-navy mb-2 lg:mb-4">Lush Surroundings</h3>
              <p className="text-deep-gray/70 font-light leading-relaxed">
                Our grounds are meticulously landscaped with mature palms, vibrant bougainvillea, and serene water features, creating a private oasis that feels miles away from the bustle of the city, yet remains perfectly connected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
