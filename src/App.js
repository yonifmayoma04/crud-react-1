import React from "react";
import "./App.css";
import "./Formlogin.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import View from "./components/View";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List";
import Add from "./components/Add";
import Update from "./components/Update";
import GetStarted from "./components/GetStarted";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Form from "./components/Form";

const App = () => {
 

  return (
   
        <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<GetStarted />} />
          <Route exact path="/signin/:id" element={<SignIn />} />
          <Route exact path="/signup/:id" element={<SignUp />} />
          <Route exact path="/form/:id" element={<Form />} />
          <Route exact path="/list/:id" element={<List />} />
          <Route exact path="/add/:id" element={<Add />} />
          <Route exact path="/view/:id" element={<View />} />
          <Route exact path="/update/:id" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
