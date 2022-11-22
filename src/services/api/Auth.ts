import { api } from '.';

export interface IAuthResponse {
  usuarioId: number;
  nome: string;
  endereco: string;
  clinicaId: number;
  crmv: string;
  pontuacao: number;
  sobre: string;
  servicos: string;
  horarios: string[];
  pagamentos: string[];
}

export const AuthService = {
  Login: (email: string, senha: string) => {
    return api.post<IAuthResponse>('/login', { email, senha });
  },

  CadastroCliente: (nome: string, email: string, senha: string) => {
    return api.post('/usuario', { nome, email, senha });
  },

  CadastroClinica: (
    nome: string,
    email: string,
    senha: string,
    crmv: string,
  ) => {
    return api.post('/clinica', { nome, email, senha, crmv });
  },
};
