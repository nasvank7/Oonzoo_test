// pages/index.tsx

import { GetServerSideProps } from "next";
import ProductList from "../Components/ProductList";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductPageProps {
  products: Product[];
  currentPage: number;
  totalPages: number;
}

const Home = ({ products, currentPage, totalPages }: ProductPageProps) => {
  return (
    <ProductList
      products={products}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (
  context
) => {
  const page = parseInt((context.query.page as string) || "1", 10);
  const limit = 6; 
  const res = await fetch(
    `https://fakestoreapi.com/products?limit=${limit}&offset=${
      (page - 1) * limit
    }`
  );
  const data = await res.json();
  const totalRes = await fetch(`https://fakestoreapi.com/products`);
  const totalData = await totalRes.json();
  const totalPages = Math.ceil(totalData.length / limit);

  return {
    props: {
      products: data,
      currentPage: page,
      totalPages: totalPages,
    },
  };
};

export default Home;
