import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Searchjoin from "./components/search/Searchjoin";
import Signin from "./components/search/Signin";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/join" element={<Searchjoin />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
