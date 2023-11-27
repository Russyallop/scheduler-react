import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Login from "./pages/login";
function App() {
  return (
    <Routes>
      {/* <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/student/login" element={<StudentLogin />}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
