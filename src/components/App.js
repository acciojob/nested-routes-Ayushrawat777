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

      <ul>
      <li> <NavLink to="/">Home</NavLink></li> 
      <li> <NavLink to="/women">Women</NavLink></li> 
      </ul>

      <Routes>
      
        <Route path="/" element={<Home />} />

        <Route path="/women" element={<Women />}>
          <Route path="Grooming" element={<Grooming />} />
          <Route path="Shirt" element={<Shirt />} />
          <Route path="Trouser" element={<Trouser />} />
          <Route path="Jewellery" element={<Jewellery />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
