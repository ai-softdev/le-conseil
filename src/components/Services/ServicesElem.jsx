import React from 'react';
import {Link} from "react-router-dom";
import {t} from 'i18next'
import axios from "../../composables/axios.js";
import {motion} from "framer-motion";

const ServicesElem = (props) => {
  return (
    <div className={'w-full flex gap-x-6 even:flex-row-reverse even:text-end border-b-2 pb-10 max-md:flex-col max-md:even:flex-col max-md:gap-y-10 max-md:even:text-center max-md:text-center'}>
      <motion.div initial={{opacity: 0, x: props.id % 2 === 0 ? 50: -50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} viewport={{once: true}} className={'w-6/12 flex flex-col max-md:w-full justify-between max-lg:gap-y-10 items-center'}>
        <div className={'flex flex-col gap-y-10 break-words'}>
          <h4 className={'text-titleDark text-lg uppercase'}>{props.title[0].ru || props.title[0].uz || props.title[0].en}</h4>
          <p className={'text-lg text-[#777]'}>{props.description[0].ru.slice(0, 440) + '...' || props.description[0].en.slice(0, 440) + '...' || props.description[0].uz.slice(0, 440) + '...'}</p>
        </div>
        <Link className={'text-titleLactic text-lg uppercase hover:underline max-md:hidden'} to={`/services/${props.id}`}>
          {t('Перейти в раздел')}
        </Link>
      </motion.div>
      <motion.div initial={{opacity: 0, x: props.id % 2 === 0 ? -50: 50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.6}} viewport={{once: true}} className={'w-6/12 max-md:w-full'}>
        <img className={'w-full h-[500px] max-md:h-full rounded-lg'} src={axios.getUri() + 'storage/' +props.image} alt=""/>
        <Link className={'text-titleLactic text-lg uppercase hover:underline hidden max-md:block text-center max-md:mt-4'} to={`/services/${props.id}`}>
          {t('Перейти в раздел')}
        </Link>
      </motion.div>
    </div>
  );
};

export default ServicesElem;