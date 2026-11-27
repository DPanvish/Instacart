import { useNavigate } from "react-router-dom";
import type { Product } from "../types";
import { Plus, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product._id}`)}
      className="product-card"
    >
      {/* Product Image Area */}
      <div className="product-card-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
            <span className="badge-discount">
              {product.discount}% OFF
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="product-card-body">
        <div>
          {/* Star Rating */}
          {product.rating > 0 && (
            <div className="flex items-center gap-1 mb-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold text-[#0e1e15]">
                {product.rating}
              </span>
              <span className="text-xs text-[#9aaba1]">
                ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Product Name */}
          <h3 className="product-card-title">
            {product.name}
          </h3>
        </div>

        {/* Price & Add to Cart Button */}
        <div className="product-card-footer">
          <div className="flex items-baseline gap-1 truncate">
            <span className="product-price">
              {currency}{product.price.toFixed(1)}
            </span>
            <span className="product-unit">
              /{product.unit}
            </span>
            {product.originalPrice > product.price && (
              <span className="product-price-old">
                {currency}{product.originalPrice.toFixed(1)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            aria-label={`Add ${product.name} to cart`}
            className="btn-add-cart"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
