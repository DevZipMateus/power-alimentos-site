import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualidade",
      description: "Entregar sempre o melhor produto, com frescor e procedência garantida"
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Crescer junto com nossos clientes, apoiando seus resultados"
    },
    {
      icon: TrendingUp,
      title: "Agilidade",
      description: "Atuar com eficiência em cada etapa, da venda à entrega"
    },
    {
      icon: Target,
      title: "Comprometimento",
      description: "Cumprir o que prometemos, com responsabilidade e respeito"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre nós
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          {/* Nossa História */}
          <div className="mb-16 bg-background rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Nossa história
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Power Alimentos nasceu em Londrina com um propósito claro: levar qualidade, sabor e confiança 
              para quem faz da gastronomia o seu negócio. Atendemos hamburguerias, pizzarias e restaurantes, 
              hotéis e mercearias que buscam produtos de alto padrão — produtos selecionados, que fazem a 
              diferença no resultado final de cada prato.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Desde o início, acreditamos que o sucesso vem de parcerias verdadeiras. Por isso, crescemos lado 
              a lado com nossos clientes, oferecendo atendimento próximo, entregas rápidas e produtos que 
              realmente entregam performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com estrutura própria de câmara fria e logística ágil, mantemos o compromisso de garantir 
              segurança e qualidade em cada entrega. Mais do que uma distribuidora, somos apaixonados por 
              servir. Nosso trabalho é impulsionar o crescimento dos nossos parceiros, ajudando cada cliente 
              a alcançar o melhor sabor — e o melhor resultado — todos os dias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Visão */}
            <Card className="p-8 hover:shadow-xl transition-shadow bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em distribuição de queijos e embutidos no Paraná, reconhecida pela qualidade 
                dos produtos, eficiência logística e relacionamento próximo com clientes e fornecedores. 
                Crescer de forma sustentável, expandindo presença e construindo parcerias de longo prazo.
              </p>
            </Card>

            {/* Missão */}
            <Card className="p-8 hover:shadow-xl transition-shadow bg-secondary/5 border-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer produtos de alta qualidade e atendimento personalizado para o mercado Food Service, 
                garantindo confiança, agilidade e resultados reais aos nossos parceiros. Nosso compromisso é 
                fortalecer os negócios dos clientes, levando sabor e excelência a cada entrega.
              </p>
            </Card>
          </div>

          {/* Valores */}
          <div>
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">
              Nossos valores
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
