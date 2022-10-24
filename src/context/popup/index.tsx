import React, { createContext, useCallback, useContext, useState } from 'react';

import Popup from '@molecules/Popup';

export interface IPopupProps {
  title?: string;
  content: React.ReactNode;
  buttons?: IPopupButtonProps[];
  orientationButtons?: 'row' | 'column';
  isDismissable?: boolean;
  children?: React.ReactNode;
}

export interface IPopupButtonProps {
  type: TButton;
  text: string;
  handler: () => void;
}

interface IPopupContext {
  show(param: IPopupProps): void;
  hide(): void;
}

interface IPopupProviderProps {
  children?: React.ReactNode;
}

const PopupContext = createContext<IPopupContext>({} as IPopupContext);

const PopupProvider: React.FC<IPopupProviderProps> = ({ children }) => {
  const [popupData, setPopupData] = useState<IPopupProps>({} as IPopupProps);

  const show = useCallback((data: IPopupProps) => {
    setPopupData(data);
  }, []);

  const hide = useCallback(() => {
    setPopupData({} as IPopupProps);
  }, []);

  return (
    <PopupContext.Provider value={{ show, hide }}>
      {children}
      {popupData.content && (
        <Popup
          title={popupData.title}
          content={popupData.content}
          buttons={popupData.buttons}
          orientationButtons={popupData.orientationButtons}
          isDismissable={popupData.isDismissable}
          hide={hide}
        />
      )}
    </PopupContext.Provider>
  );
};

function usePopup(): IPopupContext {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error('usePopup deve ser usado com <PopupProvider>');
  }

  return context;
}

export { PopupProvider, usePopup };
