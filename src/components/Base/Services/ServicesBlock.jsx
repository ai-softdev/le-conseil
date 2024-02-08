import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition} from "react-transition-group";
import './ServiceBlock.css'
import {t} from 'i18next'
import {useSelector} from "react-redux";
import axios from "../../../composables/axios.js";
import {Link} from "react-router-dom";
const ServicesBlock = () => {
  const [mouseMove, setMouseMove] = useState(null)
  const nodeRef = useRef(null)
  const services = useSelector(state => state.service)
  return (
    <div className={'flex flex-wrap gap-6 w-full justify-center mx-auto'}>
      {services.serviceData.data?.map(item =>
        item.type === 'physical'
        ?
        <Link to={`/services/${item.id}`} key={item.id} onMouseEnter={() => setMouseMove(item.id)} onMouseLeave={() => setMouseMove(null)}
              className={`flex hover:text-white transition-all items-center relative justify-center border rounded-xl px-4 w-[410px] h-[150px] uppercase break-words`}>
          <p className={`text-lg font-evolventaRegular`}>{item.title[0].ru || item.title[0].uz || item.title[0].en}</p>
          <CSSTransition in={item.id === mouseMove} nodeRef={nodeRef} unmountOnExit timeout={100}
                         classNames={'blockStyle'}>
            <div ref={nodeRef} className={''}>
              <div className={'absolute h-full w-full bg-black top-0 left-0 opacity-40 -z-10 rounded-xl'}></div>
              <img className={'absolute h-full w-full rounded-xl left-0 top-0 -z-20'}
                   src={axios.getUri() + 'storage/' + item.image} alt=""/>
            </div>
          </CSSTransition>
        </Link>
          : <></>
      )}
      <Link to={'/services'} className={'w-[410px] h-[150px] flex items-center justify-center underline uppercase text-titleLactic text-lg hover:text-subtitleLactic'}>
         {t('Перейти в раздел')}
      </Link>
    </div>
  );
};

export default ServicesBlock;