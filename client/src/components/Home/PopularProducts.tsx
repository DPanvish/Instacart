import { useEffect, useState } from "react";
import { dummyProducts } from "../../assets/assets";
import type { Product } from "../../types";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import ProductCard from "../ProductCard";

const PopularProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(dummyProducts.slice(0, 10));
  }, []);

  return (
    <section className="py-8 sm:py-12">
      {/* Section Header */}
      <div className="section-header">
        <div>
          <span className="badge-fresh mb-2">
            Top Quality Picks
          </span>
          <h2 className="section-title">
            Popular Products
          </h2>
          <p className="section-subtitle">
            Top-rated fresh produce and groceries this season
          </p>
        </div>

        <Link to="/products" className="section-link group">
          <span>View All Products</span>
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Products Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
