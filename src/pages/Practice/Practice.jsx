import React, {useEffect, useState} from 'react';
import BlockTitle from "../../components/UI/Other/BlockTitle.jsx";
import Breadcrumbs from "../../components/UI/Other/Breadcrumbs.jsx";
import PracticeSlide from "../../components/Reused/Practice/PracticeSlide.jsx";
import BlockImg from '/src/assets/img/block/img-block-three.png'
import {t} from "i18next"
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {loadPractic} from "../../store/practic.js";

const Practice = () => {
  const practicList = useSelector(state => state.practic)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPractic({page: 1, limit: 15}))
  }, [dispatch]);
  return (
    <motion.div initial={{ y: -20, opacity: 0.8}}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration: 0.7,ease: [0.6, -0.05, 0.01, 0.99]}}>
      <Breadcrumbs/>
      <header className={'bg-practice bg-center bg-no-repeat bg-black max-lg:bg-center bg-cover'}>
        <div className={'backdrop-invert-0 bg-black/70'}>
          <div
            className={'container mx-auto py-80 max-lg:py-72 max-md:pt-40 max-md:pb-10 max-md:py-0 max-md:px-4 text-white'}>
            <Breadcrumbs prevLinkContent={t('Главная')} activeLink={'/practice'} activeLinkContent={t('Область юридической практики')} currentPage={false}></Breadcrumbs>
            <div className={'text-center w-10/12 max-lg:w-full break-words mx-auto '}>
              <BlockTitle title={t('Область юридической практики')}
                          titleStyle={'text-5xl max-md:text-3xl max-sm:text-2xl font-timesNewRomanBold my-12 max-md:my-8 tracking-wider'}
                          titleAnimation={true}
                          above={t('Отрасли')}
                          aboveStyle={'text-xl max-md:text-lg font-evolventaRegular uppercase text-titleLactic'}
                          subtitleStyle={'text-lg max-md:text-sm font-evolventaRegular w-8/12 mx-auto tracking-wider'}
                          subtitle={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}></BlockTitle>
            </div>
          </div>
        </div>
      </header>
      <section className={'container mx-auto py-[100px] max-md:py-[40px]'}>
        <div className={'mb-20 mx-auto text-center'}>
          <BlockTitle title={t('Наша') + ' '} titleStyle={'text-6xl max-md:text-4xl font-timesNewRomanBold'}
                      subtitle={t('87% дел завершены с положительным результатом')} subtitleStyle={'text-2xl mt-2 max-md:text-lg text-[#777] font-evolventaRegular uppercase'}
                      titleSpan={t('Практика')} titleSpanStyle={'text-titleLactic'}
          ></BlockTitle>
        </div>
        <div className={'grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-10'}>
          {practicList.practicData.data?.map(item =>
            <PracticeSlide key={item.id} descriptionStyle={'text-black'}
                           linkUrl={item.id}
                           pageUrl={'practice'}
                           props={item}/>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Practice;