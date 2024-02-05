import {Link, Outlet, useBeforeUnload, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Logo from "./components/UI/header_footer/elements/Logo.jsx";
import Header from "./components/UI/header_footer/Header.jsx";
import Footer from "./components/UI/header_footer/Footer.jsx";
import React, {useEffect, useRef, useState} from "react";

function App() {
  const {t, i18n} = useTranslation()
  const ref = useRef()
  const [size, setSize] = useState({})

  useEffect(() => {
    setSize(window.screen.width)
  }, [size]);


  return (
    <div className={'flex flex-col justify-between '} ref={ref}>
      <div className={'container mx-auto'}>
        <Header dynamic={size}/>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
