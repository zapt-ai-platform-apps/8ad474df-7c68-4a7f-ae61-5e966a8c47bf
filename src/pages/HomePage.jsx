import React from 'react';
import ModuleCard from '../components/common/ModuleCard';
import { 
  MegaphoneIcon, 
  AcademicCapIcon, 
  HeartIcon, 
  RocketLaunchIcon, 
  LightBulbIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const modules = [
    {
      title: 'Pemasaran & Periklanan',
      description: 'Strategi dan taktik untuk memasarkan bisnis Anda secara efektif.',
      icon: <MegaphoneIcon className="h-6 w-6" />,
      path: '/pemasaran',
      color: 'blue'
    },
    {
      title: 'Pengembangan Diri (STIFIn)',
      description: 'Kenali mesin kecerdasan Anda dan cara terbaik untuk mengoptimalkannya.',
      icon: <AcademicCapIcon className="h-6 w-6" />,
      path: '/stifin',
      color: 'purple'
    },
    {
      title: 'Spiritual & Mental',
      description: 'Kuatkan niat, tujuan, dan kesehatan mental Anda untuk kesuksesan.',
      icon: <HeartIcon className="h-6 w-6" />,
      path: '/spiritual',
      color: 'green'
    },
    {
      title: 'Aksi & Produktivitas',
      description: 'Strategi aksi dan produktivitas untuk mencapai tujuan Anda.',
      icon: <RocketLaunchIcon className="h-6 w-6" />,
      path: '/produktivitas',
      color: 'red'
    },
    {
      title: 'Peningkatan Daya Ingat',
      description: 'Tips praktis untuk meningkatkan ingatan Anda.',
      icon: <LightBulbIcon className="h-6 w-6" />,
      path: '/daya-ingat',
      color: 'amber'
    },
    {
      title: 'Strategi Penjualan',
      description: 'Teknik dan taktik untuk meningkatkan penjualan Anda.',
      icon: <CurrencyDollarIcon className="h-6 w-6" />,
      path: '/penjualan',
      color: 'indigo'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
          Asisten Sukses Terintegrasi
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Pendamping holistik Anda untuk mencapai kesuksesan dalam berbagai aspek kehidupan, 
          termasuk bisnis, pengembangan diri, dan spiritualitas.
        </p>
      </section>
      
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              icon={module.icon}
              path={module.path}
              color={module.color}
            />
          ))}
        </div>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Apa yang Membuat Asisten Sukses Berbeda?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-700">Pendekatan Holistik</h3>
            <p className="text-slate-600">
              Menggabungkan bisnis, pengembangan diri, dan spiritualitas untuk kesuksesan yang seimbang dan berkelanjutan.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-700">Berbasis Riset</h3>
            <p className="text-slate-600">
              Menggabungkan strategi dan prinsip praktis dari berbagai sumber terpercaya.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-700">Aplikasi Praktis</h3>
            <p className="text-slate-600">
              Berfokus pada tindakan nyata yang dapat diterapkan langsung dalam kehidupan sehari-hari.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-700">Personalisasi</h3>
            <p className="text-slate-600">
              Menyesuaikan rekomendasi dan pendekatan berdasarkan profil individu Anda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}