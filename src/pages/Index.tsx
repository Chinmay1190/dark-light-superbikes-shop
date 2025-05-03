
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* USP Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-border rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Fastest Delivery</h3>
            <p className="text-muted-foreground">Get your dream superbike delivered at your doorstep within 48 hours.</p>
          </div>
          
          <div className="p-6 border border-border rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Secure Payments</h3>
            <p className="text-muted-foreground">Multiple payment options with end-to-end encryption for your security.</p>
          </div>
          
          <div className="p-6 border border-border rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Easy Returns</h3>
            <p className="text-muted-foreground">Not satisfied? Return your purchase within 7 days for a full refund.</p>
          </div>
        </div>
      </section>
      
      <CategorySection />
      
      <FeaturedProducts />
      
      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.4)",
            }}
          />
          
          <div className="relative z-10 p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-racing mb-4 text-white">Ready to Experience the Thrill?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Join thousands of superbike enthusiasts who have found their dream machines at SuperBike Shop.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
              asChild
            >
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
