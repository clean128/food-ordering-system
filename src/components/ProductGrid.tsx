import React from 'react';
import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const products = [
  { id: 1, name: "Classic Döner", price: 6.50, image: "https://img.heroui.chat/image/food?w=300&h=200&u=1" },
  { id: 2, name: "Chicken Döner", price: 7.00, image: "https://img.heroui.chat/image/food?w=300&h=200&u=2" },
  { id: 3, name: "Vegetarian Döner", price: 6.00, image: "https://img.heroui.chat/image/food?w=300&h=200&u=3" },
  { id: 4, name: "Falafel Wrap", price: 5.50, image: "https://img.heroui.chat/image/food?w=300&h=200&u=4" },
  { id: 5, name: "Mixed Grill Plate", price: 9.50, image: "https://img.heroui.chat/image/food?w=300&h=200&u=5" },
  { id: 6, name: "Lahmacun", price: 4.50, image: "https://img.heroui.chat/image/food?w=300&h=200&u=6" },
];

export const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="w-full">
          <CardBody className="p-0">
            <Image
              removeWrapper
              alt={product.name}
              className="w-full object-cover h-[200px]"
              src={product.image}
            />
          </CardBody>
          <CardFooter className="flex flex-col items-start">
            <h5 className="text-lg font-semibold">{product.name}</h5>
            <p className="text-default-500">{product.price.toFixed(2)} €</p>
            <Button color="primary" className="mt-2">
              <Icon icon="lucide:plus" className="mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};