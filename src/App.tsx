import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import MainLayout from "./layout/main-layout";
import Login from "./pages/Login"; // 👈 เพิ่ม import Login
import { AuthProvider } from './contexts/AuthContext'; // 👈 เพิ่ม AuthProvider

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* ✅ เส้นทางไปหน้า Login */}

          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="test" element={<div>test</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
