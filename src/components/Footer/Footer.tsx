import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a href="https://github.com/19rudigans94" className="hover:text-gray-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/viktor-rudi-b2b852238" className="hover:text-gray-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:viktor.rudi.wolf@gmail.com" className="hover:text-gray-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rudi Viktor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};