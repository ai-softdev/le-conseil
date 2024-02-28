import {useRef, useState} from "react";
import BlockTitle from "../../UI/Other/BlockTitle.jsx";

import {t} from 'i18next'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Practice.css'
import Arrow from '/src/assets/img/icons/arrow.svg'
import PracticeImg from '/src/assets/img/block/img-block-three.png'
import PracticeSlide from "./PracticeSlide.jsx";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";

const Practice = () => {
  const [practice, setPractice] = useState([
    {
      id: 0,
      date: new Date().toLocaleDateString(),
      description: 'Признание права собственности на дома в порядке наследования',
      img: PracticeImg,
      linkUrl: '/about'
    },
    {
      id: 1,
      date: new Date().toLocaleDateString(),
      description: 'Признание права собственности на дома в порядке наследования',
      img: PracticeImg,
      linkUrl: '/'
    },
    {
      id: 2,
      date: new Date().toLocaleDateString(),
      description: 'Признание права собственности на дома в порядке наследования',
      img: PracticeImg,
      linkUrl: '/'
    },
    {
      id: 3,
      date: new Date().toLocaleDateString(),
      description: 'Признание права собственности на дома в порядке наследования',
      img: PracticeImg,
      linkUrl: '/'
    },
    {
      id: 4,
      date: new Date().toLocaleDateString(),
      description: 'Признание права собственности на дома в порядке наследования',
      img: PracticeImg,
      linkUrl: '/'
    },
    {
      id: 5,
      date: new Date().toLocaleDateString(),
      description: 'Признание права собственности на дома в порядке наследования',
      img: PracticeImg,
      linkUrl: '/'
    },
  ])
  const practiceList = useSelector(state => state.practic)
  const naviNext = useRef(null)
  const naviPrev = useRef(null)
  return (
    <div className={'bg-greenDark py-[100px] max-md:py-10'}>
      <div className={'container mx-auto '}>
        <div className={'text-center '}>
          <BlockTitle title={t('наша') + ' '} titleSpan={t('практика')}
                      titleStyle={'text-6xl max-sm:text-5xl font-timesNewRomanBold text-titleDark'}
                      titleSpanStyle={'text-titleLactic'} subtitle={t('87% дел завершены с положительным результатом')}
                      subtitleStyle={'text-subtitleLactic font-evolventaRegular text-2xl max-md:text-xl max-md:pt-6'}></BlockTitle>
        </div>
        <div className={'my-[100px] relative flex max-sm:flex-wrap max-sm:my-[40px]'}>
          <button ref={naviPrev} className={'max-md:w-full my-auto max-sm:hidden '}>
            <svg  width="100px" height="100px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none"
                 stroke="#BA9E74">
              <polyline points="20 24 12 32 20 40"/>
              <line x1="52" y1="32" x2="12" y2="32"/>
            </svg>
          </button>

          <Swiper className={'p-20 rounded-[10px]'}
                  slidesPerView={1}
                  pagination={{
                    el: "#containerForBullets",
                    type: "bullets",
                    bulletClass: "swiper-custom-bullet",
                    bulletActiveClass: "swiper-custom-bullet-active",
                    clickable: true,
                  }}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      pagination: true
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 80,
                      pagination: false
                    },

                    1100: {
                      slidesPerView: 3,
                      spaceBetween: 180,
                      pagination: false
                    },
                    1400: {
                      slidesPerView: 4,
                      spaceBetween: 100,
                      pagination: false
                    },
                    1536: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                      pagination: false
                    }
                  }}
                  navigation={{
                    nextEl: naviNext.current,
                    prevEl: naviPrev.current,
                  }}
                  modules={[Navigation, Pagination]}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.nextEl = naviNext.current
                    swiper.params.navigation.prevEl = naviPrev.current
                  }}
          >

            {practiceList.practicData.data?.map(item =>
              <SwiperSlide key={item.id}>
                <PracticeSlide props={item} descriptionStyle={'text-white'} linkUrl={item.id} pageUrl={'practice'}/>
              </SwiperSlide>
            )
            }
            <SwiperSlide className={'mx-auto flex justify-center w-full'}>
              <PracticeSlide link={'true'} linkTitle={'Подробнее'} linkUrl={' '} pageUrl={'practice'}></PracticeSlide>
            </SwiperSlide>
          </Swiper>
          <button ref={naviNext} className={'max-md:w-full h-max my-auto max-sm:hidden  z-10'}>
            <svg className={'rotate-180'} width="100px" height="100px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none"
                 stroke="#BA9E74">
              <polyline points="20 24 12 32 20 40"/>
              <line x1="52" y1="32" x2="12" y2="32"/>
            </svg>
          </button>
        </div>
        <div id="containerForBullets" className={'flex justify-center gap-x-3'}></div>
      </div>
    </div>
  );
};

export default Practice;