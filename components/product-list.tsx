import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";

interface ProductListProps {
  category: string;
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  category,
  title,
  items,
}) => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-500">{category}</p>
      <h3 className="font-semibold text-3xl pb-4">{title}</h3>
      {items.length === 0 && <NoResults />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
