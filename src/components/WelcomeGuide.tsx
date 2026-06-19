import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  FileDown, 
  ExternalLink, 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  FileText, 
  CreditCard, 
  Smartphone, 
  HelpCircle,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import PageHero from './PageHero';

export default function WelcomeGuide() {
  const fileUrl = "/04-01-26-MVMA-MVC1-and-MVC2-Welcome-Letter.pdf";

  const paymentSteps = [
    {
      num: "1",
      title: "Register & Setup",
      desc: "Visit www.medvillageassociation.com, find 'Homeowner Portal', select Building 3500, 3700, or 3900. Click 'Sign In' then 'Create Account'."
    },
    {
      num: "2",
      title: "Enter Account Details",
      desc: "Provide your Association Account Number (which is your unit number, e.g. C123). Provide your name, property address, and email."
    },
    {
      num: "3",
      title: "Verify Password Link",
      desc: "Once registered, check your email within 24 hours for a secure password activation link. Log in with your new credentials."
    },
    {
      num: "4",
      title: "Submit Payment",
      desc: "Pay secure electronic checks (e-checks) or credit/debit card, either as a one-time payment or convenient recurring autopay."
    }
  ];

  return (
    <div className="bg-warm-white min-h-screen pb-16">
      <PageHero
        title="Welcome Guide"
        subtitle="Mediterranean Village Residency & Transition Guide"
        image="https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-12 lg:py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Quick Access Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Quick Actions Card */}
            <div className="bg-white p-6 border border-sand-dark/50 rounded-2xl shadow-sm">
              <h3 className="text-xl font-serif text-navy mb-4">Official Document</h3>
              <p className="text-deep-gray/70 font-light text-sm leading-relaxed mb-6">
                Download the formal signed PDF or open it directly in a separate browser tab for printing.
              </p>
              
              <div className="space-y-3">
                <a
                  href={fileUrl}
                  download="04-01-26-MVMA-MVC1-and-MVC2-Welcome-Letter.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-navy text-white text-xs uppercase tracking-widest font-semibold hover:bg-navy-light transition-colors rounded-lg"
                >
                  <FileDown className="w-4 h-4" />
                  Download PDF
                </a>
                
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-navy/20 text-navy text-xs uppercase tracking-widest font-semibold hover:bg-sand transition-colors rounded-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </a>
              </div>
            </div>

            {/* Need Assistance Card */}
            <div className="bg-sand/30 p-6 border border-sand-dark/30 rounded-2xl relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-2 -translate-y-2 text-navy/5">
                <HelpCircle className="w-24 h-24 stroke-[1]" />
              </div>
              <h4 className="text-sm uppercase tracking-wider font-semibold text-navy mb-2 flex items-center gap-2">
                Need Assistance?
              </h4>
              <p className="text-deep-gray/70 font-light text-xs leading-relaxed mb-4">
                If you encounter any issues reading this document, transitioning payments, or setting up your portal, our Association management team is ready to help.
              </p>
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-navy/20 text-navy text-xs uppercase tracking-widest font-bold hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 rounded-lg text-center shadow-xs"
              >
                Contact Office
              </Link>
            </div>
          </div>

          {/* Main Workspace Area */}
          <div className="lg:col-span-3 flex flex-col gap-6" id="welcome-workbook">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              
              {/* Announcement Banner */}
              <div className="bg-white border border-sand-dark/50 p-6 md:p-8 rounded-2xl shadow-xs relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Calendar className="w-24 h-24 text-navy" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-palm/10 text-palm text-xs uppercase tracking-wider font-semibold rounded-md">
                    Notice of Transition
                  </span>
                  <span className="text-xs text-deep-gray/50">• Effective April 1, 2026</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4">
                  Financial Management Transition Announcement
                </h3>
                <p className="text-deep-gray/80 font-light text-base leading-relaxed mb-4">
                  Effective <strong>April 1, 2026</strong>, <strong>Next Generation Management & Accounting Services (NGMA)</strong> has assumed responsibility for the financial management services of Mediterranean Village Master Association, Inc., and Condominiums No. 1 and No. 2.
                </p>
                <p className="text-deep-gray/70 font-light text-sm leading-relaxed">
                  Our professional billing team is committed to providing exceptional service and supporting a seamless, organized transition. Please review the payment options, association account configuration, and updates required below.
                </p>
              </div>

              {/* Association Contacts bento grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border border-sand-dark/50 rounded-2xl shadow-xs">
                  <h4 className="text-base font-serif text-navy mb-4 pb-2 border-b border-sand/50 uppercase tracking-wider">
                    Transition & Office Contacts
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-palm mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-deep-gray/50">Association Email</span>
                        <a href="mailto:info@nextgenfla.com" className="text-navy text-sm font-medium hover:underline">
                          info@nextgenfla.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-palm mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-deep-gray/50">Office Phone</span>
                        <a href="tel:+19544510099" className="text-navy text-sm font-medium hover:underline">
                          (954) 451-0099
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-palm mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-deep-gray/50">Business Office Hours</span>
                        <span className="text-sm text-deep-gray/85 font-light">
                          Mon – Fri | 9:30 AM to 5:00 PM <br />
                          <span className="text-xs text-amber-600 font-semibold">(Closed for lunch 12:00 PM – 1:00 PM)</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 border border-sand-dark/50 rounded-2xl shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-serif text-navy mb-4 pb-2 border-b border-sand/50 uppercase tracking-wider">
                      NGMA Corporate Headquarters
                    </h4>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-palm mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-deep-gray/50">Corporate Location</span>
                        <address className="not-italic text-sm text-deep-gray/85 font-light leading-relaxed">
                          13790 NW 4th St, Suite 102<br />
                          Sunrise, FL 33325
                        </address>
                        <span className="block text-xs text-amber-600 mt-2 font-medium bg-amber-50 border border-amber-100 px-2 py-1 rounded w-fit">
                          ⚠️ Note: Payments are not accepted at corporate headquarters.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Step: Homeowner Info update */}
              <div className="bg-navy text-white p-6 md:p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 text-white/5">
                  <FileText className="w-32 h-32" />
                </div>
                <div className="max-w-2xl">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
                    Requirement 1
                  </span>
                  <h4 className="text-2xl font-serif mb-3">
                    Homeowner & Tenant Information Sheet
                  </h4>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
                    To guarantee we have accurate billing records, security information, and property details on file, please complete the modern digital homeowner sheet right away.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.cognitoforms.com/NGMA2/AccountingOnlyHomeownerInformationSheet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold uppercase tracking-wider rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
                    >
                      Fill Form Online
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Association Account Number Block */}
              <div className="bg-white p-6 border border-sand-dark/50 rounded-2xl shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sand rounded-xl text-navy">
                    <CheckCircle2 className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-navy mb-2">Your Association Account Number</h4>
                    <p className="text-sm text-deep-gray/70 leading-relaxed font-light">
                      Your newly formatted billing account number corresponds exactly to your <strong>unit number</strong>.
                    </p>
                    <div className="mt-3 bg-warm-white p-3 rounded-lg border border-sand border-dashed text-xs inline-block">
                      <span className="font-semibold text-navy">Example:</span> 3700 Island Blvd, Unit <span className="font-semibold text-palm">C123</span> &rarr; Account ID is <span className="font-bold text-lg text-emerald-700 ml-1">C123</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Options Section */}
              <div className="bg-white p-6 md:p-8 border border-sand-dark/50 rounded-2xl shadow-xs space-y-6">
                <div className="border-b border-sand pb-4">
                  <span className="text-xs uppercase tracking-widest text-palm font-bold">Requirement 2</span>
                  <h4 className="text-2xl font-serif text-navy mt-1">Maintenance Fees Payment Options</h4>
                  <p className="text-sm text-deep-gray/50 font-light">Select from two authorized, secure methods below:</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Option A: Homeowner Portal */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 bg-navy/10 text-navy rounded-md">
                        <CreditCard className="w-5 h-5" />
                      </span>
                      <h5 className="text-lg font-serif text-navy">Option A: Secure Online Portal</h5>
                    </div>
                    <p className="text-xs text-deep-gray/70 leading-relaxed font-light">
                      Perfect for making instantaneous payments or configuring fee autopays using echeck or credit card.
                    </p>

                    <div className="space-y-3 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-px before:bg-sand-dark/40">
                      {paymentSteps.map((step) => (
                        <div key={step.num} className="flex gap-4 relative">
                          <span className="w-7 h-7 bg-navy text-white flex items-center justify-center text-xs font-bold rounded-full border-2 border-white shadow-xs shrink-0 z-10">
                            {step.num}
                          </span>
                          <div>
                            <h6 className="text-xs uppercase tracking-wider font-semibold text-navy mt-0.5">{step.title}</h6>
                            <p className="text-xs text-deep-gray/60 leading-relaxed font-light mt-0.5">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Processing Fees Table */}
                    <div className="bg-sand/20 border border-sand p-4 rounded-xl space-y-2 mt-4">
                      <h6 className="text-xs uppercase tracking-wide font-semibold text-navy">Online Portal Processing Fees:</h6>
                      <div className="grid grid-cols-2 gap-y-1.5 text-xs font-light text-deep-gray/80 border-t border-sand-dark/30 pt-2">
                        <span>One-time e-Check:</span>
                        <span className="font-medium text-navy text-right">$2.99 / payment</span>
                        <span>Recurring e-Check (Autopay):</span>
                        <span className="font-medium text-navy text-right">$1.99 / payment</span>
                        <span>Credit / Debit Card:</span>
                        <span className="font-medium text-navy text-right">3.99% of transaction total</span>
                      </div>
                    </div>
                  </div>

                  {/* Option B: Physical Mailbox Check/Bill Pay */}
                  <div className="space-y-4 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-navy/10 text-navy rounded-md">
                          <FileText className="w-5 h-5" />
                        </span>
                        <h5 className="text-lg font-serif text-navy">Option B: Mail Check / Bill Pay</h5>
                      </div>
                      <p className="text-xs text-deep-gray/70 leading-relaxed font-light">
                        To minimize printing costs, coupons are issued by request only. They can be dispatched in PDF format for free, or ordered as a paper book for $6. Email requests to <a href="mailto:info@nextgenfla.com" className="underline text-navy">info@nextgenfla.com</a>.
                      </p>

                      <div className="bg-warm-white p-4 rounded-xl border border-sand">
                        <span className="block text-[10px] uppercase tracking-widest text-deep-gray/50 font-semibold mb-1">Make payable & Mail checks to:</span>
                        <div className="text-xs text-navy font-semibold leading-relaxed font-serif">
                          Mediterranean Village Condominium No. 1 Association, Inc.<br />
                          <span className="font-sans text-deep-gray/40 font-light">or</span> Mediterranean Village Condominium No. 2 Association, Inc.<br />
                          <span className="font-sans font-normal text-deep-gray/70">
                            c/o Next Generation Management Services<br />
                            PO Box 163906<br />
                            Miami, FL 33116
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-amber-200 bg-amber-50/50 p-4 rounded-xl text-xs space-y-2">
                      <h6 className="font-bold text-amber-800">Critical Payment Directives:</h6>
                      <ul className="list-disc pl-4 space-y-1 text-deep-gray/80 font-light">
                        <li>Always print your <strong>Association Account Number (Unit Number)</strong> clearly in the check Memo field.</li>
                        <li>Mail check payments at least 2 weeks before due date; late fees related to transit delays will not be waived by the board.</li>
                        <li>Your Master Association assessment will be combined with subdivisional ledgers, allowing you to pay both at this same portal.</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

              {/* App Download Info cards */}
              <div className="bg-white border border-sand-dark/50 p-6 md:p-8 rounded-2xl shadow-xs">
                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                  <div className="space-y-4 max-w-xl">
                    <span className="inline-block px-2.5 py-1 bg-navy/10 text-navy text-[10px] uppercase tracking-widest font-bold rounded">
                      Mobile Companion App
                    </span>
                    <h4 className="text-xl md:text-2xl font-serif text-navy font-semibold">
                      Download the NGMA Mobile App
                    </h4>
                    <p className="text-xs md:text-sm text-deep-gray/70 font-light leading-relaxed">
                      Once registered on the online portal, download the <strong>"Next Generation Management"</strong> app for iOS or Android. Instantly view historical ledgers, execute quick secure cellular payments, set autopay schedules, and review governing bylaws on-the-go.
                    </p>
                  </div>
                  
                  {/* App Store / Google Play Buttons */}
                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 self-start md:self-center shrink-0">
                    <a 
                      href="https://apps.apple.com/us/app/next-generation-management/id1612605382" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2 bg-navy text-white hover:bg-navy-light transition-colors rounded-lg text-left shadow-xs"
                    >
                      <Smartphone className="w-5 h-5 shrink-0" />
                      <div>
                        <span className="block text-[8px] uppercase tracking-wider text-white/60">Download on the</span>
                        <span className="text-xs font-semibold font-sans tracking-wide">App Store</span>
                      </div>
                    </a>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.cinc.ngmahoboardapp&hl=en_US" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2 bg-navy text-white hover:bg-navy-light transition-colors rounded-lg text-left shadow-xs"
                    >
                      <Smartphone className="w-5 h-5 shrink-0" />
                      <div>
                        <span className="block text-[8px] uppercase tracking-wider text-white/60">Get it on</span>
                        <span className="text-xs font-semibold font-sans tracking-wide">Google Play</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}
