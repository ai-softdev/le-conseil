import React, {useState} from 'react';
import BlockTitle from "../UI/Other/BlockTitle.jsx";
import {t} from 'i18next'
import ServicesBlock from "./Services/ServicesBlock.jsx";

const Services = () => {
  const [activeElem, setActiveElem] = useState(false)
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
      <div className={'mt-20 max-sm:mx-3'}>
        <ServicesBlock/>
      </div>
    </div>
  );
};

export default Services;