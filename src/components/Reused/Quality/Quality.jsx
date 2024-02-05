import React, {useState} from 'react';
import QualityBlock from "./QualityBlock.jsx";
import {t} from 'i18next'
import Elipse from '/src/assets/img/icons/block/elipse.svg'
import Triangle from '/src/assets/img/icons/block/triangle.svg'
import Rectangle from '/src/assets/img/icons/block/rectangle.svg'
import Rhombus from '/src/assets/img/icons/block/rhombus.svg'
import Hex from '/src/assets/img/icons/block/hex.svg'

const Quality = ({containerStyles}) => {
  const [blockList, setBlockList] = useState([
    {
      id: 0,
      title: t('Мы компетентны'),
      description: t('Все сотрудники имеют высшее юридическое образование и постоянно проходят обучений'),
      icon: Elipse,
    },
    {
      id: 1,
      title: t('Мы ответственны'),
      description: t('Специалисты, помимо своих вопросов, имеют знания в смежных областях'),
      icon: Triangle,
    },
    {
      id: 2,
      title: t('Мы системны'),
      description: t('Мы умеем управлять проектами-нам передают управление сотрудниками'),
      icon: Rectangle,
    },
    {
      id: 3,
      title: t('Мы опытны'),
      description: t('У нас разнообразный опыт по очень специализированным вопросам'),
      icon: Rhombus,
    },
    {
      id: 4,
      title: t('Мы креативны'),
      description: t('Мы находим уникальные решения. Учитываем все аспекты проекта'),
      icon: Hex,
    },
  ])
  return (
    <div className={containerStyles}>
      <div className={'container mx-auto py-24 max-md:py-10'}>
        <div className={'grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 items-center max-sm:mx-4'}>
          <div className={'max-md:text-center'}>
            <p className={'mb-4 text-lg text-titleLactic font-evolventaRegular'}>{t('О компании Le-Conseil')}</p>
            <h3 className={'flex flex-col max-md:gap-x-4 max-sm:text-5xl max-md:flex-row max-md:justify-center text-6xl uppercase font-timesNewRomanBold text-titleDark'}>{t('Пару')}<span
              className={'pl-20 max-md:pl-0'}>{t('Слов')}</span></h3>
          </div>
          {blockList.map(item =>
            <QualityBlock key={item.id} title={item.title} icon={item.icon}
                          description={item.description}></QualityBlock>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Quality;