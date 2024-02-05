import React from 'react';
import {Link} from "react-router-dom";

const FooterNavigationElems = ({name, legal, legalTwo, services, linkStyle, listStyle}) => {
  return (
    <div className={'max-sm:w-full max-sm:text-center'}>
      <p className={'text-lg font-evolventaBold max-sm:text-center'}>{name}</p>
      <div className={'flex max-sm:flex-col max-sm:items-center gap-x-20 mt-7'}>
        <ul className={'flex flex-col max-sm:items-center gap-y-[10px] max-sm:gap-y-4'}>{legal?.map(item =>
          <Link key={item.id} to={item.link} className={linkStyle}>{item.name}</Link>
        )}
        </ul>
        <ul className={'flex flex-col max-sm:items-center gap-y-[10px] max-sm:gap-y-4'}>{legalTwo?.map(item =>
          <Link key={item.id} to={item.link} className={linkStyle}>{item.name}</Link>
        )}
        </ul>
      </div>
      <div >
        <ul className={'flex flex-col max-sm:items-center gap-y-[10px] max-sm:gap-y-4'}>{services?.map(item =>
          <Link key={item.id} to={item.link} className={linkStyle}>{item.name}</Link>
        )}
        </ul>
      </div>
    </div>
  );
};

export default FooterNavigationElems;