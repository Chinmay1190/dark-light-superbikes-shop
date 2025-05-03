
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="product-card">
      <div className="relative overflow-hidden h-48">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image" 
          />
        </Link>
        <div className="absolute top-2 left-2 flex flex-col gap-1">
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
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-bold hover:text-primary transition-colors">{product.name}</h3>
            </Link>
            <span className="text-sm text-muted-foreground">{product.brand}</span>
          </div>
          <div className="flex flex-col items-end">
            {product.originalPrice && (
              <span className="text-xs line-through text-muted-foreground">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="price-tag">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
        
        <div className="mt-2 flex items-center">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg
                key={idx}
                className={`w-4 h-4 ${
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
          <span className="text-xs ml-1 text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            asChild
          >
            <Link to={`/product/${product.id}`}>View Details</Link>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:bg-primary/10"
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
          >
            <ShoppingCart size={16} className="mr-1" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
