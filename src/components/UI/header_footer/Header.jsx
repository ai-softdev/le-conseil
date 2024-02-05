import Logo from "./elements/Logo.jsx";
import Navigation from "./elements/Navigation.jsx";
import Contacts from "./elements/Contacts.jsx";
import {useEffect, useState} from "react";

const Header = ({dynamic}) => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(()=>{
    if(window.screen.width > 1000) {
      setIsOpen(!isOpen)
    }
  },[])
  return (
    <div className={'z-10 absolute mt-10 flex items-center container justify-between '}>
      <Logo logoStyle={'max-sm:mx-10'} subtitle={'text-subtitleDark '}/>
      <Navigation showBars={isOpen} dropdownCheck={true} onClick={() => setIsOpen(!isOpen)}/>
      <Contacts subtitle={'Заказать звонок'}
                icon={true}
                onClick={() => setIsOpen(!isOpen)}
                iconStyle={'max-lg:hidden'}
                subtitleLinkType={'tel'}
                subtitleLink={'+998900260001'}
                contactStyle={'max-lg:hidden'}
                subTitleStyle={'text-white underline text-lg font-evolventaRegular max-xl:text-base'}
                titleStyle={'text-titleLactic text-2xl font-evolventaBold max-xl:text-lg'}/>

    </div>
  );
};

export default Header;