import { api } from '.';

export interface IPet {
  petId: number;
  idUsuario: number;
  nome: string;
  raca: string;
  idade: number;
  porte: number;
  alergias: string;
  doencas: string;
  ultimaConsulta: string;
}

export interface IPetRua {
  nome: string;
  localEncontrado: string;
  ferido: number;
  desnutrido: number;
  agressivo: number;
  porte: number;
  observacoes?: string;
}

export const PetService = {
  ListagemPet: (userId?: number) => {
    return api.get<IPet[]>(
      userId !== undefined ? `/petsByUserId/${userId}` : '/pet',
    );
  },

  ListagemPetRua: () => {
    return api.get<IPetRua[]>('/petRua');
  },

  CadastraPetRua: (pet: IPetRua) => {
    return api.post('/petRua', { ...pet });
  },
};
