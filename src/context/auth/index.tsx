import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
import React, { createContext, useContext } from 'react';

import { IAuthResponse } from '@services/api/Auth';

interface IAuthProviderProps {
  children?: React.ReactNode;
}

interface IAuthContext {
  authState: TAuthState;
  userInfo: IAuthResponse;
  setUserInfo: (e: IAuthResponse) => void;
  signIn: (state: TAuthState) => void;
  signOut: () => void;
}

const Storage = new MMKVLoader().withEncryption().initialize();
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useMMKVStorage<TAuthState>(
    'oauth',
    Storage,
    'desautenticado',
  );
  const [userInfo, setUserInfo] = useMMKVStorage<IAuthResponse>(
    'userInfo',
    Storage,
    undefined,
  );

  const signIn = (state: TAuthState) => setAuthState(state);
  const signOut = () => setAuthState('desautenticado');

  return (
    <AuthContext.Provider
      value={{ authState, userInfo, setUserInfo, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado com <AuthProvider>');
  }

  return context;
}

export { AuthProvider, useAuth };
