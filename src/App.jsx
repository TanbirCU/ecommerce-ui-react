import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './pages/product'
import ProfilePage from './pages/ProfilePage'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
