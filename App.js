import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Prod from "./Pages/ProductPage";
import LandingPage from "./Pages/LandingPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="prod" element={<Prod />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}