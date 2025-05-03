
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { allProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronRight, 
  ShoppingCart, 
  Check, 
  X,
  Heart 
} from 'lucide-react';
import ProductGrid from '@/components/ProductGrid';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(allProducts.find(p => p.id === id));
  const [selectedImage, setSelectedImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState<typeof allProducts>([]);
  const [selectedColor, setSelectedColor] = useState('');
  
  useEffect(() => {
    // Find the product based on the ID parameter
    const foundProduct = allProducts.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
      setSelectedColor(foundProduct.colors[0]);
      
      // Find related products (same category, different product)
      const related = allProducts
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      
      setRelatedProducts(related);
    }
  }, [id]);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm mb-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
          <ChevronRight size={16} className="mx-2 text-muted-foreground" />
          <Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
          <ChevronRight size={16} className="mx-2 text-muted-foreground" />
          <Link to={`/products?category=${product.category}`} className="text-muted-foreground hover:text-foreground">{product.category}</Link>
          <ChevronRight size={16} className="mx-2 text-muted-foreground" />
          <span>{product.name}</span>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-secondary/20">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.gallery && product.gallery.length > 0 && (
              <div className="flex gap-2 mt-4">
                <button 
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === product.image ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(product.image)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </button>
                
                {product.gallery.map((img, index) => (
                  <button 
                    key={index}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === img ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} - view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-racing mb-1">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-2">{product.brand}</p>
              </div>
              
              {/* Badges */}
              <div className="flex flex-col gap-1">
                {product.isNewArrival && (
                  <Badge className="bg-bikeRed text-white border-0">New Arrival</Badge>
                )}
                {product.isBestSeller && (
                  <Badge className="bg-bikeGold text-black border-0">Best Seller</Badge>
                )}
                {product.isOnSale && (
                  <Badge className="bg-green-500 text-white border-0">On Sale</Badge>
                )}
              </div>
            </div>
            
            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg line-through text-muted-foreground">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-green-500 text-sm mt-1">
                  Save {formatPrice(product.originalPrice - product.price)} ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                </p>
              )}
              
              <p className="text-sm text-muted-foreground mt-2">
                Free Delivery Across India
              </p>
            </div>
            
            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-3 py-1 border rounded-full text-sm ${
                      selectedColor === color 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-border bg-background text-foreground hover:border-primary'
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Availability */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium">Availability:</span>
              {product.inStock ? (
                <span className="text-sm text-green-500 flex items-center">
                  <Check size={16} className="mr-1" /> In Stock
                </span>
              ) : (
                <span className="text-sm text-red-500 flex items-center">
                  <X size={16} className="mr-1" /> Out of Stock
                </span>
              )}
            </div>
            
            {/* Add to Cart */}
            <div className="flex gap-3 mb-8">
              <Button 
                className="flex-1"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </Button>
              
              <Button variant="outline">
                <Heart size={18} />
              </Button>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Specifications */}
        <div className="mt-12">
          <h2 className="text-2xl font-racing mb-4">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="py-2 border-b border-border flex justify-between">
                <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-racing mb-6">Related Products</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
