import React from 'react';

import { PopupProvider } from '@context/popup';
import { AuthProvider } from '@context/auth';

interface IAppProviderProps {
  children?: React.ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <PopupProvider>{children}</PopupProvider>
    </AuthProvider>
  );
};

export default AppProvider;
