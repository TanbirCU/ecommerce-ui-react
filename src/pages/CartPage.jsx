import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Your cart is empty</h2>
          <p className="text-slate-400 mb-8">Add some products to get started!</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 px-8 rounded-full transition"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-red-400 hover:text-red-300 font-medium transition"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-slate-900/90 rounded-[20px] border border-white/10 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-slate-100">{item.name}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
                <p className="text-sky-400 font-semibold mt-1">${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center transition"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-slate-100">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900/90 rounded-[20px] border border-white/10 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-xl sticky top-4">
            <h2 className="text-xl font-semibold text-slate-100 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-slate-400">
                <span>Items ({totalItems})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Tax</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <hr className="border-slate-700" />
              <div className="flex justify-between text-lg font-semibold text-slate-100">
                <span>Total</span>
                <span>${(totalPrice * 1.08).toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => alert('Checkout functionality coming soon!')}
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 px-6 rounded-full transition mb-3"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => navigate('/products')}
              className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;