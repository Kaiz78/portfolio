
import { FaHome } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { LiaToolsSolid } from "react-icons/lia";
import { FaFileAlt } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import {  NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import {translate} from "../i18n";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";

function sideBar(props:any){

  const {language} = useSelector((state: RootState) => state.lang);  
  let content = translate('page', language) as any
  
  const [isOpen, setIsOpen] = useState(false);
  const ROUTE = import.meta.env.VITE_ROUTE;
  // si on clique sur le boutton sidebar
  const OpenSidebar = async (event:any) => {
    event.preventDefault();  
    const sidebar = document.querySelector('.sidebar');

    // .sidebar open
    sidebar?.classList.toggle('open');

    if(sidebar?.classList.contains('open')){
      setIsOpen(true);
    }else{
      setIsOpen(false);
    }
  };



    const navigate = useNavigate();
    const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Écoute le changement de taille d'écran
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const handleNavLinkClick = (event:Object, route:string) => {
    if (screenSize.width < 768) {
      OpenSidebar(event);
      navigate(route);  
    }
  };


  return (
    <div>
        <div className="sidebar">
          <div className="auto-scroll">
            <div className="logo_details d-flex justify-content-center">
                <div className="logo_name">{props.name}</div>
                {isOpen ?  <FaAlignLeft   id="btn" onClick={OpenSidebar} /> :   <>
                    <div className="d-none-768">
                        <GiHamburgerMenu id="btn" onClick={OpenSidebar} />
                    </div>
                    <div className="d-none-768-plus">
                        <RxCross1 id="btn" className="" onClick={OpenSidebar} />

                    </div>
                    </>
                }
            </div> 
            <ul className="nav-list auto-scroll">
                    

                    <li>
                        <NavLink end to={`${ROUTE}/`} className={(nav) => (nav.isActive ? "nav-active" : "li-nav")} onClick={(e)=>{
                            handleNavLinkClick(e,`${ROUTE}/`);
                        }}>
                        
                            <div className="" style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            } >
                               <FaHome  fontSize={34}/>
                            </div>
                            <span className="link_name">{content.home.title}</span>
                        </NavLink>
                        <span className="tooltip">{content.home.title}</span>
                    </li>
                    <li>
                        <NavLink to={`${ROUTE}/about`} className={(nav) => (nav.isActive ? "nav-active" : "li-nav")} onClick={(e)=>{
                            handleNavLinkClick(e,`${ROUTE}/about`);
                        }}>
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <RiUser3Fill   fontSize={34}/>
                            </div>
                            <span className="link_name">{content.about.title}</span>
                        </NavLink>
                        <span className="tooltip">{content.about.title}</span>
                    </li>
                    <li>
                        <NavLink to={`${ROUTE}/education`} className={(nav) => (nav.isActive ? "nav-active" : "li-nav")} onClick={(e)=>{
                            handleNavLinkClick(e,`${ROUTE}/education`);
                        }}>
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <IoSchool fontSize={34} />
                            </div>
                            <span className="link_name">{content.education.title}</span>
                        </NavLink>
                        <span className="tooltip">{content.education.title}</span>
                    </li>
                    <li>
                        <NavLink to={`${ROUTE}/experience`} className={(nav) => (nav.isActive ? "nav-active" : "li-nav")} onClick={(e)=>{
                            handleNavLinkClick(e,`${ROUTE}/experience`);
                        }}>
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <MdWork fontSize={34}/>
                            </div>
                            <span className="link_name">{content.experience.title}</span>
                        </NavLink>
                        <span className="tooltip">{content.experience.title}</span>
                    </li>
                    <li>
                        <NavLink to={`${ROUTE}/project`} className={(nav) => (nav.isActive ? "nav-active" : "li-nav")} onClick={(e)=>{
                            handleNavLinkClick(e,`${ROUTE}/project`);
                        }}>
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <PiProjectorScreenChartDuotone  fontSize={34}/>
                            </div>
                            <span className="link_name">{content.project.title}</span>
                        </NavLink>
                        <span className="tooltip">{content.project.title}</span>
                    </li>
                    <li>
                        <NavLink to={`${ROUTE}/skill`} className={(nav) => (nav.isActive ? "nav-active" : "li-nav")} onClick={(e)=>{
                            handleNavLinkClick(e,`${ROUTE}/skill`);
                        }}>
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <LiaToolsSolid fontSize={34}/>
                            </div>
                            <span className="link_name">{content.skills.title}</span>
                        </NavLink>
                        <span className="tooltip">{content.skills.title}</span>
                    </li>               
                    <li>
                        <NavLink to={`${ROUTE}/cv`} className={(nav) => (nav.isActive ? "nav-active" : "li-nav")} onClick={(e)=>{
                            handleNavLinkClick(e,`${ROUTE}/cv`);
                        }}>
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <FaFileAlt fontSize={34}/>
                            </div>
                            <span className="link_name">{content.cv.title}</span>
                        </NavLink>
                        <span className="tooltip">{content.cv.title}</span>
                    </li>               
                    <li>
                        <NavLink to={`${ROUTE}/contact`} className={(nav) => (nav.isActive ? "nav-active" : "li-nav")} onClick={(e)=>{
                            handleNavLinkClick(e,`${ROUTE}/contact`);
                        }}>
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <BiMessageRoundedDots fontSize={34}/>
                            </div>
                            <span className="link_name">{content.contact.title}</span>
                        </NavLink>
                        <span className="tooltip">{content.contact.title}</span>
                    </li>               
            </ul>
          </div>
        </div>

        <section className="home-section">
            <Navbar />
            <props.components />
        </section>
    </div>
  )
}

export default sideBar;
