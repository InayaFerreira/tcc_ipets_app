import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';

import AppProvider from '@context/index';

import AppRoutes from '@routes/index';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
