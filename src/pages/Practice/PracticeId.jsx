import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../../components/UI/Other/Breadcrumbs.jsx";
import BlockTitle from "../../components/UI/Other/BlockTitle.jsx";
import {t} from "i18next";
import {useDispatch, useSelector} from "react-redux";
import {loadPracticElem} from "../../store/practic.js";
import {useParams} from "react-router-dom";
import BlockContentPractic from "../../components/UI/Other/BlockContentPractic.jsx";

const PracticeId = () => {
  const practiceItem = useSelector(state => state.practic)
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(() => {
    dispatch(loadPracticElem({id: id}))
  }, [dispatch]);
  return (
    <div>
      <Breadcrumbs/>
      <header className={'bg-practice bg-center bg-no-repeat bg-black max-lg:bg-center bg-cover'}>
        <div className={'backdrop-invert-0 bg-black/70'}>
          <div
            className={'container mx-auto py-80 max-lg:py-72 max-md:pt-40 max-md:pb-10 max-md:py-0 max-md:px-4 text-white'}>
            <Breadcrumbs prevLinkContent={t('Главная')} activeLink={'/practice'} activeLinkContent={t('Область юридической практики')}
                         currentPage={true}
                         currentPageContent={practiceItem.practicDataElem?.title?.map(el => el.ru)}></Breadcrumbs>
            <div className={'text-center w-10/12 max-lg:w-full break-words mx-auto '}>
              <BlockTitle title={t('Область юридической практики')}
                          titleStyle={'text-5xl max-md:text-3xl max-sm:text-2xl font-timesNewRomanBold my-12 max-md:my-8 tracking-wider'}
                          above={t('Отрасли')}
                          aboveStyle={'text-xl max-md:text-lg font-evolventaRegular uppercase text-titleLactic'}
                          subtitleStyle={'text-lg max-md:text-sm font-evolventaRegular w-8/12 mx-auto tracking-wider'}
                          subtitle={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}></BlockTitle>
            </div>
          </div>
        </div>
      </header>
      <section className={'max-sm:px-0'}>
        <BlockContentPractic
                      titleAnimation={true}
                      titleInBlock={true}
                      blockStyle={'flex flex-row-reverse gap-x-4 max-md:flex-wrap max-md:gap-y-10 max-md:mb-5'}
                      props={practiceItem.practicDataElem}
        />
      </section>
    </div>
  );
};

export default PracticeId;