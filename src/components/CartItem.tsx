
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleIncrementQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium hover:text-primary transition-colors">{product.name}</h3>
          </Link>
          <button 
            onClick={handleRemove}
            className="text-gray-400 hover:text-primary"
            aria-label="Remove item"
          >
            <X size={18} />
          </button>
        </div>
        
        <p className="text-sm text-muted-foreground">{product.brand}</p>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center border border-border rounded-md">
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={handleDecrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus size={14} />
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={handleIncrementQuantity}
            >
              <Plus size={14} />
            </Button>
          </div>
          
          <div className="text-right">
            <p className="font-medium">{formatPrice(product.price)}</p>
            <p className="text-sm text-muted-foreground">
              Total: {formatPrice(product.price * quantity)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
