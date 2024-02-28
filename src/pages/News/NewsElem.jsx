import React, {useEffect} from 'react';
import Breadcrumbs from "../../components/UI/Other/Breadcrumbs.jsx";
import BlockTitle from "../../components/UI/Other/BlockTitle.jsx";
import {t} from "i18next";
import BlockContentPractic from "../../components/UI/Other/BlockContentPractic.jsx";
import {useDispatch, useSelector} from "react-redux";
import {loadNewsElem} from "../../store/news.js";
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";

const NewsElem = () => {
  const newsItem = useSelector(state => state.news)
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(() => {
    dispatch(loadNewsElem({id: id}))
  }, [dispatch]);
  return (
    <motion.div initial={{ y: -20, opacity: 0.8}}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration: 0.7,ease: [0.6, -0.05, 0.01, 0.99]}}>
      <Breadcrumbs/>
      <header className={'bg-news bg-center bg-no-repeat bg-black max-lg:bg-center bg-cover'}>
        <div className={'backdrop-invert-0 bg-black/70'}>
          <div
            className={'container mx-auto pt-60 pb-20 max-lg:py-72 max-md:pt-40 max-md:pb-10 max-md:py-0 max-md:px-4 text-white'}>
            <Breadcrumbs prevLinkContent={t('Главная')} activeLink={'/practice'} activeLinkContent={t('Область юридической практики')}
                         currentPage={true}
                         currentPageContent={newsItem.newsDataElem?.title?.map(el => el.ru.slice(0,20) + '...')}></Breadcrumbs>
            <div className={'text-center w-10/12 max-lg:w-full break-words mx-auto '}>
              <BlockTitle title={t('Новости')}
                          titleStyle={'text-5xl max-md:text-3xl max-sm:text-2xl font-timesNewRomanBold my-12 max-md:my-8 tracking-wider'}
                          titleAnimation={true}
                          aboveStyle={'text-xl max-md:text-lg font-evolventaRegular uppercase text-titleLactic'}
              />
            </div>
          </div>
        </div>
      </header>
      <section className={'max-sm:px-5'}>
        <BlockContentPractic
          titleAnimation={true}
          titleInBlock={true}
          blockStyle={'flex flex-row-reverse gap-x-4 max-md:flex-wrap max-md:gap-y-10 max-md:mb-5'}
          props={newsItem.newsDataElem}
        />
      </section>
    </motion.div>
  );
};

export default NewsElem;