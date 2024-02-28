import Breadcrumbs from "../components/UI/Other/Breadcrumbs.jsx";
import BlockTitle from "../components/UI/Other/BlockTitle.jsx";
import {t} from "i18next";
import React, {useState} from "react";
import BlockContentService from "../components/UI/Other/BlockContentService.jsx";
import Quality from "../components/Reused/Quality/Quality.jsx";
import WhyUs from "../components/Reused/WhyUs/WhyUs.jsx";
import {motion} from "framer-motion";

export default function About() {
  const [ulList, setUlList] = useState([
    {
      id: 0,
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
      id: 1,
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
      id: 2,
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
  ])
  return (
    <motion.div initial={{ y: -20, opacity: 0.8}}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration: 0.7,ease: [0.6, -0.05, 0.01, 0.99]}}>
      <header className={'bg-about bg-center bg-no-repeat bg-black max-lg:bg-center bg-cover'}>
        <div className={'backdrop-invert-0 bg-black/70'}>
          <div
            className={'container mx-auto py-80 max-lg:py-72 max-md:pt-40 max-md:pb-10 max-md:py-0 max-md:px-4 text-white'}>
            <Breadcrumbs prevLinkContent={t('Главная')} activeLink={'/about'} activeLinkContent={t('О нас')} currentPage={false}/>
            <div className={'text-center w-10/12 max-lg:w-full break-words mx-auto '}>
              <BlockTitle title={t('Информация о нашей деятельности')}
                          titleStyle={'text-5xl max-md:text-3xl max-sm:text-2xl font-timesNewRomanBold my-12 max-md:my-8 tracking-wider'}
                          titleAnimation={true}
                          above={t('О нас')}
                          aboveStyle={'text-xl max-md:text-lg font-evolventaRegular uppercase text-titleLactic'}
                          subtitleStyle={'text-lg max-md:text-sm font-evolventaRegular w-8/12 mx-auto tracking-wider'}
                          subtitle={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}></BlockTitle>
            </div>
          </div>
        </div>
      </header>
      <section className={'py-[100px] max-md:py-[40px]'}>
        <div className={'w-full break-words max-lg:w-full container mx-auto max-md:px-6'}>
          <div>
            <h3 className={'font-evolventaBold text-xl '}>{t('О нас')}</h3>
          </div>
          <div className={'font-evolventaRegular text-[#777]'}>
            <div className={'text-lg flex flex-col gap-y-6 max-md:text-base'}>
              <p className={''}>{'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm tincidunt ut laoreet dolore magna aliquam erat volutpat.'}</p>
              <p>{'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}</p>
            </div>
            <ul className={'mt-4 pl-10 break-words list-disc flex flex-col gap-y-4 max-lg:hidden'}>
              {ulList.map(item =>
                <li key={item.id} className={''}>{item.desc}</li>
              )}
            </ul>
          </div>
        </div>
        <div>
          <Quality></Quality>
          <WhyUs itemBg={'bg-[#F5F5F5]'}/>
        </div>
      </section>
    </motion.div>
  );
};

