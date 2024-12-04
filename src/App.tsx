import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetForgottenPassword from "./components/ResetForgottenPassword";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Tweet from "./components/CreateTweet";
import Search from "./components/Search";
import DasboardHome from "./components/DasboardHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/resetForgottenPassword"
          element={<ResetForgottenPassword />}
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index path="home" element={<DasboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tweet" element={<Tweet />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
