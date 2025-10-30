import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Phone } from "lucide-react";
import queijosImage from "@/assets/category-queijos.jpg";
import embutidosImage from "@/assets/category-embutidos.jpg";
import especialImage from "@/assets/category-especiais.jpg";

const Products = () => {
  const categories = [
    {
      title: "Queijos",
      image: queijosImage,
      products: [
        "Cheddar fatiado",
        "American cheese",
        "Mussarela",
        "Prato",
        "Parmesão",
        "Brie",
        "Gorgonzola",
        "Requeijão culinário",
        "Cream cheese"
      ]
    },
    {
      title: "Embutidos",
      image: embutidosImage,
      products: [
        "Bacon premium",
        "Presunto tipo parma",
        "Calabresa artesanal",
        "Salame",
        "Mortadela",
        "Linguiça"
      ]
    },
    {
      title: "Produtos especiais",
      image: especialImage,
      products: [
        "Pães artesanais",
        "Manteiga",
        "Gordura vegetal",
        "Pickles variados",
        "Goiabada cremosa",
        "Doce de leite",
        "Ingredientes complementares"
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos produtos
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trabalhamos com uma linha completa de queijos e embutidos selecionados, ideais para o mercado 
              Food Service. Nossos produtos são escolhidos com rigor, garantindo sabor, rendimento e 
              padronização para cozinhas profissionais que valorizam a qualidade.
            </p>
          </div>

          {/* Categorias */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.products.map((product, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <Package className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Diferenciais */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border-2 border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
              Por que escolher a Power Alimentos?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Produtos selecionados
                </h4>
                <p className="text-muted-foreground">
                  Escolhidos com rigor para garantir qualidade superior
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Entrega rápida
                </h4>
                <p className="text-muted-foreground">
                  Logística ágil e câmara fria própria
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Segurança garantida
                </h4>
                <p className="text-muted-foreground">
                  Armazenamento e transporte refrigerado
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button 
                variant="secondary" 
                size="lg"
                asChild
              >
                <a href="https://wa.me/5543988557520" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Solicite um orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
