interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto px-4 md:px-8 max-w-[1920px]">{children}</div>;
};

export default Container;
