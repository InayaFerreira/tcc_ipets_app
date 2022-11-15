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
  petId: number;
  nome: string;
  localEncontrado: string;
  status: string;
  atualizado: string;
}

export const PetService = {
  ListagemPet: () => {
    return api.get<IPet[]>('/pet');
  },

  ListagemPetRua: () => {
    return api.get<IPetRua[]>('/petRua');
  },
};
