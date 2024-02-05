import React, {useState} from 'react';
import FooterNavigationElems from "./FooterNavigationElems.jsx";

const FooterNavigation = () => {
  const [legal, setLegal] = useState([
    {
      id: 0,
      name: 'Нефтегазовая отрасль',
      link: '',
    },
    {
      id: 1,
      name: 'Строительство',
      link: '',
    },
    {
      id: 2,
      name: 'Фармацевтика и здравоохранение',
      link: '',
    },
    {
      id: 3,
      name: 'Разрешение споров и судебные разбирательства',
      link: '',
    },
    {
      id: 4,
      name: 'Недвижимость',
      link: '',
    },
    {
      id: 5,
      name: 'Туризм',
      link: '',
    },
  ])
  const [legalTwo, setLegalTwo] = useState([
    {
      id: 0,
      name: 'Образование',
      link: ''
    },
    {
      id: 1,
      name: 'Корпоративное право',
      link: ''
    },
    {
      id: 2,
      name: 'Уголовное право',
      link: ''
    },
    {
      id: 3,
      name: 'Административное право',
      link: ''
    },
    {
      id: 4,
      name: 'Трудовое право',
      link: ''
    },
  ])
  const [services, setServices] = useState([
    {
      id: 0,
      name: 'Судебно-претензионная работа',
      link: '',
    },
    {
      id: 1,
      name: 'Альтернативное урегулирование споров',
      link: '',
    },
    {
      id: 2,
      name: 'Сопровождение исполнительного производства',
      link: '',
    },
    {
      id: 3,
      name: 'Интеллектуальная собственность',
      link: '',
    },
    {
      id: 4,
      name: 'Сопровождение сделок',
      link: '',
    },
    {
      id: 5,
      name: 'Лицензирование',
      link: '',
    },
    {
      id: 6,
      name: 'Слияния и поглощения',
      link: '',
    },
    {
      id: 7,
      name: 'Трудовое право и кадровое сопровождение',
      link: '',
    },
  ])
  return (
    <div className={'flex max-md:flex-wrap max-md:gap-y-10 max-md:mx-4 justify-between gap-x-32 max-lg:gap-x-20 w-full max-md:w-auto text-white '}>
        <FooterNavigationElems name={'Область юридической практики'} legal={legal} legalTwo={legalTwo} linkStyle={'break-words font-evolventaRegular text-base tracking-wider'}/>
        <FooterNavigationElems name={'Услуги'} services={services} linkStyle={'break-words font-evolventaRegular text-base tracking-wider'}/>
    </div>
  );
};

export default FooterNavigation;