import React from 'react';
import ReactDOM from "react-dom/client";
import {createPortal} from "react-dom";

const Modal = ({isOpen, onClose, children}) => {
  if(!isOpen) {
    return null
  }
  return createPortal(
    <div className={'fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-20'} onClick={onClose}>
      <div className='bg-white p-10 max-sm:p-3 rounded-lg overflow-y-auto max-lg:h-[700px] shadow-lg relative h-max w-9/12 max-sm:w-max' onClick={(e)=> e.stopPropagation()}>
        <button className={'absolute top-0 right-2 font-bold text-black opacity-50 text-3xl cursor-pointer bg-none outline-none'} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>,
  document.body
  );
};

export default Modal;