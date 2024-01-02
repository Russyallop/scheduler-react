import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Login from "./pages/login";
import Sidebar from "./pages/Sidebar";
import Sessions from "./pages/sessions";
import MyCalendar from "./Components/Calender/Calender";
import NewSessions from "./pages/newSessions";
import BookSession from "./pages/book-session";
import BookSessionsForm from "./pages/book-session-form";
import MyBookings from "./Components/MyBookings/MyBookings";
import Settings from "./pages/settings";
import { useEffect } from "react";

function App() {
  window.localStorage.setItem("chakra-ui-color-mode", "dark");

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("currentUser");
    if (token) {
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <Routes>
      {/* <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/student/login" element={<StudentLogin />}></Route> */}
      <Route path="/" element={<Sidebar />}>
        <Route path="/" index element={<MyCalendar />}></Route>
        <Route path="/sessions" element={<Sessions />}></Route>
        <Route path="/book-session" element={<BookSession />}></Route>
        <Route path="/book-session/:id" element={<BookSessionsForm />}></Route>
        <Route path="/sessions/new" element={<NewSessions />}></Route>
        <Route path="/mybookings" element={<MyBookings />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
