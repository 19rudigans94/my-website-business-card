import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HeroContent = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-3xl">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        {t('hero.title')}
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8">
        {t('hero.description')}
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {t('hero.viewWork')}
          <ArrowRight className="ml-2" size={20} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
        >
          {t('hero.contactMe')}
        </a>
      </div>
    </div>
  );
};