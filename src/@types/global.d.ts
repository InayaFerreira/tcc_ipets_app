export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      HomeScreen: any;
      ListScreen: any;
      TabStackExampleScreen: any;
      StackExampleScreen1: any;
      StackExampleScreen2: any;
    }
  }

  interface INanoListItem<T> {
    item: T;
    index: number;
    selected?: boolean;
    selectable?: boolean;
    onPress?: (item: any) => void;
  }

  type TButton = 'primary' | 'secondary' | 'danger' | 'clear' | 'outline';
  type TButtonSize = 'small' | 'large' | 'default';

  type TDocument = 'cpf' | 'cnpj';

  type TAuthState = 'desautenticado' | 'cliente' | 'veterinario';
}
