import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Waves, Leaf, Anchor, Building2, Loader2, CheckCircle2 } from 'lucide-react';
import { cn } from './Layout';

export default function Home() {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xeedngbn', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
        setStatus('ERROR');
      }
    } catch (error) {
      setErrorMessage('Could not connect to the server. Please try again later.');
      setStatus('ERROR');
    }
  };
  return (
    <div className="bg-warm-white">
      {/* 1. Hero Section */}
      <section className="relative h-[100dvh] flex items-end justify-start overflow-hidden pb-6 lg:pb-12">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 text-left px-6 lg:px-12 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-2 leading-tight"
          >
            A Private Enclave<br />
            on <span className="italic font-light">Williams Island</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 font-light mb-6 max-w-2xl tracking-wide"
          >
            A private, low-rise community within one of South Florida’s most exclusive island settings — offering a more homelike alternative to the surrounding high-rise towers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start justify-start gap-4"
          >
            <a
              href="#amenities"
              className="px-8 py-4 bg-white text-navy text-sm uppercase tracking-widest font-medium hover:bg-sand transition-colors w-full sm:w-auto text-center"
            >
              Explore the Community
            </a>
            <Link
              to="/welcome-guide"
              className="px-8 py-4 border border-white text-white text-sm uppercase tracking-widest font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Welcome Guide
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Amenities Highlight Section */}
      <section id="amenities" className="py-16 lg:py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-ocean font-semibold mb-3 block">Community Amenities</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-6">
              Designed for Residents
            </h2>
            <p className="text-deep-gray/70 font-light text-lg">
              Mediterranean Village offers a collection of private amenities designed exclusively for its residents, providing quiet spaces for relaxation and recreation within the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: 'Intimate Scale',
                desc: 'Enjoy a low-rise, garden-style community featuring only two apartments per floor and convenient self-parking for a quiet, home-like experience.',
                img: '/hero-image-medvillage.jpg'
              },
              {
                title: 'Waterfront Pools',
                desc: 'Private, temperature-controlled pools surrounded by lush tropical gardens and cabanas.',
                img: '/pool-photo1.jpg'
              },
              {
                title: 'Marina Access',
                desc: 'Direct access to the Williams Island Marina, perfect for boating enthusiasts and sunset strolls.',
                img: '/marina-photo1.jpg'
              },
              {
                title: 'Lush Gardens',
                desc: 'Meticulously maintained walking paths winding through mature palms and Mediterranean flora.',
                img: '/garden-photo1.jpg'
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-3 md:mb-4 lg:mb-6 relative rounded-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif text-navy mb-1.5 md:mb-2 lg:mb-3">{item.title}</h3>
                <p className="text-deep-gray/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/amenities"
              className="inline-flex items-center justify-center px-8 py-4 border border-navy text-navy text-sm uppercase tracking-widest font-medium hover:bg-navy hover:text-white transition-colors"
            >
              Explore All Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Lifestyle Section */}
      <section className="py-24 lg:py-32 px-6 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sand/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-sand font-semibold mb-4 block">Island Living</span>
          <h2 className="text-4xl lg:text-6xl font-serif mb-8 leading-tight">
            Access to<br />
            <span className="italic font-light text-sand">Williams Island</span>
          </h2>
          <div className="space-y-6 text-white/80 font-light leading-relaxed text-base md:text-lg max-w-3xl">
            <p>
              As part of the prestigious Williams Island community, residents enjoy access to world-class amenities, a deep-water marina, and a lifestyle defined by exclusivity and exceptional service.
            </p>
            <p>
              From the marina and tennis club to the island's dining venues and spa, the broader community offers a comprehensive approach to South Florida living.
            </p>
          </div>
          <a
            href="https://williamsislandclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-12 px-8 py-4 border border-sand text-sand text-sm uppercase tracking-widest font-semibold hover:bg-sand hover:text-navy transition-all duration-300 rounded-lg shadow-sm group"
          >
            Explore Island Living
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>


      {/* 5. Ownership Inquiries Section */}
      <section className="py-16 lg:py-24 px-6 bg-sand relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-ocean font-semibold mb-3 block">Contact</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-6">
              Ownership Inquiries
            </h2>
            <p className="text-deep-gray/70 font-light text-lg max-w-2xl mx-auto">
              For those interested in Mediterranean Village, we can connect you with the appropriate resources to learn more about available residences and the Williams Island community.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 shadow-sm border border-sand-dark min-h-[400px] flex flex-col justify-center">
            {status === 'SUCCESS' ? (
              <div className="text-center py-12 px-4 flex flex-col items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-palm mb-6 stroke-[1.5] animate-bounce" />
                <h4 className="text-2xl font-serif text-navy mb-4">Request Received</h4>
                <p className="text-deep-gray/70 font-light text-base max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you for your interest in Mediterranean Village. Your submission has been securely routed, and our team will get in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('IDLE')}
                  className="px-8 py-3.5 bg-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-navy-light transition-all rounded-lg shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                {status === 'ERROR' && (
                  <div className="mb-6 p-4 bg-red-50 border-l-2 border-red-500 rounded text-red-700 text-sm font-light">
                    {errorMessage || 'Failed to submit the form. Please try again.'}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="inquiryFirstName" className="block text-xs uppercase tracking-widest text-navy font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="inquiryFirstName" 
                        name="firstName" 
                        required
                        disabled={status === 'SUBMITTING'}
                        className="w-full border-b border-sand-dark bg-transparent py-3 focus:outline-none focus:border-navy transition-colors text-navy disabled:opacity-50" 
                        placeholder="Enter your first name" 
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryLastName" className="block text-xs uppercase tracking-widest text-navy font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="inquiryLastName" 
                        name="lastName" 
                        required
                        disabled={status === 'SUBMITTING'}
                        className="w-full border-b border-sand-dark bg-transparent py-3 focus:outline-none focus:border-navy transition-colors text-navy disabled:opacity-50" 
                        placeholder="Enter your last name" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="inquiryEmail" className="block text-xs uppercase tracking-widest text-navy font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="inquiryEmail" 
                        name="email" 
                        required
                        disabled={status === 'SUBMITTING'}
                        className="w-full border-b border-sand-dark bg-transparent py-3 focus:outline-none focus:border-navy transition-colors text-navy disabled:opacity-50" 
                        placeholder="Enter your email" 
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryPhone" className="block text-xs uppercase tracking-widest text-navy font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="inquiryPhone" 
                        name="phone" 
                        required
                        disabled={status === 'SUBMITTING'}
                        className="w-full border-b border-sand-dark bg-transparent py-3 focus:outline-none focus:border-navy transition-colors text-navy disabled:opacity-50" 
                        placeholder="Enter your phone number" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="inquiryMessage" className="block text-xs uppercase tracking-widest text-navy font-medium mb-2">Message</label>
                    <textarea 
                      id="inquiryMessage" 
                      name="message" 
                      rows={4} 
                      required
                      disabled={status === 'SUBMITTING'}
                      className="w-full border-b border-sand-dark bg-transparent py-3 focus:outline-none focus:border-navy transition-colors text-navy resize-none disabled:opacity-50" 
                      placeholder="How can we assist you?"
                    ></textarea>
                  </div>
                  <div className="pt-4 text-center">
                    <button 
                      type="submit" 
                      disabled={status === 'SUBMITTING'}
                      className="inline-flex items-center justify-center gap-2 px-12 py-4 bg-navy text-white text-sm uppercase tracking-widest font-medium hover:bg-navy-light transition-colors disabled:bg-navy/70 disabled:cursor-not-allowed"
                    >
                      {status === 'SUBMITTING' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Request Information'
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
