import React, { FormEvent, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('');
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      setStatus('sending');
      const response = await fetch("https://formsubmit.co/ajax/viktor.rudi.wolf@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...Object.fromEntries(formData),
          _captcha: true,
          _template: 'table'
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        console.error('Form submission error:', data);
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('contact.title')}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('contact.getInTouch')}</h3>
              <div className="space-y-4">
                <ContactInfo
                  icon={<Mail />}
                  text="viktor.rudi.wolf@gmail.com"
                  href="mailto:viktor.rudi.wolf@gmail.com"
                />
                <ContactInfo
                  icon={<Phone />}
                  text="+7 (707) 864-48-32"
                  href="tel:+7 (707) 864-48-32"
                />
                <ContactInfo
                  icon={<MapPin />}
                  text="Kazakhstan, Karaganda"
                />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder={t('contact.name')}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={t('contact.email')}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <textarea
                name="message"
                required
                placeholder={t('contact.message')}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-900"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                {t('contact.send')}
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center">{t('contact.success')}</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">{t('contact.error')}</p>
              )}
              {status === 'sending' && (
                <p className="text-blue-600 text-center">{t('contact.sending')}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) => (
  <div className="flex items-center space-x-3">
    <div className="text-gray-600">{icon}</div>
    {href ? (
      <a href={href} className="text-gray-600 hover:text-gray-900">
        {text}
      </a>
    ) : (
      <span className="text-gray-600">{text}</span>
    )}
  </div>
);