
import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import { allProducts } from '@/data/products';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  // Get best sellers and new arrivals
  const bestSellers = allProducts.filter(product => product.isBestSeller).slice(0, 4);
  const newArrivals = allProducts.filter(product => product.isNewArrival).slice(0, 4);
  const onSale = allProducts.filter(product => product.isOnSale).slice(0, 4);
  
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-racing">Best Sellers</h2>
          <Link to="/products?filter=bestsellers" className="text-primary hover:underline">View All</Link>
        </div>
        <ProductGrid products={bestSellers} />
      </div>
      
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-racing">New Arrivals</h2>
          <Link to="/products?filter=newarrivals" className="text-primary hover:underline">View All</Link>
        </div>
        <ProductGrid products={newArrivals} />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-racing">On Sale</h2>
          <Link to="/products?filter=onsale" className="text-primary hover:underline">View All</Link>
        </div>
        <ProductGrid products={onSale} />
      </div>
      
      <div className="text-center mt-10">
        <Button asChild>
          <Link to="/products">View All Products</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
