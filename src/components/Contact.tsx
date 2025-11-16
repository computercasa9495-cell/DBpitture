import { Phone, Mail, Clock, MapPin, ArrowRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefono',
      value: '+39 331 8203676',
      href: 'tel:+393318203676'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'nicolodal.broi95@gmail.com',
      href: 'mailto:nicolodal.broi95@gmail.com'
    },
    {
      icon: Clock,
      label: 'Orari',
      value: 'lun-ven 09:00-20:00 e sab 08-12',  
      href: null
    },
    {
      icon: MapPin,
      label: 'Sede',
      value: 'Via dei Casoni 21/A - 35010 - Grantorto (PD)',
      href: null
    }
  ];

  const whatsappMessage = encodeURIComponent('Ciao Nicolò, mi piacerebbe un preventivo gratuito per il mio progetto.');
  const whatsappUrl = `https://wa.me/+393318203676?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Richiedi un consulto gratuito
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            e scopri come rinnovare il tuo ambiente
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-10 lg:p-14 text-white">
              <h3 className="text-3xl font-bold mb-6">Hai bisogno di tinteggiare, realizzare controsoffitti o rifinire pareti in cartongesso?</h3>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                Contattami per una valutazione gratuita del tuo progetto: insieme troveremo la soluzione ideale.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200 mb-1">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-semibold hover:text-blue-200 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                Contattami su WhatsApp
              </a>
            </div>

            <div className="p-10 lg:p-14">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    placeholder="Mario Rossi"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    placeholder="mario.rossi@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    placeholder="+39 333 1234567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                    placeholder="Descrivi il tuo progetto..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 font-semibold">
                    Messaggio inviato con successo! Ti contatterò presto.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 font-semibold">
                    Errore nell'invio del messaggio. Riprova o contattami via WhatsApp.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isLoading ? 'Invio in corso...' : 'Fissa il tuo appuntamento gratuito'}
                  {!isLoading && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
