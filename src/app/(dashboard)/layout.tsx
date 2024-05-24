import { FC, PropsWithChildren } from 'react';

const DashboardLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default DashboardLayout;
