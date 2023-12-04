import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Login from "./pages/login";
import Sidebar from "./pages/Sidebar";

function App() {
  window.localStorage.setItem("chakra-ui-color-mode", "dark");
  return (
    <Routes>
      {/* <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/student/login" element={<StudentLogin />}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<Sidebar />}></Route>
    </Routes>
  );
}

export default App;
