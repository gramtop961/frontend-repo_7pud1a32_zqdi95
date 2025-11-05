import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Dimas P.',
    role: 'Pengusaha',
    avatar: 'https://i.pravatar.cc/100?img=12',
    text: 'Montir datang tepat waktu dan servisnya rapi. Mobil langsung enak dipakai.',
  },
  {
    name: 'Sarah A.',
    role: 'Karyawan',
    avatar: 'https://i.pravatar.cc/100?img=32',
    text: 'Ganti aki di parkiran kantor, selesai kurang dari 30 menit. Recommended!',
  },
  {
    name: 'Andi R.',
    role: 'Fotografer',
    avatar: 'https://i.pravatar.cc/100?img=5',
    text: 'Respon cepat saat ban bocor di jalan tol. Penyelamat sekali!',
  },
  {
    name: 'Nadia K.',
    role: 'Ibu Rumah Tangga',
    avatar: 'https://i.pravatar.cc/100?img=47',
    text: 'Teknisi ramah, jelasin masalahnya detail. Harga juga transparan.',
  },
  {
    name: 'Rio M.',
    role: 'Mahasiswa',
    avatar: 'https://i.pravatar.cc/100?img=14',
    text: 'Booking gampang, montir datang sesuai jadwal. Mantap!',
  },
]

function Row({ items }) {
  return (
    <div className="flex items-stretch gap-4">
      {items.map((t, idx) => (
        <div
          key={`${t.name}-${idx}`}
          className="min-w-[20rem] max-w-[22rem] rounded-xl border border-white/10 bg-white/5 p-4 text-left"
        >
          <div className="flex items-center gap-3">
            <img src={t.avatar} alt={t.name} className="size-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium text-white">{t.name}</p>
              <p className="text-xs text-zinc-400">{t.role}</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-300">“{t.text}”</p>
        </div>
      ))}
    </div>
  )
}

export default function Testimonials() {
  // Duplicate for seamless loop
  const loopItems = [...testimonials, ...testimonials]
  return (
    <section id="testimoni" className="bg-gradient-to-b from-black via-emerald-950/40 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Apa Kata Mereka</h2>
            <p className="mt-2 text-zinc-400">Testimoni pelanggan yang telah menggunakan layanan kami.</p>
          </div>
        </div>
        <div className="relative mt-8 overflow-hidden">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          >
            <Row items={loopItems} />
          </motion.div>
          {/* subtle edge gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  )
}
