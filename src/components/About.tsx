import { Home, Building2, Sparkles, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#8B5CF6] mb-6">
              About Be Clean
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're your trusted cleaning partner in Ottawa and surrounding areas.
              Our professional team delivers exceptional cleaning services for both residential and commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-[#F5F3F0] to-white p-8 rounded-3xl shadow-lg border-2 border-[#8B5CF6]/10 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#8B5CF6] mb-4">
                Residential Cleaning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From apartments to large homes, we provide thorough cleaning services tailored to your needs.
                Enjoy a spotless living space without lifting a finger.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F5F3F0] to-white p-8 rounded-3xl shadow-lg border-2 border-[#8B5CF6]/10 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#FDB34B] rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#8B5CF6] mb-4">
                Office Cleaning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Keep your workplace pristine and professional. We offer flexible scheduling to minimize disruption
                to your business operations.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-3xl p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Sparkles className="w-10 h-10" fill="#FDB34B" />
              <h3 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h3>
              <Sparkles className="w-10 h-10" fill="#FDB34B" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#FDB34B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Experienced Professionals</h4>
                  <p className="text-white/90">Our trained team ensures quality service every time</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#FDB34B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Flexible Scheduling</h4>
                  <p className="text-white/90">We work around your busy schedule</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#FDB34B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Eco-Friendly Products</h4>
                  <p className="text-white/90">Safe for your family and the environment</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#FDB34B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Affordable Pricing</h4>
                  <p className="text-white/90">Quality service that fits your budget</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
