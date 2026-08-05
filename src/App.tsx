import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { CookieBanner } from "./components/CookieBanner";
import SmoothScroll from "./components/SmoothScroll";
import { LanguageProvider } from "./i18n/LanguageContext";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const ParEnzimiem = lazy(() => import("./pages/ParEnzimiem"));
const Produkti = lazy(() => import("./pages/Produkti"));
const Pakalpojumi = lazy(() => import("./pages/Pakalpojumi"));
const Kontakti = lazy(() => import("./pages/Kontakti"));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#FAF7F2]">
      <div className="w-8 h-8 border-2 border-[#7F5539] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF7F2] text-[#3D2C22] transition-colors duration-300 relative overflow-x-hidden font-sans">
      
      {/* Top Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 relative z-10 pt-[72px]">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* LV Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/par-enzimiem" element={<ParEnzimiem />} />
            <Route path="/par-enzimu-dzerieniem" element={<ParEnzimiem />} />
            <Route path="/produkti" element={<Produkti />} />
            <Route path="/veikals" element={<Produkti />} />
            <Route path="/pakalpojumi" element={<Pakalpojumi />} />
            <Route path="/kontakti" element={<Kontakti />} />

            {/* EN Routes */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/about-enzyme-drinks" element={<ParEnzimiem />} />
            <Route path="/en/products" element={<Produkti />} />
            <Route path="/en/services" element={<Pakalpojumi />} />
            <Route path="/en/contact" element={<Kontakti />} />

            {/* RU Routes */}
            <Route path="/ru" element={<Home />} />
            <Route path="/ru/o-fermentirovannyh-napitkah" element={<ParEnzimiem />} />
            <Route path="/ru/produkty" element={<Produkti />} />
            <Route path="/ru/uslugi" element={<Pakalpojumi />} />
            <Route path="/ru/kontakty" element={<Kontakti />} />

            {/* Catch-all Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer />

      {/* Footer */}
      <Footer />

      {/* Pop-up Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <SmoothScroll>
          <ScrollToTop />
          <AppContent />
        </SmoothScroll>
      </LanguageProvider>
    </Router>
  );
}
