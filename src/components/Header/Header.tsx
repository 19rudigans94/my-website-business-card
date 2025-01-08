import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-gray-800 cursor-pointer"
          >
            Rudi Viktor
          </Link>

          <nav className="hidden md:flex space-x-8">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <LanguageSwitcher />
            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 pt-4 pb-4">
              <NavLinks />
              <div className="flex justify-center space-x-4 pt-4">
                <LanguageSwitcher />
              </div>
              <div className="flex justify-center space-x-4">
                <SocialLinks />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks = () => {
  const { t } = useTranslation();
  
  return (
    <>
      {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          className="text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          {t(`nav.${section}`)}
        </Link>
      ))}
    </>
  );
};

const SocialLinks = () => (
  <>
    <a href="https://github.com/19rudigans94" className="text-gray-600 hover:text-gray-900">
      <Github size={20} />
    </a>
    <a href="https://www.linkedin.com/in/viktor-rudi-b2b852238" className="text-gray-600 hover:text-gray-900">
      <Linkedin size={20} />
    </a>
    <a href="mailto:viktor.rudi.wolf@gmail.com" className="text-gray-600 hover:text-gray-900">
      <Mail size={20} />
    </a>
  </>
);