import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#8B5CF6] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center">
              <img
                src="/logoooo.svg"
                alt="Be Clean Logo"
                className="w-[120px] h-[120px] object-contain"
              />
              <h3 className="text-2xl font-bold">Be Clean</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Professional cleaning services for homes and offices in Ottawa and surrounding areas.
            </p>
          </div>

          <div>
            <h4 className="text-md font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+16138895658" className="flex items-center gap-3 hover:text-[#FDB34B] transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (613) 889-5658</span>
              </a>
              <a href="mailto:be.cleann27@gmail.com" className="flex items-center gap-3 hover:text-[#FDB34B] transition-colors">
                <Mail className="w-5 h-5" />
                <span>be.cleann27@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Ottawa & Surrounding Areas</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-md font-bold mb-4">Business Hours</h4>
            <div className="space-y-2 text-white/90">
              <p>Monday - Saturday</p>
              <p className="font-semibold text-white">8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            &copy; {currentYear} Be Clean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
