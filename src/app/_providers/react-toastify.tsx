'use client';

import React, { FC, PropsWithChildren } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const ReactToastifyProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ToastContainer
        position={ 'top-left' }
        autoClose={ 4000 }
        draggable
        theme="colored"
        closeButton
        bodyClassName="text-[0.875rem]"
        stacked
      />
      
      { children }
    </>
  );
};

export default ReactToastifyProvider;
