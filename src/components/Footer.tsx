import { Phone, Mail, MapPin } from "lucide-react";
import powerLogo from "@/assets/logo-power.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img 
              src={powerLogo} 
              alt="Power Alimentos" 
              className="h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Distribuidora especializada em queijos e embutidos premium para o mercado Food Service.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <a 
                    href="tel:+5543988557520" 
                    className="hover:text-primary transition-colors"
                  >
                    (43) 98855-7520
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <a 
                    href="mailto:contato@poweralimentos.com.br" 
                    className="hover:text-primary transition-colors"
                  >
                    contato@poweralimentos.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Londrina, Paraná
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Power Alimentos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
