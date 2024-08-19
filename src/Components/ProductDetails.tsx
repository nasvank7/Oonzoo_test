import { GetServerSideProps } from "next";
import Head from "next/head";

interface ProductDetailProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return { props: { product } };
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  const renderMetaData = () => {
    return (
      <>
        <Head>
          <meta property="og:title" content={product.title} />
          <meta property="og:description" content={product.description} />
          <meta property="og:image" content={product.image} />
          <meta
            property="og:url"
            content={`https://fakestoreapi.com/products/${product.id}`}
          />
          <meta property="og:type" content="product" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={product.title} />
          <meta name="twitter:description" content={product.description} />
          <meta name="twitter:image" content={product.image} />
          <meta
            name="twitter:url"
            content={`https://fakestoreapi.com/products/${product.id}`}
          />
        </Head>
      </>
    );
  };
  return (
    <div className="container mx-auto p-6 lg:p-28 h-screen">
      {renderMetaData()}
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex-shrink-0 lg:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-contain p-4 lg:p-6"
          />
        </div>
        <div className="p-4 lg:p-6 lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-3 text-gray-800">
              {product.title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-4">
              ${product.price}
            </p>
            <p className="text-base text-gray-700 mb-4">
              {product.description}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="font-medium text-gray-700">
                {product.category}
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Rating:{" "}
              <span className="font-medium text-yellow-500">
                {product.rating.rate}
              </span>{" "}
              ({product.rating.count} reviews)
            </p>
          </div>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
