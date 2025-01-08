import React from 'react';
import { Code2, Laptop, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('about.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code2 size={32} />}
            title={t('about.cleanCode.title')}
            description={t('about.cleanCode.description')}
          />
          <FeatureCard
            icon={<Laptop size={32} />}
            title={t('about.responsive.title')}
            description={t('about.responsive.description')}
          />
          <FeatureCard
            icon={<Rocket size={32} />}
            title={t('about.performance.title')}
            description={t('about.performance.description')}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
    <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);