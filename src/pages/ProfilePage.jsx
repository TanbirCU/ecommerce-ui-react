function ProfilePage() {
  return (
    console.log('Rendering ProfilePage'),
    <div className="space-y-8 p-8">
      {/* Profile Header */}
      <section className="overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-slate-900/40">
        <div className="flex items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-2xl font-bold text-white shadow-xl shadow-sky-500/20">
            JD
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-slate-100">John Doe</h1>
            <p className="text-slate-400">john.doe@example.com</p>
            <p className="text-sm text-slate-500">Member since January 2024</p>
          </div>
        </div>
      </section>

      {/* Account Details */}
      <section className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/50 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-semibold text-slate-100">Account Details</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300">Phone</label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Address</label>
              <textarea
                rows={3}
                defaultValue="123 Main St, City, State 12345"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400">
            Save Changes
          </button>
        </div>
      </section>

      {/* Order History */}
      <section className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/50 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-semibold text-slate-100">Recent Orders</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-slate-700"></div>
              <div>
                <h3 className="font-medium text-slate-100">Wireless Headphones</h3>
                <p className="text-sm text-slate-400">Order #12345 • Delivered</p>
              </div>
            </div>
            <span className="font-semibold text-slate-100">$50.00</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-slate-700"></div>
              <div>
                <h3 className="font-medium text-slate-100">Smart Watch</h3>
                <p className="text-sm text-slate-400">Order #12346 • In Transit</p>
              </div>
            </div>
            <span className="font-semibold text-slate-100">$100.00</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
