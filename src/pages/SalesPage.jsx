import React, { useState } from 'react';

export default function SalesPage() {
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem('testimonials');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    rating: 5
  });
  
  const handleAddTestimonial = () => {
    if (newTestimonial.name.trim() === '' || newTestimonial.content.trim() === '') {
      return;
    }
    
    const updatedTestimonials = [
      ...testimonials,
      {
        id: Date.now(),
        ...newTestimonial,
        date: new Date().toISOString()
      }
    ];
    
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
    
    setNewTestimonial({
      name: '',
      role: '',
      company: '',
      content: '',
      rating: 5
    });
  };
  
  const handleDeleteTestimonial = (id) => {
    const updatedTestimonials = testimonials.filter(
      testimonial => testimonial.id !== id
    );
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Strategi Penjualan</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Teknik dan taktik untuk meningkatkan penjualan Anda, membangun kepercayaan
          pelanggan, dan mengembangkan bisnis Anda secara berkelanjutan.
        </p>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Manajemen Testimoni</h2>
        <p className="text-slate-600 mb-6">
          Testimoni yang otentik adalah bukti sosial yang kuat untuk membangun kepercayaan
          pelanggan baru. Kumpulkan dan kelola testimoni Anda di sini.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Tambah Testimoni Baru</h3>
            <form className="space-y-4">
              <div>
                <label className="form-label" htmlFor="testimonial-name">Nama Pelanggan</label>
                <input 
                  type="text" 
                  id="testimonial-name" 
                  className="input-field"
                  placeholder="Nama lengkap pelanggan"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label" htmlFor="testimonial-role">Jabatan/Peran</label>
                  <input 
                    type="text" 
                    id="testimonial-role" 
                    className="input-field"
                    placeholder="Misalnya: CEO, Manager"
                    value={newTestimonial.role}
                    onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="form-label" htmlFor="testimonial-company">Perusahaan</label>
                  <input 
                    type="text" 
                    id="testimonial-company" 
                    className="input-field"
                    placeholder="Nama perusahaan"
                    value={newTestimonial.company}
                    onChange={(e) => setNewTestimonial({...newTestimonial, company: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="form-label" htmlFor="testimonial-content">Isi Testimoni</label>
                <textarea 
                  id="testimonial-content" 
                  className="input-field"
                  rows="4"
                  placeholder="Apa yang dikatakan pelanggan tentang produk atau layanan Anda?"
                  value={newTestimonial.content}
                  onChange={(e) => setNewTestimonial({...newTestimonial, content: e.target.value})}
                ></textarea>
              </div>
              
              <div>
                <label className="form-label" htmlFor="testimonial-rating">Rating (1-5)</label>
                <select 
                  id="testimonial-rating" 
                  className="input-field"
                  value={newTestimonial.rating}
                  onChange={(e) => setNewTestimonial({...newTestimonial, rating: parseInt(e.target.value)})}
                >
                  <option value="5">5 - Sangat Puas</option>
                  <option value="4">4 - Puas</option>
                  <option value="3">3 - Cukup</option>
                  <option value="2">2 - Kurang</option>
                  <option value="1">1 - Sangat Kurang</option>
                </select>
              </div>
              
              <button 
                type="button"
                className="btn btn-primary"
                onClick={handleAddTestimonial}
              >
                Simpan Testimoni
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Testimoni Terkumpul</h3>
            
            {testimonials.length === 0 ? (
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                <p className="text-slate-500">Belum ada testimoni yang disimpan.</p>
                <p className="text-slate-400 text-sm mt-1">
                  Mulailah mengumpulkan testimoni dari pelanggan Anda.
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {testimonials.map(testimonial => (
                  <div 
                    key={testimonial.id} 
                    className="bg-slate-50 p-4 rounded-lg border border-slate-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-slate-800">{testimonial.name}</h4>
                        <p className="text-slate-500 text-sm">
                          {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="flex text-amber-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < testimonial.rating ? 'text-amber-400' : 'text-slate-300'}>
                              ★
                            </span>
                          ))}
                        </div>
                        <button 
                          onClick={() => handleDeleteTestimonial(testimonial.id)}
                          className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-2">
                      "{testimonial.content}"
                    </p>
                    <p className="text-slate-400 text-xs">
                      {new Date(testimonial.date).toLocaleDateString('id-ID', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-4">
              <h4 className="text-md font-medium text-slate-700 mb-2">Tips Mengumpulkan Testimoni</h4>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                <li>Minta testimoni segera setelah pelanggan mendapatkan hasil positif</li>
                <li>Berikan panduan spesifik tentang apa yang ingin Anda ketahui</li>
                <li>Tawarkan insentif kecil sebagai ucapan terima kasih</li>
                <li>Buat proses pemberian testimoni semudah mungkin</li>
                <li>Minta izin untuk menggunakan testimoni dalam materi pemasaran</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Sapa Pelanggan</h2>
          <p className="text-slate-600 mb-6">
            Menyapa pelanggan secara personal dan membangun kedekatan adalah kunci untuk
            membangun hubungan jangka panjang dan meningkatkan loyalitas.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Ingat dan Gunakan Nama</h3>
              <p className="text-green-700 text-sm">
                Selalu gunakan nama pelanggan dalam setiap komunikasi.
                Orang menyukai mendengar nama mereka sendiri.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Ucapkan Selamat di Momen Spesial</h3>
              <p className="text-green-700 text-sm">
                Catat dan ucapkan selamat pada momen-momen spesial seperti ulang tahun,
                hari jadi, atau pencapaian penting.
              </p>
              <div className="mt-3">
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Contoh pesan ucapan selamat..."
                />
              </div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Follow Up Pasca Pembelian</h3>
              <p className="text-green-700 text-sm">
                Selalu hubungi pelanggan setelah pembelian untuk memastikan kepuasan
                dan menunjukkan bahwa Anda peduli.
              </p>
              <div className="mt-3">
                <textarea 
                  className="input-field"
                  rows="2"
                  placeholder="Template pesan follow up..."
                ></textarea>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Tambahkan Bukan Kurangin</h2>
          <p className="text-slate-600 mb-6">
            Prinsip memberikan lebih dari yang diharapkan akan membuat pelanggan Anda
            merasa istimewa dan meningkatkan nilai yang mereka dapatkan.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Bonus dan Hadiah Tak Terduga</h3>
              <p className="text-blue-700 text-sm">
                Berikan bonus kecil atau hadiah tak terduga yang relevan dengan
                pembelian utama pelanggan.
              </p>
              <div className="mt-3">
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Ide bonus atau hadiah..."
                />
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Layanan Ekstra</h3>
              <p className="text-blue-700 text-sm">
                Tawarkan layanan tambahan yang tidak diharapkan pelanggan tetapi
                memberikan nilai tambah bagi pengalaman mereka.
              </p>
              <div className="mt-3">
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Ide layanan ekstra..."
                />
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Personalisasi Pengalaman</h3>
              <p className="text-blue-700 text-sm">
                Buatlah pengalaman pelanggan menjadi lebih personal dengan perhatian
                terhadap detail kecil yang menunjukkan Anda memahami kebutuhan mereka.
              </p>
              <div className="mt-3">
                <textarea 
                  className="input-field"
                  rows="2"
                  placeholder="Cara mempersonalisasi pengalaman pelanggan..."
                ></textarea>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Strategi Pasar yang Berbeda</h2>
        <p className="text-slate-600 mb-6">
          Inspirasi dari model bisnis dengan merek yang berbeda untuk menjangkau
          segmen pasar yang berbeda dan memaksimalkan potensi bisnis Anda.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
            <h3 className="font-medium text-amber-800 mb-2">Segmentasi Berdasarkan Harga</h3>
            <p className="text-amber-700 text-sm">
              Buat varian produk/layanan dengan tingkat harga berbeda untuk
              menjangkau pelanggan dengan daya beli berbeda.
            </p>
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-medium text-amber-800">Premium</span>
                <span className="text-amber-700">Fitur lengkap, kualitas terbaik</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-medium text-amber-800">Standar</span>
                <span className="text-amber-700">Keseimbangan kualitas dan harga</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-medium text-amber-800">Ekonomis</span>
                <span className="text-amber-700">Fungsi dasar, harga terjangkau</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
            <h3 className="font-medium text-purple-800 mb-2">Segmentasi Berdasarkan Demografi</h3>
            <p className="text-purple-700 text-sm">
              Buat merek berbeda yang ditargetkan untuk kelompok demografi tertentu
              (usia, jenis kelamin, lokasi, dll).
            </p>
            <div className="mt-3 text-xs text-purple-700">
              <p>Contoh:</p>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>Merek A untuk segmen profesional muda (25-35 tahun)</li>
                <li>Merek B untuk segmen keluarga (35-50 tahun)</li>
                <li>Merek C untuk segmen remaja (15-24 tahun)</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg border border-red-100">
            <h3 className="font-medium text-red-800 mb-2">Segmentasi Berdasarkan Nilai/Gaya Hidup</h3>
            <p className="text-red-700 text-sm">
              Buat merek yang merefleksikan nilai atau gaya hidup tertentu
              untuk menarik pelanggan yang mengidentifikasi diri dengan nilai tersebut.
            </p>
            <div className="mt-3 text-xs text-red-700">
              <p>Contoh:</p>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>Merek A dengan fokus pada keberlanjutan dan ramah lingkungan</li>
                <li>Merek B dengan fokus pada kemewahan dan eksklusivitas</li>
                <li>Merek C dengan fokus pada inovasi dan teknologi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}