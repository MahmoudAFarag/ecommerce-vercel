import { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    // root
    <div className='h-full mx-auto'>
      {/* fit */}
      <main className='min-h-[calc(100vh-88px)] bg-primary text-primary'>{children}</main>
    </div>
  );
};

export default Layout;
