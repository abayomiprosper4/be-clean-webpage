import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try calling or emailing us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-[#F5F3F0] to-[#E9E5FF]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-[#8B5CF6] mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible!
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-[#8B5CF6] mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for contacting Be Clean. We'll get back to you shortly!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-md font-semibold text-[#8B5CF6] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-2 rounded-xl border-2 border-gray-200 focus:border-[#8B5CF6] focus:outline-none text-lg transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-md font-semibold text-[#8B5CF6] mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-2 rounded-xl border-2 border-gray-200 focus:border-[#8B5CF6] focus:outline-none text-lg transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-md font-semibold text-[#8B5CF6] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-2 rounded-xl border-2 border-gray-200 focus:border-[#8B5CF6] focus:outline-none text-lg transition-colors"
                    placeholder="+1 (613) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-md font-semibold text-[#8B5CF6] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-2 rounded-xl border-2 border-gray-200 focus:border-[#8B5CF6] focus:outline-none text-lg transition-colors resize-none"
                    placeholder="Tell us about your cleaning needs..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-4 py-4 rounded-xl text-xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-2xl font-bold my-7">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16138895658"
                className="inline-flex items-center justify-center gap-2 bg-[#FDB34B] hover:bg-[#f5a831] text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Call: +1 (613) 889-5658
              </a>
              <a
                href="mailto:be.cleann27@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Email: be.cleann27@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
