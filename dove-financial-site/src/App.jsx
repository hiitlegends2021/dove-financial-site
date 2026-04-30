import React from "react";
import { Routes, Route } from "react-router-dom";
import CashFlowRescue from "./pages/CashFlowRescue";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1 style={{ padding: 40 }}>Home Works</h1>} />
      <Route path="/cash-flow-rescue" element={<CashFlowRescue />} />
    </Routes>
  );
}

export default App;