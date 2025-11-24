import { PropsWithChildren } from "react";

const Wrapper = ({ children }: Readonly<PropsWithChildren>) => {
  return <div className="px-6 lg:px-16">{children}</div>;
};

export default Wrapper;
