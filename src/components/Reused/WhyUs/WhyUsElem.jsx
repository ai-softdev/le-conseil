import {useEffect} from "react";
import {animate, useMotionValue, motion, useTransform} from "framer-motion";

const WhyUsElem = ({icon, title, subtitle, itemBg, num, titleElem}) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.floor)
  const anim = animate(count, num, {
    duration: 10
  });
  const blockAnim = {
    hidden: anim.pause,
    visible: anim.play,
    complete: anim.stop
  }
  useEffect(() => {
    console.log(rounded.current + title)
  }, []);
  return (
    <motion.div initial={'hidden'} whileInView={'visible'}
                className={`w-[230px] h-[200px] p-4 ${itemBg} rounded-lg flex flex-col justify-between`}>
      <img className={'mx-auto'} src={icon} alt=""/>
      <div className={'flex justify-center font-evolventaBold text-[40px] text-titleDark'}>
        {title
          ? <p>{title}</p>
          : <></>
        }
        <motion.h4 variants={blockAnim}>{rounded}</motion.h4>
        {titleElem
          ? <p>{titleElem}</p>
          : <></>
        }
      </div>
      <p className={'font-evolventaRegular text-subtitleLactic text-base break-words'}>{subtitle}</p>
    </motion.div>
  );
};

export default WhyUsElem;