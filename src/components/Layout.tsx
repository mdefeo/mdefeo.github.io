import React, { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="fixed top-[70px] right-[20px] left-[20px] bottom-[20px] overflow-auto p-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
