import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import LogInPage from "./pages/AuthenticationPage";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<LogInPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
}