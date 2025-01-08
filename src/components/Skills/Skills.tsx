import { skills } from '../../data/skills';
import { SkillBar } from './SkillBar';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('skills.title')}</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};