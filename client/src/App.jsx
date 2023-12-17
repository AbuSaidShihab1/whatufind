import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Searchjoin from "./components/search/Searchjoin";
import Signin from "./components/search/Signin";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Notificationpage from "./pages/Notificationpage";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/join" element={<Searchjoin />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/notification" element={<Notificationpage />} />
        <Route exact path="/message" element={<Message />} />
        <Route exact path="/public-profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
