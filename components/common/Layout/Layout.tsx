import { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <div className='layout'>{children}</div>;
};

export default Layout;
