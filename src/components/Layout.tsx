
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { Sun, Moon, ShoppingCart, BadgeIndianRupee } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from '@/components/ui/use-toast';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const { toast } = useToast();
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BadgeIndianRupee size={28} className="text-primary" />
            <span className="text-xl md:text-2xl font-racing tracking-wider">SuperBike Shop</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <Link to="/categories" className="hover:text-primary transition-colors">Categories</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <Link to="/cart" className="relative">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <Button 
              variant="outline"
              size="sm"
              className="hidden md:flex"
              onClick={() => {
                toast({
                  title: "Coming Soon",
                  description: "User authentication will be available soon",
                });
              }}
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden border-t border-border">
          <div className="container mx-auto px-4 py-2 flex justify-between">
            <Link to="/" className="px-3 py-1 text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="px-3 py-1 text-sm hover:text-primary transition-colors">Products</Link>
            <Link to="/categories" className="px-3 py-1 text-sm hover:text-primary transition-colors">Categories</Link>
            <Link to="/about" className="px-3 py-1 text-sm hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="px-3 py-1 text-sm hover:text-primary transition-colors">Contact</Link>
          </div>
        </nav>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-secondary text-secondary-foreground mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-racing mb-4">SuperBike Shop</h3>
              <p className="text-sm">Premium superbike retailer in India with the best selection of high-performance motorcycles.</p>
            </div>
            <div>
              <h3 className="text-lg font-racing mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
                <li><Link to="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-racing mb-4">Contact Us</h3>
              <address className="not-italic text-sm space-y-2">
                <p>123 Park Street, Mumbai</p>
                <p>Maharashtra, India 400001</p>
                <p>Email: info@superbikeshop.in</p>
                <p>Phone: +91 98765 43210</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-racing mb-4">Newsletter</h3>
              <form className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-3 py-2 rounded border border-border bg-background"
                />
                <Button type="button" className="btn-primary">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-4 text-center text-sm">
            <p>&copy; 2025 SuperBike Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
