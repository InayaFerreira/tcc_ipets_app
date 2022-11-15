export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      Cadastro: undefined;
      ClienteStack: undefined;
      Home: undefined;
    }
  }

  type TAuthState = 'desautenticado' | 'cliente' | 'clinica';
}
