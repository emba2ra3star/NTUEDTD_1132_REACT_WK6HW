import { useState } from 'react'

import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css'

import Home from './pages/Home'
import Product from './pages/Product'
import { Provider } from 'react-redux'

import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products'>
              <Route path='id/:bookId' element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  )
}

export default App
