import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
// Self-hosted fonts, so visitors make no requests to Google. Imported before the theme that uses them.
import '@fontsource-variable/inter'
import '@fontsource/instrument-serif/400-italic.css'
import './index.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import ServiceRequest from './pages/ServiceRequest'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<ServiceRequest />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)