import { Paintbrush } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Paintbrush className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold">Dal Broi Pitture</div>
              <div className="text-sm text-slate-400">Artigiano specializzato</div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="space-y-1 text-slate-300">
              <p>Via dei Casoni 21/A - 35010 - Grantorto (PD)</p>
              <p>Tel: +39 331 8203676</p>
              <p>Email: nicolodal.broi95@gmail.com</p>
              <p>P.IVA: 04212100244</p>
              <p>C.F.: DLBNCL95M25C743G</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-2xl font-semibold text-blue-400 mb-2">
            L'esperienza che colora i tuoi spazi
          </p>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Dal Broi Pitture. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
