function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-2xl font-semibold text-white">ShopEase</p>
            <p className="mt-3 max-w-xl leading-7 text-slate-400">
              A modern ecommerce UI made for fast shopping, clean product presentation, and polished customer experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <a href="/products" className="transition hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/cart" className="transition hover:text-white">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="/profile" className="transition hover:text-white">
                    Profile
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Support</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ShopEase. All rights reserved.</p>
          <p>© Devloper. Tanvir Ahmed</p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer
