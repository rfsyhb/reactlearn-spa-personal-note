import React from "react";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Notes App</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<p>Ini homepage</p>} />
          <Route path="/archived" element={<p>Ini archived page</p>} />
          <Route path="/add" element={<p>Ini add new note page</p>} />
          <Route path="*" element={<p>Error 404: Page not found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
