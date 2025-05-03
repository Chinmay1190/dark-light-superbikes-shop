
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { Button } from '@/components/ui/button';

// Define images for category cards
const categoryImages = {
  "Sports": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3",
  "Naked": "https://images.unsplash.com/photo-1693824364892-4b84319dd957?ixlib=rb-4.0.3",
  "Adventure": "https://images.unsplash.com/photo-1631638153232-543597f12d0c?ixlib=rb-4.0.3",
  "Cruiser": "https://images.unsplash.com/photo-1558980394-0a0c8938ce31?ixlib=rb-4.0.3",
  "Classic": "https://images.unsplash.com/photo-1643321610692-111c2f9ce702?ixlib=rb-4.0.3",
  "Sport Touring": "https://images.unsplash.com/photo-1656526576121-a21193214c97?ixlib=rb-4.0.3",
  "Cafe Racer": "https://images.unsplash.com/photo-1626240134801-d0b975de8cad?ixlib=rb-4.0.3",
  "Hypersport": "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3"
};

const CategorySection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-racing mb-8 text-center">Explore Categories</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.slice(0, 8).map((category) => (
          <Link 
            key={category} 
            to={`/products?category=${category}`}
            className="group relative overflow-hidden rounded-lg h-48 shadow-md"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundImage: `url('${categoryImages[category as keyof typeof categoryImages] || 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3'}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-racing text-white mb-2">{category}</h3>
              <span className="inline-block text-sm text-white/80 group-hover:text-white transition-colors">
                Explore &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button asChild>
          <Link to="/categories">View All Categories</Link>
        </Button>
      </div>
    </section>
  );
};

export default CategorySection;
