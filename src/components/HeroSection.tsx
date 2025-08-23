import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Eye, Crown, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(139, 69, 19, 0.8), rgba(160, 82, 45, 0.7)), url('/hero-bg.png')`
          }}
        />
      
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              SSR
            </span>
            <br />
            <span className="text-4xl md:text-5xl">Majapahit</span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-yellow-100 mb-4 leading-relaxed">
              Perusahaan Kontraktor Berfokus Pembuatan Ornamen, Pagar & Gapura Bernuansa Kerajaan Majapahit
            </p>
            <p className="text-lg text-yellow-200 leading-relaxed">
              Kami menghadirkan kembali seni rupa arsitektur klasik dengan sentuhan modern minimalis
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8 text-yellow-200">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">100+ Proyek</span>
            </div>
            <div className="w-px h-6 bg-yellow-400/30" />
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Desain Eksklusif</span>
            </div>
            <div className="w-px h-6 bg-yellow-400/30" />
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">Garansi Kualitas</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg smooth-transition transform hover:scale-105 gold-shadow"
              onClick={() => window.open('https://wa.me/6285714548773?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20untuk%20proyek%20ornamen%20Majapahit', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Konsultasi Gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg smooth-transition transform hover:scale-105 bg-black/20 backdrop-blur-sm"
              onClick={() => scrollToSection('gallery')}
            >
              <Eye className="w-5 h-5 mr-2" />
              Lihat Portofolio
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
