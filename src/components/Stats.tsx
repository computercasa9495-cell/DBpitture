import { Award, Home, MessageCircle, Image } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Award,
      value: '10+',
      label: 'anni di esperienza',
      description: 'nel settore delle rifiniture'
    },
    {
      icon: Home,
      value: '250+',
      label: 'ambienti rinnovati',
      description: 'tra case, appartamenti e uffici'
    },
    {
      icon: MessageCircle,
      value: '100%',
      label: 'clienti soddisfatti',
      description: 'risultati garantiti'
    }
  ];

  const galleryImages = [
    'https://i.imgur.com/mMLTwJb.jpeg',
    'https://i.imgur.com/49UWdYh.jpeg',
    'https://i.imgur.com/iIPHHxJ.jpeg',
    'https://i.imgur.com/fJ7jXEL.jpeg',
    'https://i.imgur.com/5IiZu86.jpeg',
    'https://i.imgur.com/tZw7SF3.jpeg'
  ];

  return (
    <section id="stats" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Numeri e risultati che parlano da soli
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-slate-700 mb-2">{stat.label}</div>
              <div className="text-sm text-slate-600">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <Image className="w-8 h-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-slate-900">Galleria fotografica</h3>
            </div>
            <p className="text-slate-600 text-lg">I nostri lavori</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Lavoro ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg">Progetti completati o in fase di lavorazione</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
