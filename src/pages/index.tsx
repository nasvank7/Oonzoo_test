// pages/in
import { GetServerSideProps } from "next";
import ProductList from "../Components/ProductList";
import axiosInstance from "@/lib/axiosInstance";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductPageProps {
  products: Product[];
}

const Home = ({ products}: ProductPageProps) => {
  
  return (
    <ProductList
      products={products}
    />
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
  try {
    const url=`/products`
    const res = await axiosInstance.get(url);
    const totalRes = await axiosInstance.get(`/products`);

    return {
      props: {
        products: res.data,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [],
      },
    };
  }
};



export default Home;
