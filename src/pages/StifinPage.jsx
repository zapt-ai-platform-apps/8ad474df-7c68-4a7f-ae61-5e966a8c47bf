import React, { useState } from 'react';

export default function StifinPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  
  const questions = [
    {
      text: "Saat menghadapi masalah, Anda cenderung:",
      options: [
        "Memperhatikan detail dan fakta secara mendalam",
        "Memikirkan solusi secara sistematis dan logis",
        "Mencari pola dan kemungkinan baru",
        "Mempertimbangkan perasaan semua orang yang terlibat",
        "Bereaksi secara spontan berdasarkan insting"
      ]
    },
    {
      text: "Saat belajar hal baru, Anda lebih suka:",
      options: [
        "Praktek langsung dengan contoh nyata",
        "Mempelajari teori dan konsep dasarnya",
        "Menjelajahi berbagai kemungkinan dan ide kreatif",
        "Diskusi kelompok dan berbagi pengalaman",
        "Langsung pada intinya dan aplikasi praktisnya"
      ]
    },
    {
      text: "Dalam situasi sosial, Anda biasanya:",
      options: [
        "Mengamati dan memperhatikan detail interaksi",
        "Menganalisis dinamika kelompok dan pola interaksi",
        "Mencari kemungkinan percakapan dan hubungan baru",
        "Fokus pada bagaimana perasaan orang lain",
        "Bertindak berdasarkan apa yang terasa benar saat itu"
      ]
    },
    {
      text: "Saat membuat keputusan penting, Anda mengandalkan:",
      options: [
        "Fakta dan pengalaman masa lalu",
        "Analisis logis dan pemikiran sistematis",
        "Visi tentang masa depan dan kemungkinan",
        "Nilai pribadi dan dampak pada orang lain",
        "Firasat atau perasaan kuat tentang apa yang benar"
      ]
    },
    {
      text: "Saat bekerja dalam tim, Anda biasanya:",
      options: [
        "Memastikan detail pekerjaan terselesaikan dengan benar",
        "Mengorganisir dan membuat struktur yang efisien",
        "Menawarkan ide dan perspektif baru",
        "Memastikan semua anggota tim merasa dihargai",
        "Memimpin secara alami dengan pendekatan langsung"
      ]
    }
  ];
  
  const intelligenceTypes = {
    S: {
      name: "Sensing",
      description: "Anda memiliki kecerdasan inderawi yang kuat. Anda sangat memperhatikan detail, fakta konkret, dan pengalaman indrawi. Anda praktis, teliti, dan berorientasi pada pengalaman langsung.",
      learning: "Cara belajar terbaik untuk tipe Sensing adalah melalui latihan praktik dan menghafal. Anda belajar paling baik ketika dapat melihat aplikasi langsung dari apa yang dipelajari."
    },
    T: {
      name: "Thinking",
      description: "Anda memiliki kecerdasan berpikir yang kuat. Anda sangat analitis, logis, dan objektif. Anda cenderung membuat keputusan berdasarkan logika dan prinsip yang konsisten.",
      learning: "Cara belajar terbaik untuk tipe Thinking adalah dengan membuat skema, diagram, dan struktur logis. Anda belajar paling baik ketika materi disajikan secara sistematis."
    },
    I: {
      name: "Intuiting",
      description: "Anda memiliki kecerdasan intuisi yang kuat (indera keenam). Anda melihat pola, hubungan, dan kemungkinan masa depan. Anda inovatif, kreatif, dan berorientasi pada gambaran besar.",
      learning: "Cara belajar terbaik untuk tipe Intuiting adalah melalui eksplorasi kreatif dan berkreasi. Anda belajar paling baik ketika dapat melihat hubungan antar konsep dan aplikasi masa depan."
    },
    F: {
      name: "Feeling",
      description: "Anda memiliki kecerdasan perasaan yang kuat. Anda sangat memahami nilai-nilai, emosi, dan kebutuhan orang. Anda empatik, harmonis, dan berorientasi pada hubungan interpersonal.",
      learning: "Cara belajar terbaik untuk tipe Feeling adalah melalui diskusi kelompok dan interaksi. Anda belajar paling baik dalam lingkungan yang mendukung dan kolaboratif."
    },
    In: {
      name: "Instinct",
      description: "Anda memiliki kecerdasan naluri yang kuat (indera ketujuh). Anda langsung mengetahui apa yang harus dilakukan tanpa analisis panjang. Anda responsif, spontan, dan berorientasi pada tindakan cepat.",
      learning: "Cara belajar terbaik untuk tipe Instinct adalah melalui pendekatan deduktif. Anda belajar paling baik ketika mendapatkan gambaran besar terlebih dahulu, lalu detailnya."
    }
  };
  
  const handleOptionSelect = (optionIndex) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const counts = [0, 0, 0, 0, 0]; // S, T, I, F, In
      newAnswers.forEach(answer => counts[answer]++);
      
      // Find max
      let maxIndex = 0;
      for (let i = 1; i < counts.length; i++) {
        if (counts[i] > counts[maxIndex]) {
          maxIndex = i;
        }
      }
      
      // Convert to type
      const types = ['S', 'T', 'I', 'F', 'In'];
      setResult(types[maxIndex]);
    }
  };
  
  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Pengembangan Diri (STIFIn)</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Kenali mesin kecerdasan Anda dan cara terbaik untuk mengoptimalkannya
          berdasarkan metode STIFIn (Sensing, Thinking, Intuiting, Feeling, Instinct).
        </p>
      </section>
      
      {!quizStarted && !result ? (
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Kuis Kecerdasan STIFIn</h2>
          <p className="text-slate-600 mb-6">
            Jawab beberapa pertanyaan sederhana untuk mengidentifikasi kecenderungan mesin kecerdasan Anda.
            Hasil kuis ini akan memberikan wawasan tentang cara Anda berpikir, belajar, dan berinteraksi.
          </p>
          <button 
            onClick={() => setQuizStarted(true)}
            className="btn btn-primary"
          >
            Mulai Kuis
          </button>
        </section>
      ) : quizStarted && !result ? (
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-xl font-bold mb-6 text-slate-800">
            Pertanyaan {currentQuestion + 1} dari {questions.length}
          </h2>
          
          <div className="mb-8">
            <h3 className="text-lg mb-4 text-slate-700">{questions[currentQuestion].text}</h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className="w-full text-left p-3 border border-slate-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-200 transition-colors cursor-pointer"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-slate-500">
              {currentQuestion + 1} dari {questions.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={resetQuiz}
                className="btn btn-secondary"
              >
                Batalkan
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Hasil Kuis STIFIn</h2>
          
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-6">
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">
              Tipe Kecerdasan Dominan Anda: {intelligenceTypes[result].name}
            </h3>
            <p className="text-indigo-700 mb-4">
              {intelligenceTypes[result].description}
            </p>
            <h4 className="font-medium text-indigo-800 mb-1">Cara Belajar Optimal:</h4>
            <p className="text-indigo-700">
              {intelligenceTypes[result].learning}
            </p>
          </div>
          
          <button
            onClick={resetQuiz}
            className="btn btn-primary"
          >
            Ambil Kuis Lagi
          </button>
        </section>
      )}
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Profil Mesin Kecerdasan</h2>
        <p className="text-slate-600 mb-6">
          Setiap orang memiliki mesin kecerdasan dominan yang memengaruhi cara mereka berpikir dan bertindak.
          Pahami karakteristik masing-masing mesin kecerdasan di bawah ini.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Sensing (S)</h3>
            <p className="text-blue-700 text-sm">
              Kecerdasan inderawi yang memperhatikan detail, fakta konkret, dan pengalaman langsung.
              Individu dengan tipe S sangat praktis, teliti, dan berorientasi pada realitas.
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h3 className="font-semibold text-green-800 mb-2">Thinking (T)</h3>
            <p className="text-green-700 text-sm">
              Kecerdasan berpikir yang analitis, logis, dan objektif.
              Individu dengan tipe T membuat keputusan berdasarkan logika dan prinsip yang konsisten.
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h3 className="font-semibold text-purple-800 mb-2">Intuiting (I)</h3>
            <p className="text-purple-700 text-sm">
              Kecerdasan indera keenam yang melihat pola, hubungan, dan kemungkinan masa depan.
              Individu dengan tipe I inovatif, kreatif, dan berorientasi pada gambaran besar.
            </p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h3 className="font-semibold text-red-800 mb-2">Feeling (F)</h3>
            <p className="text-red-700 text-sm">
              Kecerdasan perasaan yang memahami nilai-nilai, emosi, dan kebutuhan orang.
              Individu dengan tipe F empatik, harmonis, dan berorientasi pada hubungan interpersonal.
            </p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <h3 className="font-semibold text-amber-800 mb-2">Instinct (In)</h3>
            <p className="text-amber-700 text-sm">
              Kecerdasan indera ketujuh yang langsung mengetahui apa yang harus dilakukan.
              Individu dengan tipe In responsif, spontan, dan berorientasi pada tindakan cepat.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Teori Sirkulasi STIFIn</h2>
        <p className="text-slate-600 mb-6">
          Teori sirkulasi STIFIn menjelaskan pola hubungan saling mendukung dan saling menaklukkan antar tipe kecerdasan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Hubungan Saling Mendukung</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-1 mr-2 text-xs font-medium">S</span>
                <span>mendukung</span>
                <span className="bg-green-100 text-green-800 rounded-full px-2 py-1 mx-2 text-xs font-medium">T</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 rounded-full px-2 py-1 mr-2 text-xs font-medium">T</span>
                <span>mendukung</span>
                <span className="bg-amber-100 text-amber-800 rounded-full px-2 py-1 mx-2 text-xs font-medium">In</span>
              </li>
              <li className="flex items-center">
                <span className="bg-amber-100 text-amber-800 rounded-full px-2 py-1 mr-2 text-xs font-medium">In</span>
                <span>mendukung</span>
                <span className="bg-purple-100 text-purple-800 rounded-full px-2 py-1 mx-2 text-xs font-medium">I</span>
              </li>
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 rounded-full px-2 py-1 mr-2 text-xs font-medium">I</span>
                <span>mendukung</span>
                <span className="bg-red-100 text-red-800 rounded-full px-2 py-1 mx-2 text-xs font-medium">F</span>
              </li>
              <li className="flex items-center">
                <span className="bg-red-100 text-red-800 rounded-full px-2 py-1 mr-2 text-xs font-medium">F</span>
                <span>mendukung</span>
                <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-1 mx-2 text-xs font-medium">S</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Hubungan Saling Menaklukkan</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-1 mr-2 text-xs font-medium">S</span>
                <span>mengalahkan</span>
                <span className="bg-purple-100 text-purple-800 rounded-full px-2 py-1 mx-2 text-xs font-medium">I</span>
              </li>
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 rounded-full px-2 py-1 mr-2 text-xs font-medium">I</span>
                <span>mengalahkan</span>
                <span className="bg-red-100 text-red-800 rounded-full px-2 py-1 mx-2 text-xs font-medium">F</span>
              </li>
              <li className="flex items-center">
                <span className="bg-red-100 text-red-800 rounded-full px-2 py-1 mr-2 text-xs font-medium">F</span>
                <span>mengalahkan</span>
                <span className="bg-green-100 text-green-800 rounded-full px-2 py-1 mx-2 text-xs font-medium">T</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 rounded-full px-2 py-1 mr-2 text-xs font-medium">T</span>
                <span>mengalahkan</span>
                <span className="bg-amber-100 text-amber-800 rounded-full px-2 py-1 mx-2 text-xs font-medium">In</span>
              </li>
              <li className="flex items-center">
                <span className="bg-amber-100 text-amber-800 rounded-full px-2 py-1 mr-2 text-xs font-medium">In</span>
                <span>mengalahkan</span>
                <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-1 mx-2 text-xs font-medium">S</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Wawasan Respon Golongan Darah</h2>
        <p className="text-slate-600 mb-6">
          Dalam teori STIFIn, golongan darah juga dapat memengaruhi respon sesaat pada stimulus spontan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h3 className="font-semibold text-red-800 mb-2">Golongan Darah O</h3>
            <p className="text-red-700 text-sm">
              Cenderung F (Feeling) dalam respon spontan.
              Lebih responsif terhadap aspek emosional dan hubungan interpersonal.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Golongan Darah A</h3>
            <p className="text-blue-700 text-sm">
              Cenderung T (Thinking) dalam respon spontan.
              Lebih responsif terhadap logika dan analisis sistematis.
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h3 className="font-semibold text-purple-800 mb-2">Golongan Darah AB</h3>
            <p className="text-purple-700 text-sm">
              Cenderung S (Sensing) dalam respon spontan.
              Lebih responsif terhadap detail dan fakta konkret.
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h3 className="font-semibold text-green-800 mb-2">Golongan Darah B</h3>
            <p className="text-green-700 text-sm">
              Cenderung I (Intuiting) dalam respon spontan.
              Lebih responsif terhadap pola dan kemungkinan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}