import {Outlet, ScrollRestoration, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Header from "./components/UI/header_footer/Header.jsx";
import Footer from "./components/UI/header_footer/Footer.jsx";
import React, {useEffect, useRef, useState} from "react";
import {AnimatePresence} from "framer-motion";

function App() {
  const ref = useRef()
  const [size, setSize] = useState({})
  useEffect(() => {
    setSize(window.screen.width)
  }, [size]);

  return (
      <AnimatePresence>
          <div className={'flex flex-col justify-between '} ref={ref}>
            <div className={'container mx-auto'}>
              <Header dynamic={size}/>
            </div>
            <ScrollRestoration/>
            <Outlet/>
            <Footer/>
          </div>
      </AnimatePresence>
  )
}

export default App
