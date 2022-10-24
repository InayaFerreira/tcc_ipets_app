import { Modal, View } from 'react-native';
import React from 'react';

import { IPopupProps } from '@context/popup';

import { SPACE_MD, SPACE_SM } from '../../../styles/spacing';

import Button from '@molecules/Button';
import CustomText from '@atoms/CustomText';
import { Container, ContainerBotoes, ContainerPopup } from './styles';

interface IPopup extends IPopupProps {
  hide: () => void;
}

const Popup: React.FC<IPopup> = ({
  title,
  content,
  buttons,
  orientationButtons = 'row',
  isDismissable = true,
  hide,
}) => {
  return (
    <Modal transparent={true} animationType={'fade'}>
      <ContainerPopup onPress={isDismissable ? hide : null}>
        <Container onPress={null}>
          {title && (
            <CustomText center h3>
              {title}
            </CustomText>
          )}

          <View
            style={{ paddingVertical: SPACE_MD, paddingHorizontal: SPACE_SM }}>
            {typeof content === 'string' ? (
              <CustomText center>{content}</CustomText>
            ) : (
              content
            )}
          </View>

          <ContainerBotoes orientation={orientationButtons}>
            {buttons &&
              buttons.map((button, index) => (
                <Button key={index} type={button.type} onPress={button.handler}>
                  {button.text}
                </Button>
              ))}
          </ContainerBotoes>
        </Container>
      </ContainerPopup>
    </Modal>
  );
};

export default Popup;
