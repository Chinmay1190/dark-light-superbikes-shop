
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductGrid from '@/components/ProductGrid';
import FilterSidebar from '@/components/FilterSidebar';
import { allProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    priceRange: [0, 5000000] as [number, number],
    inStock: false,
  });
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [sortOption, setSortOption] = useState('featured');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Apply initial filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const brandParam = searchParams.get('brand');
    const filterParam = searchParams.get('filter');

    if (categoryParam) {
      setFilters(prev => ({
        ...prev,
        categories: [categoryParam]
      }));
    }

    if (brandParam) {
      setFilters(prev => ({
        ...prev,
        brands: [brandParam]
      }));
    }

    if (filterParam) {
      const newFilteredProducts = allProducts.filter(product => {
        switch (filterParam) {
          case 'bestsellers':
            return product.isBestSeller;
          case 'newarrivals':
            return product.isNewArrival;
          case 'onsale':
            return product.isOnSale;
          default:
            return true;
        }
      });
      setFilteredProducts(newFilteredProducts);
    }
  }, [searchParams]);

  // Apply filters when filters state changes
  useEffect(() => {
    let result = allProducts;

    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Filter by brands
    if (filters.brands.length > 0) {
      result = result.filter(product => 
        filters.brands.includes(product.brand)
      );
    }

    // Filter by price range
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Filter by in-stock status
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }

    // Apply sorting
    result = applySorting(result, sortOption);

    setFilteredProducts(result);
  }, [filters, sortOption]);

  // Apply sorting
  const applySorting = (products: typeof allProducts, sort: string) => {
    switch (sort) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'name-asc':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case 'rating-desc':
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, 5000000],
      inStock: false,
    });
    setSearchParams({});
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-racing mb-8">All Products</h1>
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <SlidersHorizontal size={18} className="mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your product selection
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar filters={filters} setFilters={setFilters} />
                </div>
              </SheetContent>
            </Sheet>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleClearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X size={16} className="mr-1" />
              Clear Filters
            </Button>
            
            <div className="flex flex-wrap gap-2">
              {filters.categories.map(category => (
                <div key={category} className="rounded-full bg-primary/10 px-3 py-1 text-xs flex items-center gap-1">
                  {category}
                  <button
                    onClick={() => 
                      setFilters(prev => ({
                        ...prev,
                        categories: prev.categories.filter(c => c !== category)
                      }))
                    }
                    className="ml-1 text-muted-foreground hover:text-primary"
                    aria-label={`Remove ${category} filter`}
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
              
              {filters.brands.map(brand => (
                <div key={brand} className="rounded-full bg-secondary px-3 py-1 text-xs flex items-center gap-1">
                  {brand}
                  <button
                    onClick={() => 
                      setFilters(prev => ({
                        ...prev,
                        brands: prev.brands.filter(b => b !== brand)
                      }))
                    }
                    className="ml-1 text-muted-foreground hover:text-primary"
                    aria-label={`Remove ${brand} filter`}
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select 
              value={sortOption}
              onChange={handleSortChange}
              className="bg-background border border-input rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="rating-desc">Highest Rated</option>
            </select>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </aside>
          
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
              </p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-16">
                <h2 className="text-xl font-medium mb-2">No products found</h2>
                <p className="text-muted-foreground mb-6">Try changing your filters or search criteria.</p>
                <Button onClick={handleClearFilters}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
