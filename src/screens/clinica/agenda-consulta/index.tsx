import { Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { IPet, PetService } from '@services/api/Pet';
import { ConsultaService } from '@services/api/Consulta';
import { usePopup } from '@context/popup';
import { useAuth } from '@context/auth';

import { convertCalendarDateToIso, getTodayCalendarDate } from '@utils/date';
import { FONT_SIZE_H2 } from '@styles/typograph';

import { ClienteStackParams } from '@routes/cliente.stack';

import PetListItem from '@molecules/PetListItem';
import Button from '@molecules/Button';
import VoltarButton from '@atoms/Voltar';
import Spacer from '@atoms/Spacer';
import Loader from '@atoms/Loader';
import Input from '@atoms/Input';
import CustomText from '@atoms/CustomText';
import CustomCalendar from '@atoms/CustomCalendar';
import ContainerWhite from '@atoms/ContainerWhite';
import Container from '@atoms/Container';

type Props = NativeStackScreenProps<ClienteStackParams, 'AgendaConsulta'>;

const AgendaConsultaScreen: React.FC<Props> = ({ navigation, route }) => {
  const { clinica } = route.params;
  const { userInfo } = useAuth();
  const popup = usePopup();

  const [loading, setLoading] = useState<boolean>(false);
  const [animais, setAnimais] = useState<IPet[]>();

  const [animalSelecionado, setAnimalSelecionado] = useState<IPet>();
  const [consultaData, setConsultaData] = useState<string>(
    getTodayCalendarDate(),
  );
  const [consultaHora, setConsultaHora] = useState<string>('');

  const handleSubmit = () => {
    if (!animalSelecionado) {
      return popup.show({
        title: 'Aviso',
        content: 'Nenhum animal selecionado.',
        buttons: [{ text: 'OK', handler: popup.hide }],
      });
    }

    setLoading(true);

    ConsultaService.Agendar({
      consultaId: 0,
      ativo: true,
      data: convertCalendarDateToIso(consultaData),
      idClinica: clinica.clinicaId,
      idPet: animalSelecionado!.petId,
    })
      .then(() => {
        popup.show({
          title: 'Aviso',
          content: 'Consulta agendada com sucesso.',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                popup.hide();
                navigation.goBack();
              },
            },
          ],
        });
      })
      .catch(() => {
        popup.show({
          title: 'Aviso',
          content: 'Erro ao agendar consulta.',
          buttons: [{ text: 'OK', handler: popup.hide }],
        });
      })
      .finally(() => setLoading(false));
  };

  const openDatePicker = () => {
    popup.show({
      content: (
        <CustomCalendar
          onDayPress={date => {
            setConsultaData(date);
            popup.hide();
          }}
        />
      ),
    });
  };

  useEffect(() => {
    PetService.ListagemPet(userInfo.usuarioId).then(({ data }) => {
      setAnimais(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container paddingHorizontal={0}>
      <Pressable
        style={{ position: 'absolute', top: 16, left: 16 }}
        onPress={() => navigation.goBack()}>
        <VoltarButton />
      </Pressable>

      <Spacer top={32} />

      <CustomText color="#ffffff" size={32} bold center>
        Agendar Consulta
      </CustomText>

      <Spacer top={16} />

      <ContainerWhite>
        <CustomText size={FONT_SIZE_H2} bold>
          Selecione o Pet:
        </CustomText>

        <Spacer top={12} />

        {animais !== undefined ? (
          <ScrollView horizontal>
            {animais.map(animal => (
              <PetListItem
                key={animal.petId}
                pet={animal}
                selecionado={animalSelecionado === animal}
                setAnimalSelecionado={setAnimalSelecionado}
              />
            ))}
          </ScrollView>
        ) : (
          <Loader />
        )}

        <Spacer top={16} />

        <CustomText size={FONT_SIZE_H2} bold>
          Selecione a data:
        </CustomText>

        <Spacer top={16} />

        <Button onPress={openDatePicker}>{consultaData}</Button>

        <Spacer top={16} />

        <Input
          label="Selecione a hora:"
          labelColor="#000000"
          placeholder="Informe a hora"
          keyboardType="numeric"
          mask="[00]:[00]"
          value={consultaHora}
          onChangeText={setConsultaHora}
        />

        <Spacer top={32} />

        <Button loading={loading} widthPercentage={50} onPress={handleSubmit}>
          Agendar
        </Button>
      </ContainerWhite>
    </Container>
  );
};

export default AgendaConsultaScreen;
