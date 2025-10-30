import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

import baconMisterBeef from "@/assets/products/bacon-mister-beef.jpg";
import creamCheeseBalde from "@/assets/products/cream-cheese-balde.png";
import creamCheeseBisnaga15 from "@/assets/products/cream-cheese-bisnaga-1-5kg.png";
import creamCheeseBisnaga400 from "@/assets/products/cream-cheese-bisnaga-400g.png";
import creamCheeseLight from "@/assets/products/cream-cheese-light-150g.png";
import creamCheeseTradicional150 from "@/assets/products/cream-cheese-tradicional-150g.png";
import creamCheeseTradicional400 from "@/assets/products/cream-cheese-tradicional-400g.png";
import cremeRicota from "@/assets/products/creme-ricota-light.png";
import doceLeiteCoco from "@/assets/products/doce-leite-coco.png";
import doceLeite from "@/assets/products/doce-leite.png";
import doceLeite800 from "@/assets/products/doce-leite-800g.png";
import fondueQueijo from "@/assets/products/fondue-queijo.png";
import goiabada250 from "@/assets/products/goiabada-250g.jpg";
import goiabada500 from "@/assets/products/goiabada-500g.jpg";
import gorduraVegetal from "@/assets/products/gordura-vegetal.jpg";
import manteigna from "@/assets/products/manteiga-president.png";
import molhoAmerican from "@/assets/products/molho-american-cheese.png";
import molhoCheddarDefumado from "@/assets/products/molho-cheddar-defumado.png";
import molhoCheddar220 from "@/assets/products/molho-cheddar-220g.png";
import molhoCheddarBisnaga from "@/assets/products/molho-cheddar-bisnaga-1-5kg.png";
import papadaSuina from "@/assets/products/papada-suina-mister-beef.jpg";
import pickledJalapeno from "@/assets/products/pickled-jalapeno-mccoys.jpg";
import presuntoCru from "@/assets/products/presunto-cru-vito-balducci.png";
import queijoBrieAuBleu from "@/assets/products/queijo-brie-au-bleu-ile-de-france.png";
import queijoPetitBrie from "@/assets/products/queijo-petit-brie-ile-de-france.png";
import queijoBriePolenghiForma from "@/assets/products/queijo-brie-polenghi-forma.png";
import queijoBriePolenghiFracao from "@/assets/products/queijo-brie-polenghi-fracao.png";
import queijoCamembertIle from "@/assets/products/queijo-camembert-ile-de-france.png";
import queijoCamembertPolenghi from "@/assets/products/queijo-camembert-polenghi.png";
import queijoCheddarFatiado1136 from "@/assets/products/queijo-cheddar-fatiado-1-136kg.png";
import queijoCheddarFatiado2270 from "@/assets/products/queijo-cheddar-fatiado-2-270kg.png";
import queijoCoalho from "@/assets/products/queijo-coalho-polenghi.png";
import queijoAperifraisCote from "@/assets/products/queijo-aperifrais-cote-azur.png";
import queijoAperifraisProvence from "@/assets/products/queijo-aperifrais-provence.png";

const products = [
  { id: 1, image: baconMisterBeef, name: "Bacon Mister Beef Extra Fino" },
  { id: 2, image: creamCheeseBalde, name: "Cream Cheese Polenghi Balde 3,6kg" },
  { id: 3, image: creamCheeseBisnaga15, name: "Cream Cheese Polenghi Bisnaga 1,5kg" },
  { id: 4, image: creamCheeseBisnaga400, name: "Cream Cheese Polenghi Bisnaga 400g" },
  { id: 5, image: creamCheeseLight, name: "Cream Cheese Polenghi Light 150g" },
  { id: 6, image: creamCheeseTradicional150, name: "Cream Cheese Polenghi Tradicional 150g" },
  { id: 7, image: creamCheeseTradicional400, name: "Cream Cheese Polenghi Tradicional 400g" },
  { id: 8, image: cremeRicota, name: "Creme de Ricota Polenghi Light 150g" },
  { id: 9, image: doceLeiteCoco, name: "Doce de Leite com Coco Viçosa 400g" },
  { id: 10, image: doceLeite, name: "Doce de Leite Viçosa 400g" },
  { id: 11, image: doceLeite800, name: "Doce de Leite Viçosa 800g" },
  { id: 12, image: fondueQueijo, name: "Fondue de Queijo Polenghi 400g" },
  { id: 13, image: goiabada250, name: "Goiabada Cascão Zélia 250g" },
  { id: 14, image: goiabada500, name: "Goiabada Cascão Zélia 500g" },
  { id: 15, image: gorduraVegetal, name: "Gordura Vegetal Coamo Fry 400 14,5kg" },
  { id: 16, image: manteigna, name: "Manteiga Extra sem Sal President 5kg" },
  { id: 17, image: molhoAmerican, name: "Molho American Cheese Polenghi 1,01kg" },
  { id: 18, image: molhoCheddarDefumado, name: "Molho Cheddar Defumado Polenghi 1,01kg" },
  { id: 19, image: molhoCheddar220, name: "Molho Cheddar Polenghi 220g" },
  { id: 20, image: molhoCheddarBisnaga, name: "Molho Cheddar Polenghi Bisnaga 1,5kg" },
  { id: 21, image: papadaSuina, name: "Papada Suína Defumada Fatiada Mister Beef 1kg" },
  { id: 22, image: pickledJalapeno, name: "Pickled Jalapeños McCoy's Balde 2,2kg" },
  { id: 23, image: presuntoCru, name: "Presunto Cru Fatiado Vito Balducci 500g" },
  { id: 24, image: queijoBrieAuBleu, name: "Queijo Brie Au Bleu Ile de France 125g" },
  { id: 25, image: queijoPetitBrie, name: "Queijo Petit Brie Ile de France 125g" },
  { id: 26, image: queijoBriePolenghiForma, name: "Queijo Brie Polenghi Forma 1kg" },
  { id: 27, image: queijoBriePolenghiFracao, name: "Queijo Brie Polenghi Fração 125g" },
  { id: 28, image: queijoCamembertIle, name: "Queijo Camembert Ile de France 125g" },
  { id: 29, image: queijoCamembertPolenghi, name: "Queijo Camembert Polenghi 125g" },
  { id: 30, image: queijoCheddarFatiado1136, name: "Queijo Cheddar Fatiado Polenghi 1,136kg cx c/ 04 und" },
  { id: 31, image: queijoCheddarFatiado2270, name: "Queijo Cheddar Fatiado Polenghi 2,270kg cx c/ 08 und" },
  { id: 32, image: queijoCoalho, name: "Queijo Coalho Polenghi" },
  { id: 33, image: queijoAperifraisCote, name: "Queijo Cremoso Aperifrais Côte d'Azur Ile de France 100g" },
  { id: 34, image: queijoAperifraisProvence, name: "Queijo Cremoso Aperifrais Provence Ile de France 100g" },
];

const ProductCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; name: string } | null>(null);

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card 
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setSelectedImage({ image: product.image, name: product.name })}
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="w-full h-64 flex items-center justify-center mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <p className="text-center text-sm font-semibold text-foreground line-clamp-2">
                      {product.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Modal de Expansão */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogTitle className="sr-only">
            {selectedImage?.name}
          </DialogTitle>
          {selectedImage && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-full flex items-center justify-center bg-muted/30 rounded-lg p-8">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-foreground">
                {selectedImage.name}
              </h3>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCarousel;
