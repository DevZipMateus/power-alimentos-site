import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(43) 98855-7520",
      link: "https://wa.me/5543988557520"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "power.alimentos.ldn@gmail.com",
      link: "mailto:power.alimentos.ldn@gmail.com"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Ametista, 558 - Londrina - PR - CEP 86030-140",
      link: "https://www.google.com/maps/search/?api=1&query=Rua+Ametista,+558+-+Londrina+-+PR"
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a Sexta: 08h às 18h | Sab/Domingo: Fechado",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você e levar qualidade para o seu negócio. 
              Fale conosco e descubra como podemos ser seu parceiro de sucesso.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Informações de contato */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to action */}
            <div className="flex flex-col justify-center">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Pronto para começar?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Entre em contato conosco pelo WhatsApp e converse com nossa equipe. 
                  Estamos prontos para entender suas necessidades e oferecer as melhores soluções 
                  em queijos e embutidos para o seu negócio.
                </p>
                <div className="space-y-4">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="https://wa.me/5543988557520" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-5 w-5" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a 
                      href="https://www.instagram.com/distribuidorapoweralimentos?igsh=cTMyYzVyNTdlM2hv&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Instagram className="mr-2 h-5 w-5" />
                      Siga no Instagram
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Informações adicionais */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  CNPJ: 09.091.444/0001-54
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
