import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FiltersProvider } from './context/filtersContext.tsx'
import { CartProvider } from './context/cart/cartProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </CartProvider>
)
