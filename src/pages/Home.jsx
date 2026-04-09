import { products } from '../data/products'

function Home() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-slate-900/40">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6 text-white">
            <span className="inline-flex rounded-full bg-sky-500/15 px-4 py-2 text-sm font-semibold text-sky-300 ring-1 ring-sky-500/20">
              New collection • Up to 40% off
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
                Discover curated deals for your next purchase.
              </h1>
              <p className="max-w-xl text-slate-300 sm:text-lg">
                ShopEase brings a premium shopping experience with bold product cards, fast checkout, and design crafted for modern ecommerce.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400">
                Start Shopping
              </button>
              <a href="#featured" className="text-sm font-semibold text-slate-200 transition hover:text-white">
                Browse featured products →
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {products.slice(0, 4).map((product) => (
              <article key={product.id} className="rounded-[28px] border border-white/10 bg-slate-900/90 p-5 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900">
                <img src={product.image} alt={product.name} className="h-40 w-full rounded-3xl object-cover shadow-inner shadow-slate-950/20" />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-base font-semibold text-slate-100">{product.name}</h2>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="space-y-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">Featured</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
              Popular products you’ll love.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400 sm:text-base">
            Browse a selection of hand-picked items with clean visuals, modern spacing, and an easy-to-scan layout.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="group overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950/95 p-5 transition hover:-translate-y-1 hover:border-sky-500/30">
              <div className="overflow-hidden rounded-3xl bg-slate-900">
                <img src={product.image} alt={product.name} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                  <span className="text-sm font-semibold text-sky-400">${product.price}</span>
                </div>
                <p className="text-sm leading-6 text-slate-400">{product.description}</p>
                <button className="w-full rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home