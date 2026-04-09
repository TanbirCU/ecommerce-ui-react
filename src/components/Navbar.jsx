import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-xl font-bold shadow-xl shadow-sky-500/20">
            SE
          </div>
          <div>
            <p className="text-lg font-semibold">ShopEase</p>
            <p className="text-xs text-slate-400">Modern ecommerce UI</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-slate-300 transition hover:text-white">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium text-slate-300 transition hover:text-white">
            Products
          </Link>
          <Link to="/cart" className="text-sm font-medium text-slate-300 transition hover:text-white">
            Cart
          </Link>
          <Link to="/profile" className="text-sm font-medium text-slate-300 transition hover:text-white">
            Profile
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/products"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            Start Shopping
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 transition hover:bg-slate-800 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 md:hidden">
          <ul className="space-y-3">
            <li>
              <Link to="/" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/profile" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar