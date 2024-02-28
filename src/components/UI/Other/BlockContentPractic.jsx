import React from 'react';
import axios from "../../../composables/axios.js";

const BlockContentPractic = ({props, titleAnimation, titleInBlock, blockStyle}) => {
  return (
    <div className={`container mx-auto py-20 max-lg:px-3 max-lg:py-10`}>
      {!titleInBlock
        ? props?.title?.map(el =>
          <h3
            className={'text-6xl uppercase font-timesNewRomanBold break-words max-md:text-4xl max-lg:text-center max-sm:text-3xl'}>{el.ru}</h3>
        )
        : <></>
      }
      <div className={`${blockStyle} block`}>
        <div className={'w-6/12 break-words max-lg:w-full'}>
          <div>
            {titleInBlock
              ? props?.title?.map(el =>
                <h3 className={'font-evolventaBold text-xl '}>{el.ru}</h3>)
              : <></>
            }
            {props?.date
              ? <p className={'text-base text-titleLactic font-evolventaRegular'}>{props?.date}</p>
              : <></>
            }
          </div>
          <div className={'font-evolventaRegular text-[#777]'}>
            <div className={'text-lg flex flex-col gap-y-6 max-md:text-base'}>
              {props?.description?.map(el =>
                <p className={''}>{el.ru}</p>
              )}
            </div>
            <ul className={'mt-4 pl-10 break-words list-disc flex flex-col gap-y-4 max-lg:hidden'}>
              {props?.content?.map(item =>
                <li className={''}>{item.ru}</li>
              )}
            </ul>
          </div>
        </div>
        {props?.image
          ? <div className={'w-6/12 h-full max-lg:w-full flex justify-center '}>
            <img src={axios.getUri() + 'storage/' + props?.image} alt="" className={'w-max rounded-lg'}/>
          </div>
          : <></>
        }
      </div>
      <ul className={'pl-10 max-sm:pl-4 break-words list-disc hidden flex-col gap-y-4 max-lg:flex'}>
        {props?.content?.map(el =>
          <li key={el.id} className={'w-full'}>{el.desc}</li>
        )}
      </ul>
      {props.members?.length > 0 &&
        <p className={'text-center mt-10 text-2xl tracking-wider font-evolventaBold'}>Сотрудники учащиеся в проекте</p>
      }
      {props.members?.length > 0 &&
        <div className={'flex max-lg:justify-center flex-wrap w-full gap-y-6 gap-x-10 mt-10 p-4'}>
          {props.members.map(employee =>
            <div className={'flex max-sm:flex-col shadow-lg w-[30%] max-lg:w-[45%] max-md:w-full  gap-x-2 rounded-lg px-2 items-center text-center h-[180px] max-sm:py-4 max-sm:h-max'}>
              <div className={'max-md:mx-10 max-sm:mx-0'}>
                <div className={'max-h-[100px] max-md:mx-auto w-[100px] h-[100px] border rounded-full'}>
                  <img className={'rounded-full mx-auto max-h-[100px] p-1'} src={axios.getUri() + 'storage/' + employee.image} alt=""/>
                </div>
              </div>
              <div className={'flex flex-col mx-auto gap-y-6 mt-2'}>
                <p className={'font-evolventaBold text-lg'}>
                  {employee?.name}
                </p>
                <p className={'text-sm tracking-wider font-evolventaRegular'}>
                  {employee?.position[0].ru}
                </p>
              </div>
            </div>
          )
          }
        </div>
      }
    </div>
  );
};

export default BlockContentPractic;