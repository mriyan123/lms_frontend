import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin";
import DetailsPage from "./pages/details";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
