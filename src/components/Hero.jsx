import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-emerald-950 to-black text-white">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[52rem] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">Bengkel & Montir Panggilan</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Servis kendaraan di mana pun Anda butuh, tanpa ribet.
            </h1>
            <p className="mt-4 text-zinc-300 max-w-prose">
              MontirGo hadir 7 hari seminggu untuk membantu Anda di rumah, kantor, atau di jalan. Pesan online, kami datang sesuai jadwal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onCTAClick} className="rounded-lg bg-emerald-500 text-black px-5 py-3 font-medium hover:bg-emerald-400 transition-colors">
                Pesan Servis
              </button>
              <a href="#layanan" className="rounded-lg px-5 py-3 font-medium ring-1 ring-white/20 hover:bg-white/5 transition-colors text-white">
                Lihat Layanan
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-white/5 p-4">
                <dt className="text-xs text-zinc-400">Waktu Tiba</dt>
                <dd className="text-lg font-semibold">~60 mnt</dd>
              </div>
              <div className="rounded-lg bg-white/5 p-4">
                <dt className="text-xs text-zinc-400">Rating</dt>
                <dd className="text-lg font-semibold">4.9/5</dd>
              </div>
              <div className="rounded-lg bg-white/5 p-4">
                <dt className="text-xs text-zinc-400">Garansi</dt>
                <dd className="text-lg font-semibold">14 hari</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop"
                alt="Mekanik sedang memperbaiki kendaraan"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-emerald-900/10 to-transparent" />
            </div>
            <p className="mt-3 text-sm text-zinc-300">Contoh gambar ilustrasi dari Unsplash.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
