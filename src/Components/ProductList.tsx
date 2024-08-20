import Link from 'next/link';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products = [] }: ProductListProps) => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} passHref>
              <ProductCard product={product} />
            </Link>
          ))
        ) : (
          <p className='font-extrabold'>Sorry,No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
