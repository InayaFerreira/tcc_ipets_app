import { Pressable } from 'react-native';
import React, { useState } from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { useAuth } from '@context/auth';

import UserIcon from '@icons/user.svg';
import EmailIcon from '@icons/email.svg';
import UnchekedIcon from '@icons/checkbox/unchecked.svg';
import CheckedIcon from '@icons/checkbox/checked.svg';
import ChaveIcon from '@icons/chave.svg';
import CertificadoIcon from '@icons/certificado.svg';

import { getOpacityByPress } from '@utils/styles';

import Button from '@molecules/Button';
import Spacer from '@atoms/Spacer';
import Row from '@atoms/Row';
import Input from '@atoms/Input';
import CustomText from '@atoms/CustomText';
import Container from '@atoms/Container';
import { ContainerForm } from './styles';

interface FormValues {
  nomeCompleto: string;
  email: string;
  senha: string;
  confirmaSenha: string;
  crmv: string;
}

const FormSchema = Yup.object().shape({
  nomeCompleto: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().required('E-mail é obrigatório'),
  senha: Yup.string().required('Senha é obrigatória'),
  confirmaSenha: Yup.string().required('Senha é obrigatória'),
  crmv: Yup.string().required('CRMV é obrigatório'),
});

const VeterinarioForm: React.FC = () => {
  const { signIn } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const [isVoluntariar, setIsVoluntariar] = useState<boolean>(false);

  const handleFormSubmit = (values: FormValues) => {
    if (loading) {
      return;
    }

    console.log(values);

    setLoading(true);
    signIn('veterinario');
    setLoading(false);
  };

  return (
    <Container>
      <Formik
        initialValues={{
          nomeCompleto: '',
          email: '',
          senha: '',
          confirmaSenha: '',
          crmv: '',
        }}
        onSubmit={handleFormSubmit}
        validationSchema={FormSchema}>
        {({ handleChange, handleSubmit, values, touched, errors }) => (
          <ContainerForm>
            <Input
              label="Nome Completo"
              placeholder="Digite seu nome"
              icon={<UserIcon width={24} height={24} />}
              value={values.nomeCompleto}
              onChangeText={handleChange('nomeCompleto')}
              errorMessage={
                touched.nomeCompleto ? errors.nomeCompleto : undefined
              }
            />

            <Input
              label="E-mail"
              placeholder="exemplo@exemplo.com"
              icon={<EmailIcon width={24} height={24} />}
              value={values.email}
              onChangeText={handleChange('email')}
              errorMessage={touched.email ? errors.email : undefined}
            />

            <Input
              label="Senha"
              placeholder="Digite sua senha"
              icon={<ChaveIcon width={24} height={24} />}
              secureTextEntry
              value={values.senha}
              onChangeText={handleChange('senha')}
              errorMessage={touched.senha ? errors.senha : undefined}
            />

            <Input
              label="Confirmar Senha"
              placeholder="Digite sua senha novamente"
              icon={<ChaveIcon width={24} height={24} />}
              secureTextEntry
              value={values.confirmaSenha}
              onChangeText={handleChange('confirmaSenha')}
              errorMessage={
                touched.confirmaSenha ? errors.confirmaSenha : undefined
              }
            />

            <Input
              label="CRMV"
              placeholder="Digite seu CRMV"
              icon={<CertificadoIcon width={24} height={24} />}
              value={values.crmv}
              onChangeText={handleChange('crmv')}
              errorMessage={touched.crmv ? errors.crmv : undefined}
            />

            <Spacer top={16} />

            <CustomText color="#ffffff" bold>
              Você quer se voluntariar para tratar animais de rua? (Você será
              notificado pelo app sobre animais de rua encontrados)
            </CustomText>

            <Spacer top={8} />

            <Row justifyContent="space-around">
              <Pressable
                style={getOpacityByPress}
                onPress={() => setIsVoluntariar(true)}>
                <Row justifyContent="flex-start">
                  {isVoluntariar ? <CheckedIcon /> : <UnchekedIcon />}

                  <Spacer right={6} />

                  <CustomText color="#ffffff" bold>
                    Sim
                  </CustomText>
                </Row>
              </Pressable>

              <Pressable
                style={getOpacityByPress}
                onPress={() => setIsVoluntariar(false)}>
                <Row justifyContent="flex-start">
                  {!isVoluntariar ? <CheckedIcon /> : <UnchekedIcon />}

                  <Spacer right={6} />

                  <CustomText color="#ffffff" bold>
                    Não
                  </CustomText>
                </Row>
              </Pressable>
            </Row>

            <Spacer top={32} />

            <Button
              loading={loading}
              widthPercentage={50}
              onPress={handleSubmit}>
              Cadastre-se
            </Button>

            <Spacer bottom={16} />
          </ContainerForm>
        )}
      </Formik>
    </Container>
  );
};

export default VeterinarioForm;
