import React from 'react';

const Button = ({styles, content}) => {
  return (
    <button className={styles}>
      {content}
    </button>
  );
};

export default Button;