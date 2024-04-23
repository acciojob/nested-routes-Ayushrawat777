import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import Home from "./Home";
import Women from "./Women";
import Grooming from "./Grooming";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";

const App = () => {
  return (
    <Router>
      <h1>React Router</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/women">User</NavLink>
      </nav>

      <Routes>
       
        <Route path="/" element={<Home />} />

        <Route path="/women" element={<Women />}>
          <Route path="grooming" element={<Grooming />} />
          <Route path="shirt" element={<Shirt />} />
          <Route path="trouser" element={<Trouser />} />
          <Route path="jewellery" element={<Jewellery />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
