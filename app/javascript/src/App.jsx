import React, { useEffect, useState } from "react";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<div>Home</div>} />
        <Route exact path="/about" element={<div>About</div>} />
      </Routes>
    </Router>
  );
};

export default App;
