import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Adress } from './pages/Products/components/Adress'


export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} >
             <Route path="/products/:id/cart/adress" element={<Adress />} />
        </Route>
      </Route>
    </Routes>
  )
}