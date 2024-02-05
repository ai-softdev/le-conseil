const WhyUsElem = ({icon, title, subtitle}) => {
  return (
    <div className={'w-[230px] h-[200px] p-4 bg-white rounded-lg flex flex-col justify-between'}>
      <img className={'mx-auto'} src={icon} alt=""/>
      <h4 className={'font-evolventaBold text-[40px] text-titleDark'}>{title}</h4>
      <p className={'font-evolventaRegular text-subtitleLactic text-base break-words'}>{subtitle}</p>
    </div>
  );
};

export default WhyUsElem;