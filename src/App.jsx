import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DemoOne from "./DemoOne";
import DemoTwo from "./DemoTwo";
import Layout from "./Layout";

function App() {
  
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<DemoOne />} />
            <Route path="demotwo" element={<DemoTwo />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
