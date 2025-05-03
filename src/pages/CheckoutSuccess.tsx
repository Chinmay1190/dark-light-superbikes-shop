
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const CheckoutSuccess = () => {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle size={32} className="text-green-500" />
            </div>
            
            <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
            
            <p className="text-muted-foreground mb-6">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
            
            <div className="bg-secondary rounded-lg p-4 mb-6">
              <div className="text-sm text-muted-foreground mb-1">Order Number</div>
              <div className="text-lg font-medium">{orderNumber}</div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-8">
              A confirmation email has been sent to your registered email address with all the details of your order.
            </p>
            
            <div className="flex flex-col gap-3">
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
              
              <Button variant="outline" asChild>
                <Link to={`/order-tracking?order=${orderNumber}`}>Track Order</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccess;
