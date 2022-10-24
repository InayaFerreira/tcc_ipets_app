import React, { useState } from 'react';

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
  email: string;
  senha: string;
}

const FormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail é obrigatório'),
  senha: Yup.string().required('Senha é obrigatória'),
});

const LoginScreen: React.FC = () => {
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

  const handleRegister = () => {
    // TODO
  };

  return (
    <NanoContainer backgroundColor={COLORS.primary}>
      <Formik
        initialValues={{ email: '', senha: '' }}
        onSubmit={handleFormSubmit}
        validationSchema={FormSchema}>
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <Spacer top={12} />

            <Logo />

            <Spacer top={32} />

            <ContainerForm>
              <Input
                label="E-mail"
                placeholder="exemplo@exemplo.com"
                value={values.email}
                onChangeText={handleChange('email')}
                errorMessage={errors.email}
              />
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                secureTextEntry={true}
                value={values.senha}
                onChangeText={handleChange('senha')}
                errorMessage={errors.senha}
              />
            </ContainerForm>

            <Spacer top={42} />

            <Button
              loading={loading}
              widthPercentage={50}
              onPress={handleSubmit}>
              Login
            </Button>

            <Spacer top={42} />

            <Divider />

            <Spacer top={24} />

            <CustomText size={FONT_SIZE_H3} color="#ffffff" center bold>
              Ainda não tem uma conta?
            </CustomText>

            <Spacer top={24} />

            <Button
              loading={loading}
              widthPercentage={50}
              onPress={handleRegister}>
              Cadastre-se
            </Button>
          </>
        )}
      </Formik>
    </NanoContainer>
  );
};

export default LoginScreen;
