import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Wine, 
  Coffee, 
  Waves, 
  Sparkles, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';
import PageHero from './PageHero';

export default function Lifestyle() {
  const neighborhoodHighlights = [
    { 
      title: 'Aventura Mall', 
      category: 'Shopping', 
      img: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126&auto=format&fit=crop',
      desc: 'World-class luxury shopping, dining, and contemporary art installations.',
      mapUrl: 'https://maps.google.com/?q=Aventura+Mall+Aventura+Florida'
    },
    { 
      title: 'Turnberry Golf Course', 
      category: 'Recreation', 
      img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop',
      desc: 'Championship courses designed by legendary architects amid tropical lakes.',
      mapUrl: 'https://maps.google.com/?q=Turnberry+Isle+Country+Club+Aventura+Florida'
    },
    { 
      title: 'Sunny Isles Beach', 
      category: 'Nature', 
      img: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop',
      desc: 'Pristine white-sand beaches and pristine blue ocean waters just minutes away.',
      mapUrl: 'https://maps.google.com/?q=Sunny+Isles+Beach+Florida'
    },
    { 
      title: 'Island Grille', 
      category: 'Culinary', 
      img: '/Island%20Grille%20(1).jpg',
      desc: 'Exquisite Williams Island waterfront dining featuring fresh coastal cuisine.',
      mapUrl: 'https://maps.google.com/?q=Island+Grille+Williams+Island+Aventura+Florida'
    },
  ];

  const eateries = [
    {
      title: 'Island Grille',
      subtitle: 'Romantic Waterfront Dining',
      img: '/Island%20Grille%20(1).jpg',
      icon: <Wine className="w-5 h-5 text-sand" />,
      vibe: 'Sophisticated & Romantic',
      desc: 'With its romantic ambiance and superb food offerings, the Island Grille invites you to savor the best Williams Island has to offer. The space has a modern, sophisticated ambiance that compliments the wonderful variety of dishes that are the main attraction in the restaurant, served by a knowledgeable and friendly staff.',
      mapUrl: 'https://maps.google.com/?q=Island+Grille+Williams+Island+Aventura+Florida'
    },
    {
      title: 'Olea',
      subtitle: 'Mediterranean Chophouse & Fresh Pastas',
      img: '/Olea%20(1).jpg',
      icon: <Utensils className="w-5 h-5 text-sand" />,
      vibe: 'Elegant Gathering Space',
      desc: 'Olea, drawing from the Latin term for olive, embodies the essence and elegance of the olive tree. Executive Chef Gabriel Fenton curates a mosaic of flavors and textures to transcend your palates. The chophouse element introduces a hearty, indulgent counterpoint to the lighter fare, with expertly cooked steaks and chops. Fresh pastas and breads made and baked daily, are only a sunset toast away.',
      mapUrl: 'https://maps.google.com/?q=Olea+Williams+Island+Aventura+Florida'
    },
    {
      title: 'The Last Coconut',
      subtitle: 'Vibrant Poolside Bar & Kitchen',
      img: '/Last%20Coconut%20(1).jpg',
      icon: <Waves className="w-5 h-5 text-sand" />,
      vibe: 'Casual Oasis & Refreshments',
      desc: 'Escape to the sun-soaked surrounds of our newly renovated pool with the enticing oasis of The Last Coconut Pool Bar & Kitchen. This vibrant, fun bar & kitchen invites you to relax and socialize while enjoying refreshing drinks and an array of generous salads, wraps, and grilled items.',
      mapUrl: 'https://maps.google.com/?q=The+Last+Coconut+Williams+Island+Aventura+Florida'
    },
    {
      title: 'Courtside',
      subtitle: 'Deli, Starbucks & Grab & Go',
      img: '/Courtside.jpg',
      icon: <Coffee className="w-5 h-5 text-sand" />,
      vibe: 'Active & Relaxed Atmosphere',
      desc: "Courtside is Williams Island's one of a kind deli, Starbucks, and Grab & Go. From soups, sandwiches, bagels, pastries to lattes and Frappuccinos. We have a wide variety that will satisfy all of your needs! Just grab a quick bite to eat and sit out on our Tennis Terrace and enjoy a beautiful South Florida afternoon.",
      mapUrl: 'https://maps.google.com/?q=Courtside+Williams+Island+Aventura+Florida'
    }
  ];

  return (
    <div className="bg-warm-white min-h-screen">
      <PageHero
        title="The Lifestyle"
        subtitle="South Florida Elegance"
        image="/turnberry wide.jpg"
      />
      
      {/* Full Amenities Section */}
      <section className="py-24 lg:py-32 px-6 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-sm border border-sand-dark/50">
              <img
                src="/pool-photo1.jpg"
                alt="Mediterranean Village Pools"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-palm font-semibold mb-2 lg:mb-4 block">Exclusive Access</span>
              <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-4 lg:mb-8 leading-tight">
                Mediterranean Village Amenities
              </h2>
              <ul className="space-y-4 text-lg font-light text-deep-gray/80">
                <li className="flex items-start gap-3">
                  <span className="text-palm font-serif mt-1">•</span>
                  24-hour attended guard gate and concierge
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-palm font-serif mt-1">•</span>
                  Fitness center
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-palm font-serif mt-1">•</span>
                  Assigned and covered parking
                </li>
              </ul>
            </div>

            <div className="w-full h-px bg-sand-dark/50" />

            <div>
              <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-8 leading-tight">
                Williams Island Community Amenities
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg font-light text-deep-gray/80">
                <li className="flex items-start gap-3 md:col-span-2">
                  <span className="text-ocean font-serif mt-1 shrink-0">•</span>
                  <span>Heated pool & Jacuzzi, with a pool attendant, towels, umbrellas & chaise lounge chairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ocean font-serif mt-1 shrink-0">•</span>
                  <span>Free shuttle service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ocean font-serif mt-1 shrink-0">•</span>
                  <span>Island Club</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ocean font-serif mt-1 shrink-0">•</span>
                  <span>Williams Island Spa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ocean font-serif mt-1 shrink-0">•</span>
                  <span>North Marina</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ocean font-serif mt-1 shrink-0">•</span>
                  <span>South Lagoon Marina & Yacht Club</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ocean font-serif mt-1 shrink-0">•</span>
                  <span>Williams Island Tennis Club</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ocean font-serif mt-1 shrink-0">•</span>
                  <span>Williams Island Golf Course</span>
                </li>
                <li className="flex items-start gap-3 md:col-span-2">
                  <span className="text-ocean font-serif mt-1 shrink-0">•</span>
                  <span>Basketball, soccer, and tennis youth programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eateries Section - upgraded to custom magazine Alternating layout */}
      <section className="py-24 lg:py-32 px-6 bg-navy text-white relative overflow-hidden">
        {/* Subtle background decorative shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-sand/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-palm/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <span className="text-xs uppercase tracking-[0.25em] text-sand font-semibold mb-4 block">Culinary Excellence</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
              Eateries Within Williams Island
            </h2>
            <div className="w-16 h-1 bg-sand/30 mx-auto mb-6" />
            <p className="text-white/70 font-light text-base md:text-lg leading-relaxed">
              From casual waterfront cafes to masterfully curated Mediterranean flavors, Williams Island offers a culinary landscape that caters to every mood without ever needing to leave the gates.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {eateries.map((eatery, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={eatery.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4 sm:gap-6 lg:gap-16 bg-white/[0.02] border border-white/5 lg:bg-transparent lg:border-none p-6 md:p-8 lg:p-0 rounded-3xl`}
                >
                  {/* Eatery Image Container */}
                  <div className="w-full lg:w-1/2 shrink-0">
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-white/10 group relative">
                      <img
                        src={eatery.img}
                        alt={eatery.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
                    </div>
                  </div>

                  {/* Eatery Details */}
                  <div className="w-full lg:w-1/2 space-y-3 lg:space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-widest text-[#BAE6FD] font-light block">{eatery.subtitle}</span>
                      <h3 className="text-3xl md:text-4xl font-serif text-white">{eatery.title}</h3>
                    </div>
                    <div className="w-12 h-0.5 bg-sand/40" />
                    <p className="text-white/70 font-light text-sm md:text-base leading-relaxed">
                      {eatery.desc}
                    </p>
                    <div className="pt-2">
                      <a
                        href={eatery.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-sand font-bold uppercase tracking-wider hover:text-white transition-colors duration-300 pointer-events-auto"
                      >
                        <span>Get Directions</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neighborhood Guide - displaying Island Grille as requested */}
      <section className="py-24 lg:py-32 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-ocean font-semibold block">Neighborhood Guide</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-navy">
              Aventura & Beyond
            </h2>
            <div className="w-16 h-1 bg-palm/30 mx-auto" />
            <p className="text-deep-gray/60 font-light text-sm md:text-base">
              Perfectly positioned on Williams Island, Mediterranean Village affords convenient accessibility to South Florida's preeminent coastal sights, luxury retail hubs, and premium recreational pursuits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {neighborhoodHighlights.map((item, idx) => (
              <motion.a 
                key={idx} 
                href={item.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white border border-sand-dark/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-500 flex flex-col h-full"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[10px] uppercase font-bold tracking-widest text-navy rounded">
                    {item.category}
                  </span>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between gap-3 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-xl font-serif text-navy group-hover:text-palm transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-deep-gray/70 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-palm font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all mt-auto duration-300">
                    <span>get directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Dynamic transition to Amenities */}
          <div className="max-w-4xl mx-auto mt-24 pt-16 border-t border-sand-dark/50 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-palm font-bold mb-3 block">Discover More</span>
            <h4 className="text-2xl md:text-3xl font-serif text-navy mb-6">Explore Resident Amenities</h4>
            <p className="text-deep-gray/70 font-light max-w-xl mx-auto mb-8 text-sm md:text-base">
              From temperature-controlled waterfront swimming pools to exclusive private ports and majestic natural scenery.
            </p>
            <Link
              to="/amenities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-navy-light transition-all duration-300 rounded-lg shadow-sm group"
            >
              Explore Amenities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
