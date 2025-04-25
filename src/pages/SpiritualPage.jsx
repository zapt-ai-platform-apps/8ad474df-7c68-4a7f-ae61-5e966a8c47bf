import React, { useState, useEffect } from 'react';

export default function SpiritualPage() {
  const [journals, setJournals] = useState(() => {
    const saved = localStorage.getItem('spiritual_journals');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [affirmations, setAffirmations] = useState(() => {
    const saved = localStorage.getItem('positive_affirmations');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [newJournal, setNewJournal] = useState({ title: '', content: '' });
  const [newAffirmation, setNewAffirmation] = useState('');
  
  useEffect(() => {
    localStorage.setItem('spiritual_journals', JSON.stringify(journals));
  }, [journals]);
  
  useEffect(() => {
    localStorage.setItem('positive_affirmations', JSON.stringify(affirmations));
  }, [affirmations]);
  
  const handleAddJournal = () => {
    if (newJournal.title.trim() === '' || newJournal.content.trim() === '') return;
    
    setJournals([
      ...journals,
      {
        id: Date.now(),
        ...newJournal,
        date: new Date().toISOString()
      }
    ]);
    setNewJournal({ title: '', content: '' });
  };
  
  const handleAddAffirmation = () => {
    if (newAffirmation.trim() === '') return;
    
    setAffirmations([
      ...affirmations,
      {
        id: Date.now(),
        text: newAffirmation,
        date: new Date().toISOString()
      }
    ]);
    setNewAffirmation('');
  };
  
  const handleDeleteJournal = (id) => {
    setJournals(journals.filter(journal => journal.id !== id));
  };
  
  const handleDeleteAffirmation = (id) => {
    setAffirmations(affirmations.filter(affirmation => affirmation.id !== id));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Spiritual & Mental</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Kuatkan niat, tujuan, dan kesehatan mental Anda untuk mencapai kesuksesan
          melalui praktik spiritual dan pengembangan mental yang positif.
        </p>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Jurnal Spiritual ("Curhat")</h2>
          <p className="text-slate-600 mb-6">
            Gunakan ruang pribadi ini untuk menuliskan keinginan dan masalah Anda
            sebagai bentuk "curhat" kepada Allah. Menulis dapat menjadi bentuk doa dan refleksi.
          </p>
          
          <div className="mb-6">
            <div className="mb-4">
              <label className="form-label" htmlFor="journal-title">Judul</label>
              <input 
                type="text" 
                id="journal-title" 
                className="input-field"
                placeholder="Masukkan judul..."
                value={newJournal.title}
                onChange={(e) => setNewJournal({...newJournal, title: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="form-label" htmlFor="journal-content">Isi Jurnal</label>
              <textarea 
                id="journal-content" 
                className="input-field"
                rows="5"
                placeholder="Tulis isi jurnal Anda di sini..."
                value={newJournal.content}
                onChange={(e) => setNewJournal({...newJournal, content: e.target.value})}
              ></textarea>
            </div>
            
            <button 
              type="button"
              className="btn btn-primary"
              onClick={handleAddJournal}
            >
              Simpan Jurnal
            </button>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Jurnal Terbaru</h3>
            {journals.length === 0 ? (
              <p className="text-slate-500 italic">Belum ada jurnal yang disimpan.</p>
            ) : (
              <div className="space-y-4">
                {journals.slice().reverse().slice(0, 3).map(journal => (
                  <div key={journal.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-slate-800">{journal.title}</h4>
                      <button 
                        onClick={() => handleDeleteJournal(journal.id)}
                        className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                      >
                        Hapus
                      </button>
                    </div>
                    <p className="text-slate-600 text-sm mb-2">{journal.content}</p>
                    <p className="text-slate-400 text-xs">
                      {new Date(journal.date).toLocaleDateString('id-ID', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Afirmasi Positif</h2>
          <p className="text-slate-600 mb-6">
            Buat dan kelola afirmasi positif dalam bahasa present tense menggunakan kata "saya".
            Afirmasi yang diucapkan secara konsisten dapat memprogram ulang pikiran bawah sadar.
          </p>
          
          <div className="mb-6">
            <div className="mb-4">
              <label className="form-label" htmlFor="affirmation">Afirmasi Baru</label>
              <input 
                type="text" 
                id="affirmation" 
                className="input-field"
                placeholder="Contoh: Saya adalah pribadi yang sukses dan bahagia"
                value={newAffirmation}
                onChange={(e) => setNewAffirmation(e.target.value)}
              />
            </div>
            
            <button 
              type="button"
              className="btn btn-primary"
              onClick={handleAddAffirmation}
            >
              Tambah Afirmasi
            </button>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Afirmasi Saya</h3>
            {affirmations.length === 0 ? (
              <p className="text-slate-500 italic">Belum ada afirmasi yang disimpan.</p>
            ) : (
              <ul className="space-y-2">
                {affirmations.map(affirmation => (
                  <li key={affirmation.id} className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-100">
                    <span className="text-green-800">{affirmation.text}</span>
                    <button 
                      onClick={() => handleDeleteAffirmation(affirmation.id)}
                      className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                    >
                      Hapus
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Pengingat Visualisasi</h2>
          <p className="text-slate-600 mb-6">
            Visualisasi adalah teknik kuat untuk menarik apa yang Anda inginkan ke dalam hidup Anda.
            Berikut adalah panduan visualisasi yang efektif.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <h3 className="font-medium text-indigo-800 mb-2">1. Tentukan Tujuan dengan Jelas</h3>
              <p className="text-indigo-700 text-sm">
                Visualisasikan tujuan Anda dengan detail yang jelas dan spesifik.
                Semakin detail visualisasi Anda, semakin kuat pengaruhnya.
              </p>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <h3 className="font-medium text-indigo-800 mb-2">2. Gunakan Semua Indera</h3>
              <p className="text-indigo-700 text-sm">
                Libatkan semua indera dalam visualisasi Anda: lihat, dengar, rasakan, cium, dan rasakan.
                Ini membuat visualisasi lebih nyata bagi pikiran bawah sadar.
              </p>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <h3 className="font-medium text-indigo-800 mb-2">3. Visualisasikan Secara Teratur</h3>
              <p className="text-indigo-700 text-sm">
                Luangkan waktu setiap hari untuk bervisualisasi, idealnya di pagi hari setelah bangun
                dan di malam hari sebelum tidur ketika pikiran bawah sadar paling reseptif.
              </p>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <h3 className="font-medium text-indigo-800 mb-2">4. Rasakan Emosi</h3>
              <p className="text-indigo-700 text-sm">
                Rasakan emosi seolah-olah tujuan Anda sudah tercapai.
                Emosi adalah kunci untuk mengaktifkan Hukum Tarik Menarik.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Fokus pada Solusi</h2>
          <p className="text-slate-600 mb-6">
            Berfokus pada solusi alih-alih masalah akan mengubah perspektif Anda
            dan membuka jalan untuk penyelesaian yang lebih efektif.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Ubah Perspektif</h3>
              <p className="text-green-700 text-sm">
                Setiap masalah mengandung benih kesempatan. Tanyakan pada diri Anda:
                "Apa yang bisa saya pelajari dari situasi ini? Bagaimana saya bisa mengubahnya menjadi kesempatan?"
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Pertanyaan Berdaya</h3>
              <p className="text-green-700 text-sm">
                Ganti pertanyaan "Mengapa ini terjadi pada saya?" dengan 
                "Apa yang bisa saya lakukan untuk mengatasi situasi ini?"
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Praktikkan Bersyukur</h3>
              <p className="text-green-700 text-sm">
                Bersyukur membuka pintu untuk lebih banyak hal yang bisa disyukuri.
                Luangkan waktu setiap hari untuk mencatat tiga hal yang Anda syukuri.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">"KUN FAYAKUN"</h3>
              <p className="text-green-700 text-sm">
                Percayalah bahwa pertolongan Allah bisa datang dengan cepat.
                Yakinlah bahwa ketika Allah berkehendak, sesuatu akan terjadi.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Pengingat Spiritual</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
            <h3 className="font-medium text-purple-800 mb-2">Antusias dalam Berdoa</h3>
            <p className="text-purple-700 text-sm">
              Berdoalah dengan penuh antusias dan keyakinan. Doa yang diucapkan 
              dengan setengah hati tidak akan menghasilkan hasil yang optimal.
            </p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
            <h3 className="font-medium text-amber-800 mb-2">Merendahkan Diri</h3>
            <p className="text-amber-700 text-sm">
              Rendahkan diri di hadapan Allah. Kesombongan adalah penghalang 
              antara Anda dan rahmat-Nya.
            </p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">Tidak Merasa Memiliki</h3>
            <p className="text-blue-700 text-sm">
              Ingatlah selalu bahwa segala sesuatu yang Anda miliki adalah titipan Allah.
              Bersikaplah sebagai pengelola yang baik, bukan pemilik.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}