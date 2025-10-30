import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-foodservice.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 58, 93, 0.85), rgba(0, 58, 93, 0.85)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Power Alimentos Distribuidora
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Levamos o melhor do sabor para quem vive de servir bem
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/85 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Distribuidora de queijos e embutidos premium para hamburguerias, pizzarias, restaurantes, hotéis e mercearias. 
            Qualidade garantida, entrega rápida e atendimento personalizado em Londrina e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("products")}
            >
              Conheça nossos produtos
            </Button>
            <Button 
              variant="outlineLight" 
              size="lg"
              asChild
            >
              <a href="https://wa.me/5543988557520" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Fale no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
