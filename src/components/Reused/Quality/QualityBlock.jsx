const QualityBlock = ({title, description, icon}) => {
  return (
    <div className={'flex flex-col gap-y-3 h-[200px] bg-lightLactic rounded-xl p-8 max-sm:p-5'}>
      <div>
        <img className={'w-[25px] h-[25px]'} src={icon} alt=""/>
      </div>
      <h4 className={'font-evolventaBold text-lg text-titleDark'}>{title}</h4>
      <p className={'text-base font-evolventaRegular text-[#222] break-words '}>{description}</p>
    </div>
  );
};

export default QualityBlock;