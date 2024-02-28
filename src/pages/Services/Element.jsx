import React, {useEffect, useState} from 'react';
import BlockTitle from "../../components/UI/Other/BlockTitle.jsx";
import BlockContentService from "../../components/UI/Other/BlockContentService.jsx";
import BlockImg from '/src/assets/img/block/img-block-two.png'
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {loadServiceElem} from "../../store/service.js";
import {useParams, useRoutes} from "react-router-dom";
import Breadcrumbs from "../../components/UI/Other/Breadcrumbs.jsx";
import {t} from "i18next";

const Element = () => {
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
  const serviceItem = useSelector(state => state.service)
  const dispatch = useDispatch()
  const {serviceId} = useParams()
  useEffect(() => {
    dispatch(loadServiceElem({id: serviceId}))
    console.log(serviceItem.serviceDataElem.data)
  }, [dispatch]);
  return (
    <motion.div initial={{y: -20, opacity: 0.8}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99]}}>
      <header className={'bg-subheaderService bg-center bg-no-repeat bg-black max-lg:bg-center bg-cover'}>
        <div className={'backdrop-invert-0 bg-black/70'}>
          <div
            className={'container mx-auto py-80 max-lg:py-72 max-md:pt-40 max-md:pb-10 max-md:py-0 max-md:px-4 text-white relative'}>
            <Breadcrumbs prevLinkContent={t('Главная')} activeLink={'/services'} activeLinkContent={t('Услуги')}
                         currentPage={true}
                         currentPageContent={serviceItem.serviceDataElem.data?.title?.map(el => el.ru)}></Breadcrumbs>
            <div className={'text-center w-10/12 max-lg:w-full break-words mx-auto '}>
              <BlockTitle title={'Предоставляйте идеальные решения Для любых юридических лиц'}
                          titleStyle={'text-5xl max-md:text-3xl max-sm:text-2xl font-timesNewRomanBold my-12 max-md:my-8 tracking-wider'}
                          above={'Наши услуги'}
                          aboveStyle={'text-xl max-md:text-lg font-evolventaRegular uppercase text-titleLactic'}
                          subtitleStyle={'text-lg max-md:text-sm font-evolventaRegular w-8/12 mx-auto tracking-wider'}
                          subtitle={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}></BlockTitle>
            </div>
          </div>
        </div>
      </header>
      <div>
          <BlockContentService
                        titleInBlock={false}
                        blockStyle={'flex max-lg:flex-col gap-x-6 justify-center py-20 max-lg:py-10 max-lg:text-center max-lg:gap-y-10'}
                        props={serviceItem.serviceDataElem}/>
      </div>
    </motion.div>
  );
};

export default Element;