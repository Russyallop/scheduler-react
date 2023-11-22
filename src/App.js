import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Header/navbar";
import AdminLogin from "./Components/Sigin_Form/AdminLogin";
import StudentLogin from "./Components/Sigin_Form/StudentLogin";
import Profile from "./pages/profile";
import Login from "./pages/login";
import CreateAccount from "./pages/createAccount"
function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/student/login" element={<StudentLogin />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/createAccount" element={<CreateAccount/>}></Route>
    </Routes>
  );
}

export default App;
