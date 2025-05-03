import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/main-page";
import MainLayout from "./layout/main-layout";
import Login from "./pages/Login";
import Profile from "./pages/profile";
import AdminPage from "./pages/admin";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function AppContent() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="admin"
          element={user?.role === "admin" ? <AdminPage /> : <Navigate to="/" />}
        />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
