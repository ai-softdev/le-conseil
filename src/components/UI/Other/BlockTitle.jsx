import React from 'react';
import {t} from 'i18next'
const BlockTitle = ({title, titleStyle, titleSpan, titleSpanStyle, subtitle, subtitleStyle}) => {
  return (
    <div>
      <h2 className={`uppercase ${titleStyle}`}>{title}<span className={titleSpanStyle}>{titleSpan}</span></h2>
      <p className={subtitleStyle}>{subtitle}</p>
    </div>
  );
};

export default BlockTitle;