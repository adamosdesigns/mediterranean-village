import React, { useState } from 'react';
import { Loader2, CheckCircle2, ChevronRight } from 'lucide-react';
import PageHero from './PageHero';

export default function Contact() {
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
    <div className="bg-warm-white min-h-screen">
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch with Mediterranean Village"
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-palm font-semibold mb-4 block">Reach Out</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-8 leading-tight">
              We're Here to Assist You
            </h2>
            <p className="text-deep-gray/70 font-light text-lg leading-relaxed mb-12">
              Whether you are a current resident with an inquiry or a prospective buyer seeking more information about our community, our dedicated team is ready to provide the assistance you need.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif text-navy mb-2">Address</h3>
                <p className="text-deep-gray/70 font-light leading-relaxed">
                  1000 Williams Island Blvd<br />
                  Aventura, FL 33160
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-navy mb-2">Phone</h3>
                <p className="text-deep-gray/70 font-light leading-relaxed">
                  <a href="tel:+13059377898" className="hover:text-ocean transition-colors">305-937-7898</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-navy mb-2">Email</h3>
                <p className="text-deep-gray/70 font-light leading-relaxed">
                  <a href="mailto:manager@medvillageassociation.com" className="hover:text-ocean transition-colors">manager@medvillageassociation.com</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-navy mb-2">Office Hours</h3>
                <p className="text-deep-gray/70 font-light leading-relaxed">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-sm border border-sand-dark/50 rounded-2xl min-h-[450px] flex flex-col justify-center">
            {status === 'SUCCESS' ? (
              <div className="text-center py-12 px-4 flex flex-col items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-palm mb-6 stroke-[1.5] animate-bounce" />
                <h4 className="text-2xl font-serif text-navy mb-4">Message Sent Perfectly</h4>
                <p className="text-deep-gray/70 font-light text-base max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you for reaching out. Your message has been sent directly to the association. We will review your inquiry and follow up with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('IDLE')}
                  className="px-8 py-3.5 bg-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-navy-light transition-all rounded-lg shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif text-navy mb-8">Send a Message</h3>
                {status === 'ERROR' && (
                  <div className="mb-6 p-4 bg-red-50 border-l-2 border-red-500 rounded text-red-700 text-sm font-light">
                    {errorMessage || 'Failed to submit the form. Please try again.'}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        required
                        disabled={status === 'SUBMITTING'}
                        className="w-full border border-sand-dark/50 p-3 bg-warm-white focus:outline-none focus:border-navy focus:bg-white transition-all duration-300 rounded-lg text-navy text-sm font-light disabled:opacity-50" 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        required
                        disabled={status === 'SUBMITTING'}
                        className="w-full border border-sand-dark/50 p-3 bg-warm-white focus:outline-none focus:border-navy focus:bg-white transition-all duration-300 rounded-lg text-navy text-sm font-light disabled:opacity-50" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      disabled={status === 'SUBMITTING'}
                      className="w-full border border-sand-dark/50 p-3 bg-warm-white focus:outline-none focus:border-navy focus:bg-white transition-all duration-300 rounded-lg text-navy text-sm font-light disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      required
                      disabled={status === 'SUBMITTING'}
                      className="w-full border border-sand-dark/50 p-3 bg-warm-white focus:outline-none focus:border-navy focus:bg-white transition-all duration-300 rounded-lg text-navy text-sm font-light disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required
                      disabled={status === 'SUBMITTING'}
                      className="w-full border border-sand-dark/50 p-3 bg-warm-white focus:outline-none focus:border-navy focus:bg-white transition-all duration-300 rounded-lg text-navy text-sm font-light resize-none disabled:opacity-50"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'SUBMITTING'}
                    className="w-full bg-navy text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-navy-light transition-colors rounded-lg shadow-sm flex items-center justify-center gap-2 disabled:bg-navy/70 disabled:cursor-not-allowed"
                  >
                    {status === 'SUBMITTING' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
