
import React from 'react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-racing mb-8">About Us</h1>
        
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden h-80 mb-12">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-4.0.3')",
              filter: "brightness(0.6)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h2 className="text-3xl md:text-4xl font-racing mb-4">India's Premier Superbike Destination</h2>
              <p className="text-lg">Bringing world-class motorcycles to enthusiasts across the country</p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-racing mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Founded in 2010, SuperBike Shop began as a small dealership in Mumbai with a passion for high-performance motorcycles. Our founder, Rajiv Sharma, a former motorcycle racer, recognized the growing interest in premium motorcycles in India and set out to create a destination where enthusiasts could find their dream machines.
              </p>
              <p className="mb-4">
                What started as a small showroom has now expanded to multiple locations across major Indian cities, becoming the country's leading retailer of premium motorcycles. Our commitment to excellence, customer service, and motorcycle culture has earned us the trust of thousands of riders.
              </p>
              <p>
                Today, we represent over 15 international and domestic motorcycle brands, offering an unmatched selection of superbikes, adventure motorcycles, street nakeds, and classic bikes to the Indian market.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3" 
                alt="Superbike showroom" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-racing mb-6">Our Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Quality & Trust</h3>
              <p className="text-muted-foreground">
                We represent only the finest motorcycle brands and ensure each bike meets the highest standards before delivery.
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Performance</h3>
              <p className="text-muted-foreground">
                We believe in delivering exceptional performance, both in the motorcycles we sell and the service we provide.
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Community</h3>
              <p className="text-muted-foreground">
                We foster a vibrant motorcycle community through rides, events, and shared passion for two wheels.
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace the latest technologies and innovations in the motorcycle industry to serve our customers better.
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Growth</h3>
              <p className="text-muted-foreground">
                We're committed to growing the motorcycle market in India and helping riders evolve in their journey.
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Passion</h3>
              <p className="text-muted-foreground">
                Above all, we share a deep passion for motorcycles that drives everything we do.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-racing mb-6">Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3" 
                  alt="Rajiv Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">Rajiv Sharma</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3" 
                  alt="Priya Desai" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">Priya Desai</h3>
              <p className="text-muted-foreground">Operations Director</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" 
                  alt="Arjun Kapoor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">Arjun Kapoor</h3>
              <p className="text-muted-foreground">Head of Service</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3" 
                  alt="Neha Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">Neha Singh</h3>
              <p className="text-muted-foreground">Marketing Manager</p>
            </div>
          </div>
        </div>
        
        {/* Our Showrooms */}
        <div>
          <h2 className="text-2xl font-racing mb-6">Our Showrooms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3" 
                  alt="Mumbai Showroom" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">Mumbai Flagship Store</h3>
                <p className="text-muted-foreground mb-2">123 Marine Drive, Mumbai - 400001</p>
                <div className="text-sm">
                  <p>Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 6:00 PM</p>
                  <p className="mt-2">Phone: +91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3" 
                  alt="Delhi Showroom" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">Delhi NCR Showroom</h3>
                <p className="text-muted-foreground mb-2">456 MG Road, Gurugram - 122001</p>
                <div className="text-sm">
                  <p>Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 6:00 PM</p>
                  <p className="mt-2">Phone: +91 98765 43211</p>
                </div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3" 
                  alt="Bangalore Showroom" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">Bangalore Experience Center</h3>
                <p className="text-muted-foreground mb-2">789 Indiranagar 100ft Road, Bangalore - 560038</p>
                <div className="text-sm">
                  <p>Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 6:00 PM</p>
                  <p className="mt-2">Phone: +91 98765 43212</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
