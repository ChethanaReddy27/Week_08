import { useLocation } from "react-router-dom";

function Products() {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) {
    return (
      <h1 className="text-center text-2xl mt-10">
        No Product Found
      </h1>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-between mt-14 p-6">
      <div className="md:w-2/5">
        <img
          src={product.image}
          alt={product.title}
          className="w-96 mx-auto"
        />
      </div>

      <div className="md:w-3/5 p-2 sm:p-10">
        <p className="text-2xl mb-6 font-bold">{product.title}</p>
        <p className="mb-6">{product.description}</p>
        <p className="text-3xl mb-6 text-green-600">
          ${product.price}
        </p>
        <p className="text-xl">
          Category: {product.category}
        </p>
      </div>
    </div>
  );
}

export default Products;