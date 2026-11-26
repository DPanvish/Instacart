import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";

const CartSidebar = () => {
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";
  const { items, updateQuantity, removeFromCart, cartTotal, isCartOpen, setIsCartOpen } =
    useCart();

  const navigate = useNavigate();

  if (!isCartOpen) {
    return null;
  }

  const deliveryFee = cartTotal > 20 ? 0 : 1.99;
  const grandTotal = cartTotal + deliveryFee;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="cart-backdrop"
      />

      {/* Drawer */}
      <div className="cart-drawer animate-slide-in-right">
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-[#ebf7ee] border border-[#bbf0cd] text-[#108942] flex-center shrink-0">
              <ShoppingBagIcon className="size-4" />
            </div>
            <h2 className="text-lg font-extrabold text-[#0e1e15] tracking-tight">
              Your Cart
            </h2>
            <span className="badge-fresh">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            className="p-2 rounded-xl text-[#6e7f75] hover:text-[#0e1e15] hover:bg-[#f3efe6] transition-colors focus:outline-none"
          >
            <XIcon className="size-5" />
          </button>
        </div>

        {/* Cart Items / Empty State */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="size-20 rounded-3xl bg-gradient-to-tr from-[#ebf7ee] to-[#d8f3e0] border border-[#bbf0cd] text-[#108942] flex-center mb-4 shadow-xs">
                <ShoppingBagIcon className="size-9" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-[#0e1e15] mb-1">
                Your cart is empty
              </h3>
              <p className="text-xs text-[#6e7f75] max-w-[220px]">
                Add fresh produce and groceries to get started.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product._id} className="cart-item-card">
                <div className="cart-item-image-wrap">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#0e1e15] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs font-medium text-[#6e7f75]">
                      {currency}{item.product.price.toFixed(2)} / {item.product.unit}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="cart-qty-stepper">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="cart-qty-btn"
                      >
                        <MinusIcon className="size-3" />
                      </button>

                      <span className="text-xs font-bold w-6 text-center text-[#0e1e15]">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="cart-qty-btn"
                      >
                        <PlusIcon className="size-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold text-[#0f3822]">
                        {currency}{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product._id)}
                        aria-label={`Remove ${item.product.name}`}
                        className="p-1.5 rounded-lg text-[#9aaba1] hover:text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2Icon className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout Summary */}
        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="flex justify-between text-sm">
              <span className="text-[#6e7f75]">Subtotal</span>
              <span className="font-semibold text-[#0e1e15]">
                {currency}{cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-[#6e7f75]">Delivery</span>
              <span className="font-semibold">
                {deliveryFee === 0 ? (
                  <span className="badge-fresh !py-0.5 !px-2 text-[11px]">Free</span>
                ) : (
                  <span className="text-[#0e1e15]">{currency}{deliveryFee.toFixed(2)}</span>
                )}
              </span>
            </div>

            {deliveryFee > 0 && (
              <p className="text-xs font-medium text-[#ea580c] bg-[#fff4ed] border border-[#fed7aa] rounded-xl py-1.5 px-3 text-center">
                Free delivery on orders over {currency}20!
              </p>
            )}

            <div className="flex justify-between items-center text-base font-extrabold text-[#0f3822] border-t border-[#f0ece3] pt-3">
              <span>Total</span>
              <span>{currency}{grandTotal.toFixed(2)}</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsCartOpen(false);
                navigate("/checkout");
                window.scrollTo(0, 0);
              }}
              className="btn-accent w-full !py-3.5"
            >
              <span>Proceed to Checkout</span>
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
