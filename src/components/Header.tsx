import { useState, useEffect } from 'react';
import { Menu, X, Paintbrush } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Chi Sono', id: 'hero' },
    { label: 'Risultati', id: 'stats' },
    { label: 'Servizi', id: 'materials' },
    { label: 'Contatti', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-blue-600' : 'bg-white/20'
            }`}>
              <Paintbrush className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`font-bold text-lg transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              Dal Broi pitture
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className={`hidden lg:inline-flex px-6 py-2.5 rounded-lg font-semibold transition-all ${
              isScrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            Contattami
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Contattami
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
