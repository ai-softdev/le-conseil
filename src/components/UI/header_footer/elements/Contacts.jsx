import {t} from "i18next";
import PhoneSvg from '/src/assets/img/icons/phone.svg'
import Bars from '/src/assets/img/icons/bars.svg'
const Contacts = ({icon, iconStyle, subtitle, titleStyle, subTitleStyle, subtitleLink, subtitleLinkType, contactStyle, onClick}) => {
  return (
    <div className={'flex items-center'}>
      <div className={'hidden max-lg:block'} onClick={onClick}>
        {icon ? <img src={Bars} className={'mr-4 w-[40px] h-[40px]'} alt=""/> : ''}
      </div>
      <div className={iconStyle}>
        {icon ? <img src={PhoneSvg} className={'mr-4'} alt=""/> : ''}
      </div>
      <div className={contactStyle}>
        <p className={titleStyle}>998 90 026 00 01</p>
        <a className={subTitleStyle} href={subtitleLinkType + ':' + subtitleLink}>{t(subtitle)}</a>
      </div>
    </div>
  );
};

export default Contacts;