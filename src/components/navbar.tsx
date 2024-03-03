import LanguageSelector from "./languageSelector"
import { GiHamburgerMenu } from "react-icons/gi";
import  {useState} from "react";

export default function navbar() {

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
    <div className='navbar-perso'>
       <div style={
        {
          display: 'flex',
          justifyContent: 'space-between',
        }
       }>
        <div className="text-end">
          {
            !isOpen ? <GiHamburgerMenu className="btn-navbar d-none-768-plus"  id="btn" onClick={OpenSidebar} /> : <GiHamburgerMenu className="btn-navbar d-none-768-plus"  id="btn" onClick={OpenSidebar} />
          }

        </div>
        <div>
          <LanguageSelector/>

        </div>
        </div> 

    </div>
  )
}
