import { FC, PropsWithChildren } from 'react';
import NextUiProvider from '@/app/_providers/next-ui';
import ReactQueryProvider from '@/app/_providers/react-query';
import ReactToastifyProvider from '@/app/_providers/react-toastify';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextUiProvider themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <ReactQueryProvider>
        <ReactToastifyProvider>
          { children }
        </ReactToastifyProvider>
      </ReactQueryProvider>
    </NextUiProvider>
  );
};

export default Providers;
