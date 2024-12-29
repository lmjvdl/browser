// frontend/src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Index from "./pages/LoginAndRegister/index";
import HeaderForSearchResult from "./components/HeaderForSearchResult";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<HomePage />} />
        <Route path="/search" element={<HeaderForSearchResult />}></Route>
        <Route path="/login" element={<Index />} />
      </Routes>
    </Router>
  );
};

export default App;
