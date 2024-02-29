
import { FaHome } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { LiaToolsSolid } from "react-icons/lia";
import { FaFileAlt } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function sideBar(props:any){

  console.log(props)
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <div>
        <div className="sidebar">
          <div className="auto-scroll">
            <div className="logo_details d-flex justify-content-center">
                <div className="logo_name">{props.name}</div>
                {isOpen ?  <FaAlignLeft   id="btn" onClick={OpenSidebar} /> : <GiHamburgerMenu  id="btn" onClick={OpenSidebar} />}
            </div> 
            <ul className="nav-list auto-scroll">
                    

                    <li>
                        <Link to="/">
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                               <FaHome  fontSize={34}/>
                            </div>
                            <span className="link_name">Accueil</span>
                        </Link>
                        <span className="tooltip">Acceuil</span>
                    </li>
                    <li>
                        <Link to="/about">
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <RiUser3Fill   fontSize={34}/>
                            </div>
                            <span className="link_name">A propos</span>
                        </Link>
                        <span className="tooltip">A propos</span>
                    </li>
                    <li>
                        <Link to="/education">
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <IoSchool fontSize={34} />
                            </div>
                            <span className="link_name">Éducation</span>
                        </Link>
                        <span className="tooltip">Éducation</span>
                    </li>
                    <li>
                        <Link to="/experience">
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <MdWork fontSize={34}/>
                            </div>
                            <span className="link_name">Expérience</span>
                        </Link>
                        <span className="tooltip">Exprérience</span>
                    </li>
                    <li>
                        <Link to="/project">
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <PiProjectorScreenChartDuotone  fontSize={34}/>
                            </div>
                            <span className="link_name">Projet</span>
                        </Link>
                        <span className="tooltip">Projet</span>
                    </li>
                    <li>
                        <Link to="/skill">
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <LiaToolsSolid fontSize={34}/>
                            </div>
                            <span className="link_name">Compétence</span>
                        </Link>
                        <span className="tooltip">Compétence</span>
                    </li>               
                    <li>
                        <Link to="/cv">
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <FaFileAlt fontSize={34}/>
                            </div>
                            <span className="link_name">CV</span>
                        </Link>
                        <span className="tooltip">CV</span>
                    </li>               
                    <li>
                        <Link to="/contact">
                            <div className='' style={
                                {
                                    marginLeft: '10%',
                                    height: '40px',
                                }
                            }>
                              <BiMessageRoundedDots fontSize={34}/>
                            </div>
                            <span className="link_name">Contact</span>
                        </Link>
                        <span className="tooltip">Contact</span>
                    </li>               
            </ul>
          </div>
        </div>

        <section className="home-section">
            <props.components />
        </section>
    </div>
  )
}

export default sideBar;
