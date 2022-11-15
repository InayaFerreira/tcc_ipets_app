import { Calendar, LocaleConfig } from 'react-native-calendars';
import React, { useState } from 'react';

import {
  convertToCalendarDate,
  formatCalendarDate,
  getTodayCalendarDate,
} from '@utils/date';

interface ICustomCalendarProps {
  startDate?: string;
  onDayPress?: (date: string) => void;
}

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan.',
    'Fev.',
    'Mar.',
    'Abr.',
    'Mai.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Set.',
    'Out.',
    'Nov.',
    'Dez.',
  ],
  dayNames: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

const CustomCalendar: React.FC<ICustomCalendarProps> = ({
  startDate,
  onDayPress,
}) => {
  const [selectedDate] = useState<string>(
    startDate ? convertToCalendarDate(startDate) : getTodayCalendarDate(),
  );

  return (
    <Calendar
      markingType="custom"
      markedDates={{
        [selectedDate]: {
          selected: true,
          customStyles: {
            text: { fontFamily: 'Inter' },
          },
        },
      }}
      onDayPress={
        onDayPress
          ? (date: any) => onDayPress(formatCalendarDate(date))
          : undefined
      }
    />
  );
};

export default CustomCalendar;
