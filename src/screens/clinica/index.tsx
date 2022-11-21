import { Pressable } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FONT_SIZE_H2 } from '@styles/typograph';

import { ClienteStackParams } from '@routes/cliente.stack';

import { usePopup } from '@context/popup';
import Button from '@molecules/Button';
import AvaliacaoEstrelas from '@molecules/AvaliacaoEstrelas';
import VoltarButton from '@atoms/Voltar';
import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';
import ContainerWhite from '@atoms/ContainerWhite';
import Container from '@atoms/Container';
import { ContainerImagem, ContainerTitulo } from './styles';

type Props = NativeStackScreenProps<ClienteStackParams, 'Clinica'>;

const ClinicaScreen: React.FC<Props> = ({ navigation, route }) => {
  const { clinica } = route.params;
  const popup = usePopup();

  const handleConsulta = () => {
    navigation.navigate('AgendaConsulta', { clinica });
  };

  const handleChat = () => {
    popup.show({
      title: 'Aviso',
      content: 'Este recurso encontra-se em desenvolvimento.',
      buttons: [
        {
          text: 'OK',
          handler: popup.hide,
        },
      ],
    });
  };

  return (
    <Container paddingHorizontal={0}>
      <Spacer top={16} />

      <Pressable
        style={{ position: 'absolute', top: 16, left: 16 }}
        onPress={() => navigation.goBack()}>
        <VoltarButton />
      </Pressable>

      <Spacer top={68} />

      <ContainerWhite>
        <ContainerImagem source={require('@images/clinica.png')} />

        <Spacer top={78} />

        <ContainerTitulo>
          <CustomText size={FONT_SIZE_H2} bold center>
            {clinica.nome}
          </CustomText>

          <Spacer top={12} />

          <AvaliacaoEstrelas avaliacao={clinica.pontuacao} />

          <Spacer top={12} />

          <CustomText bold center>
            {clinica.endereco}
          </CustomText>
        </ContainerTitulo>

        <Spacer top={36} />

        <CustomText size={FONT_SIZE_H2} bold>
          Sobre:
        </CustomText>

        <Spacer top={12} />

        <CustomText>{clinica.sobre}</CustomText>

        <Spacer top={24} />

        <CustomText size={FONT_SIZE_H2} bold>
          Serviços:
        </CustomText>

        <Spacer top={12} />

        <CustomText>{clinica.servicos}</CustomText>

        <Spacer top={24} />

        <CustomText size={FONT_SIZE_H2} bold>
          Horários:
        </CustomText>

        <Spacer top={12} />

        <CustomText>{clinica.horarios.join('\n')}.</CustomText>

        <Spacer top={24} />

        <CustomText size={FONT_SIZE_H2} bold>
          Pagamento:
        </CustomText>

        <Spacer top={12} />

        <CustomText>{clinica.pagamentos.join(', ')}.</CustomText>

        <Spacer top={24} />

        <Button widthPercentage={50} onPress={handleConsulta}>
          Marcar consulta
        </Button>

        <Spacer top={24} />

        <Button widthPercentage={75} onPress={handleChat}>
          Converse com a Clínica
        </Button>

        <Spacer bottom={24} />
      </ContainerWhite>
    </Container>
  );
};

export default ClinicaScreen;
