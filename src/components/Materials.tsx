import { Wrench, ShieldCheck, Truck, CheckCircle } from 'lucide-react';

export default function Materials() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Materiali di prima qualità',
      description: 'Utilizziamo solo prodotti di qualità per garantire risultati duraturi nel tempo'
    },
    {
      icon: Wrench,
      title: 'Attrezzatura professionale',
      description: 'Attrezzature professionali per lavorazioni precise e sicure'
    },
    {
      icon: ShieldCheck,
      title: 'Sicurezza',
      description: 'Sicurezza garantita e rispetto delle normative vigenti'
    },
    {
      icon: Truck,
      title: 'Servizio completo',
      description: 'Disponibilità in tutto il Veneto per interventi rapidi'
    }
  ];

  return (
    <section id="materials" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Materiali e tecniche per un risultato impeccabile
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Affidandoti a DB Pitture per il rivestimento e la tinteggiatura delle superfici esterne o interne, non solo valorizzi l’aspetto dell’edificio, ma contribuisci anche al suo risanamento e alla sua durata nel tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Lavorazioni precise e risultato garantito</h3>
          <p className="text-xl text-blue-100">
            Per lavorazioni sicure, precise e rispettose degli standard più elevati
          </p>
        </div>
      </div>
    </section>
  );
}
