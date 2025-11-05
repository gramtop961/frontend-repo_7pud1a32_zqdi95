export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} MontirGo. Semua hak dilindungi.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat Layanan</a>
            <a href="#" className="hover:text-white">Kontak</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
