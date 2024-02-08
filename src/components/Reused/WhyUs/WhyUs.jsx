import BlockTitle from "../../UI/Other/BlockTitle.jsx";
import {t} from 'i18next'
import {useEffect, useState} from "react";
import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import TeamIcon from '/src/assets/img/icons/team.svg'
import DocumentsIcon from '/src/assets/img/icons/documents.svg'
import ScalesIcon from '/src/assets/img/icons/scales.svg'
import HammerIcon from '/src/assets/img/icons/hammer.svg'
import WhyUsElem from "./WhyUsElem.jsx";
const WhyUs = ({bgShow, itemBg}) => {
  const [list, setList] = useState([
    {
      id: 0,
      icon: TeamIcon,
      num: 1700,
      title: '',
      titleElem: '+',
      subtitle: 'ДОВЕРЕННЫЕ КЛИЕНТЫ'
    },
    {
      id: 1,
      icon: DocumentsIcon,
      num: 180,
      title: `$`,
      titleElem: 'M',
      subtitle: 'ВОССТАНОВЛЕНО'
    },
    {
      id: 2,
      icon: ScalesIcon,
      num: 98,
      title: '',
      titleElem: `%`,
      subtitle: 'УСПЕШНЫЕ ДЕЛА'
    },
    {
      id: 3,
      icon: HammerIcon,
      num: 10.6,
      title: '',
      subtitle: 'СЛУЧАИ ТРАВМ'
    },
  ])

  return (
    <div className={`${bgShow}`}>
      <div className={bgShow ? 'bg-[#D2C5B3] bg-opacity-95 py-[100px] max-md:py-[40px]' : ''}>
        <div className={'container mx-auto text-center max-md:px-4'}>
          <div>
            <BlockTitle title={t('Почему мы?')}
                        titleStyle={'font-timesNewRoman text-6xl font-timesNewRomanBold text-titleDark max-md:text-5xl'}
                        subtitleStyle={'text-lg max-md:text-base font-evolventaRegular break-words pt-3'}
                        subtitle={t('Традиционно, юридические фирмы пишут о том, сколько судебных споров выграли, сколько денег сэкономили клиентам, как много нулей в сумме сделок, которые спроводили, сколько проверок')}/>
          </div>
          <div className={'flex flex-wrap justify-center gap-x-10 gap-y-6 mt-[70px]'}>
            {list.map(item=>
             <div key={item.id}>
               <WhyUsElem num={item.num} titleElem={item.titleElem} itemBg={itemBg} key={item.id} title={item.title} subtitle={item.subtitle} icon={item.icon}/>
             </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;