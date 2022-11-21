import { format, parseISO } from 'date-fns';

/**
 * Função para converter uma data nativa do mysql em um formato desejado
 * @param dateParam | string - Data no formato yyyy-MM-dd HH:mm:ss
 * @param outputFormat | string - Formato desejado de output (padrão dd/MM/yyyy HH:mm:ss)
 * @returns Data formatada
 */
export function convertMysqlDateToFormat(
  dateParam: string,
  outputFormat: string = 'dd/MM/yyyy HH:mm:ss',
) {
  const [rawDate, rawTime] = dateParam.split(' ');
  let date = rawDate + (rawTime ? `T${rawTime}` : '');

  return format(new Date(parseISO(date)), outputFormat);
}

/**
 * Converte uma data nativa no formato brasileiro
 * @param date | Date - Data a ser convertida
 * @returns | string - Data formatada
 */
export function convertDateToBrazilFormat(date: Date): string {
  return format(date, 'dd/MM/yyyy');
}

/**
 * Converte data para timezone brasileiro
 * @param date | Date - Data a ser convertida
 * @returns | Date - Data convertida
 */
export function convertUtcDateToBrazilTimezone(date: Date): Date {
  const timezoneOffset = 3;
  const dateClone = date;
  date.setHours(date.getHours() + timezoneOffset);

  return dateClone;
}

export function formatCalendarDate(date: any): string {
  return `${date.day.toString().length < 2 ? `0${date.day}` : date.day}/${
    date.month.toString().length < 2 ? `0${date.month}` : date.month
  }/${date.year}`;
}

/**
 * Converte data no formato para calendário
 * @param date | string - Data a ser convertida no formato dd/MM/yyyy
 * @returns | Date - Data convertida
 */
export function convertToCalendarDate(date: string): string {
  const [day, month, year] = date.split('/');

  return new Date(`${year}-${month}-${day}`).toISOString().slice(0, 10);
}

export function convertCalendarDateToIso(date: string): string {
  const [day, month, year] = date.split('/');

  return new Date(`${year}-${month}-${day}`).toISOString();
}

export function getTodayCalendarDate(): string {
  return convertUtcDateToBrazilTimezone(new Date()).toISOString().slice(0, 10);
}
