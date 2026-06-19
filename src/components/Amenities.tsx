import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from './PageHero';

export default function Amenities() {
  const amenities = [
    {
      title: 'Waterfront Pools',
      desc: 'Immerse yourself in our temperature-controlled pools, surrounded by private cabanas and lush tropical gardens. A serene escape just steps from your door.',
      img: '/pool-photo1.jpg'
    },
    {
      title: 'Marina Access',
      desc: 'Direct access to the Williams Island Marina offers boating enthusiasts the perfect starting point for a day on the Intracoastal Waterway or the open ocean.',
      img: '/marina-photo1.jpg'
    },
    {
      title: 'Lush Gardens',
      desc: 'Meticulously maintained walking paths winding through mature palms and Mediterranean flora, creating a private oasis for morning strolls or evening relaxation.',
      img: '/garden-photo1.jpg'
    }
  ];

  return (
    <div className="bg-warm-white min-h-screen">
      <PageHero
        title="Amenities"
        subtitle="Resort-Style Living Every Day"
        image="/hero-image-medvillage.jpg"
      />
      
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-ocean font-semibold mb-4 block">Exclusive Access</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-8 leading-tight">
            Designed for the Discerning
          </h2>
          <p className="text-deep-gray/70 font-light text-lg leading-relaxed">
            Every detail of Mediterranean Village is designed to enhance your daily life, offering exclusive spaces for relaxation, wellness, and connection.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
          {amenities.map((item, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm border border-sand-dark/50"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className={idx % 2 !== 0 ? 'lg:col-start-1' : ''}>
                <h3 className="text-3xl font-serif text-navy mb-2 md:mb-4 lg:mb-6">{item.title}</h3>
                <p className="text-deep-gray/70 font-light text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic transition to Lifestyle */}
        <div className="max-w-4xl mx-auto mt-24 pt-16 border-t border-sand-dark/50 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-palm font-bold mb-3 block">Discover More</span>
          <h4 className="text-2xl md:text-3xl font-serif text-navy mb-6">Experience the Island Lifestyle</h4>
          <p className="text-deep-gray/70 font-light max-w-xl mx-auto mb-8 text-sm md:text-base">
            From premier waterfront dining in our exclusive venues to high-tier yacht recreation and championship-grade sports amenities.
          </p>
          <Link
            to="/lifestyle"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-navy-light transition-all duration-300 rounded-lg shadow-sm group"
          >
            Explore the Lifestyle
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
