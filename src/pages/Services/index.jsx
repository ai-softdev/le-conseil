import React from 'react';
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {t} from "i18next";
import Button from "../../components/UI/Other/Button.jsx";
import BlockTitle from "../../components/UI/Other/BlockTitle.jsx";
import ServicesContent from "../../components/Services/ServicesContent.jsx";
import {motion} from "framer-motion";

const Index = () => {
  return (
    <motion.div initial={{ y: -20, opacity: 0.8}}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration: 0.7,ease: [0.6, -0.05, 0.01, 0.99]}}>
      <header className={'bg-subheaderService bg-center bg-no-repeat bg-black max-lg:bg-center bg-cover'}>
        <div className={'backdrop-invert-0 bg-black/70'}>
          <div className={'container mx-auto py-80 max-lg:py-72 max-md:pt-40 max-md:pb-10 max-md:py-0 max-md:px-4 text-white'}>
            <div  className={'text-center w-10/12 max-lg:w-full break-words mx-auto '}>
              <BlockTitle title={'Предоставляйте идеальные решения Для любых юридических лиц'}
                          titleAnimation={true}
                          titleStyle={'text-5xl max-md:text-3xl max-sm:text-2xl font-timesNewRomanBold my-12 max-md:my-8 tracking-wider'}
                          above={'Наши услуги'}
                          aboveStyle={'text-xl max-md:text-lg font-evolventaRegular uppercase text-titleLactic'}
                          subtitleStyle={'text-lg max-md:text-sm font-evolventaRegular w-8/12 mx-auto tracking-wider'}
                          subtitle={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}></BlockTitle>
            </div>
          </div>
        </div>
      </header>
      <section>
        <ServicesContent/>
      </section>
    </motion.div>
  );
};

export default Index;