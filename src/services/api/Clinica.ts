export interface IClinica {
  id: number;
  nome: string;
  imagem: string;
  avaliacao: number;
  endereco: string;
  sobre: string;
  servicos: string[];
  horarios: string[];
  pagamento: string[];
  avaliacaoCount: number;
}

export const ClinicaService = {
  Listagem: () => {
    const clinicas: IClinica[] = [
      {
        id: 1,
        nome: 'Clínica boca de leite',
        imagem: 'https://i.imgur.com/bByfemt.jpg',
        avaliacao: 5,
        endereco: 'Rua Edinaldo Pereira, 245 São Paulo - SP',
        sobre: 'Nós cuida dos cachorro e pá tlg?',
        servicos: ['Odonto', 'Castração', 'seu cú na minha mão'],
        horarios: [
          'Seg. - Sex. das 8:00 ás 17:00',
          'Sáb. - Dom. das 12:00 ás 17:00',
        ],
        pagamento: [
          'VISA',
          'MASTERCARD',
          'AMERICAN_EXPRESS',
          'ELO',
          'HIPERCARD',
          'PIX',
          'DINHEIRO',
        ],
        avaliacaoCount: 10,
      },
      {
        id: 2,
        nome: 'Clínica Cínica',
        imagem: 'https://i.imgur.com/3dD78cG.jpg',
        avaliacao: 3,
        endereco: 'Rua Luis Carlos Berrini, 1337 Rio de Janeiro - SP',
        sobre: 'uma clinica que cuida de cães e gatos',
        servicos: ['Castração'],
        horarios: ['Seg. - Sex. das 9:00 ás 18:00'],
        pagamento: ['PIX', 'DINHEIRO'],
        avaliacaoCount: 27,
      },
    ];

    return clinicas;
  },
};
