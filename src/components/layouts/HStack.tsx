import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

function HStack({ className, children, ...props }: Props) {
  return (
    <div className={`flex ${className}`} {...props}>
      {children}
    </div>
  );
}

export default HStack;
