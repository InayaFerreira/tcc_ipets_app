import { Pressable } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { PetService } from '@services/api/Pet';
import { usePopup } from '@context/popup';
import { useAuth } from '@context/auth';

import UnCheckedIcon from '@icons/checkbox/unchecked.svg';
import CheckedIcon from '@icons/checkbox/checked.svg';

import { FONT_SIZE_H2 } from '@styles/typograph';

import { ClienteStackParams } from '@routes/cliente.stack';

import Button from '@molecules/Button';
import VoltarButton from '@atoms/Voltar';
import Spacer from '@atoms/Spacer';
import Row from '@atoms/Row';
import Input from '@atoms/Input';
import CustomText from '@atoms/CustomText';
import ContainerWhite from '@atoms/ContainerWhite';
import Container from '@atoms/Container';
import { ContainerImagem, ContainerTitulo } from './styles';

type Props = NativeStackScreenProps<ClienteStackParams, 'SOS'>;

const SosScreen: React.FC<Props> = ({ navigation }) => {
  const { userInfo } = useAuth();
  const popup = usePopup();

  const [loading, setLoading] = useState(false);

  const [nomeProvisorio, setNomeProvisorio] = useState<string>('');
  const [localEncontrado, setLocalEncontrado] = useState<string>('');
  const [observacoes, setObservacoes] = useState<string>('');

  const [ferido, setFerido] = useState<number>(0);
  const [desnutrido, setDesnutrido] = useState<number>(0);
  const [agressivo, setAgressivo] = useState<number>(0);
  const [porte, setPorte] = useState<number>(0);

  const handleSubmit = () => {
    setLoading(true);

    PetService.CadastraPetRua({
      nome: nomeProvisorio,
      localEncontrado,
      observacoes,
      ferido,
      desnutrido,
      agressivo,
      porte,
    })
      .then(() => {
        popup.show({
          title: 'Aviso',
          content: 'Cadastro realizado com sucesso.',
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
          content: 'Erro ao cadastrar pet.',
          buttons: [{ text: 'OK', handler: popup.hide }],
        });
      })
      .finally(() => setLoading(false));
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
        <ContainerImagem source={require('@images/pet.png')} />

        <Spacer top={78} />

        <ContainerTitulo>
          <CustomText size={FONT_SIZE_H2} bold center>
            {userInfo?.nome}
          </CustomText>

          <Spacer top={12} />

          <CustomText bold center>
            {userInfo?.endereco}
          </CustomText>
        </ContainerTitulo>

        <Input
          label="Nome Provisório"
          labelColor="#000"
          placeholder="Insira o nome"
          value={nomeProvisorio}
          onChangeText={setNomeProvisorio}
        />

        <Input
          label="Local encontrado"
          labelColor="#000"
          placeholder="Insira o local"
          value={localEncontrado}
          onChangeText={setLocalEncontrado}
        />

        <Spacer top={24} />

        <CustomText size={18} bold center>
          Animal está ferido?
        </CustomText>

        <Spacer top={8} />

        <Row justifyContent="space-around">
          <Pressable onPress={() => setFerido(0)}>
            <Row>
              {ferido === 0 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Nada</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setFerido(1)}>
            <Row>
              {ferido === 1 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Pouco</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setFerido(2)}>
            <Row>
              {ferido === 2 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Mediano</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setFerido(3)}>
            <Row>
              {ferido === 3 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Muito</CustomText>
            </Row>
          </Pressable>
        </Row>

        <Spacer top={24} />

        <CustomText size={18} bold center>
          Animal está desnutrido?
        </CustomText>

        <Spacer top={8} />

        <Row justifyContent="space-around">
          <Pressable onPress={() => setDesnutrido(0)}>
            <Row>
              {desnutrido === 0 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Nada</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setDesnutrido(1)}>
            <Row>
              {desnutrido === 1 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Pouco</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setDesnutrido(2)}>
            <Row>
              {desnutrido === 2 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Mediano</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setDesnutrido(3)}>
            <Row>
              {desnutrido === 3 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Muito</CustomText>
            </Row>
          </Pressable>
        </Row>

        <Spacer top={24} />

        <CustomText size={18} bold center>
          Animal está agressivo?
        </CustomText>

        <Spacer top={8} />

        <Row justifyContent="space-around">
          <Pressable onPress={() => setAgressivo(0)}>
            <Row>
              {agressivo === 0 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Nada</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setAgressivo(1)}>
            <Row>
              {agressivo === 1 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Pouco</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setAgressivo(2)}>
            <Row>
              {agressivo === 2 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Mediano</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setAgressivo(3)}>
            <Row>
              {agressivo === 3 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Muito</CustomText>
            </Row>
          </Pressable>
        </Row>

        <Spacer top={24} />

        <CustomText size={18} bold center>
          Porte
        </CustomText>

        <Spacer top={8} />

        <Row justifyContent="space-around">
          <Pressable onPress={() => setPorte(0)}>
            <Row>
              {porte === 0 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Pequeno</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setPorte(1)}>
            <Row>
              {porte === 1 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Médio</CustomText>
            </Row>
          </Pressable>

          <Pressable onPress={() => setPorte(2)}>
            <Row>
              {porte === 2 ? <CheckedIcon /> : <UnCheckedIcon />}
              <Spacer right={8} />
              <CustomText>Grande</CustomText>
            </Row>
          </Pressable>
        </Row>

        <Spacer top={16} />

        <Input
          label="Informação adicional"
          labelColor="#000"
          placeholder="Adicionar comentário"
          value={observacoes}
          onChangeText={setObservacoes}
        />

        <Spacer top={16} />

        <Button loading={loading} widthPercentage={50} onPress={handleSubmit}>
          Enviar
        </Button>
      </ContainerWhite>
    </Container>
  );
};

export default SosScreen;
