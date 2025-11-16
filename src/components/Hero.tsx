import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('https://imgur.com/a/8KBELBe')] bg-cover bg-center opacity-10"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 animate-slide-right"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Esperienza, cura dei dettagli <br />
            <span className="text-blue-600">e passione per il colore</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-light">
            Da oltre 10 anni, Dal Broi Nicolò porta qualità artigianale<br className="hidden md:block" />
            e affidabilità in tutto il Triveneto
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl border border-slate-200 mt-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">Dal Broi Pitture</span> offre soluzioni complete per la tinteggiatura, la decorazione e la finitura di ambienti interni ed esterni.Siamo specializzati anche nella posa di cartongesso, nell’applicazione di carta da parati, nella realizzazione di cappotti isolanti e nei rivestimenti su misura
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Richiedi un preventivo gratuito
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
