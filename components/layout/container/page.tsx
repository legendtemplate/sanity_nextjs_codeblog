'use client';

interface ContainerProps {
  children: React.ReactNode
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return ( 
    <div
      className="
      container
        mx-auto
        xl:px-8
        md:px-4
        px-2
      "
    >
      {children}
    </div>
   );
}
 
export default Container;