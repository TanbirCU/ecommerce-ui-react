import { useParams } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-white">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-slate-900/90 rounded-[28px] border border-white/10 p-8 shadow-xl shadow-slate-950/40 backdrop-blur-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-3xl shadow-inner shadow-slate-950/20"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-sky-400">${product.price}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-100 mb-3">Description</h2>
            <p className="text-slate-400 leading-relaxed">{product.description}</p>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 px-6 rounded-full transition">
              Add to Cart
            </button>
            <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-full transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;