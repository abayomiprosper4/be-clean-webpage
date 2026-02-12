import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-1'
          : 'bg-transparent py-1'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/logoooo.svg"
              alt="Be Clean Logo."
              className="w-[110px] h-[110px] object-contain"
            />
            <span className={`text-xl font-bold font-serif ${isScrolled ? 'text-[#8B5CF6]' : 'text-[#8B5CF6]'}`}>
              Be Clean
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-semibold transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-[#8B5CF6]' : 'text-gray-700 hover:text-[#8B5CF6]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-semibold transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-[#8B5CF6]' : 'text-gray-700 hover:text-[#8B5CF6]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Contact Us
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#8B5CF6]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-[#8B5CF6] font-semibold px-4 py-2 text-left transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#8B5CF6] font-semibold px-4 py-2 text-left transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-4 py-2 rounded-full font-semibold mx-4 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
