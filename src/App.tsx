import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProductGrid } from './components/ProductGrid';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isBordered>
        <NavbarBrand>
          <Icon icon="lucide:utensils" className="text-primary text-2xl mr-2" />
          <p className="font-bold text-inherit">Döner Shop</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Menu
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="primary" variant="flat">
              <Icon icon="lucide:shopping-cart" className="mr-2" />
              Cart (0)
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Döner Menu</h1>
        <ProductGrid />
      </main>

      <footer className="bg-content1 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Döner Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;