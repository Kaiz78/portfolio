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
import  {useEffect} from 'react';
import { useDispatch } from "react-redux";
import {
  fetchGitHubInfo,
} from "./store/reducers/homeSlice";
import { fetchGitHubReops } from './store/reducers/allProjectsSlice';
import AllProjects from './pages/allprojects';


function App() {
  let name = "Portfolio";
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();
  const ROUTE = import.meta.env.VITE_ROUTE;

  

  useEffect(
    function () {
      dispatch(fetchGitHubInfo() as any);
      dispatch(fetchGitHubReops() as any);
    },
    [dispatch]

  );


  return (
    <>
    <BrowserRouter  basename="/portfolio/">
     <HelmetProvider>    
      <Routes>
        <Route path="*" element={<Navigate to={`${ROUTE}`} />} />
        <Route path={`${ROUTE}`} element={<SideBar components={Home} name={name} />} />
        <Route path={`${ROUTE}/about`} element={<SideBar components={About}  name={name}  />} />
        <Route path={`${ROUTE}/education`} element={<SideBar components={Education}  name={name}  />} />
        <Route path={`${ROUTE}/experience`} element={<SideBar components={Experience}  name={name}  />} />
        <Route path={`${ROUTE}/project`} element={<SideBar components={Project}  name={name}  />} />
    
        <Route path={`${ROUTE}/skill`} element={<SideBar components={Skill}  name={name}  />} />
        <Route path={`${ROUTE}/cv`} element={<SideBar components={Cv}  name={name}  />} />
        <Route path={`${ROUTE}/contact`}  element={<SideBar components={Contact}  name={name}  />} />
        <Route path={`${ROUTE}/allProject`} element={<SideBar components={AllProjects} />} />
      </Routes>
      </HelmetProvider>
    </BrowserRouter>
    </>
  )
}

export default App
