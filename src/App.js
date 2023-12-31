import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import BookProductPage from "./Pages/ProductPage";
import AllBooksPage from "./Pages/AllBooks";
import LandingPage from "./Pages/LandingPage";
import BestSellerPage from "./Pages/BestSellerPage";
import NewArrivalsPage from "./Pages/NewArrivalsPage";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<LandingPage />}/>
          <Route exact path="/allbooks/" element={<AllBooksPage />} />
          <Route exact path="/book/:id" element={<BookProductPage />} />
          <Route exact path="/bestsellers" element={<BestSellerPage />} />
          <Route exact path="/newarrivals" element={<NewArrivalsPage />} />
      </Routes>
    </BrowserRouter>
  );
}