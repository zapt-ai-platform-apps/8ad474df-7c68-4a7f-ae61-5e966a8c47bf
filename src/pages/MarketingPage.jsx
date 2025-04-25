import React from 'react';
import FeatureCard from '../components/common/FeatureCard';
import { 
  UserGroupIcon, 
  PencilSquareIcon, 
  ChatBubbleLeftRightIcon, 
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export default function MarketingPage() {
  const features = [
    {
      title: 'Perencanaan Target Audiens',
      description: 'Identifikasi dan analisis target konsumen berdasarkan minat dan perilaku.',
      icon: <UserGroupIcon className="h-5 w-5" />,
      path: '#target-audiens',
      color: 'blue'
    },
    {
      title: 'Pembuatan Konten Persuasif',
      description: 'Panduan langkah demi langkah untuk membuat copywriting yang efektif.',
      icon: <PencilSquareIcon className="h-5 w-5" />,
      path: '#copywriting',
      color: 'indigo'
    },
    {
      title: 'Manajemen Media Sosial',
      description: 'Strategi untuk mengelola dan mengoptimalkan kehadiran Anda di media sosial.',
      icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />,
      path: '#media-sosial',
      color: 'purple'
    },
    {
      title: 'Strategi Email Marketing',
      description: 'Panduan untuk membangun dan mengelola kampanye email yang efektif.',
      icon: <EnvelopeIcon className="h-5 w-5" />,
      path: '#email-marketing',
      color: 'green'
    },
    {
      title: 'Pemanfaatan Aplikasi Pesan Instan',
      description: 'Cara menggunakan WhatsApp, Line, dan aplikasi pesan lainnya untuk bisnis.',
      icon: <PhoneIcon className="h-5 w-5" />,
      path: '#pesan-instan',
      color: 'amber'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Pemasaran & Periklanan</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Strategi dan taktik untuk memasarkan bisnis Anda secara efektif,
          dari perencanaan target audiens hingga pembuatan konten yang persuasif.
        </p>
      </section>
      
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              path={feature.path}
              color={feature.color}
            />
          ))}
        </div>
      </section>
      
      <section id="target-audiens" className="mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Perencanaan Target Audiens</h2>
          <p className="text-slate-600 mb-6">
            Mengidentifikasi target audiens yang tepat adalah langkah pertama untuk pemasaran yang efektif.
            Gunakan formulir di bawah ini untuk mengumpulkan informasi lengkap tentang target konsumen Anda.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-700">Profil Target Audiens</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="form-label" htmlFor="demografi">Demografi</label>
                  <input 
                    type="text" 
                    id="demografi" 
                    className="input-field"
                    placeholder="Usia, jenis kelamin, lokasi, pendapatan, dll."
                  />
                </div>
                
                <div>
                  <label className="form-label" htmlFor="minat">Minat</label>
                  <input 
                    type="text" 
                    id="minat" 
                    className="input-field"
                    placeholder="Hobi, ketertarikan, aktivitas, dll."
                  />
                </div>
                
                <div>
                  <label className="form-label" htmlFor="perilaku">Perilaku</label>
                  <textarea 
                    id="perilaku" 
                    className="input-field"
                    rows="3"
                    placeholder="Kebiasaan berbelanja, penggunaan media sosial, dll."
                  ></textarea>
                </div>
                
                <div>
                  <label className="form-label" htmlFor="pain-points">Pain Points (Masalah)</label>
                  <textarea 
                    id="pain-points" 
                    className="input-field"
                    rows="3"
                    placeholder="Masalah atau kesulitan yang dihadapi target audiens."
                  ></textarea>
                </div>
                
                <button type="button" className="btn btn-primary">
                  Simpan Profil
                </button>
              </form>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-700">Estimasi Jangkauan Facebook</h3>
              <p className="text-slate-600 mb-4">
                Perkirakan jangkauan potensial iklan Facebook berdasarkan kriteria yang Anda tentukan.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="form-label" htmlFor="lokasi">Lokasi</label>
                  <input 
                    type="text" 
                    id="lokasi" 
                    className="input-field"
                    placeholder="Kota, provinsi, atau negara"
                  />
                </div>
                
                <div>
                  <label className="form-label" htmlFor="usia">Rentang Usia</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="number" 
                      id="usia-min" 
                      className="input-field"
                      placeholder="Min"
                      min="13"
                      max="65"
                    />
                    <input 
                      type="number" 
                      id="usia-max" 
                      className="input-field"
                      placeholder="Max"
                      min="13"
                      max="65"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="form-label" htmlFor="jenis-kelamin">Jenis Kelamin</label>
                  <select id="jenis-kelamin" className="input-field">
                    <option value="all">Semua</option>
                    <option value="male">Pria</option>
                    <option value="female">Wanita</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label" htmlFor="minat-fb">Minat</label>
                  <input 
                    type="text" 
                    id="minat-fb" 
                    className="input-field"
                    placeholder="Pisahkan dengan koma"
                  />
                </div>
                
                <button type="button" className="btn btn-primary">
                  Hitung Estimasi
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800">Hasil Estimasi</h4>
                <p className="text-blue-700">Jangkauan potensial: 0 orang</p>
                <p className="text-sm text-blue-600 mt-2">
                  Masukkan kriteria di atas untuk melihat estimasi jangkauan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="copywriting" className="mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Pembuatan Konten Persuasif</h2>
          <p className="text-slate-600 mb-6">
            Copywriting yang efektif dapat meningkatkan konversi dan penjualan secara signifikan.
            Pelajari anatomi copywriting dan prinsip persuasi berikut.
          </p>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Anatomi Copywriting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <h4 className="font-medium text-indigo-700 mb-2">Headline</h4>
                <p className="text-indigo-600 text-sm">
                  Judul yang menarik perhatian dan membuat pembaca ingin membaca lebih lanjut.
                  Gunakan kata-kata kuat dan spesifik.
                </p>
                <div className="mt-3">
                  <input 
                    type="text" 
                    className="input-field"
                    placeholder="Tulis headline Anda di sini..."
                  />
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-700 mb-2">Sub-headline</h4>
                <p className="text-blue-600 text-sm">
                  Mendukung headline dengan memberikan informasi tambahan atau keuntungan.
                </p>
                <div className="mt-3">
                  <input 
                    type="text" 
                    className="input-field"
                    placeholder="Tulis sub-headline Anda di sini..."
                  />
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-700 mb-2">Body</h4>
                <p className="text-purple-600 text-sm">
                  Isi utama yang menjelaskan produk atau layanan secara detail.
                  Fokus pada manfaat, bukan hanya fitur.
                </p>
                <div className="mt-3">
                  <textarea 
                    className="input-field"
                    rows="3"
                    placeholder="Tulis body Anda di sini..."
                  ></textarea>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-700 mb-2">Call to Action</h4>
                <p className="text-green-600 text-sm">
                  Ajakan untuk melakukan tindakan yang jelas dan spesifik.
                </p>
                <div className="mt-3">
                  <input 
                    type="text" 
                    className="input-field"
                    placeholder="Contoh: Beli Sekarang, Daftar Hari Ini..."
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Prinsip PAIN, LOGIC, PLEASURE</h3>
            <p className="text-slate-600 mb-4">
              Gunakan pendekatan ini untuk membuat copywriting yang lebih persuasif.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <h4 className="font-medium text-red-700 mb-2">PAIN (Rasa Takut/Kerugian)</h4>
                <p className="text-red-600 text-sm mb-3">
                  Identifikasi masalah atau rasa takut yang dihadapi target audiens.
                </p>
                <textarea 
                  className="input-field"
                  rows="3"
                  placeholder="Apa masalah yang dihadapi target audiens?"
                ></textarea>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <h4 className="font-medium text-amber-700 mb-2">LOGIC (Kelogisan/Bukti)</h4>
                <p className="text-amber-600 text-sm mb-3">
                  Berikan bukti atau alasan logis mengapa produk/layanan Anda adalah solusinya.
                </p>
                <textarea 
                  className="input-field"
                  rows="3"
                  placeholder="Bagaimana produk/layanan Anda mengatasi masalah?"
                ></textarea>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-700 mb-2">PLEASURE (Keuntungan/Manfaat)</h4>
                <p className="text-green-600 text-sm mb-3">
                  Jelaskan keuntungan dan manfaat yang akan didapatkan.
                </p>
                <textarea 
                  className="input-field"
                  rows="3"
                  placeholder="Apa keuntungan yang akan didapatkan?"
                ></textarea>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-700">6 Kunci Persuasi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-800 mb-2">1. Timbal Balik</h4>
                <p className="text-slate-600 text-sm mb-3">
                  Berikan sesuatu yang bernilai gratis kepada calon pelanggan.
                </p>
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Apa yang bisa Anda berikan secara gratis?"
                />
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-800 mb-2">2. Komitmen & Konsistensi</h4>
                <p className="text-slate-600 text-sm mb-3">
                  Dorong komitmen awal yang kecil dari pengguna.
                </p>
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Contoh pertanyaan yes-set..."
                />
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-800 mb-2">3. Bukti Sosial</h4>
                <p className="text-slate-600 text-sm mb-3">
                  Sertakan testimoni dan statistik untuk membangun kepercayaan.
                </p>
                <textarea 
                  className="input-field"
                  rows="2"
                  placeholder="Masukkan testimoni atau statistik..."
                ></textarea>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-800 mb-2">4. Kesukaan</h4>
                <p className="text-slate-600 text-sm mb-3">
                  Bangun hubungan baik (Rapport) dengan target audiens.
                </p>
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Bagaimana Anda bisa menjalin hubungan baik?"
                />
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-800 mb-2">5. Kelangkaan</h4>
                <p className="text-slate-600 text-sm mb-3">
                  Tekankan batasan waktu atau jumlah produk.
                </p>
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Contoh: 'Hanya tersedia 5 unit' atau 'Penawaran berakhir besok'"
                />
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-800 mb-2">6. Otoritas</h4>
                <p className="text-slate-600 text-sm mb-3">
                  Soroti pengalaman, sertifikasi, atau keahlian Anda.
                </p>
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Pengalaman atau sertifikasi yang relevan..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}