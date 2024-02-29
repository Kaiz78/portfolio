import '../bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './styles/index.scss'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Education from './pages/education';
import Skill from './pages/skill';
import Project from './pages/project';
import Cv from './pages/cv';
import Experience from './pages/experience';
import SideBar from './components/sidebar';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGitHubInfo,
  selectError,
  selectIsLoading,
} from "./services/homeSlice";
import { fetchGitHubReops } from './services/allProjectsSlice';
import AllProjects from './pages/allprojects';
import Navbar from './components/navbar';


function App() {
  let name = "Portfolio";
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(
    function () {
      
      dispatch(fetchGitHubInfo() as any);
      dispatch(fetchGitHubReops() as any);
    },
    [dispatch]
  );

  return (
    <>

    <BrowserRouter>
     <HelmetProvider>
    <Navbar />
    
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<SideBar components={Home} name={name} />} />
        <Route path="/about" element={<SideBar components={About}  name={name}  />} />
        <Route path="/education" element={<SideBar components={Education}  name={name}  />} />
        <Route path="/experience" element={<SideBar components={Experience}  name={name}  />} />
        <Route path="/project" element={<SideBar components={Project}  name={name}  />} />
        <Route path="/skill" element={<SideBar components={Skill}  name={name}  />} />
        <Route path="/cv" element={<SideBar components={Cv}  name={name}  />} />
        <Route path="/contact" element={<SideBar components={Contact}  name={name}  />} />
        <Route path="/All-Projects" element={<SideBar components={AllProjects} />} />
      </Routes>
      </HelmetProvider>
    </BrowserRouter>
    </>
  )
}

export default App
