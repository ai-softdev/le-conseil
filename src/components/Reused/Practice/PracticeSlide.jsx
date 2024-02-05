import React from 'react';
import {Link} from "react-router-dom";

const PracticeSlide = ({date, img, description, link, linkTitle, linkUrl}) => {
  return (
    <Link to={linkUrl} draggable={false}
      className={!link ? 'p-5 font-evolventaRegular mx-auto w-[300px] h-[384px] text-base border border-subtitleLactic rounded-[10px] select-none flex' : 'mx-auto bg-[#023234] w-[300px] h-[384px] rounded-[10px] flex font-evolventaRegular text-lg '}>
      {!link
        ? <div>
          <img className={'w-full'} src={img} alt=""/>
          <div className={'pt-[30px] flex flex-col gap-y-3'}>
            <p className={'text-titleLactic'}>{date}</p>
            <p className={'text-white break-words '}>{description}</p>
          </div>
        </div>

        : <button className={'text-white h-full w-full flex justify-center items-center'}>{linkTitle}</button>

      }
    </Link>
  );
};

export default PracticeSlide;