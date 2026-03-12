import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts]= useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Navigate to product details page
  const gotoProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  // Fetch all products
  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data);
      } catch {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading state
  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Loading products...
      </h1>
    );
  }

  // Error state
  if (error) {
    return (
      <h1 className="text-center text-red-500 mt-10">
        {error}
      </h1>
    );
  }

  return (
    <div className="p-6">
      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md border p-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <h2 className="text-center text-gray-500">
          No products found
        </h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => gotoProduct(product)}
              className="border p-4 rounded-lg shadow hover:shadow-xl transition duration-300 cursor-pointer bg-white"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto mb-4"
              />

              <h2 className="text-lg font-semibold">
                {product.title.length > 40
                  ? product.title.substring(0, 40) + "..."
                  : product.title}
              </h2>

              <p className="text-green-600 font-bold mt-2 text-xl">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;