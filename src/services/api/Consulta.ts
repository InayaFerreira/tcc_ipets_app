import { api } from '.';

export interface IConsulta {
  consultaId: number;
  idPet: number;
  idClinica: number;
  data: string;
  ativo: boolean;
}

export const ConsultaService = {
  ListagemConsulta: (userId: number) => {
    return api.get<IConsulta[]>(`/consultasByUserId/${userId}`);
  },

  Agendar: (consulta: IConsulta) => {
    return api.post('/consulta', { ...consulta });
  },

  Cancelar: (consulta: IConsulta) => {
    consulta.ativo = false;
    return api.put('/consulta', { ...consulta });
  },
};
