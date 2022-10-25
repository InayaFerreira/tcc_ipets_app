import React, { useState } from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { useAuth } from '@context/auth';

import UserIcon from '@icons/user.svg';
import EmailIcon from '@icons/email.svg';
import ChaveIcon from '@icons/chave.svg';

import { COLORS } from '@styles/colors';

import Button from '@molecules/Button';
import Spacer from '@atoms/Spacer';
import NanoContainer from '@atoms/NanoContainer';
import Input from '@atoms/Input';
import { ContainerForm } from './styles';

interface FormValues {
  nomeCompleto: string;
  email: string;
  senha: string;
  confirmaSenha: string;
}

const FormSchema = Yup.object().shape({
  nomeCompleto: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().required('E-mail é obrigatório'),
  senha: Yup.string().required('Senha é obrigatória'),
  confirmaSenha: Yup.string().required('Senha é obrigatória'),
});

const ClienteForm: React.FC = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = (values: FormValues) => {
    if (loading) {
      return;
    }

    console.log(values);

    setLoading(true);
    signIn('cliente');
    setLoading(false);
  };

  return (
    <NanoContainer backgroundColor={COLORS.primary}>
      <Formik
        initialValues={{
          nomeCompleto: '',
          email: '',
          senha: '',
          confirmaSenha: '',
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

            <Spacer top={32} />

            <Button
              loading={loading}
              widthPercentage={50}
              onPress={handleSubmit}>
              Cadastre-se
            </Button>
          </ContainerForm>
        )}
      </Formik>
    </NanoContainer>
  );
};

export default ClienteForm;
