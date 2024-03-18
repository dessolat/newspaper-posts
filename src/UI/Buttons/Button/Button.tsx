import { ComponentPropsWithoutRef } from 'react';

import cl from './Button.module.css';

const Button = ({ children, ...props }: ComponentPropsWithoutRef<'button'>) => (
  <button className={cl.btn} {...props}>
    {children}
  </button>
);

export default Button;
