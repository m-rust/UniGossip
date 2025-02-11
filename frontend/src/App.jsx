import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
