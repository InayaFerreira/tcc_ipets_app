import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { AuthService } from '@services/api/Auth';
import { usePopup } from '@context/popup';

import UserIcon from '@icons/user.svg';
import EmailIcon from '@icons/email.svg';
import ChaveIcon from '@icons/chave.svg';
import CertificadoIcon from '@icons/certificado.svg';

import Button from '@molecules/Button';
import Spacer from '@atoms/Spacer';
import Input from '@atoms/Input';
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

const ClinicaForm: React.FC = () => {
  const navigation = useNavigation<any>();
  const popup = usePopup();

  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = (values: FormValues) => {
    if (values.senha !== values.confirmaSenha) {
      return popup.show({
        title: 'Aviso',
        content: 'Senhas não coincidem',
        buttons: [{ text: 'OK', handler: popup.hide }],
      });
    }

    if (loading) {
      return;
    }

    setLoading(true);

    AuthService.CadastroClinica(
      values.nomeCompleto,
      values.email,
      values.senha,
      values.crmv,
    )
      .then(() => {
        popup.show({
          title: 'Aviso',
          content: 'Cadastro realizado com sucesso',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                popup.hide();
                navigation.replace('Login');
              },
            },
          ],
        });
      })
      .catch(() => {
        popup.show({
          title: 'Aviso',
          content: 'Erro ao realizar cadastro',
          buttons: [{ text: 'OK', handler: popup.hide }],
        });
      })
      .finally(() => setLoading(false));
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

export default ClinicaForm;
