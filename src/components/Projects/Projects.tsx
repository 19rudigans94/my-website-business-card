import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: 'Project 1',
      description: 'A responsive web application built with React and TypeScript.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Project 2',
      description: 'An e-commerce platform with modern UI/UX design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      technologies: ['React', 'Redux', 'Node.js'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={githubUrl}
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <Github size={20} className="mr-1" />
            {t('projects.viewCode')}
          </a>
          <a
            href={liveUrl}
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ExternalLink size={20} className="mr-1" />
            {t('projects.viewDemo')}
          </a>
        </div>
      </div>
    </div>
  );
};