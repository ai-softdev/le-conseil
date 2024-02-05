import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {t} from "i18next";
import Close from '/src/assets/img/icons/close.svg'
import {CSSTransition, Transition} from "react-transition-group";
import './Navigation.css'

const Navigation = ({dropdownCheck, onClick, showBars}) => {
  const nodeRef = useRef(null)
  const [navList, setNavList] = useState([
    {
      id: 0,
      name: 'Главная',
      dropdown: false,
      link: '/'
    },
    {
      id: 1,
      name: 'Услуги',
      dropdown: true,
      link: ''
    },
    {
      id: 2,
      name: 'Отрасли',
      dropdown: true,
      link: ''
    },
    {
      id: 3,
      name: 'О нас',
      dropdown: false,
      link: '/about'
    },
    {
      id: 4,
      name: 'Команда',
      dropdown: false,
      link: ''
    },
    {
      id: 5,
      name: 'Новости',
      dropdown: false,
      link: ''
    },

  ])
  return (
     <CSSTransition nodeRef={nodeRef} in={showBars} timeout={300} classNames={'barsStyle'}
                       unmountOnExit>
        <div ref={nodeRef}
             className={'max-lg:fixed max-xl:gap-x-7 max-lg:bg-black max-lg:w-screen max-lg:left-0 max-lg:top-0 max-lg:justify-center max-lg:p-10 max-lg:backdrop-blur-[5px] max-lg:bg-opacity-40 max-lg:h-screen'}>
          <div className={'hidden max-lg:flex justify-end'}>
            <img className={'w-[60px] h-[60px] fill-white rotate-180'} src={Close} alt="" onClick={onClick}/>
          </div>
          <nav
            className={'text-white flex gap-x-[48px] max-xl:gap-x-[38px] max-lg:container max-lg:flex-col max-lg:gap-y-10 max-lg:w-full max-lg:mx-auto '}>
            {navList.map(navElem =>
              <Link to={navElem.link}
                    className={`flex gap-x-2 items-center font-evolventaRegular max-xl:text-base text-lg max-xl:text-basem ax-lg:text-center max-lg:text-2xl max-lg:mx-auto max-lg:text-center`}
                    key={navElem.id}>
                <p>{t(`${navElem.name}`)}</p>
                {navElem.dropdown && dropdownCheck
                  ? <div className={'max-lg:hidden'}>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0.5L4 3.5L7 0.5" stroke="#DCAB2F"/>
                    </svg>
                  </div>
                  : ''
                }
              </Link>
            )}
          </nav>
          <div
            className={'hidden text-white text-2xl max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:mx-auto max-lg:text-center max-lg:mt-20'}>
            <p>998 90 026 00 01</p>
            <a href={'tel:+998900260001'}>{t('Заказать звонок')}</a>
          </div>
        </div>
      </CSSTransition>
  );
};

export default Navigation;