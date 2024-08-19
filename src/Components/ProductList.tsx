import Link from "next/link";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
  currentPage: number;
  totalPages: number;
}

const ProductList = ({
  products,
  currentPage,
  totalPages,
}: ProductListProps) => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default ProductList;
