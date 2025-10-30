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
