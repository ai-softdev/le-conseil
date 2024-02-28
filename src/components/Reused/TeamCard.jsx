import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Instagram from '/src/assets/img/icons/socials/instagram.svg'
import Telegram from '/src/assets/img/icons/socials/telegram.svg'
import Facebook from '/src/assets/img/icons/socials/facebook.svg'
import axios from "../../composables/axios.js";
import Modal from "../UI/Other/Modal.jsx";
import {t} from 'i18next'

const TeamCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  };
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className={'text-center'}>
      <div onClick={openModal} className={'max-md:w-full mx-auto flex justify-center cursor-pointer '}>
        <img className={'w-max h-[500px] max-sm:h-[300px] rounded-3xl'} src={axios.getUri() + 'storage/' + props.image} alt=""/>
      </div>
      <div className={'w-full mt-5'}>
        <p className={'font-evolventaBold text-titleDark uppercase text-xl'}>{props.name}</p>
        <p
          className={'font-evolventaRegular text-titleLactic text-base'}>{props.position.map(e => e.ru || e.en || e.uz)}</p>
      </div>
      <div className={'flex gap-x-10 justify-center mt-[20px]'}>
        {props.links[0].instagram
          ? <Link to={props.links[0].instagram}>
            <div className={'p-3 rounded-full flex items-center justify-center bg-titleDark'}>
              <img className={'w-[25px] h-[25px]'} src={Instagram} alt=""/>
            </div>
          </Link>
          : <></>
        }
        {props.links[0].facebook
          ? <Link to={props.links[0].facebook}>
            <div className={'p-3 rounded-full flex items-center justify-center bg-titleDark'}>
              <img className={'w-[25px] h-[25px]'} src={Facebook} alt=""/>
            </div>
          </Link>
          : <></>
        }
        {props.links[0].telegram
          ? <Link to={props.links[0].telegram}>
            <div className={'p-3 rounded-full flex items-center justify-center bg-titleDark'}>
              <img className={'w-[25px] h-[25px]'} src={Telegram} alt=""/>
            </div>
          </Link>
          : <></>
        }
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={'flex max-lg:flex-wrap max-lg:justify-center max-lg:gap-y-6 gap-x-10'}>
          <div className={'max-w-[300px] flex flex-col gap-y-4 max-sm:mt-6'}>
            <img className={'rounded-lg'} src={axios.getUri() + 'storage/' + props.image} alt=""/>
            <div className={'flex gap-x-10 max-sm:gap-x-2 justify-center mt-[20px]'}>
              {props.links[0].instagram
                ? <Link to={props.links[0].instagram}>
                  <div className={'p-3 rounded-full flex items-center justify-center bg-titleDark'}>
                    <img className={'w-[25px] h-[25px]'} src={Instagram} alt=""/>
                  </div>
                </Link>
                : <></>
              }
              {props.links[0].facebook
                ? <Link to={props.links[0].facebook}>
                  <div className={'p-3 rounded-full flex items-center justify-center bg-titleDark'}>
                    <img className={'w-[25px] h-[25px]'} src={Facebook} alt=""/>
                  </div>
                </Link>
                : <></>
              }
              {props.links[0].telegram
                ? <Link to={props.links[0].telegram}>
                  <div className={'p-3 rounded-full flex items-center justify-center bg-titleDark'}>
                    <img className={'w-[25px] h-[25px]'} src={Telegram} alt=""/>
                  </div>
                </Link>
                : <></>
              }
            </div>
          </div>
          <div className={'text-left max-lg:text-center  flex flex-col gap-y-10'}>
            <div className={''}>
              <p className={'font-timesNewRomanBold text-xl tracking-wider'}>{props.name}</p>
              <p
                className={'text-[15px] tracking-wide text-gray-400'}>{props.position.map(e => e.ru || e.en || e.uz)}</p>
            </div>
            <div>
              <p>{props.description ? props.description :
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad harum libero non porro? Ab ad
              alias assumenda at beatae deleniti dolorum earum eius eligendi fugit inventore iusto labore laudantium
              magnam minima, minus nihil nisi quasi quibusdam quisquam tempore unde veritatis vero. Asperiores corporis,
              eum expedita hic incidunt ipsum iste molestiae natus nisi non possimus quae, quia quidem sed sit velit
              voluptas! Cumque dicta et, illo ipsam optio quasi ratione repudiandae voluptas. A alias aliquam assumenda
              commodi cupiditate deleniti dignissimos distinctio dolor expedita, explicabo id natus, nemo placeat
              praesentium quasi rem sequi sint sunt tempora totam velit veniam voluptates, voluptatum.</span>}</p>
            </div>
            <div className={' font-timesNewRomanRegular'}>
              <p className={'flex items-center py-4 border-b border-t tracking-wider gap-x-2 font-bold'}>{t('Телефон') + ':'}<span className={'font-normal text-[15px]'}>{props.phone_number ? props.phone_number : t('Отсутствует')}</span></p>
              <p className={'flex items-center py-4 border-b tracking-wider gap-x-2 font-bold'}>{t('Email') + ':'}<span className={'font-normal text-[15px]'}>{props.email ? props.email : t('Отсутствует')}</span></p>
            </div>

          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeamCard;