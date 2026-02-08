import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F3F0] via-white to-[#E9E5FF] overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8B5CF6] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDB34B] opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-[#8B5CF6]">Too Tired to Clean</span>
            <br />
            <span className="text-[#8B5CF6]">Your House or Office?</span>
          </h1>

          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-[#FDB34B]" fill="#FDB34B" />
            <p className="text-2xl md:text-3xl text-gray-700 font-medium">
              Just call us!
            </p>
            <Sparkles className="w-8 h-8 text-[#FDB34B]" fill="#FDB34B" />
          </div>

          <div className="bg-[#8B5CF6] text-white px-8 py-4 rounded-full text-xl md:text-2xl font-semibold mb-8 shadow-xl transform hover:scale-105 transition-transform">
            10% off for first time clients!
          </div>

          <button
            onClick={scrollToContact}
            className="bg-[#FDB34B] hover:bg-[#f5a831] text-white px-10 py-5 rounded-full text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </button>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-[#8B5CF6] text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guaranteed</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-[#8B5CF6] text-4xl font-bold mb-2">Fast</div>
              <div className="text-gray-600">Professional Service</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-[#8B5CF6] text-4xl font-bold mb-2">Eco</div>
              <div className="text-gray-600">Friendly Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
