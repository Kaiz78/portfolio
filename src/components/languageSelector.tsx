// LanguageSelector.tsx
import  {useState, useEffect} from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { useDispatch} from 'react-redux';

import { setLanguage } from "../store/actions/langAction";



const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 10%;
  background-color: #000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
  width: 120px;
`;

const DropdownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #000;
  }
`;

const LanguageSelector = () => {
  const dispatch = useDispatch();


  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(localStorage.getItem("language") || "FR")

  useEffect(() => {
    // Enregistrez la langue sélectionnée dans le localStorage
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language:string) => {
    dispatch(setLanguage(language) as any);
    setSelectedLanguage(language);
    setIsOpen(false);
  };



  return (
    <>
    <StyledDropdown>
      <DropdownButton onClick={toggleDropdown}>
      <Icon icon={selectedLanguage === "FR" ? "twemoji:flag-for-france" : "twemoji:flag-for-united-kingdom"} style={{ marginRight: "0.5rem" }} />
{selectedLanguage.toUpperCase()}

      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          <DropdownItem onClick={() => handleLanguageChange("FR")}>
          <Icon icon="twemoji:flag-france" />
            FR
          </DropdownItem>
          <DropdownItem onClick={() => handleLanguageChange("EN")}>
          <Icon icon="twemoji:flag-for-united-kingdom" />
            EN
          </DropdownItem>
        </DropdownMenu>
      )}
        </StyledDropdown>
    </>
  );
};

export default LanguageSelector;
