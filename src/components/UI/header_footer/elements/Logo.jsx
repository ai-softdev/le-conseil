import {Link} from "react-router-dom";

const Logo = ({subtitle, logoStyle, sub}) => {
  return (
    <Link to={'/'} className={logoStyle}>
      <p className={'text-titleLactic font-timesNewRomanBold tracking-widest uppercase text-4xl max-xl:text-2xl max-sm:text-xl'}>Le<span
        className={'text-white'}>-Conseil.</span>
      </p>
      <p className={`${subtitle} text-lg max-xl:text-base font-evolventaBold tracking-widest`}>LAW FIRM</p>
    </Link>
  );
};

export default Logo;