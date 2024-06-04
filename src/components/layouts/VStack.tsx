import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

function VStack({ className, children, ...props }: Props) {
  return (
    <div className={`flex flex-col items-center ${className}`} {...props}>
      {children}
    </div>
  );
}

export default VStack;
