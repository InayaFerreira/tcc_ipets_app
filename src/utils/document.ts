import { validateBr } from 'js-brasil';

const tamanhoMaximoCpf = 14;

export function validateDocument(documentId: any): boolean {
  if (!documentId) {
    return false;
  }

  if (documentId.length >= tamanhoMaximoCpf) {
    return validateBr.cnpj(documentId);
  }

  return validateBr.cpf(documentId);
}

export function maskDocument(documentId: string): string {
  if (documentId.length >= tamanhoMaximoCpf) {
    return documentId
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+$/, '$1');
  }

  return documentId
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+$/, '$1');
}

export function getDocumentType(documentId: string): TDocument | undefined {
  if (!documentId) {
    return;
  }

  if (documentId.length >= tamanhoMaximoCpf) {
    return 'cnpj';
  }

  return 'cpf';
}
