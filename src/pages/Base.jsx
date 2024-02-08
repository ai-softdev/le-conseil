import {t} from "i18next";
import {Link} from "react-router-dom";
import {motion, useInView} from "framer-motion";

import Button from "../components/UI/Other/Button.jsx";
import Quality from "../components/Reused/Quality/Quality.jsx";
import Services from "../components/Base/Services.jsx";
import Practice from "../components/Reused/Practice/Practice.jsx";
import WhyUs from "../components/Reused/WhyUs/WhyUs.jsx";
import Team from "../components/Base/Team.jsx";
import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {loadTeams} from "../store/team.js";
import {loadService, loadServiceElem} from "../store/service.js";
import {loadPractic} from "../store/practic.js";
const Base = () => {
  const title = t('Предоставление юридических услуг').split(" ")
  const dispatch = useDispatch()
  const blockAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.2}
    })
  }
  useEffect(() => {
    dispatch(loadTeams({page: 1, limit: 15}))
    dispatch(loadServiceElem({id: 1}))
    dispatch(loadPractic({page: 1, limit: 15}))
  }, []);
  return (
    <motion.main initial={{y: -20, opacity: 0.8}}
                 animate={{y: 0, opacity: 1}}
                 transition={{duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99]}}>
      <header className={'bg-cover bg-right-top bg-no-repeat bg-subheaderBase bg-black max-lg:bg-center'}>
        <motion.div initial={'hidden'} viewport={{once: true}} whileInView={'visible'}
                    className={'backdrop-invert-0 bg-black/60'}>
          <div
            className={'container mx-auto py-40 max-md:pt-40 max-md:pb-10 max-md:py-0 text-white flex justify-between items-center max-md:flex-col'}>
            <div className={'w-8/12 max-lg:w-9/12 max-md:w-full max-md:text-center '}>
              <h4
                className={'font-evolventaRegular text-lg text-semiLightGray max-lg:text-base mb-4 max-sm:text-base'}>{t('Бесплатная первичная консультация юриста')}</h4>
              <div>
                {title.map((el, i) =>
                  <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2.25, delay: i / 2}}
                             key={i}
                             className={'text-6xl max-lg:text-5xl uppercase font-timesNewRomanBold max-sm:text-2xl'}>{el}</motion.h1>
                )}
                <motion.h3 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}
                           className={'text-4xl max-lg:text-xl max-sm:text-lg font-timesNewRomanRegular uppercase'}>{t('Работаем по всему Узбекистану с 2013 года')}</motion.h3>
              </div>
              <motion.div variants={blockAnimation} custom={8}
                          className={'mt-[50px] flex items-center gap-x-8 max-md:text-start'}>
                <div className={'w-20 h-[1px] bg-titleLactic'}/>
                <div className={'font-evolventaRegular'}>
                  <p className={'text-semiLightGray text-lg  max-lg:text-base'}>{t('Экспертность, ответственность')}</p>
                  <p
                    className={'text-titleLactic text-2xl max-lg:text-lg'}>{t('Полное сопровождение и доведение до нужного результата')}</p>
                  <p className={'text-semiLightGray text-lg'}>{t('Работаем с любой сложности ситуации')}</p>
                </div>
              </motion.div>
              <div className={'w-4/12 max-lg:w-7/12 break-words mt-[70px] max-md:mx-auto max-md:text-center'}>
                <p
                  className={'font-evolventaRegular text-sm tracking-widest'}>{t('Нужна консультация ? Оставьте заявку, перезвоним в течение часа.')}</p>
                <Button
                  styles={'w-full bg-lacticElem text-titleDark py-4 font-bold  uppercase text-sm tracking-wider mt-5 rounded-xl'}
                  content={t('Оставить заявку')}/>
              </div>
            </div>
            <div
              className={'flex gap-x-16 rotate-90 max-md:rotate-0 max-md:mt-10 tracking-widest font-evolventaRegular text-lg text-[#ADADAD]'}>
              <Link className={'transition-all duration-200 hover:text-white'} to={''}>Telegram</Link>
              <Link className={'transition-all duration-200 hover:text-white'} to={''}>Instagram</Link>
            </div>
          </div>
        </motion.div>
      </header>
      <main className={'overflow-hidden'}>
        <section>
          <Quality containerStyles={'bg-lactic'}></Quality>
        </section>
        <section>
          <Services/>
        </section>
        <section>
          <Practice/>
        </section>
        <section>
          <WhyUs bgShow={'bg-whyUs bg-cover bg-top bg-fixed'} itemBg={'bg-white'}/>
        </section>
        <section>
          <Team/>
        </section>
      </main>
    </motion.main>
  );
};

export default Base;