import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const products = [
  { id: 1, image: baconMisterBeef, name: "Bacon Mister Beef" },
  { id: 2, image: creamCheeseBalde, name: "Cream Cheese Polenghi Balde 3,6kg" },
  { id: 3, image: creamCheeseBisnaga15, name: "Cream Cheese Polenghi Bisnaga 1,5kg" },
  { id: 4, image: creamCheeseBisnaga400, name: "Cream Cheese Polenghi Bisnaga 400g" },
  { id: 5, image: creamCheeseLight, name: "Cream Cheese Polenghi Light 150g" },
  { id: 6, image: creamCheeseTradicional150, name: "Cream Cheese Polenghi Tradicional 150g" },
  { id: 7, image: creamCheeseTradicional400, name: "Cream Cheese Polenghi Tradicional 400g" },
  { id: 8, image: cremeRicota, name: "Creme de Ricota Polenghi Light 150g" },
  { id: 9, image: doceLeiteCoco, name: "Doce de Leite com Coco Viçosa 400g" },
  { id: 10, image: doceLeite, name: "Doce de Leite Viçosa 400g" },
];

const ProductCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-[0_0_100%] min-w-0 px-4"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                <div className="w-full h-80 flex items-center justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-center text-lg font-semibold text-foreground">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/95 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
        onClick={scrollPrev}
        aria-label="Produto anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/95 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
        onClick={scrollNext}
        aria-label="Próximo produto"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ProductCarousel;
