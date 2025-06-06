
import type { Category, CategoryName } from '@/types';
import { Button } from '@/components/ui/button';


interface FilterBarProps {
  categories: Category[];
  activeFilter: CategoryName | 'All';
  onFilterChange: (filter: CategoryName | 'All') => void;
  
}

export function FilterBar({ categories, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="p-4 md:p-6 bg-card shadow rounded-lg m-4 md:m-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeFilter === 'All' ? 'default' : 'outline'}
            onClick={() => onFilterChange('All')}
            size="sm"
            className="flex items-center gap-2"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeFilter === category.name ? 'default' : 'outline'}
              onClick={() => onFilterChange(category.name)}
              size="sm"
              className="flex items-center gap-2"
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </div>
        
      </div>
    </div>
  );
}
