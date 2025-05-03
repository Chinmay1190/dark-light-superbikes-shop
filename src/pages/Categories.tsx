
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { categories } from '@/data/products';

// Define images for category cards
const categoryImages = {
  "Sports": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3",
  "Naked": "https://images.unsplash.com/photo-1693824364892-4b84319dd957?ixlib=rb-4.0.3",
  "Adventure": "https://images.unsplash.com/photo-1631638153232-543597f12d0c?ixlib=rb-4.0.3",
  "Cruiser": "https://images.unsplash.com/photo-1558980394-0a0c8938ce31?ixlib=rb-4.0.3",
  "Classic": "https://images.unsplash.com/photo-1643321610692-111c2f9ce702?ixlib=rb-4.0.3",
  "Sport Touring": "https://images.unsplash.com/photo-1656526576121-a21193214c97?ixlib=rb-4.0.3",
  "Cafe Racer": "https://images.unsplash.com/photo-1626240134801-d0b975de8cad?ixlib=rb-4.0.3",
  "Hypersport": "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3",
  "Modern Classic": "https://images.unsplash.com/photo-1582554575628-c842ba48af06?ixlib=rb-4.0.3",
  "Power Cruiser": "https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-4.0.3",
  "Bobber": "https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-4.0.3",
};

const categoryDescriptions = {
  "Sports": "Aerodynamic full fairings, aggressive riding position, and high-performance engines for maximum speed and cornering.",
  "Naked": "Stripped-down sportbikes without fairings, offering an upright riding position and raw aesthetics.",
  "Adventure": "Versatile machines designed for on and off-road riding with long travel suspension and upright ergonomics.",
  "Cruiser": "Laid-back riding position, low seat height, and torquey engines for comfortable highway cruising.",
  "Classic": "Timeless styling reminiscent of motorcycles from the past, with modern technology.",
  "Sport Touring": "Combines sportbike performance with touring comfort for long-distance riding at speed.",
  "Cafe Racer": "Minimalist, lightweight bikes with clip-on handlebars inspired by 1960s racing motorcycles.",
  "Hypersport": "Ultimate performance motorcycles with cutting-edge technology derived from racing.",
  "Modern Classic": "Contemporary bikes with retro styling but modern features and reliability.",
  "Power Cruiser": "Cruisers with high-performance engines offering more power than traditional cruiser models.",
  "Bobber": "Custom-style motorcycles with shortened or 'bobbed' fenders and minimalist design.",
};

const Categories = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-racing mb-8">Motorcycle Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category} 
              to={`/products?category=${category}`}
              className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-border hover:border-primary"
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url('${categoryImages[category as keyof typeof categoryImages] || 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3'}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-racing text-white">{category}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-muted-foreground">
                  {categoryDescriptions[category as keyof typeof categoryDescriptions] || 
                    "High-performance motorcycles designed for optimum speed, handling, and rider experience."}
                </p>
                <p className="mt-4 text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  View Motorcycles <span className="ml-1">→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
