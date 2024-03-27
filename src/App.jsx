import React from "react";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import HomePageWrapper from "./pages/HomePage";
import ArchivedPageWrapper from "./pages/ArchivedPage";
import DetailPageWrapper from "./pages/DetailPage";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Notes App</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/archived" element={<ArchivedPageWrapper />} />
          <Route path="/note/:id" element={<DetailPageWrapper />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="*" element={<p>Error 404: Page not found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
