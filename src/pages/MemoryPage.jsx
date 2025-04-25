import React from 'react';

export default function MemoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Peningkatan Daya Ingat</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Tips praktis dan teknik efektif untuk meningkatkan kemampuan mengingat nama,
          password, lokasi barang, dan hal-hal penting lainnya dalam kehidupan sehari-hari.
        </p>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Tips Mengingat Nama</h2>
        <p className="text-slate-600 mb-6">
          Mengingat nama seseorang adalah keterampilan sosial yang penting dan membuat
          orang lain merasa dihargai. Berikut adalah teknik-teknik untuk meningkatkan
          kemampuan Anda dalam mengingat nama.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Langkah-langkah Mengingat Nama</h3>
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                <h4 className="font-medium text-amber-800 mb-2">1. Keinginan untuk Mengingat</h4>
                <p className="text-amber-700 text-sm">
                  Langkah pertama adalah benar-benar ingin mengingat nama orang. 
                  Niat dan komitmen membuat perbedaan besar dalam kemampuan Anda untuk mengingat.
                </p>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                <h4 className="font-medium text-amber-800 mb-2">2. Fokus Saat Diperkenalkan</h4>
                <p className="text-amber-700 text-sm">
                  Berikan perhatian penuh saat seseorang memperkenalkan diri. 
                  Jangan berpikir tentang apa yang akan Anda katakan selanjutnya.
                </p>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                <h4 className="font-medium text-amber-800 mb-2">3. Ulangi Nama</h4>
                <p className="text-amber-700 text-sm">
                  Segera ulangi nama orang tersebut, misalnya: "Senang bertemu dengan Anda, Ahmad."
                  Ini membantu memperkuat ingatan Anda.
                </p>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                <h4 className="font-medium text-amber-800 mb-2">4. Gunakan Nama dalam Percakapan</h4>
                <p className="text-amber-700 text-sm">
                  Gunakan nama orang beberapa kali selama percakapan, 
                  tetapi dengan cara yang alami dan tidak berlebihan.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Teknik Asosiasi dan Visualisasi</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Hubungkan Nama dengan Karakteristik Fisik</h4>
                <p className="text-blue-700 text-sm">
                  Perhatikan fitur fisik yang menonjol dan hubungkan dengan nama.
                  Misalnya: "Budi dengan kacamata bundar".
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Gunakan Rima atau Aliterasi</h4>
                <p className="text-blue-700 text-sm">
                  Buat rima atau aliterasi dengan nama. 
                  Misalnya: "Ratna yang ramah" atau "Deni yang dinamis".
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Visualisasikan Nama</h4>
                <p className="text-blue-700 text-sm">
                  Ubah nama menjadi gambar mental yang mudah diingat.
                  Contoh: Untuk nama "Bulan", visualisasikan bulan bersinar di langit.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Hubungkan dengan Seseorang yang Anda Kenal</h4>
                <p className="text-blue-700 text-sm">
                  Asosiasikan dengan orang lain yang memiliki nama sama
                  yang sudah Anda kenal dengan baik.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Latihan Praktis</h3>
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <h4 className="font-medium text-indigo-800 mb-3">Latihan Mengingat Nama dari Foto</h4>
            <p className="text-indigo-700 text-sm mb-4">
              Lakukan latihan ini secara rutin untuk meningkatkan kemampuan mengingat nama.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="h-20 bg-indigo-100 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-indigo-400">Foto</span>
                </div>
                <p className="text-center text-indigo-800 font-medium">Ahmad</p>
                <input 
                  type="text" 
                  className="mt-2 w-full px-3 py-1 text-sm border rounded"
                  placeholder="Ketik nama..."
                />
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="h-20 bg-indigo-100 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-indigo-400">Foto</span>
                </div>
                <p className="text-center text-indigo-800 font-medium">Sari</p>
                <input 
                  type="text" 
                  className="mt-2 w-full px-3 py-1 text-sm border rounded"
                  placeholder="Ketik nama..."
                />
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="h-20 bg-indigo-100 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-indigo-400">Foto</span>
                </div>
                <p className="text-center text-indigo-800 font-medium">Budi</p>
                <input 
                  type="text" 
                  className="mt-2 w-full px-3 py-1 text-sm border rounded"
                  placeholder="Ketik nama..."
                />
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button className="btn btn-primary text-sm">Periksa Jawaban</button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Tips Mengingat Password</h2>
        <p className="text-slate-600 mb-6">
          Dengan semakin banyaknya akun online yang kita miliki, mengingat password
          menjadi tantangan tersendiri. Berikut beberapa teknik untuk mengingat
          password dengan lebih mudah dan aman.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Metode Bentuk Visual</h3>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-medium text-green-800 mb-2">Ubah Angka Menjadi Bentuk Visual</h4>
              <p className="text-green-700 text-sm mb-3">
                Teknik ini mengubah angka menjadi bentuk visual yang lebih mudah diingat.
              </p>
              
              <div className="grid grid-cols-5 gap-2 mb-4">
                <div className="bg-white p-2 rounded text-center">
                  <div className="text-green-800 font-bold">1</div>
                  <div className="text-xs text-green-600">Pensil</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="text-green-800 font-bold">2</div>
                  <div className="text-xs text-green-600">Angsa</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="text-green-800 font-bold">3</div>
                  <div className="text-xs text-green-600">Hati</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="text-green-800 font-bold">4</div>
                  <div className="text-xs text-green-600">Kursi</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="text-green-800 font-bold">5</div>
                  <div className="text-xs text-green-600">Kait</div>
                </div>
              </div>
              
              <p className="text-green-700 text-sm mb-3">
                Contoh: Password "1234" bisa diingat sebagai cerita "Pensil Angsa Hati Kursi".
                Visualisasikan pensil yang digunakan oleh angsa untuk menggambar hati di atas kursi.
              </p>
              
              <div className="bg-white p-3 rounded-lg">
                <h5 className="text-sm font-medium text-green-800 mb-2">Latihan</h5>
                <p className="text-xs text-green-700 mb-2">
                  Buat cerita visual untuk password berikut: "5278"
                </p>
                <textarea 
                  className="w-full px-3 py-2 text-sm border rounded"
                  rows="2"
                  placeholder="Tulis cerita visual Anda di sini..."
                ></textarea>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Teknik Membuat Password yang Aman dan Mudah Diingat</h3>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-800 mb-2">Gunakan Frasa atau Kalimat</h4>
                <p className="text-purple-700 text-sm">
                  Buat password dari huruf pertama setiap kata dalam frasa atau
                  kalimat yang bermakna bagi Anda. Contoh: "Saya lahir di Jakarta tanggal 5 Mei 1990" menjadi "SldJt5M1990".
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-800 mb-2">Sistem Basis dan Variasi</h4>
                <p className="text-purple-700 text-sm">
                  Buat password dasar yang kuat, lalu tambahkan variasi untuk setiap situs.
                  Contoh: Password dasar "JktB4ru!" dengan variasi Instagram: "JktB4ru!Ig".
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-800 mb-2">Peta Keyboard</h4>
                <p className="text-purple-700 text-sm">
                  Buat pola pada keyboard yang mudah diingat secara visual.
                  Misalnya pola seperti "Z" atau "N" pada keyboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Tips Mengingat Letak Barang</h2>
        <p className="text-slate-600 mb-6">
          Kehilangan barang-barang kecil seperti kunci, dompet, atau ponsel adalah
          pengalaman yang menjengkelkan. Berikut adalah teknik untuk mengingat di mana
          Anda meletakkan barang-barang Anda.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Teknik Merunut Kejadian</h3>
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h4 className="font-medium text-red-800 mb-2">Langkah-langkah Merunut Kejadian</h4>
              <ol className="space-y-2 text-red-700 text-sm pl-5 list-decimal">
                <li>
                  Tenangkan pikiran Anda terlebih dahulu. Kepanikan hanya akan
                  mempersulit mengingat.
                </li>
                <li>
                  Pikirkan kapan terakhir kali Anda ingat melihat atau menggunakan barang tersebut.
                </li>
                <li>
                  Rekonstruksi langkah-langkah yang Anda ambil sejak saat itu.
                  Visualisasikan setiap gerakan dengan detail.
                </li>
                <li>
                  Bayangkan apa yang Anda lakukan dengan barang tersebut pada setiap langkah.
                </li>
                <li>
                  Periksa tempat-tempat yang Anda visualisasikan, bahkan jika
                  tampaknya tidak mungkin.
                </li>
              </ol>
              
              <div className="mt-4 bg-white p-3 rounded-lg">
                <h5 className="text-sm font-medium text-red-800 mb-2">Latihan Merunut</h5>
                <div className="space-y-2">
                  <div>
                    <label className="block text-xs text-red-700 mb-1">
                      Terakhir kali saya melihat barang tersebut:
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 text-sm border rounded"
                      placeholder="Misalnya: Di meja kerja saat menerima telepon"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs text-red-700 mb-1">
                      Setelah itu saya melakukan:
                    </label>
                    <textarea 
                      className="w-full px-3 py-2 text-sm border rounded"
                      rows="2"
                      placeholder="Urutan aktivitas setelah terakhir kali melihat barang"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-xs text-red-700 mb-1">
                      Kemungkinan lokasi barang:
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 text-sm border rounded"
                      placeholder="Tempat-tempat yang mungkin berdasarkan runutanmu"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Teknik Preventif</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Tempat Khusus</h4>
                <p className="text-blue-700 text-sm">
                  Tetapkan tempat khusus untuk barang-barang penting dan selalu
                  kembalikan ke tempat yang sama. Misalnya, mangkuk dekat pintu untuk kunci.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Verbalisasi</h4>
                <p className="text-blue-700 text-sm">
                  Saat meletakkan barang di tempat yang tidak biasa, ucapkan dengan
                  keras tempat Anda meletakkannya. Mengucapkan dengan keras meningkatkan ingatan.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Asosiasi Visual</h4>
                <p className="text-blue-700 text-sm">
                  Buat asosiasi visual yang tidak biasa. Misalnya, jika Anda meletakkan
                  kunci di laci dapur, bayangkan kunci tersebut berukuran raksasa menari di atas meja dapur.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Teknologi</h4>
                <p className="text-blue-700 text-sm">
                  Gunakan pelacak Bluetooth kecil untuk barang-barang penting seperti
                  kunci dan dompet. Aplikasi di ponsel Anda dapat membantu menemukan barang yang terpasang pelacak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}