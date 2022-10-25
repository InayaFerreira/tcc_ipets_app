import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { useAuth } from '@context/auth';

import Logo from '@images/logo.svg';
import Divider from '@images/divider.svg';

import { FONT_SIZE_H3 } from '@styles/typograph';
import { COLORS } from '@styles/colors';

import Button from '@molecules/Button';
import Spacer from '@atoms/Spacer';
import NanoContainer from '@atoms/NanoContainer';
import Input from '@atoms/Input';
import CustomText from '@atoms/CustomText';
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

const CadastroScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const { signIn } = useAuth();

  const handleFormSubmit = (values: FormValues) => {
    if (loading) {
      return;
    }

    console.log(values);

    setLoading(true);
    signIn('cliente');
    setLoading(false);
  };

  const handleRegister = () => navigate('Cadastro');

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
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <Spacer top={12} />

            <Logo />

            <Spacer top={32} />
          </>
        )}
      </Formik>
    </NanoContainer>
  );
};

export default CadastroScreen;
