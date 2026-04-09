import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-white/10 bg-slate-900/90 p-5 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900">
      <img src={product.image} alt={product.name} className="h-40 w-full rounded-3xl object-cover shadow-inner shadow-slate-950/20" />
      <div className="mt-4 flex flex-1 flex-col justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-base font-semibold text-slate-100">{product.name}</h2>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              ${product.price}
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-400">{product.description}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="flex-1 inline-flex items-center justify-center rounded-full bg-slate-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-600"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;