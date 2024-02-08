import BlockTitle from "../UI/Other/BlockTitle.jsx";
import {t} from "i18next";
import React, {useEffect, useState} from "react";
import ServicesBlock from "../Base/Services/ServicesBlock.jsx";
import ServicesElem from "./ServicesElem.jsx";
import imgBlock from '/src/assets/img/block/img-block-one.png'
import {useDispatch, useSelector} from "react-redux";
import {loadService} from "../../store/service.js";
const ServicesContent = () => {
  const [activeElem, setActiveElem] = useState(false)
  const serviceList = useSelector(state => state.service)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadService({page: 1, limit: 10}))
  }, [dispatch]);
  return (
    <div className={'container mx-auto my-[100px] max-sm:my-10'}>
      <div className={'flex justify-between items-center flex-wrap max-lg:justify-center max-lg:items-center max-lg:text-center gap-y-10 max-md:mx-3'}>
        <BlockTitle title={t('Наши') + ' '} titleSpan={t('услуги')}
                    titleStyle={'text-6xl max-sm:text-5xl font-timesNewRomanBold text-titleDark'}
                    titleSpanStyle={'text-titleLactic'}></BlockTitle>
        <div className={'flex font-evolventaRegular text-lg max-sm:text-base'}>
          <button className={activeElem ? 'border-b pr-5': 'border-b border-titleLactic text-titleLactic transition-all pr-5'} onClick={()=>setActiveElem(!activeElem)}>{t('Физическим лицам')}</button>
          <button className={!activeElem ? 'border-b pl-5' : 'border-b border-titleLactic text-titleLactic pl-5 transition-all'} onClick={()=>setActiveElem(!activeElem)}>{t('Юридическим лицам')}</button>
        </div>
      </div>
      <div className={'mt-20 max-sm:mx-3 flex flex-col gap-y-20 pb-10 max-md:gap-y-10'}>
        {serviceList.serviceData.data?.map(item=>
          <ServicesElem key={item.id} {...item} />
        )}
      </div>
    </div>
  );
};

export default ServicesContent;