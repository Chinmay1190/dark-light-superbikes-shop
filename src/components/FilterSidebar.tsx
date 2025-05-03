
import React from 'react';
import { brands, categories, priceRanges } from '@/data/products';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface FilterSidebarProps {
  filters: {
    categories: string[];
    brands: string[];
    priceRange: [number, number];
    inStock: boolean;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    categories: string[];
    brands: string[];
    priceRange: [number, number];
    inStock: boolean;
  }>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters }) => {
  const handleCategoryChange = (category: string) => {
    setFilters(prev => {
      if (prev.categories.includes(category)) {
        return { ...prev, categories: prev.categories.filter(c => c !== category) };
      } else {
        return { ...prev, categories: [...prev.categories, category] };
      }
    });
  };

  const handleBrandChange = (brand: string) => {
    setFilters(prev => {
      if (prev.brands.includes(brand)) {
        return { ...prev, brands: prev.brands.filter(b => b !== brand) };
      } else {
        return { ...prev, brands: [...prev.brands, brand] };
      }
    });
  };

  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [value[0], value[1]] as [number, number]
    }));
  };

  const handleInStockChange = () => {
    setFilters(prev => ({
      ...prev,
      inStock: !prev.inStock
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox 
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <Label 
                htmlFor={`category-${category}`}
                className="text-sm cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Brands</h3>
        <div className="space-y-2">
          {brands.map(brand => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox 
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onCheckedChange={() => handleBrandChange(brand)}
              />
              <Label 
                htmlFor={`brand-${brand}`}
                className="text-sm cursor-pointer"
              >
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
            min={0}
            max={5000000}
            step={100000}
            onValueChange={handlePriceChange}
            className="mb-6"
          />
          <div className="flex items-center justify-between text-sm">
            <span>
              ₹{new Intl.NumberFormat('en-IN').format(filters.priceRange[0])}
            </span>
            <span>
              ₹{new Intl.NumberFormat('en-IN').format(filters.priceRange[1])}
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <Checkbox 
            id="inStock"
            checked={filters.inStock}
            onCheckedChange={handleInStockChange}
          />
          <Label 
            htmlFor="inStock"
            className="text-sm cursor-pointer"
          >
            In Stock Only
          </Label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
