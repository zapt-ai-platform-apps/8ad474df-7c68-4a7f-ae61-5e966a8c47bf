import React from 'react';

export default function ProductivityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Aksi & Produktivitas</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Strategi aksi dan produktivitas untuk mencapai tujuan Anda dengan efektif dan efisien.
          Fokus pada tindakan nyata dan praktik yang dapat langsung diterapkan.
        </p>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Penetapan Target dan Tenggat Waktu</h2>
        <p className="text-slate-600 mb-6">
          Menetapkan target yang spesifik dengan tenggat waktu yang jelas adalah kunci untuk memulai dan menyelesaikan proyek dengan sukses.
        </p>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Buat Target SMART</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-medium text-slate-800 mb-2">S - Specific (Spesifik)</h4>
              <p className="text-slate-600 text-sm">
                Target harus spesifik dan jelas. Hindari target yang terlalu umum.
              </p>
              <div className="mt-3">
                <label className="form-label" htmlFor="specific-target">Target Spesifik</label>
                <input 
                  type="text" 
                  id="specific-target" 
                  className="input-field"
                  placeholder="Contoh: Mendapatkan 10 pelanggan baru dalam 2 minggu"
                />
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-medium text-slate-800 mb-2">M - Measurable (Terukur)</h4>
              <p className="text-slate-600 text-sm">
                Target harus dapat diukur untuk memantau kemajuan dan mengetahui kapan target telah tercapai.
              </p>
              <div className="mt-3">
                <label className="form-label" htmlFor="measurement">Metrik Pengukuran</label>
                <input 
                  type="text" 
                  id="measurement" 
                  className="input-field"
                  placeholder="Contoh: Jumlah pelanggan baru, pendapatan, dll."
                />
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-medium text-slate-800 mb-2">A - Achievable (Dapat Dicapai)</h4>
              <p className="text-slate-600 text-sm">
                Target harus menantang namun realistis dan dapat dicapai dengan sumber daya yang tersedia.
              </p>
              <div className="mt-3">
                <label className="form-label" htmlFor="resources">Sumber Daya yang Tersedia</label>
                <input 
                  type="text" 
                  id="resources" 
                  className="input-field"
                  placeholder="Waktu, uang, keterampilan, dll."
                />
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-medium text-slate-800 mb-2">R - Relevant (Relevan)</h4>
              <p className="text-slate-600 text-sm">
                Target harus relevan dengan tujuan jangka panjang dan selaras dengan visi Anda.
              </p>
              <div className="mt-3">
                <label className="form-label" htmlFor="relevance">Relevansi dengan Tujuan Anda</label>
                <input 
                  type="text" 
                  id="relevance" 
                  className="input-field"
                  placeholder="Mengapa target ini penting bagi Anda?"
                />
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 md:col-span-2">
              <h4 className="font-medium text-slate-800 mb-2">T - Time-bound (Terikat Waktu)</h4>
              <p className="text-slate-600 text-sm">
                Target harus memiliki tenggat waktu yang jelas untuk menciptakan urgensi dan fokus.
              </p>
              <div className="mt-3">
                <label className="form-label" htmlFor="deadline">Tenggat Waktu</label>
                <input 
                  type="date" 
                  id="deadline" 
                  className="input-field"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <button type="button" className="btn btn-primary">Simpan Target</button>
          </div>
        </div>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Strategi "Kepepet"</h2>
          <p className="text-slate-600 mb-6">
            Memanfaatkan tekanan tenggat waktu untuk mendorong tindakan segera.
            Beberapa orang bekerja paling baik di bawah tekanan.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h3 className="font-medium text-red-800 mb-2">Buat Tenggat Waktu Publik</h3>
              <p className="text-red-700 text-sm">
                Umumkan tenggat waktu Anda kepada orang lain. Komitmen publik menciptakan
                akuntabilitas dan mendorong Anda untuk menepati janji Anda.
              </p>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h3 className="font-medium text-red-800 mb-2">Buat Konsekuensi</h3>
              <p className="text-red-700 text-sm">
                Tentukan konsekuensi jika tenggat waktu tidak terpenuhi.
                Konsekuensi bisa berupa "hukuman" atau kehilangan imbalan.
              </p>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h3 className="font-medium text-red-800 mb-2">Pecah Menjadi Tenggat Waktu Lebih Kecil</h3>
              <p className="text-red-700 text-sm">
                Bagi proyek besar menjadi milestone dengan tenggat waktu yang lebih kecil.
                Ini menciptakan urgensi berkelanjutan tanpa menunggu hingga menit terakhir.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Mulai Dengan Apa Yang Ada</h2>
          <p className="text-slate-600 mb-6">
            Jangan menunggu kondisi sempurna untuk memulai. Gunakan sumber daya yang ada
            dan mulai dari mana Anda berada sekarang.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Inventarisasi Sumber Daya</h3>
              <p className="text-green-700 text-sm">
                Buat daftar semua sumber daya yang sudah Anda miliki: keterampilan,
                pengetahuan, waktu, koneksi, dan aset fisik.
              </p>
              <div className="mt-3">
                <textarea 
                  className="input-field"
                  rows="3"
                  placeholder="Sumber daya yang sudah Anda miliki..."
                ></textarea>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Langkah Kecil yang Dapat Diambil Hari Ini</h3>
              <p className="text-green-700 text-sm">
                Identifikasi satu langkah kecil yang dapat Anda ambil hari ini untuk
                memulai, tanpa memerlukan sumber daya tambahan.
              </p>
              <div className="mt-3">
                <input 
                  type="text" 
                  className="input-field"
                  placeholder="Langkah pertama yang dapat diambil..."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Tips Negosiasi</h2>
        <p className="text-slate-600 mb-6">
          Strategi untuk mendapatkan sumber daya tanpa modal awal melalui negosiasi yang cerdas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <h3 className="font-medium text-indigo-800 mb-2">Nego Gratis Tempat</h3>
            <p className="text-indigo-700 text-sm">
              Tawarkan pembagian keuntungan sebagai pengganti biaya sewa.
              Fokuskan pada manfaat jangka panjang bagi pemilik tempat.
            </p>
            <div className="mt-3">
              <h4 className="text-xs font-medium text-indigo-800 mb-1">Poin-poin Negosiasi:</h4>
              <ul className="text-xs text-indigo-700 list-disc pl-4 space-y-1">
                <li>Volume pelanggan yang akan datang</li>
                <li>Peningkatan visibilitas lokasi</li>
                <li>Persentase dari keuntungan</li>
                <li>Bersedia membayar lebih setelah bisnis berkembang</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <h3 className="font-medium text-indigo-800 mb-2">Bayar Mundur</h3>
            <p className="text-indigo-700 text-sm">
              Buat kesepakatan untuk membayar setelah produk terjual atau
              setelah menerima pembayaran dari pelanggan.
            </p>
            <div className="mt-3">
              <h4 className="text-xs font-medium text-indigo-800 mb-1">Poin-poin Negosiasi:</h4>
              <ul className="text-xs text-indigo-700 list-disc pl-4 space-y-1">
                <li>Jaminan pembayaran penuh</li>
                <li>Bunga atau bonus untuk pembayaran tertunda</li>
                <li>Bukti kemampuan menjual (portofolio)</li>
                <li>Pembagian risiko yang adil</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <h3 className="font-medium text-indigo-800 mb-2">Tukar Guling</h3>
            <p className="text-indigo-700 text-sm">
              Tawarkan produk, layanan, atau keahlian Anda sebagai pengganti
              barang atau layanan yang Anda butuhkan.
            </p>
            <div className="mt-3">
              <h4 className="text-xs font-medium text-indigo-800 mb-1">Poin-poin Negosiasi:</h4>
              <ul className="text-xs text-indigo-700 list-disc pl-4 space-y-1">
                <li>Nilai yang setara</li>
                <li>Kebutuhan masing-masing pihak</li>
                <li>Periode waktu penukaran</li>
                <li>Kualitas produk/layanan yang ditukar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Pentingnya Bertindak</h2>
          <p className="text-slate-600 mb-6">
            Peluang besar sering tersembunyi di balik kegagalan. Tanpa tindakan, tidak akan ada hasil.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Tindakan Menghasilkan Umpan Balik</h3>
              <p className="text-blue-700 text-sm">
                Setiap tindakan, berhasil atau tidak, memberikan informasi berharga
                yang dapat membantu Anda menyempurnakan pendekatan Anda.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Kesempurnaan adalah Musuh Tindakan</h3>
              <p className="text-blue-700 text-sm">
                Jangan menunggu hingga semuanya sempurna. Tindakan yang diambil
                dengan cepat lebih baik daripada rencana sempurna yang tidak pernah dilaksanakan.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Mulai, lalu Sempurnakan</h3>
              <p className="text-blue-700 text-sm">
                Mulai dengan versi minimum yang layak, lalu iterasikan berdasarkan
                umpan balik dan pengalaman nyata.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Berpikir Tanpa Kotak</h2>
          <p className="text-slate-600 mb-6">
            Jangan terpaku pada cara-cara konvensional. Kreativitas dan inovasi
            sering kali menjadi kunci keberhasilan dalam bisnis.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h3 className="font-medium text-purple-800 mb-2">Tantang Asumsi</h3>
              <p className="text-purple-700 text-sm">
                Identifikasi dan tantang asumsi yang mendasari industri atau
                masalah yang Anda hadapi. Apa yang dianggap "harus" mungkin tidak selalu benar.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h3 className="font-medium text-purple-800 mb-2">Cari Inspirasi Lintas Bidang</h3>
              <p className="text-purple-700 text-sm">
                Selidiki bagaimana industri atau disiplin ilmu lain mengatasi
                masalah serupa. Ide-ide terbaik sering datang dari menerapkan solusi dari satu bidang ke bidang lain.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h3 className="font-medium text-purple-800 mb-2">Tanyakan "Bagaimana jika...?"</h3>
              <p className="text-purple-700 text-sm">
                Lakukan brainstorming dengan pertanyaan "Bagaimana jika...?" untuk
                mengeksplorasi kemungkinan-kemungkinan yang tidak konvensional.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Kiat Tambahan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
            <h3 className="font-medium text-amber-800 mb-2">Fokus pada Cashflow Harian/Bulanan</h3>
            <p className="text-amber-700 text-sm">
              Prioritaskan bisnis dengan cashflow cepat untuk membangun momentum
              dan kemandirian finansial sejak awal.
            </p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
            <h3 className="font-medium text-amber-800 mb-2">Mencari Mentor</h3>
            <p className="text-amber-700 text-sm">
              Temukan mentor bisnis yang sudah sukses di bidang yang Anda minati.
              Mentor dapat memberikan wawasan, jaringan, dan jalan pintas untuk kesuksesan.
            </p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
            <h3 className="font-medium text-amber-800 mb-2">Ngeyel dengan Strategi</h3>
            <p className="text-amber-700 text-sm">
              Bersikaplah gigih, namun tetap fleksibel dalam taktik. Pertahankan
              visi besar Anda, tetapi bersedia menyesuaikan pendekatan berdasarkan umpan balik.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}