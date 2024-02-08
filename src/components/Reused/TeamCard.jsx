import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Instagram from '/src/assets/img/icons/socials/instagram.svg'
import Telegram from '/src/assets/img/icons/socials/telegram.svg'
import Facebook from '/src/assets/img/icons/socials/facebook.svg'
import axios from "../../composables/axios.js";
const TeamCard = (props) => {
  return (
    <div className={'text-center'}>
      <div className={'max-md:w-9/12 mx-auto flex justify-center'}>
        <img className={'w-[410px] h-[500px]'} src={axios.getUri() + 'storage/' + props.image} alt=""/>
      </div>
      <div className={'w-full mt-5'}>
        <p className={'font-evolventaBold text-titleDark uppercase text-xl'}>{props.name}</p>
        <p className={'font-evolventaRegular text-titleLactic text-base'}>{props.role}</p>
      </div>
      <div className={'flex gap-x-10 justify-center mt-[20px]'}>
        {props.links[0].instagram
          ? <Link to={props.links[0].instagram}>
            <div className={'p-3 rounded-full flex items-center justify-center bg-titleDark'}>
              <img className={'w-[25px] h-[25px]'} src={Instagram} alt=""/>
            </div>
          </Link>
          :<></>
        }
        {props.links[0].facebook
          ? <Link to={props.links[0].facebook}>
            <div className={'p-3 rounded-full flex items-center justify-center bg-titleDark'}>
              <img className={'w-[25px] h-[25px]'} src={Facebook} alt=""/>
            </div>
          </Link>
          :<></>
        }
        {props.links[0].telegram
          ? <Link to={props.links[0].telegram}>
            <div className={'p-3 rounded-full flex items-center justify-center bg-titleDark'}>
              <img className={'w-[25px] h-[25px]'} src={Telegram} alt=""/>
            </div>
          </Link>
          :<></>
        }
      </div>
    </div>
  );
};

export default TeamCard;