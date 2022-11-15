import { Linking, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ClinicaService, IClinica } from '@services/api/Clinica';

import Menu from '@images/menu.svg';
import Logo from '@images/logo.svg';

import { FONT_SIZE_H2, FONT_SIZE_H3 } from '@styles/typograph';

import { ClienteStackNavigationProp } from '@routes/cliente.stack';

import ClinicaListItem from '@molecules/ClinicaListItem';
import Button from '@molecules/Button';
import Spacer from '@atoms/Spacer';
import Loader from '@atoms/Loader';
import CustomText from '@atoms/CustomText';
import ContainerWhite from '@atoms/ContainerWhite';
import Container from '@atoms/Container';
import { ContainerTitulo } from './styles';

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation<ClienteStackNavigationProp>();
  const [clinicas, setClinicas] = useState<IClinica[]>();

  useEffect(() => {
    ClinicaService.Listagem().then(({ data }) => {
      setClinicas(data);
    });
  }, []);

  return (
    <Container paddingHorizontal={0}>
      <Spacer top={16} />

      <Pressable
        style={{ position: 'absolute', top: 16, left: 16 }}
        onPress={() => navigate('PerfilCliente')}>
        <Menu />
      </Pressable>

      <Logo style={{ alignSelf: 'center' }} width={227} height={116} />

      <Spacer top={16} />

      <ContainerWhite>
        <ContainerTitulo>
          <CustomText size={FONT_SIZE_H3} center bold>
            Encontrou um animal de rua que precisa de cuidados?
          </CustomText>
        </ContainerTitulo>

        <Spacer top={16} />

        <Button widthPercentage={50}>S.O.S</Button>

        <Spacer top={8} />

        <Button
          widthPercentage={50}
          onPress={() =>
            Linking.openURL(
              'https://www.google.com/maps/search/Abrigos+de+Animais',
            )
          }>
          Abrigos Próximos
        </Button>

        <Spacer top={12} />

        {clinicas !== undefined ? (
          <>
            <CustomText size={FONT_SIZE_H2} bold>
              Clínicas Novas:
            </CustomText>

            <Spacer top={16} />

            <ScrollView horizontal>
              {clinicas.map(clinica => (
                <ClinicaListItem key={clinica.clinicaId} clinica={clinica} />
              ))}
            </ScrollView>

            <Spacer top={16} />

            <CustomText size={FONT_SIZE_H2} bold>
              Clínicas mais bem avaliadas:
            </CustomText>

            <Spacer top={16} />

            <ScrollView horizontal>
              {clinicas.map(clinica => (
                <ClinicaListItem key={clinica.clinicaId} clinica={clinica} />
              ))}
            </ScrollView>

            <Spacer top={16} />

            <CustomText size={FONT_SIZE_H2} bold>
              Clínicas mais próximas:
            </CustomText>

            <Spacer top={16} />

            <ScrollView horizontal>
              {clinicas.map(clinica => (
                <ClinicaListItem key={clinica.clinicaId} clinica={clinica} />
              ))}
            </ScrollView>
          </>
        ) : (
          <Loader />
        )}
      </ContainerWhite>
    </Container>
  );
};

export default HomeScreen;
