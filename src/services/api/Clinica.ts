import { IPet } from './Pet';
import { IConsulta } from './Consulta';

import { api } from '.';

export interface IClinica {
  clinicaId: number;
  nome: string;
  crmv: string;
  pontuacao: number;
  numeroAvaliacoes: number;
  endereco: string;
  sobre: string;
  servicos: string;
  horarios: string[];
  pagamentos: string[];
}

export const ClinicaService = {
  Listagem: () => {
    return api.get<IClinica[]>('/clinica');
  },

  ListagemPet: (clinicaId: number) => {
    return api.get<IPet[]>(`/petsByClinicaId/${clinicaId}`);
  },

  ListagemConsulta: (clinicaId: number) => {
    return api.get<IConsulta[]>(`/consultasByClinicaId/${clinicaId}`);
  },
};
