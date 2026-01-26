import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Download, FileText } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Merci ${formData.name}, votre message a été envoyé (simulation).`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Info Side */}
        <FadeIn className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-[0.2em] mb-6 text-text-primary dark:text-white">Contact</h1>
            <p className="text-anthracite dark:text-text-secondary-dark leading-relaxed">
              Pour toute demande concernant l'acquisition d'une œuvre, une exposition ou une visite d'atelier, n'hésitez pas à me contacter.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-sand/20 rounded-full text-wood">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-anthracite dark:text-text-secondary-dark">Email</p>
                <p className="text-lg text-text-primary dark:text-white">paolobosi63@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-sand/20 rounded-full text-wood">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-anthracite dark:text-text-secondary-dark">Atelier</p>
                <p className="text-lg text-text-primary dark:text-white">Avenue Jean Gerbino, 06220 Vallauris</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-sand/20 rounded-full text-wood">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-anthracite dark:text-text-secondary-dark">Téléphone</p>
                <p className="text-lg text-text-primary dark:text-white">+33 (0)6 XX XX XX XX</p>
              </div>
            </div>
          </div>

          {/* Catalog Download Section */}
          <div className="pt-8 mt-4 border-t border-wood/10">
            <h3 className="text-sm font-bold uppercase tracking-wide text-anthracite dark:text-text-secondary-dark mb-6">Documentation</h3>
            <a 
              href="/Paolo_Bosi_Catalogue_2013.pdf" 
              download="Paolo_Bosi_La_Fracture_Silencieuse.pdf"
              className="group flex items-center gap-5 p-5 border border-wood/30 hover:border-wood bg-white/40 dark:bg-white/5 hover:bg-wood/5 transition-all duration-300 rounded-sm shadow-sm hover:shadow-md"
            >
              <div className="p-3 bg-wood/10 text-wood rounded-full group-hover:bg-wood group-hover:text-white transition-colors duration-300">
                <FileText size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold uppercase tracking-wide text-text-primary dark:text-white group-hover:text-wood dark:group-hover:text-primary transition-colors">La Fracture Silencieuse</span>
                <span className="text-xs text-anthracite/70 dark:text-gray-400 mt-1 flex items-center gap-2">
                   Catalogue d'exposition <Download size={12} />
                </span>
              </div>
            </a>
          </div>

        </FadeIn>

        {/* Form Side */}
        <FadeIn delay={200} className="bg-white/50 dark:bg-gray-800/50 p-8 shadow-xl rounded-lg border border-wood/10 dark:border-gray-700 h-fit">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-wood dark:text-text-secondary-dark">Nom</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-background-light dark:bg-background-dark border border-wood/30 dark:border-gray-600 focus:border-primary outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-wood dark:text-text-secondary-dark">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-background-light dark:bg-background-dark border border-wood/30 dark:border-gray-600 focus:border-primary outline-none transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-wood dark:text-text-secondary-dark">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-background-light dark:bg-background-dark border border-wood/30 dark:border-gray-600 focus:border-primary outline-none transition-colors resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button type="submit" className="mt-2 w-full bg-primary text-white py-4 font-bold uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Envoyer
            </button>
          </form>
        </FadeIn>
      </div>

      {/* Return Home CTA */}
      <FadeIn className="mt-16">
        <Link to="/" className="text-xs uppercase tracking-[0.2em] text-anthracite dark:text-text-secondary-dark hover:text-primary dark:hover:text-white transition-colors border-b border-transparent hover:border-primary pb-1">
          Retour à l'accueil
        </Link>
      </FadeIn>
    </div>
  );
};

export default Contact;