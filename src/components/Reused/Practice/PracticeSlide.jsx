import React from 'react';
import {Link} from "react-router-dom";
import axios from "../../../composables/axios.js";
const PracticeSlide = ({props, descriptionStyle, link, linkTitle, linkUrl, pageUrl}) => {
  return (
    <Link to={`/${pageUrl}/${linkUrl}`} draggable={false}
          className={!link ? 'p-5 font-evolventaRegular mx-auto w-[300px] h-[384px] text-base border border-titleLactic rounded-[10px] select-none flex' : 'mx-auto bg-[#023234] w-[300px] h-[384px] rounded-[10px] flex font-evolventaRegular text-lg '}>
      {!link
        ? <div>
          <img className={'w-full h-[200px] rounded-lg'} src={axios.getUri() + 'storage/' + props?.image} alt=""/>
          <div className={'pt-[30px] flex flex-col gap-y-3'}>
            <p className={'text-titleLactic break-words'}>{props?.date}</p>
            { props.description?.map(el=>
              <p className={`${descriptionStyle} break-all`}>{el.ru.slice(0,60) + '...'}</p>
              )
            }
          </div>
        </div>
        : <button className={'text-white h-full w-full flex justify-center items-center'}>{linkTitle}</button>

      }
    </Link>
  );
};

export default PracticeSlide;