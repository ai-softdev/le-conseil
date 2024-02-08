import React from 'react';
import {t} from 'i18next'
import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";

const BlockTitle = ({title, titleStyle, titleSpan, titleAnimation, titleSpanStyle, subtitle, subtitleStyle, above, aboveStyle}) => {
  const blockAnimation = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: custom => ({
      opacity: 1,
      x: 0,
      transition: {delay: custom * 0.2}
    })
  }
  return (
    <motion.div initial={'hidden'} viewport={{once: true}} whileInView={'visible'}>
      {above
        ? <motion.p variants={blockAnimation} custom={2} className={aboveStyle}>{above}</motion.p>
        : <></>
      }
      <h2  className={`uppercase ${titleStyle}`}>
        { titleAnimation
          ? <TypeAnimation sequence={[
            title,
            500
          ]} speed={200}/>
          : title
        }
        {titleSpan
          ? <span className={titleSpanStyle}>{titleSpan}</span>
          : <></>
        }
      </h2>
      {subtitle
        ? <p className={subtitleStyle}>{subtitle}</p>
        : <></>
      }
    </motion.div>
  );
};

export default BlockTitle;