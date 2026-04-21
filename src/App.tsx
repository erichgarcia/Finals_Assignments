import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Finals Assignment</h1>
      <Routes>
        <Route path="/" element={<div><h2>Home</h2><p>Todo functionality will be continued...</p></div>} />
        <Route path="/about" element={<div><h2>About</h2><p>About functionality will be continued...</p></div>} />
      </Routes>
    </div>
  );
}
