import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function CallToAction() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#F5F3F0] via-[#E9E5FF] to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDB34B] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#8B5CF6] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contact us today and experience the difference a professional cleaning service can make!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 bg-[#FDB34B] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-2">Call Us</h3>
              <a href="tel:+16138895658" className="text-2xl font-semibold text-gray-800 hover:text-[#8B5CF6] transition-colors">
                +1 (613) 889-5658
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 bg-[#8B5CF6] rounded-full flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-2">Email Us</h3>
              <a href="mailto:be.cleann27@gmail.com" className="text-2xl font-semibold text-gray-800 hover:text-[#8B5CF6] transition-colors break-all">
                be.cleann27@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 bg-[#FDB34B] rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-2">Location</h3>
              <p className="text-2xl font-semibold text-gray-800">
                Ottawa & Surrounding Areas
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 bg-[#8B5CF6] rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-2">Hours</h3>
              <p className="text-lg text-gray-700">
                Monday - Saturday<br />
                <span className="font-semibold text-xl text-gray-800">8:00 AM - 6:00 PM</span>
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book Your Cleaning Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
