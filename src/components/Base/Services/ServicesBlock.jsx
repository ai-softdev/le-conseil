import React, {useRef, useState} from 'react';
import BlockImage from '/src/assets/img/block/img-block-one.png'
import {CSSTransition} from "react-transition-group";
import './ServiceBlock.css'
import {t} from 'i18next'
const ServicesBlock = () => {
  const [services, setServices] = useState([
    {
      id: 0,
      title: 'Судебно-претензионная работа',
      img: BlockImage
    },
    {
      id: 1,
      title: 'Альтернативное урегулирование споров',
      img: ''
    },
    {
      id: 2,
      title: 'Сопровождение исполнительного производства',
      img: ''
    },
    {
      id: 3,
      title: 'Интеллектуальная собственность',
      img: ''
    },
    {
      id: 4,
      title: 'Сопровождение сделок',
      img: ''
    },
    {
      id: 5,
      title: 'Лицензирование',
      img: ''
    },
    {
      id: 6,
      title: 'Слияния и поглощения',
      img: ''
    },
    {
      id: 7,
      title: 'Трудовое право и кадровое сопровождение',
      img: ''
    },
  ])
  const [mouseMove, setMouseMove] = useState(null)
  const nodeRef = useRef(null)
  return (
    <div className={'flex flex-wrap gap-6 w-full justify-center mx-auto'}>
      {services.map(item =>
        <button key={item.id} onMouseEnter={()=> setMouseMove(item.id)} onMouseLeave={()=>setMouseMove(null)}
                className={`flex hover:text-white items-center relative justify-center border rounded-xl px-4 w-[410px] h-[150px] uppercase break-words`}>
          <p className={`text-lg font-evolventaRegular `}>{item.title}</p>
             <CSSTransition in={item.id === mouseMove} nodeRef={nodeRef} unmountOnExit timeout={100} classNames={'blockStyle'} >
               <div ref={nodeRef} className={'!bg-green-900'}>
                 <img className={'absolute h-full w-full rounded-xl left-0 top-0 -z-10 bg-opacity-0 bg-black'} src={BlockImage} alt=""/>
               </div>
             </CSSTransition>
        </button>
      )}
      <button className={'w-[410px] h-[150px] underline uppercase text-titleLactic text-lg hover:text-subtitleLactic'}>
        {t('Перейти в раздел')}
      </button>
    </div>
  );
};

export default ServicesBlock;