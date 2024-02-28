import React, {useEffect, useState} from 'react';
import BlockTitle from "../../components/UI/Other/BlockTitle.jsx";
import {t} from "i18next";
import Breadcrumbs from "../../components/UI/Other/Breadcrumbs.jsx";
import TeamCard from "../../components/Reused/TeamCard.jsx";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {loadTeams} from "../../store/team.js";
const Team = () => {
  const dispatch=  useDispatch()
  const teams = useSelector(state=> state.teams)
  useEffect(() => {
    dispatch(loadTeams({page: 1, limit: 10}))
    console.log(teams.teamData.data)
  }, [dispatch]);
  return (
    <motion.div initial={{ y: -20, opacity: 0.8}}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration: 0.7,ease: [0.6, -0.05, 0.01, 0.99]}}>
      <header className={'bg-team bg-center bg-no-repeat bg-black max-lg:bg-center bg-cover'}>
        <div className={'backdrop-invert-0 bg-black/70'}>
          <div
            className={'container mx-auto py-80 max-lg:py-72 max-md:pt-40 max-md:pb-10 max-md:py-0 max-md:px-4 text-white'}>
            <Breadcrumbs prevLinkContent={t('Главная')} activeLink={'/team'} activeLinkContent={t('Команда')} currentPage={false}/>
            <div className={'text-center w-10/12 max-lg:w-full break-words mx-auto '}>
              <BlockTitle title={t('Информация о наших сотрудниках')}
                          titleStyle={'text-5xl max-md:text-3xl max-sm:text-2xl font-timesNewRomanBold my-12 max-md:my-8 tracking-wider'}
                          titleAnimation={true}
                          above={t('Наша команда')}
                          aboveStyle={'text-xl max-md:text-lg font-evolventaRegular uppercase text-titleLactic'}
                          subtitleStyle={'text-lg max-md:text-sm font-evolventaRegular w-8/12 mx-auto tracking-wider'}
                          subtitle={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}></BlockTitle>
            </div>
          </div>
        </div>
      </header>
      <section className={'container mx-auto py-[100px] max-md:py-[40px] max-md:px-6'}>
        <BlockTitle title={t('Наша') + ' '} titleStyle={'text-6xl max-md:text-4xl font-timesNewRomanBold max-md:text-center'}
                    subtitle={t('Работая с нами, нужно понимать, что мы как футбольная команда. По количеству людей и по расходам на них. Но в отличии от сброной России и по футболу, Ваши ожидание - это наши проблемы. Если вы вовремся оплатили счёт!')}
                    subtitleStyle={'text-2xl mt-4 max-md:text-lg max-md:text-center'}
                    titleSpan={t('Команда')} titleSpanStyle={'text-titleLactic'}/>
        <div className={'flex flex-wrap max-md:items-center max-lg:justify-center justify-between gap-y-10 my-20 max-md:my-10'}>
          {teams.teamData.data?.map((item) =>
            <TeamCard key={item.id} {...item}/>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Team;