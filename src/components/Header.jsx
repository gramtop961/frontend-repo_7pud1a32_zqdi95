import { Wrench, Phone } from 'lucide-react'

export default function Header({ onCTAClick }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-400 grid place-items-center">
            <Wrench className="text-black" size={20} />
          </div>
          <span className="text-white font-semibold tracking-tight">MontirGo</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#layanan" className="hover:text-white transition-colors">Layanan</a>
          <a href="#cara-kerja" className="hover:text-white transition-colors">Cara Kerja</a>
          <a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a>
        </nav>
        <button onClick={onCTAClick} className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors">
          <Phone size={16} />
          Pesan Sekarang
        </button>
      </div>
    </header>
  )
}
