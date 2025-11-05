import { useState } from 'react'
import { Calendar, MapPin, User, Phone, Wrench } from 'lucide-react'

const layananOptions = [
  'Ganti Oli',
  'Aki & Kelistrikan',
  'Servis Rem',
  'Ban & Tambal',
  'Tune-Up',
  'Darurat di Jalan',
]

export default function BookingForm() {
  const [form, setForm] = useState({
    nama: '',
    telepon: '',
    layanan: layananOptions[0],
    tanggal: '',
    lokasi: '',
    catatan: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // For now, we just simulate a successful submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ nama: '', telepon: '', layanan: layananOptions[0], tanggal: '', lokasi: '', catatan: '' })
  }

  return (
    <section id="booking" className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Pesan Montir ke Lokasi Anda</h2>
            <p className="mt-2 text-zinc-400">Isi detail singkat berikut. Tim kami akan mengonfirmasi dan montir akan segera menuju lokasi.</p>
            <ul className="mt-6 space-y-3 text-zinc-300">
              <li className="flex items-start gap-3"><Wrench size={18} className="mt-1 text-emerald-400" /> Montir bersertifikat dengan peralatan lengkap.</li>
              <li className="flex items-start gap-3"><Calendar size={18} className="mt-1 text-emerald-400" /> Pilih jadwal fleksibel sesuai kebutuhan Anda.</li>
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-1 text-emerald-400" /> Layanan di rumah, kantor, atau titik yang Anda tentukan.</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid gap-2">
                <label htmlFor="nama" className="text-sm text-zinc-300">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input id="nama" name="nama" value={form.nama} onChange={onChange} required placeholder="Mis. Budi Setiawan" className="w-full rounded-lg bg-black/40 border border-white/10 pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="telepon" className="text-sm text-zinc-300">Nomor Telepon / WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input id="telepon" name="telepon" value={form.telepon} onChange={onChange} required type="tel" placeholder="08xxxxxxxxxx" className="w-full rounded-lg bg-black/40 border border-white/10 pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="layanan" className="text-sm text-zinc-300">Jenis Layanan</label>
                <select id="layanan" name="layanan" value={form.layanan} onChange={onChange} className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500">
                  {layananOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2">
                <label htmlFor="tanggal" className="text-sm text-zinc-300">Tanggal & Waktu</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input id="tanggal" name="tanggal" value={form.tanggal} onChange={onChange} required type="datetime-local" className="w-full rounded-lg bg-black/40 border border-white/10 pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="lokasi" className="text-sm text-zinc-300">Alamat / Lokasi</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-zinc-400" size={18} />
                  <textarea id="lokasi" name="lokasi" value={form.lokasi} onChange={onChange} required rows={3} placeholder="Tulis alamat lengkap atau share location"
                    className="w-full rounded-lg bg-black/40 border border-white/10 pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="catatan" className="text-sm text-zinc-300">Catatan (opsional)</label>
                <textarea id="catatan" name="catatan" value={form.catatan} onChange={onChange} rows={3} placeholder="Tipe kendaraan, keluhan, dll." className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>

              <button type="submit" className="mt-2 w-full rounded-lg bg-emerald-500 text-black font-medium py-3 hover:bg-emerald-400 transition-colors">
                Konfirmasi Pemesanan
              </button>

              {submitted && (
                <p className="text-center text-emerald-400 text-sm">Permintaan Anda diterima. Kami akan menghubungi segera melalui WhatsApp.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
