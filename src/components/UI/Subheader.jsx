import React from 'react';
import {t} from 'i18next'

const Subheader = ({background,}) => {
  return (
    <div className={background}>
      <div className={'backdrop-invert-0 bg-black/60 '}>
        <div className={'container mx-auto py-40 '}>

        </div>
      </div>
    </div>
  );
};

export default Subheader;