import React from 'react';
import '../styles/global.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import AppContext from "../context/AppContext"
import useInitialState from '../hooks/useInitialState';
const App = () => {
  const initialState = useInitialState();

    return (
      <AppContext.Provider value={initialState}>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path='projects/:id' element={<ProjectDetails />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    );
}

export default App;