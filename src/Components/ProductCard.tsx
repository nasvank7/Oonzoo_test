interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain p-2 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow bg-white">
        <h2 className="text-xl font-semibold mb-2 truncate">{product.title}</h2>
        <p className="text-gray-500 text-lg">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
