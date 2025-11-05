import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  const bookingRef = useRef(null)
  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onCTAClick={scrollToBooking} />
      <Hero onCTAClick={scrollToBooking} />

      <section id="layanan" className="bg-gradient-to-b from-black via-emerald-950/40 to-black border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Layanan Populer</h2>
          <p className="mt-2 text-zinc-300">Pilih layanan yang paling sesuai dengan kebutuhan kendaraan Anda.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Ganti Oli', desc: 'Oli & filter berkualitas, cek kebocoran.' },
              { title: 'Servis Rem', desc: 'Kampas, piringan, bleeding sistem.' },
              { title: 'Aki & Kelistrikan', desc: 'Cek arus, jumper, ganti aki di tempat.' },
              { title: 'Ban & Tambal', desc: 'Tambal cepat, ganti ban, nitrogen.' },
            ].map((s) => (
              <motion.div
                key={s.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-zinc-300">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-kerja" className="bg-gradient-to-b from-black via-emerald-950/30 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Cara Kerja</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { title: 'Pesan Online', desc: 'Isi form pemesanan dan pilih jadwal.' },
              { title: 'Konfirmasi', desc: 'Kami verifikasi detail dan menugaskan montir.' },
              { title: 'Montir Datang', desc: 'Perbaikan dilakukan di lokasi Anda.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 className="text-emerald-400" />
                <h3 className="mt-3 font-medium">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <div ref={bookingRef}>
        <BookingForm />
      </div>

      <Footer />
    </div>
  )
}

export default App
